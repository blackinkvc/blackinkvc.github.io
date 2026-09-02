
/* ---------------- 游戏状态 ---------------- */
let S;
function newState(){
  return { food:20, grow:1, day:0, totalDays:0, alive:true, mode:'play', explore:0,
           pupaDone:false, canPupa:false, last:null, lastEvents:[],
           phase:'maggot', generation:1, evolved:false, blessed:false,
           camo:false, seen:new Set(), situations:[], chronicle:[],
           chain:null, chainStepLog:[], chainCount:0,
           /* —— 新体系（v1.8）：体力 / 体型 / 探索 三轴。体力或体型归零即死。 —— */
           version:'1.8', verLog:[], verAnchor:{day:0, seen:0, gen:1} };
}

/* ---------------- 版本迭代规则 ----------------
   版本号 major.minor 随游戏进程自动演进（本次因长期停在 v1.6，已先行迭代至 v1.7）。
   满足任一里程碑即 minor+1（满 10 进位 major，如 v1.9 → v2.0）：
     · 累计存活天数每跨过 VER_DAY_STEP 天
     · 累计经历过的不同特殊事件数每跨过 VER_SEEN_STEP 个
     · 每完成一次轮回（generation +1）
*/
const VER_DAY_STEP  = 20;   // 每存活 20 天迭代一次
const VER_SEEN_STEP = 8;    // 每见识 8 种不同特殊事件迭代一次
const VER_GEN_STEP  = 1;    // 每轮回一次迭代一次

/* 推进版本号 + 记录 + 弹「版本迭代」黑化遮罩 */
function bumpVersion(reason){
  let [ma, mi] = S.version.split('.').map(Number);
  mi++; if(mi>=10){ mi=0; ma++; }
  S.version = ma+'.'+mi;
  S.verLog.push({ver:S.version, reason, day:S.totalDays, gen:S.generation});
  S.verAnchor = {day:S.totalDays, seen:S.seen.size, gen:S.generation};
  showVersionBump(reason);
}
/* 版本迭代弹窗（复用黑化遮罩 + 居中 modal） */
function showVersionBump(reason){
  const ov=document.createElement('div');
  ov.className='overlay';
  ov.innerHTML='<div class="modal"><div class="modal-title">⚡ 版本迭代 v'+S.version+'</div>'
    +'<div class="modal-sub">序号已演进</div>'
    +'<div class="ev-trigger-list"><div class="ev-trigger">'
    +'<div class="ev-cat" style="color:var(--accent)">【迭代】</div>'
    +'<div class="ev-name" style="color:var(--accent)">v'+S.version+'</div>'
    +'<div class="ev-msg">'+reason+'</div></div></div>'
    +'<button class="modal-ok" id="verOk">确定</button></div>';
  document.body.appendChild(ov);
  const close=()=>{ if(ov.parentNode) ov.remove(); };
  ov.querySelector('#verOk').onclick=close;
  ov.addEventListener('click',(e)=>{ if(e.target===ov) close(); });
}
/* 判定是否满足任一迭代里程碑，满足则推进版本号 */
function checkVersion(){
  const a=S.verAnchor;
  let reason=null;
  if(S.totalDays - a.day >= VER_DAY_STEP)        reason='你在腐与生的缝隙里又熬过了 '+VER_DAY_STEP+' 个昼夜。';
  else if(S.seen.size - a.seen >= VER_SEEN_STEP) reason='你已见识过 '+S.seen.size+' 种周遭的变故。';
  else if(S.generation - a.gen >= VER_GEN_STEP)  reason='新一轮轮回开启，你以全新的白蛆之躯醒来。';
  if(reason) bumpVersion(reason);
}

/* ---------------- 工具函数 ---------------- */
const $ = id => document.getElementById(id);
function clamp(v){return Math.max(0,Math.min(100,v));}

/* 数值浮动：n 的 ±30% 随机浮动（四舍五入取整），用于让事件/行动效果有波动 */
function fl(n){
  if(typeof n !== 'number' || !isFinite(n)) return n||0;
  const r = n * (0.7 + Math.random()*0.6);
  return n < 0 ? -Math.round(-r) : Math.round(r);
}
function rnd(n){return Math.floor(Math.random()*n);}
function pick(arr){return arr[rnd(arr.length)];}
function log(msg,cls){
  const d=$('log');
  const p=document.createElement('div');
  if(cls)p.className=cls;
  p.innerHTML=msg;
  d.appendChild(p);
  d.scrollTop=d.scrollHeight;
}

/* ---------------- 状态条渲染 ---------------- */
function render(){
  $('vFood').textContent=Math.round(S.food);
  $('vGrow').textContent=(S.grow<10 ? S.grow.toFixed(1) : Math.round(S.grow));
  $('vExp').textContent=Math.round(S.explore);
  $('vDay').textContent=S.day;
  const vv=$('vVer'); if(vv) vv.textContent='v'+S.version;
  setBar('bFood',S.food);
  setBar('bGrow',S.grow);
  setBar('bExp',S.explore);
  $('bExp').classList.toggle('high', S.explore>70);
  S.canPupa = S.grow>=70 && S.food>30;
}
function setBar(id,val){
  const bar=$(id);
  bar.classList.toggle('low', val<30 && id!=='bGrow');   // 体型偏小不算危急
  bar.classList.toggle('full', val>=70 && id==='bGrow');
  bar.querySelector('i').style.width=Math.min(100,val)+'%';
}

/* ---------------- 场景文本 ---------------- */
function sceneHTML(text){
  return '<p class="lead">'+text+'</p>';
}
function choice(label,fn,tag){
  const b=document.createElement('button');
  b.className='choice';
  b.innerHTML=label+(tag?' <span class="tag">'+tag+'</span>':'');
  b.onclick=()=>{ fn(); };
  return b;
}
function clearScene(){
  const sc=$('scene');
  sc.innerHTML='';
  const ac=$('actions'); if(ac) ac.innerHTML='';
  return sc;
}
function endTurn(){
  S.day++;
  S.totalDays++;
  // 每回合体力自然消耗；探索越高，消耗越大（探索太高 → 体力消耗变大）
  let drain = 3;
  if(S.explore > 60) drain += 2;
  if(S.explore > 85) drain += 4;
  S.food=clamp(S.food - drain);
  // 探索值：每回合基础微涨（好奇心的本能），极高时回落避免长期极端
  S.explore = clamp(S.explore + 2);
  if(S.explore > 75) S.explore = clamp(S.explore - 4);
  // 死亡判定：体力或体型归零
  if(S.food<=0){ return die('体力耗尽——你再也无法蠕动，成了一具更小的尸体。'); }
  if(S.grow<=0){ return die('躯体萎缩到极致，你再也没能长大。'); }
  render();
  checkVersion();
}

function die(reason){
  finale(reason, false);
}

/* 羽化成功：进入蝇之阶段（仍可继续探索 / 产卵重启轮回 / 主动终结） */
function emerge(reason){
  S.alive=true; S.phase='fly'; S.evolved=true;
  S.chronicle.push('第'+S.generation+'世：你挣脱泥土，振翅羽化，成了一只真正的蝇。');
  log(reason||'羽化成功！湿润的翅膀在阳光下舒展，你飞向了天空。','win');
  flyHub();
}

/* 将生平日志绘制为 JPEG 并下载（结局黑化弹窗内点击触发） */
function downloadFinaleJPEG(d){
  const W=760, pad=38, lh=30;
  const L=[
    {t:'title', s:'✦ 终章 · 生平日志'},
    {t:'sub',   s:(d.isWin?'一个圆满的结局 · 你主动封存了故事':'一切都已落幕')},
    {t:'head',  s:'历经 '+d.days+' 个昼夜 · '+d.lives+' 次轮回'},
    {t:'body',  s:'你，一条自无名小兽尸身中醒来的白蛆，历经 '+d.days+' 个昼夜、'+d.lives+' 次轮回。'
                +(d.isWin?'这一次，你主动合上了翅膀，将故事封存为日志。':'最终，你停止了蠕动。')}
  ];
  if(d.chronicle.length){ L.push({t:'sec', s:'— 生平拾遗 —'}); d.chronicle.forEach(c=> L.push({t:'item', s:'· '+c})); }
  if(d.verLog.length){ L.push({t:'sec', s:'— 版本演进（终局 v'+d.version+'）—'}); d.verLog.forEach(v=> L.push({t:'item', s:'· '+v})); }
  L.push({t:'reason', s:d.reason});
  L.push({t:'sign',   s:'蛆生 · 文字冒险 v'+d.version});

  const fonts={
    title:'bold 30px sans-serif', sub:'15px sans-serif', head:'bold 18px sans-serif',
    body:'15px sans-serif', sec:'bold 16px sans-serif', item:'14px sans-serif',
    reason:'italic 14px sans-serif', sign:'13px sans-serif'
  };
  const meas=document.createElement('canvas').getContext('2d');
  let H=pad*2+24;
  L.forEach(x=>{
    meas.font=fonts[x.t];
    const ws=[]; let line='';
    for(const ch of x.s){
      const test=line+ch;
      if(meas.measureText(test).width > W-pad*2 && line){ ws.push(line); line=ch; }
      else line=test;
    }
    if(line) ws.push(line);
    x._ws=ws; H += ws.length*lh + 10;
  });

  const cv=document.createElement('canvas');
  cv.width=W; cv.height=Math.max(380,H);
  const ctx=cv.getContext('2d');
  const g=ctx.createLinearGradient(0,0,0,cv.height);
  g.addColorStop(0,'#1b140d'); g.addColorStop(1,'#0e0a06');
  ctx.fillStyle=g; ctx.fillRect(0,0,cv.width,cv.height);
  ctx.strokeStyle='rgba(196,164,98,.5)'; ctx.lineWidth=2;
  ctx.strokeRect(10,10,cv.width-20,cv.height-20);

  let y=pad+6; ctx.textBaseline='top';
  L.forEach(x=>{
    y+=10;
    x._ws.forEach(ln=>{
      ctx.font=fonts[x.t];
      ctx.fillStyle = x.t==='title' ? '#e9c87a' : x.t==='sub'  ? '#9a8c74' :
                     x.t==='head'  ? '#d8c9a8' : x.t==='sec'  ? '#c4a462' :
                     x.t==='reason'? '#b9a98c' : x.t==='sign' ? '#7a6c54' : '#e7ddca';
      ctx.fillText(ln, pad, y); y+=lh;
    });
  });

  const a=document.createElement('a');
  a.href=cv.toDataURL('image/jpeg', 0.92);
  a.download='蛆生_生平日志_v'+d.version+'.jpg';
  document.body.appendChild(a); a.click(); a.remove();
}

/* 终章：生成「生平日志」，以黑化遮罩 + 居中弹窗呈现（结局也走弹窗） */
function finale(reason, isWin){
  S.alive=false; S.mode='end';
  log('<b>'+reason+'</b>', isWin?'win':'die');
  clearScene();
  // 关闭可能残留的任何浮层（如属性结算弹窗），避免叠层
  document.querySelectorAll('.overlay').forEach(o=>o.remove());
  const days=S.totalDays, lives=S.generation;
  const data={ isWin, reason, days, lives, version:S.version,
    chronicle:S.chronicle.slice(),
    verLog:S.verLog.map(v=>'v'+v.ver+'：'+v.reason) };
  let html='<div class="modal-title">✦ 终章 · 生平日志</div>';
  html+='<div class="modal-sub">'+(isWin?'一个圆满的结局 · 你主动封存了故事':'一切都已落幕')+'</div>';
  html+='<div class="end-title '+(isWin?'end-win':'end-bad')+'">'
      +'历经 '+days+' 个昼夜 · '+lives+' 次轮回</div>';
  html+='<p class="lead">你，一条自无名小兽尸身中醒来的白蛆，'
      +'历经 '+days+' 个昼夜、'+lives+' 次轮回。'
      +(isWin?'这一次，你主动合上了翅膀，将故事封存为日志。':'最终，你停止了蠕动。')+'</p>';
  if(S.chronicle.length){
    html+='<div class="chronicle"><div class="ch-title">— 生平拾遗 —</div>';
    S.chronicle.forEach(t=>{ html+='<div class="ch-item">· '+t+'</div>'; });
    html+='</div>';
  }
  if(S.verLog.length){
    html+='<div class="ver-list"><div class="v-title">— 版本演进（终局 v'+S.version+'）—</div>';
    S.verLog.forEach(v=>{ html+='<div class="v-item">· v'+v.ver+'：'+v.reason+'</div>'; });
    html+='</div>';
  }
  html+='<p style="color:var(--muted);font-size:12px;margin:10px 0 16px;text-align:left;">'+reason+'</p>';
  html+='<div class="finale-actions">'
      +'<button class="modal-ok" id="finaleRestart">↻ 再活一次</button>'
      +'<button class="modal-ok" id="finaleDownload">🖼 下载生平日志(JPEG)</button>'
      +'</div>';

  const ov=document.createElement('div');
  ov.className='overlay';
  const modal=document.createElement('div');
  modal.className='modal finale-modal';
  modal.innerHTML=html;
  ov.appendChild(modal);
  document.body.appendChild(ov);
  const rb=$('finaleRestart');
  if(rb) rb.onclick=()=>{ if(ov.parentNode) ov.remove(); resetGame(); };
  const dl=$('finaleDownload');
  if(dl) dl.onclick=()=>downloadFinaleJPEG(data);
}

/* ---------------- 随机事件池（50 种） ---------------- */
/* 每个事件：cat 类别，name 名称，msg 描述，df/dh/dg 为饱食/体力/体型的随机增量区间 */
const EVENTS = [
  /* —— 天敌 —— */
  {cat:'天敌',name:'蚂蚁工兵',msg:'张开大颚朝你扑来',dh:[-10,-15]},
  {cat:'天敌',name:'隐翅虫',msg:'喷出腐蚀性的毒液',dh:[-12,-19]},
  {cat:'天敌',name:'蟾蜍舌尖',msg:'舌头如闪电扫过，你险险滚开',dh:[-8,-13]},
  {cat:'天敌',name:'寄生蜂',msg:'悬在头顶盘旋，产卵于身',dh:[-4,-7]},
  {cat:'天敌',name:'蜘蛛',msg:'蛛网缠身，你奋力挣脱',dh:[-10,-16]},
  {cat:'天敌',name:'步甲虫',msg:'带甲的前躯狠狠碾压',dh:[-9,-15]},
  {cat:'天敌',name:'蜈蚣',msg:'多足掠食者横扫而过',dh:[-11,-17]},
  {cat:'天敌',name:'家鼠刨食',msg:'刨开腐肉，连你一起翻起',dh:[-4,-8],df:[-6,-11]},
  {cat:'天敌',name:'飞鸟俯冲',msg:'俯冲啄击，擦身而过',dh:[-12,-19]},
  {cat:'天敌',name:'螳螂',msg:'镰刀般的前肢当头落下',dh:[-9,-15]},
  {cat:'天敌',name:'蚂蚁大军',msg:'过境，踩踏与搬运并举',dh:[-4,-7],df:[-6,-11]},
  {cat:'天敌',name:'蚯蚓误缠',msg:'误将你当作同族缠绕',dh:[-2,-4]},
  /* —— 天象 / 环境 —— */
  {cat:'天象',name:'骤雨',msg:'水流将你冲出老远',dh:[-3,-6],df:[-5,-9]},
  {cat:'天象',name:'烈日',msg:'地表迅速干裂',dh:[-8,-13]},
  {cat:'天象',name:'寒夜',msg:'霜降，体温悄然流失',dh:[-6,-10]},
  {cat:'天象',name:'微风',msg:'送来清爽，你舒展身躯',dh:[4,7]},
  {cat:'天象',name:'落叶覆身',msg:'枯叶成掩体，你安然藏身',dh:[3,6]},
  {cat:'天象',name:'积水成洼',msg:'湿润却冲淡了腐味',dh:[2,4],df:[-3,-5]},
  {cat:'天象',name:'暖阳',msg:'晒得暖洋洋，懒得动弹',dh:[5,8],dg:[1,2]},
  {cat:'天象',name:'大雾',msg:'雾气遮蔽了天敌的目光',dh:[2,4]},
  {cat:'天象',name:'雷震',msg:'大地一颤，你惊出冷汗',dh:[-2,-4]},
  {cat:'天象',name:'黄昏降温',msg:'凉意丝丝渗进体节',dh:[-3,-5]},
  /* —— 机缘 / 食物 —— */
  {cat:'机缘',name:'熟果坠地',msg:'发现一块无人问津的甜果',df:[12,19],dg:[2,4]},
  {cat:'机缘',name:'新添腐肉',msg:'又添了一口上好美味',df:[10,17],dg:[2,3]},
  {cat:'机缘',name:'同伴遗骸',msg:'弱肉，亦可强食',df:[8,13]},
  {cat:'机缘',name:'蜜露滴落',msg:'树梢坠下甜浆',df:[10,15]},
  {cat:'机缘',name:'鸟粪落旁',msg:'污秽，却也养人',df:[6,10],dg:[1,2]},
  {cat:'机缘',name:'残羹',msg:'人类遗落的饭渣',df:[10,15]},
  {cat:'机缘',name:'菌毯',msg:'抑菌的菌丝护你周全',dh:[4,7]},
  {cat:'机缘',name:'晨露',msg:'一滴解渴的露水',dh:[5,8]},
  /* —— 竞争 —— */
  {cat:'竞争',name:'虫口夺食',msg:'同胞涌来，瓜分腐肉',df:[-8,-13]},
  {cat:'竞争',name:'同类相食',msg:'强者吞下了弱者',dh:[-3,-6],df:[3,6]},
  {cat:'竞争',name:'甲虫争巢',msg:'与你争夺藏身之所',dh:[-6,-10]},
  {cat:'竞争',name:'蚂蚁搬幼',msg:'幼蛆被搬走，你也被波及',dh:[-3,-5],df:[-5,-9]},
  {cat:'竞争',name:'拥挤踩踏',msg:'密密麻麻，踩踏难免',dh:[-4,-7]},
  {cat:'竞争',name:'强者抢食',msg:'体壮者抢先下口',df:[-6,-11]},
  {cat:'竞争',name:'领地争夺',msg:'为角落里的一口腐肉大打出手',dh:[-5,-8]},
  /* —— 奇遇 / 诡异 —— */
  {cat:'奇遇',name:'孩童凝视',msg:'一根手指缓缓凑近',dh:[-1,-3]},
  {cat:'奇遇',name:'科学家取样',msg:'被装入试管带走一些',df:[-4,-7]},
  {cat:'奇遇',name:'落叶信笺',msg:'一片写满字的叶子飘落'},
  {cat:'奇遇',name:'松果坠',msg:'沉重的松果砸了下来',dh:[-7,-12]},
  {cat:'奇遇',name:'流浪猫嗅',msg:'鼻息喷来，险被舔食',dh:[-10,-15]},
  {cat:'奇遇',name:'收音机震',msg:'远处传来的低频震动',dh:[-1,-2]},
  {cat:'奇遇',name:'鞋印擦过',msg:'一只巨鞋从旁擦过',dh:[-6,-10]},
  {cat:'奇遇',name:'萤火虫',msg:'一点流萤伴你入夜',dh:[2,4]},
  {cat:'奇遇',name:'蝴蝶停驻',msg:'翅膀轻拂过你的脊背',dh:[1,2]},
  {cat:'奇遇',name:'人脚远去',msg:'威胁渐渐远离',dh:[3,5]},
  {cat:'奇遇',name:'月光',msg:'冷月照身，寒意丝丝',dh:[-2,-3]},
  {cat:'奇遇',name:'微尘起舞',msg:'光柱里尘埃浮动，你看得入神'},
  {cat:'奇遇',name:'时光',msg:'什么也没发生，你只是又长大了一点',dg:[1,2]},
  /* —— 后续事件：需「自身状态 / 以往已触发事件」满足条件才会出现，形成事件链 —— */
  {cat:'天敌',name:'虫卵蠕动',msg:'体内寄生蜂的卵开始蠕动',dh:[-5,-9], cond:s=>s.seen.has('寄生蜂')},
  {cat:'奇遇',name:'字迹浮现',msg:'叶上字迹竟在皮上隐隐浮现',dh:[-2,-4],dg:[1,3], cond:s=>s.seen.has('落叶信笺')},
  {cat:'奇遇',name:'鼠穴探秘',msg:'家鼠刨出的浅穴通向幽深',df:[6,10],dh:[-3,-6], cond:s=>s.seen.has('家鼠刨食')},
  {cat:'天象',name:'积水蚊虫',msg:'骤雨后的积水滋生蚊虫',dh:[-4,-8], cond:s=>s.seen.has('骤雨')},
  {cat:'机缘',name:'菌丝漫延',msg:'菌毯悄然漫过你的周身',dh:[3,6],dg:[1,2], cond:s=>s.seen.has('菌毯')},
  {cat:'天象',name:'体力透支',msg:'连番消耗让你几近虚脱',dh:[-3,-6], cond:s=>s.food<30},
  {cat:'机缘',name:'饱食撑胀',msg:'你吃得过饱，身躯沉沉',df:[-3,-6],dg:[1,2], cond:s=>s.food>85},
  /* —— 轮回事件：需「再次变成蛆（已羽化并轮回）」才会出现 —— */
  {cat:'奇遇',name:'轮回残忆',msg:'前世羽化的画面在脑中一闪',dh:[3,6],dg:[1,2], cond:s=>s.generation>1},
  {cat:'天象',name:'旧巢回望',msg:'本能地爬回上辈子化蛹的泥土',dh:[4,7], cond:s=>s.evolved},
  {cat:'机缘',name:'双生幼蛆',msg:'你竟与上一世的自己同源而生',df:[8,13],dg:[2,3], cond:s=>s.generation>1},

  /* ===== 新增 100 事件（v1.9 内容扩充） ===== */
  /* —— 新增 · 天敌（含体型差对决档案，见 PREDATORS） —— */
  {cat:'天敌',name:'猎蝽刺吸',msg:'猎蝽伸出刺吸式口器，扎入你的体节',dh:[-10,-16]},
  {cat:'天敌',name:'蜉寄螨',msg:'细小的螨虫攀附上来，钻进体节缝隙',dh:[-3,-6]},
  {cat:'天敌',name:'蛇信轻探',msg:'一截冰凉的蛇信自草丛探出，舔过你的身',dh:[-9,-15]},
  {cat:'天敌',name:'鸡爪刨地',msg:'散养的鸡一爪刨来，泥土与碎肉齐飞',dh:[-7,-13]},
  {cat:'天敌',name:'黄鼠狼嗅探',msg:'黄鼠狼凑近，鼻尖几乎贴上你的脊背',dh:[-8,-14]},
  {cat:'天敌',name:'壁虎突袭',msg:'壁虎闪电般弹射，咬住你一角躯体',dh:[-6,-11]},
  {cat:'天敌',name:'蜻蜓点水掠',msg:'蜻蜓低掠觅食，阴影扫过你的身体',dh:[-5,-9]},
  {cat:'天敌',name:'刺猬拱土',msg:'刺猬拱翻腐叶，把你甩出半尺远',dh:[-6,-10]},
  {cat:'天敌',name:'蚂蟥吸附',msg:'一条蚂蟥悄悄吸附上你的体壁',dh:[-4,-8]},
  {cat:'天敌',name:'蜗牛黏液缚',msg:'蜗牛爬过，黏液将你黏住半边身子',dh:[-2,-4]},
  /* —— 新增 · 天象 / 环境 —— */
  {cat:'天象',name:'春雷初动',msg:'第一声春雷滚过，冻土隐隐松动',dh:[2,4]},
  {cat:'天象',name:'冰雹砸落',msg:'豆大的冰雹砸在背上，生疼',dh:[-6,-11]},
  {cat:'天象',name:'干涸逼近',msg:'水源渐远，周遭一片焦渴',df:[-3,-6]},
  {cat:'天象',name:'苔藓蔓延',msg:'湿润的苔藓悄悄爬上你的身侧',dh:[3,6]},
  {cat:'天象',name:'落叶成毯',msg:'厚厚的落叶成了暖和的毯子',dh:[4,7]},
  {cat:'天象',name:'风吹浮尘',msg:'风卷浮尘，迷了你的感官',dh:[-2,-4]},
  {cat:'天象',name:'露重成霜',msg:'夜露凝霜，凉意刺骨',dh:[-4,-7]},
  {cat:'天象',name:'日食昏暗',msg:'天色骤暗，似有异物遮住了日头',dh:[-1,-3]},
  {cat:'天象',name:'彩虹悬空',msg:'雨后彩虹横挂，光怪陆离',dh:[2,4],dg:[1,2]},
  {cat:'天象',name:'地龙翻土',msg:'蚯蚓翻土，把你拱到了浅层',dh:[-2,-4],df:[3,6]},
  {cat:'天象',name:'雪覆周身',msg:'初雪落下，将你温柔掩埋',dh:[3,6]},
  {cat:'天象',name:'沼气升腾',msg:'腐物发酵，沼气悄然升腾',df:[4,8],dh:[-3,-6]},
  /* —— 新增 · 机缘 / 食物 —— */
  {cat:'机缘',name:'蝇卵成窝',msg:'一处无人争夺的蝇卵窝，白花花一片',df:[10,16],dg:[2,3]},
  {cat:'机缘',name:'蜜渍花蕊',msg:'花蕊里蓄着一汪甜润的蜜渍',df:[12,18]},
  {cat:'机缘',name:'落果成酱',msg:'熟透的果子烂成果酱，黏甜诱人',df:[12,19],dg:[2,4]},
  {cat:'机缘',name:'鱼杂弃岸',msg:'岸边弃着一捧腥鲜的鱼杂',df:[8,13]},
  {cat:'机缘',name:'糖浆漏滴',msg:'树洞漏下黏稠的糖浆',df:[10,16]},
  {cat:'机缘',name:'腐叶虫尸',msg:'腐叶下藏着几只小小的虫尸',df:[6,10],dg:[1,2]},
  {cat:'机缘',name:'骨髓渗出',msg:'碎骨缝里渗出油润的骨髓',df:[9,14]},
  {cat:'机缘',name:'蘑菇伞下',msg:'蘑菇伞下积着甜润的汁液',df:[7,12]},
  {cat:'机缘',name:'糖渣黏落',msg:'孩童掉的糖渣黏黏落近',df:[8,13]},
  {cat:'机缘',name:'沃土新肥',msg:'新翻的沃土里裹着养分',df:[8,14],dg:[1,3]},
  {cat:'机缘',name:'蝇群遗屑',msg:'蝇群离席，留下细碎的残屑',df:[6,11]},
  /* —— 新增 · 竞争 —— */
  {cat:'竞争',name:'抢巢斗殴',msg:'两只同胞为巢穴扭打，波及于你',dh:[-5,-9]},
  {cat:'竞争',name:'群蛆争路',msg:'密密麻麻的蛆群挤向一条窄道',dh:[-3,-6],df:[-3,-6]},
  {cat:'竞争',name:'强蛆占食',msg:'一头巨蛆霸占了整块腐肉',df:[-8,-13]},
  {cat:'竞争',name:'蛛网诱饵',msg:'同族被蛛网粘住，牵连到了你',dh:[-4,-7]},
  {cat:'竞争',name:'甲虫驱赶',msg:'锹甲驱赶周遭小虫，顺带赶你',dh:[-6,-10]},
  {cat:'竞争',name:'同类抱团',msg:'同胞聚成团，你被挤出温区',dh:[-2,-4],df:[-3,-5]},
  {cat:'竞争',name:'幼虫相残',msg:'更早孵化的幼虫开始同类相残',dh:[-3,-6]},
  {cat:'竞争',name:'争地盘',msg:'两窝蛆在边界推搡，你被撞飞',dh:[-4,-7]},
  /* —— 新增 · 奇遇 / 诡异 —— */
  {cat:'奇遇',name:'玻璃微光',msg:'一块碎玻璃折射出诡异的七彩微光',dg:[1,2], de:[1,2]},
  {cat:'奇遇',name:'收音机残响',msg:'远处收音机飘来断续的人声',dh:[-1,-2]},
  {cat:'奇遇',name:'童谣飘落',msg:'谁在哼着一支古怪的童谣',dg:[1,3], de:[1,2]},
  {cat:'奇遇',name:'蚂蚁列队',msg:'一队蚂蚁列成诡异的阵型',dh:[-2,-4]},
  {cat:'奇遇',name:'镜面反光',msg:'水面镜面反射出另一个你',dg:[1,2], de:[1,2]},
  {cat:'奇遇',name:'旧照片飘落',msg:'一张旧照片飘到你身旁，蒙着尘'},
  {cat:'奇遇',name:'风中低语',msg:'风里似有谁在呼唤你的名字',dg:[1,2], de:[1,2]},
  {cat:'奇遇',name:'星屑坠地',msg:'传闻中的星屑悄然坠落在你身侧',dg:[2,4], de:[1,3]},
  {cat:'奇遇',name:'影子拉长',msg:'你的影子被拉得老长，像要脱离身体'},
  {cat:'奇遇',name:'钟声余韵',msg:'远寺钟声震得你体节发麻',dh:[-2,-4]},
  {cat:'奇遇',name:'萤火指引',msg:'一只萤火虫似在为你引路',dh:[2,4], de:[1,2]},
  {cat:'奇遇',name:'古井回响',msg:'古井深处传来空洞的回响'},
  {cat:'奇遇',name:'残破玩偶',msg:'一只残破的玩偶半埋在土中'},
  {cat:'奇遇',name:'蝴蝶迷阵',msg:'成群的蝴蝶织成一道迷阵',dh:[1,2], de:[1,2]},
  {cat:'奇遇',name:'流星划过',msg:'一颗流星划过夜幕，拖着尾光',dg:[1,3], de:[1,3]},
  /* —— 新增 · 状态触发（依自身状态出现） —— */
  {cat:'天象',name:'饥火中烧',msg:'饥饿烧灼体节，你几近失控',dh:[-1,-3], cond:s=>s.food<25},
  {cat:'机缘',name:'饱到极致',msg:'你撑到极致，连蠕动都费劲',df:[-3,-6],dg:[1,2], cond:s=>s.food>85},
  {cat:'奇遇',name:'探索眩晕',msg:'探索的余韵让你阵阵眩晕',dg:[1,2],dh:[-1,-2], cond:s=>s.explore>70, de:[-3,-6]},
  {cat:'天象',name:'探索枯竭',msg:'你缩在方寸之地，世界一片灰白',dh:[2,4], cond:s=>s.explore<10, de:[3,6]},
  {cat:'天象',name:'巨躯显眼',msg:'你庞大的身躯成了醒目的靶子',dh:[-3,-6], cond:s=>s.grow>40},
  {cat:'奇遇',name:'微躯隐匿',msg:'你小得几乎无人察觉',dh:[2,4], cond:s=>s.grow<3},
  {cat:'诡异',name:'古神低语',msg:'古神的低语又在脑海里响起',dg:[2,4],dh:[-1,-2], cond:s=>s.blessed, de:[2,4]},
  {cat:'奇遇',name:'前世幻痛',msg:'前世被天敌撕咬的幻痛袭来',dh:[-2,-4], cond:s=>s.generation>1},
  {cat:'机缘',name:'羽化残梦',msg:'你梦见自己又振翅飞起',dg:[1,3],dh:[1,2], cond:s=>s.evolved},
  {cat:'天象',name:'蜕皮在即',msg:'旧皮紧绷，你快要蜕下一层',dg:[2,4], cond:s=>s.grow>55},
  {cat:'天象',name:'寒潮预警',msg:'久历寒暑，你对降温格外敏感',dh:[-3,-5], cond:s=>s.day>10},
  {cat:'机缘',name:'饱食懒动',msg:'饱食终日，你懒得挪窝',dg:[1,2],dh:[1,2], cond:s=>s.food>70 && s.grow>30},
  {cat:'天象',name:'幼年脆弱',msg:'你嫩得仿佛一戳就破',dh:[-1,-3],df:[1,3], cond:s=>s.grow<2},
  {cat:'奇遇',name:'庞然压迫',msg:'你的体量让小虫纷纷避让',dh:[2,4], cond:s=>s.grow>60},
  {cat:'奇遇',name:'灵感枯竭',msg:'你对外界的渴望淡了下来',dh:[1,2], cond:s=>s.explore<20, de:[1,3]},
  {cat:'机缘',name:'暴食欲至',msg:'一股暴欲涌上，你想吞下眼前一切',df:[4,8],dh:[1,2], cond:s=>s.food<35},
  {cat:'天象',name:'旧伤隐隐',msg:'往日的伤处隐隐作痛',dh:[-2,-4], cond:s=>s.food<50},
  {cat:'奇遇',name:'神思清明',msg:'你竟能"看见"周身流动的气',dg:[1,3], cond:s=>s.explore>60, de:[2,4]},
  /* —— 新增 · 事件链（需先前事件触发） —— */
  {cat:'天象',name:'猎蝽余毒',msg:'刺吸处的余毒还在灼烧',dh:[-3,-6], cond:s=>s.seen.has('猎蝽刺吸')},
  {cat:'天象',name:'鸡羽残留',msg:'被刨飞的鸡羽还插在身旁',dh:[2,4], cond:s=>s.seen.has('鸡爪刨地')},
  {cat:'机缘',name:'蜂巢残迹',msg:'附近的蜂巢残留着甜腥',df:[6,10], cond:s=>s.seen.has('寄生蜂')},
  {cat:'天象',name:'冰雹坑洼',msg:'冰雹砸出的坑洼积起一洼清水',df:[4,8], cond:s=>s.seen.has('冰雹砸落')},
  {cat:'天象',name:'苔藓成片',msg:'苔藓已连成一片柔软绿毯',dh:[3,6], cond:s=>s.seen.has('苔藓蔓延')},
  {cat:'奇遇',name:'童谣回响',msg:'那支童谣在夜里又响了起来',dg:[1,3],dh:[-2,-4], cond:s=>s.seen.has('童谣飘落')},
  {cat:'奇遇',name:'星屑萌芽',msg:'星屑落处竟冒出微光的嫩芽',df:[5,9], cond:s=>s.seen.has('星屑坠地'), de:[1,3]},
  {cat:'奇遇',name:'镜中自我',msg:'你在水面又看见了自己',dg:[1,2], cond:s=>s.seen.has('镜面反光')},
  {cat:'天象',name:'古井探秘',msg:'你鬼使神差地爬向那口古井',df:[4,8],dh:[-3,-6], cond:s=>s.seen.has('古井回响')},
  {cat:'奇遇',name:'残偶私语',msg:'玩偶的眼窟窿里似有私语',dg:[1,2],dh:[-2,-4], cond:s=>s.seen.has('残破玩偶')},
  {cat:'奇遇',name:'萤火引路二',msg:'萤火虫又来，引你到一处暖穴',df:[5,9],dh:[2,4], cond:s=>s.seen.has('萤火指引')},
  {cat:'机缘',name:'流星余烬',msg:'流星坠处的余烬还温着',df:[4,8], cond:s=>s.seen.has('流星划过')},
  {cat:'机缘',name:'蛇蜕遗留',msg:'草丛里留着一截清香的蛇蜕',df:[4,8], cond:s=>s.seen.has('蛇信轻探')},
  /* —— 新增 · 轮回专属（需再次变成蛆之后） —— */
  {cat:'奇遇',name:'同源呼唤',msg:'冥冥中有同源性呼唤你归巢',df:[6,10],dg:[1,2], cond:s=>s.generation>1},
  {cat:'奇遇',name:'旧敌重逢',msg:'一只似曾相识的天敌再度逼近',dh:[-4,-8], cond:s=>s.generation>1},
  {cat:'奇遇',name:'轮回印记',msg:'你体节上浮现出淡淡的轮回印记',dg:[2,4], cond:s=>s.generation>1, de:[1,2]},
  {cat:'机缘',name:'羽化本能',msg:'你体内升起化蛹的本能冲动',dg:[1,3], cond:s=>s.evolved},
  {cat:'机缘',name:'前世味道',msg:'你莫名怀念起上世某味的腐肉',df:[5,9], cond:s=>s.generation>1},
  /* —— 新增 · 杂项 —— */
  {cat:'天象',name:'风铃轻响',msg:'檐下风铃轻响，节奏古怪',dh:[-1,-2]},
  {cat:'天象',name:'蚁狮陷阱',msg:'砂地里藏着蚁狮的漏斗陷阱',dh:[-4,-8]},
  {cat:'天象',name:'腐水冒泡',msg:'一洼腐水咕嘟冒泡，热气蒸腾',df:[3,6],dh:[-2,-4]},
  {cat:'天象',name:'兽蹄踏近',msg:'远处兽蹄踏得大地轻颤',dh:[-3,-6]},
  {cat:'天象',name:'新网结成',msg:'一张新的蛛网在头顶缓缓织成',dh:[-4,-7]},
  {cat:'天象',name:'月华满地',msg:'满月把银辉铺了满地',dh:[2,4],dg:[1,2]},
  {cat:'天象',name:'古钟锈响',msg:'一口锈钟被风撞出闷响',dh:[-2,-4]},
  {cat:'奇遇',name:'蜂群盘旋',msg:'一群蜜蜂盘旋不去，嗡鸣震得你发颤',dh:[-2,-5]},
];

/* ---------------- 事件情境：触发事件后的专属应对 ----------------
   每个「特殊事件」对应一段情境与若干专属行动（按事件类别着色区分）。
   平常行动恒为 3 个；情境应对单独成块，与平常行动明显区分。
   部分事件（EVENTS 中带 cond 的条目）只有在「自身状态 / 以往已触发事件」
   满足条件时才会出现，从而形成后续事件链。 */
const SITUATION_MAP = {
  /* —— 天敌 —— */
  '蚂蚁工兵':{prompt:'蚂蚁工兵张开大颚朝你扑来，退无可退。',responses:[
    {label:'🛡 缩成紧实肉球硬抗撕咬',tag:'保命',fx:()=>{ S.food=clamp(S.food-fl(4)); S.food=clamp(S.food+fl(2)); log('你缩成一团任它啃咬表皮，内里无伤。'); }},
    {label:'🏃 扭身钻进最近的缝隙',tag:'逃生',fx:()=>{ S.food=clamp(S.food-fl(2)); log('你猛地一扭滑入石缝，蚂蚁扑了个空。','win'); }},
    {label:'🍖 吐出一口腐肉诱它分心',tag:'弃食',fx:()=>{ S.food=clamp(S.food-fl(10)); log('你喷出残食，蚂蚁转而搬运，你趁机溜走。'); }},
  ]},
  '隐翅虫':{prompt:'隐翅虫喷出腐蚀毒液，体节一阵刺痛。',responses:[
    {label:'💧 分泌黏液中和毒液',tag:'解毒',fx:()=>{ if(Math.random()<0.6){ S.food=clamp(S.food+fl(3)); log('你挤出体液包裹伤口，灼痛稍缓。','win'); } else { S.food=clamp(S.food-fl(5)); log('中和失败，毒液仍蚀入体节。','die'); } }},
    {label:'🪨 滚入碎骨阴影躲避',tag:'藏身',fx:()=>{ S.food=clamp(S.food+fl(2)); log('你滚进骨影，隐翅虫失去目标。'); }},
    {label:'🏊 跃入积水冲洗体表',tag:'赌',fx:()=>{ if(Math.random()<0.5){ S.food=clamp(S.food+fl(4)); log('积水冲去毒液，清爽许多。','win'); } else { S.food=clamp(S.food-fl(3)); log('你呛了水，挣扎着浮起。','die'); } }},
  ]},
  '蟾蜍舌尖':{prompt:'蟾蜍舌尖如闪电扫过，腥风扑面。',responses:[
    {label:'🌿 借落叶弹力弹开',tag:'巧避',fx:()=>{ if(Math.random()<0.55){ S.food=clamp(S.food+fl(2)); log('你踩住落叶一弹，擦过舌尖。','win'); } else { S.food=clamp(S.food-fl(6)); log('弹得太慢，被舌尖扫中。','die'); } }},
    {label:'⚡ 骤然僵直装死',tag:'装死',fx:()=>{ S.food=clamp(S.food+fl(1)); log('你一动不动，蟾蜍以为枯枝移开了。'); }},
    {label:'🕳️ 就地钻入湿泥',tag:'埋身',fx:()=>{ S.food=clamp(S.food+fl(3)); log('你一头扎进泥里，舌风掠过脊背。','win'); }},
  ]},
  '寄生蜂':{prompt:'寄生蜂悬在头顶盘旋，产卵器已贴上你的体节。',responses:[
    {label:'🤢 剧烈扭动甩脱虫卵',tag:'赌',fx:()=>{ if(Math.random()<0.5){ log('你疯狂翻滚，卵被甩飞，捡回一命。','win'); } else { S.food=clamp(S.food-fl(6)); log('卵已扎入，寄生感隐隐作痛。','die'); } }},
    {label:'🛡 裹一层薄泥隔绝',tag:'伪装',fx:()=>{ S.camo=true; S.food=clamp(S.food+fl(2)); log('泥膜让蜂误判，产卵落了空。'); }},
    {label:'⏳ 静待其离去再动',tag:'隐忍',fx:()=>{ S.food=clamp(S.food-fl(1)); log('你屏息良久，蜂终离去，虚惊一场。'); }},
  ]},
  '蜘蛛':{prompt:'蛛网缠上体节，蜘蛛正收紧丝线。',responses:[
    {label:'🕸 猛挣断丝脱身',tag:'挣脱',fx:()=>{ if(Math.random()<0.6){ S.food=clamp(S.food+fl(2)); log('你奋力一挣，丝线崩断。','win'); } else { S.food=clamp(S.food-fl(5)); log('丝线韧性惊人，勒得更紧。','die'); } }},
    {label:'🦴 躲进骨缝借地形',tag:'藏身',fx:()=>{ S.food=clamp(S.food+fl(3)); log('骨缝太窄，蜘蛛进不来。','win'); }},
    {label:'🔥 借日晒令网发脆',tag:'天时',fx:()=>{ S.food=clamp(S.food+fl(4)); log('烈日下蛛网发脆，你轻易挣脱。','win'); }},
  ]},
  '飞鸟俯冲':{prompt:'飞鸟自高空俯冲，影子笼罩了你。',responses:[
    {label:'🌑 贴地缩进阴影',tag:'藏身',fx:()=>{ S.food=clamp(S.food+fl(3)); log('你紧贴地面，鸟影掠过。','win'); }},
    {label:'🍂 借落叶掩护',tag:'巧避',fx:()=>{ S.food=clamp(S.food+fl(2)); log('落叶遮住身形，鸟扑了空。'); }},
    {label:'⚡ 装死不动',tag:'装死',fx:()=>{ S.food=clamp(S.food+fl(1)); log('你僵如枯皮，鸟不屑一顾。'); }},
  ]},
  /* —— 天象 / 环境 —— */
  '骤雨':{prompt:'暴雨倾盆，水流把你冲得翻滚，世界一片混沌。',responses:[
    {label:'💧 张口接住雨水解渴',tag:'甘露',fx:()=>{ S.food=clamp(S.food+fl(5)); S.food=clamp(S.food-fl(3)); log('雨水清甜，你啜饮几口。','win'); }},
    {label:'🏠 钻入腐木避雨',tag:'藏身',fx:()=>{ S.food=clamp(S.food+fl(4)); log('腐木挡雨，你安然蜷着。','win'); }},
    {label:'🌊 顺水流漂向别处',tag:'赌',fx:()=>{ if(Math.random()<0.5){ S.food=clamp(S.food+fl(8)); log('水流把你送到一处新腐肉旁。','win'); } else { S.food=clamp(S.food-fl(6)); log('你被冲进臭水沟，狼狈不堪。','die'); } }},
  ]},
  '烈日':{prompt:'烈日当空，地表迅速干裂，水分在蒸发。',responses:[
    {label:'🌑 爬向阴影避暑',tag:'避暑',fx:()=>{ S.food=clamp(S.food+fl(6)); log('阴影下暑气顿消。','win'); }},
    {label:'💧 接一滴晨露回润',tag:'甘露',fx:()=>{ S.food=clamp(S.food+fl(5)); S.food=clamp(S.food+fl(3)); log('晨露救命，干渴稍解。','win'); }},
    {label:'🪵 钻树皮缝保湿润',tag:'藏身',fx:()=>{ S.food=clamp(S.food+fl(4)); log('树皮缝里潮气未散。'); }},
  ]},
  '寒夜':{prompt:'霜降寒夜，体温正悄悄流失。',responses:[
    {label:'🤝 与同胞挤作一团取暖',tag:'抱团',fx:()=>{ S.food=clamp(S.food-fl(6)); S.food=clamp(S.food+fl(8)); log('挤在一起，彼此的体温救了你。','win'); }},
    {label:'🍂 裹紧落叶御寒',tag:'保暖',fx:()=>{ S.food=clamp(S.food+fl(5)); log('枯叶如被，寒意稍退。'); }},
    {label:'🪵 钻入腐木深处',tag:'藏身',fx:()=>{ S.food=clamp(S.food+fl(4)); log('木心尚温，你缩了进去。'); }},
  ]},
  '暖阳':{prompt:'暖阳和煦，晒得你懒洋洋。',responses:[
    {label:'☀️ 摊开身体晒太阳',tag:'+恢复',fx:()=>{ S.food=clamp(S.food+fl(7)); S.grow=clampG(S.grow+fl(1)); log('阳光滋养，体节舒展。','win'); }},
    {label:'🥚 借温度催熟体内',tag:'成长',fx:()=>{ S.grow=clampG(S.grow+fl(4)); S.food=clamp(S.food-fl(2)); log('暖意加速蜕变，你又大了一圈。'); }},
    {label:'🌿 舒展晒去湿气',tag:'+恢复',fx:()=>{ S.food=clamp(S.food+fl(5)); log('湿气蒸散，浑身舒坦。','win'); }},
  ]},
  /* —— 机缘 / 食物 —— */
  '熟果坠地':{prompt:'一颗熟透的果实砸落，露出甜美果肉。',responses:[
    {label:'🍎 大快朵颐饱餐一顿',tag:'大餐',fx:()=>{ S.food=clamp(S.food+fl(22)); S.grow=clampG(S.grow+fl(3)); log('甜腐果汁灌满身体。','win'); }},
    {label:'📦 藏起一部分慢慢吃',tag:'囤粮',fx:()=>{ S.food=clamp(S.food+fl(12)); log('你衔了一块躲进暗处，细水长流。'); }},
    {label:'🐜 分一口给弱小换人情',tag:'结善',fx:()=>{ S.food=clamp(S.food+fl(10)); S.food=clamp(S.food+fl(2)); log('你让出些许，弱小同胞记住了你。'); }},
  ]},
  '蜜露滴落':{prompt:'树梢坠下一滴晶莹蜜露，香气诱人。',responses:[
    {label:'🍯 畅饮整滴蜜露',tag:'大餐',fx:()=>{ S.food=clamp(S.food+fl(15)); S.food=clamp(S.food+fl(5)); log('蜜露甜润，力气大增。','win'); }},
    {label:'🪣 蓄存蜜露晚些再饮',tag:'囤粮',fx:()=>{ S.food=clamp(S.food+fl(10)); log('你小心含住，留待饥饿时。'); }},
    {label:'🌿 引蝶来此作掩护',tag:'巧思',fx:()=>{ S.food=clamp(S.food+fl(3)); log('蝴蝶循香而来，翅影成了你的荫蔽。'); }},
  ]},
  '菌毯':{prompt:'一片抑菌菌丝在你身侧铺开，散发清苦香气。',responses:[
    {label:'🍄 啃食菌丝增强抗性',tag:'+恢复',fx:()=>{ S.food=clamp(S.food+fl(6)); log('菌丝入腹，体表创口收敛。','win'); }},
    {label:'🛡 借菌毯藏身避敌',tag:'藏身',fx:()=>{ S.food=clamp(S.food+fl(4)); log('菌毯气味掩去你的行踪。'); }},
    {label:'🌱 护住菌丝待日后回护',tag:'长效',fx:()=>{ S.food=clamp(S.food+fl(3)); S.food=clamp(S.food+fl(2)); log('你小心护住菌丝，它将在日后回护你。'); }},
  ]},
  /* —— 竞争 —— */
  '虫口夺食':{prompt:'同胞们涌来争抢同一块腐肉，你被挤在边缘。',responses:[
    {label:'🤼 抢回一口再退',tag:'强食',fx:()=>{ if(Math.random()<0.5){ S.food=clamp(S.food+fl(12)); log('你抢下一口扭头就溜。','win'); } else { S.food=clamp(S.food-fl(5)); log('被同胞撞翻，只抢到残渣。','die'); } }},
    {label:'🏃 退避三舍另寻食',tag:'避让',fx:()=>{ S.food=clamp(S.food-fl(2)); S.food=clamp(S.food+fl(2)); log('你识趣退开，去别处觅食。'); }},
    {label:'🤝 与强者结盟分食',tag:'结盟',fx:()=>{ S.food=clamp(S.food+fl(8)); S.food=clamp(S.food+fl(1)); log('你示好分一杯羹，竟得庇护。'); }},
  ]},
  '同类相食':{prompt:'一只更强的同类盯上了你，口器微张。',responses:[
    {label:'⚔️ 先发制人反咬',tag:'豪赌',fx:()=>{ if(Math.random()<0.45){ S.food=clamp(S.food+fl(14)); S.grow=clampG(S.grow+fl(3)); log('你扑上反噬成功，吞下战利品。','win'); } else { S.food=clamp(S.food-fl(12)); log('对方更强，你反被咬残。','die'); } }},
    {label:'🏃 逃入暗处',tag:'逃生',fx:()=>{ S.food=clamp(S.food-fl(1)); S.food=clamp(S.food+fl(2)); log('你钻进暗处，强者懒得追。'); }},
    {label:'🎨 裹泥伪装成枯枝',tag:'伪装',fx:()=>{ S.camo=true; log('你凝住不动，被误认作枯枝。'); }},
  ]},
  /* —— 奇遇 / 诡异 —— */
  '落叶信笺':{prompt:'一片写满古怪字迹的叶子飘落，压在你身上。',responses:[
    {label:'📜 试着辨认叶上字句',tag:'诡异',fx:()=>{ if(Math.random()<0.5){ S.grow=clampG(S.grow+fl(2)); log('字句入脑，你似懂非懂，莫名躁动。'); } else { S.food=clamp(S.food-fl(3)); log('字迹刺目，你一阵眩晕。','die'); } }},
    {label:'🔥 把叶子推入积水浸毁',tag:'驱邪',fx:()=>{ S.food=clamp(S.food+fl(2)); log('叶子沉入水底，那股寒意散了。'); }},
    {label:'🪶 藏在身下当护符',tag:'赌',fx:()=>{ S.food=clamp(S.food+fl(1)); log('你将信笺压在身下，静观其变。'); }},
  ]},
  '孩童凝视':{prompt:'一根小小的手指缓缓凑近，孩童正好奇地盯着你。',responses:[
    {label:'🎭 装死任其观摩',tag:'装死',fx:()=>{ S.food=clamp(S.food+fl(1)); log('你僵如尘埃，孩童失去兴趣。'); }},
    {label:'🏃 悄悄滚向暗处',tag:'逃生',fx:()=>{ S.food=clamp(S.food-fl(1)); log('你趁其眨眼，溜进阴影。'); }},
    {label:'👁️ 回望那颗脑袋',tag:'诡异',fx:()=>{ S.grow=clampG(S.grow+fl(1)); log('你对视孩童，竟生出一丝异样。'); }},
  ]},
  '科学家取样':{prompt:'一双戴手套的手出现，试管朝你探来。',responses:[
    {label:'🧪 假死被装入试管',tag:'赌',fx:()=>{ if(Math.random()<0.5){ S.food=clamp(S.food+fl(3)); log('你被带走又遗弃，竟活着回来。','win'); } else { S.food=clamp(S.food-fl(8)); log('取样带走你半截身子，元气大伤。','die'); } }},
    {label:'🏃 钻缝逃脱',tag:'逃生',fx:()=>{ S.food=clamp(S.food+fl(2)); log('你滑入缝隙，手套扑空。','win'); }},
    {label:'🤫 蛰伏不动',tag:'隐忍',fx:()=>{ S.food=clamp(S.food+0); log('你屏息蛰伏，手终离去。'); }},
  ]},
  '流浪猫嗅':{prompt:'流浪猫凑近嗅探，鼻息喷在你身上。',responses:[
    {label:'🐱 僵直装作枯枝',tag:'装死',fx:()=>{ S.food=clamp(S.food+fl(1)); log('你纹丝不动，猫 sniff 后走开。'); }},
    {label:'🪶 借羽毛障眼',tag:'巧避',fx:()=>{ S.food=clamp(S.food+fl(2)); log('羽毛遮挡身形，猫没看清。'); }},
    {label:'🏃 窜入草丛逃离',tag:'逃生',fx:()=>{ S.food=clamp(S.food-fl(2)); log('你猛地窜出，惊得猫缩了爪。'); }},
  ]},
  '月光':{prompt:'冷月当空，清辉洒在身上，寒意丝丝。',responses:[
    {label:'🌙 沐月静修',tag:'成长',fx:()=>{ S.grow=clampG(S.grow+fl(3)); log('月华浸润，你悄然成长。'); }},
    {label:'🌑 借月色潜行',tag:'潜行',fx:()=>{ S.food=clamp(S.food+fl(2)); log('月下视线模糊，你悄然挪位。'); }},
    {label:'❄️ 受寒蜷缩',tag:'保命',fx:()=>{ S.food=clamp(S.food-fl(1)); S.food=clamp(S.food+fl(1)); log('你蜷紧身子，硬抗寒意。'); }},
  ]},
  /* —— 后续事件（需先前事件 / 自身状态满足才会出现） —— */
  '虫卵蠕动':{prompt:'体内那枚蜂卵蠕动不休，刺痛钻心。',responses:[
    {label:'🤢 剧烈痉挛逼出虫卵',tag:'赌',fx:()=>{ if(Math.random()<0.4){ S.food=clamp(S.food+fl(4)); log('你痉挛不止，卵被挤出，脱险。','win'); } else { S.food=clamp(S.food-fl(8)); log('卵已深植，你痛到抽搐。','die'); } }},
    {label:'🛡 裹泥压制蠕动',tag:'压制',fx:()=>{ S.camo=true; S.food=clamp(S.food+fl(1)); log('泥膜镇住异动，暂缓痛楚。'); }},
    {label:'⏳ 忍痛静养',tag:'隐忍',fx:()=>{ S.food=clamp(S.food-fl(2)); log('你强忍剧痛，盼它自行平息。','die'); }},
  ]},
  '字迹浮现':{prompt:'那封信的字迹，竟在你体节上隐隐浮现。',responses:[
    {label:'🔥 蹭掉浮现的字',tag:'驱邪',fx:()=>{ S.food=clamp(S.food+fl(2)); log('你蹭去字迹，寒意消散。'); }},
    {label:'📜 默记字句参悟',tag:'诡异',fx:()=>{ S.grow=clampG(S.grow+fl(3)); log('字句入魂，你莫名明悟。'); }},
    {label:'👁️ 任其游走',tag:'赌',fx:()=>{ if(Math.random()<0.5){ S.grow=clampG(S.grow+fl(2)); log('字迹游走，化作养分。','win'); } else { S.food=clamp(S.food-fl(4)); log('字迹如虫噬，阵阵刺痛。','die'); } }},
  ]},
  '鼠穴探秘':{prompt:'家鼠留下的浅穴幽深，似有物事。',responses:[
    {label:'🐾 探入鼠穴觅食',tag:'赌',fx:()=>{ if(Math.random()<0.5){ S.food=clamp(S.food+fl(14)); log('穴底有残肉，你饱餐。','win'); } else { S.food=clamp(S.food-fl(7)); log('穴中藏蛇，你仓皇逃出。','die'); } }},
    {label:'🏠 占穴为巢',tag:'藏身',fx:()=>{ S.food=clamp(S.food+fl(4)); log('你盘踞穴口，安稳一时。','win'); }},
    {label:'🚪 封住穴口避祸',tag:'避险',fx:()=>{ S.food=clamp(S.food+fl(2)); log('你推土封穴，隔绝外患。'); }},
  ]},
  '积水蚊虫':{prompt:'骤雨积水中，蚊虫成群孳生。',responses:[
    {label:'💨 潜入水下避蚊',tag:'避害',fx:()=>{ S.food=clamp(S.food+fl(3)); log('你沉入积水底层，蚊群无奈。','win'); }},
    {label:'🍖 捕食蚊幼虫',tag:'觅食',fx:()=>{ S.food=clamp(S.food+fl(8)); log('你吞下孑孓，竟颇鲜美。'); }},
    {label:'🌿 借草叶驱蚊',tag:'巧避',fx:()=>{ S.food=clamp(S.food+fl(2)); log('草叶气息让蚊虫退散。'); }},
  ]},
  '菌丝漫延':{prompt:'先前那片菌毯，已悄悄漫过你的周身。',responses:[
    {label:'🍄 与菌丝共生汲取',tag:'+恢复',fx:()=>{ S.food=clamp(S.food+fl(7)); log('菌丝反哺，你伤愈体健。','win'); }},
    {label:'🌱 任其包裹成膜',tag:'护甲',fx:()=>{ S.camo=true; S.food=clamp(S.food+fl(3)); log('菌膜裹身，似甲亦似荫。'); }},
    {label:'✂️ 割去多余菌丝',tag:'节制',fx:()=>{ S.food=clamp(S.food+fl(2)); S.food=clamp(S.food+fl(3)); log('你割下菌丝佐餐，恰到好处。'); }},
  ]},
  '体力透支':{prompt:'连番消耗让你几近虚脱，身躯轻飘飘。',responses:[
    {label:'🛌 就地蛰伏回气',tag:'休整',fx:()=>{ S.food=clamp(S.food+fl(6)); log('你一动不动养神，气力渐回。','win'); }},
    {label:'🍖 强撑啃食补力',tag:'强食',fx:()=>{ S.food=clamp(S.food+fl(10)); S.food=clamp(S.food+fl(2)); log('你咬牙进食，勉强支起身子。'); }},
    {label:'🌑 钻暗处免遭毒手',tag:'避险',fx:()=>{ S.food=clamp(S.food+fl(3)); log('你躲进暗处，免被天敌盯上。','win'); }},
  ]},
  '饱食撑胀':{prompt:'你吃得过饱，身躯沉沉，挪动艰难。',responses:[
    {label:'🛌 原地慢慢消化',tag:'休整',fx:()=>{ S.grow=clampG(S.grow+fl(3)); S.food=clamp(S.food+fl(2)); log('你摊开身子消化，体型又长。','win'); }},
    {label:'🏃 强撑挪向暗处',tag:'避险',fx:()=>{ S.food=clamp(S.food+fl(1)); log('你勉强挪动，躲入暗处防天敌。'); }},
    {label:'🤮 吐出些许减负',tag:'弃食',fx:()=>{ S.food=clamp(S.food-fl(12)); log('你吐出些残食，轻盈了些。'); }},
  ]},
  /* —— 轮回事件专属应对（需再次变成蛆之后才出现） —— */
  '轮回残忆':{prompt:'前世的羽化记忆在脑中翻涌，你一时恍惚。',responses:[
    {label:'🌅 沉溺于记忆的暖意',tag:'成长',fx:()=>{ S.grow=clampG(S.grow+fl(4)); S.food=clamp(S.food-fl(2)); log('记忆的暖流催你长大，却也耗了神。'); }},
    {label:'🧊 甩头回到当下',tag:'清醒',fx:()=>{ S.food=clamp(S.food+fl(4)); log('你甩去幻觉，重新专注眼前的腐肉。','win'); }},
    {label:'📜 参悟轮回之理',tag:'诡异',fx:()=>{ S.grow=clampG(S.grow+fl(2)); log('你似懂非懂，体内的记忆成了养分。'); }},
  ]},
  '旧巢回望':{prompt:'你鬼使神差地爬回上辈子化蛹的旧泥。',responses:[
    {label:'🪱 在旧巢安心蛰伏',tag:'藏身',fx:()=>{ S.food=clamp(S.food+fl(8)); log('旧巢气息熟悉，你安然蜷着。','win'); }},
    {label:'🍄 啃食残留的菌膜',tag:'+恢复',fx:()=>{ S.food=clamp(S.food+fl(6)); S.food=clamp(S.food+fl(5)); log('旧巢里竟还留着上世的菌膜，清甜。','win'); }},
    {label:'🚪 离开这处旧地',tag:'前行',fx:()=>{ S.food=clamp(S.food+fl(2)); log('你终究离开，去寻属于自己的角落。'); }},
  ]},
  '双生幼蛆':{prompt:'一窝与你同源的幼蛆破壳，懵懂地蹭着你。',responses:[
    {label:'🤱 护住弱小的同胞',tag:'结善',fx:()=>{ S.food=clamp(S.food+fl(3)); S.food=clamp(S.food+fl(4)); log('你护住幼蛆，它们记住了你的气息。'); }},
    {label:'🍖 抢先吞下最近的幼蛆',tag:'强食',fx:()=>{ S.food=clamp(S.food+fl(12)); S.grow=clampG(S.grow+fl(3)); log('同源亦可为食，你毫不客气。'); }},
    {label:'🏃 各自散去，各安天命',tag:'避让',fx:()=>{ S.food=clamp(S.food+fl(2)); log('你拱了拱幼蛆，转身钻入暗处。'); }},
  ]},

  /* ===== 新增事件专属应对（v1.9） ===== */
  /* —— 新增天敌 —— */
  '猎蝽刺吸':{prompt:'猎蝽的刺吸式口器扎进体节，毒液上涌。',responses:[
    {label:'🩸 猛缩体节挣脱口器',tag:'挣脱',fx:()=>{ if(Math.random()<0.6){ S.food=clamp(S.food+fl(2)); log('你一缩身，口器被甩脱。','win'); } else { S.food=clamp(S.food-fl(5)); log('挣脱失败，毒液蚀入更深。','die'); } }},
    {label:'🪨 滚进石缝借地形',tag:'藏身',fx:()=>{ S.food=clamp(S.food+fl(3)); log('石缝太窄，猎蝽够不着你。','win'); }},
    {label:'💧 分泌体液稀释毒液',tag:'解毒',fx:()=>{ S.food=clamp(S.food-fl(2)); log('你挤出体液稀释毒液，缓过一口气。'); }},
  ]},
  '蜉寄螨':{prompt:'细小的螨虫攀附上来，钻进体节缝隙啃咬。',responses:[
    {label:'🌀 剧烈翻滚甩脱螨虫',tag:'挣脱',fx:()=>{ if(Math.random()<0.65){ S.food=clamp(S.food+fl(2)); log('你连滚几圈，螨虫被甩飞。','win'); } else { S.food=clamp(S.food-fl(4)); log('螨虫抱得更紧了。','die'); } }},
    {label:'🪵 蹭过粗糙树皮刮除',tag:'巧除',fx:()=>{ S.food=clamp(S.food+fl(3)); log('树皮刮去了附着的螨虫。','win'); }},
    {label:'🛡 裹泥隔绝啃咬',tag:'伪装',fx:()=>{ S.camo=true; log('泥膜让你暂时隔绝了骚扰。'); }},
  ]},
  '蛇信轻探':{prompt:'一截冰凉的蛇信自草丛探出，缓缓舔过你的身体。',responses:[
    {label:'🕳️ 就地钻入湿泥',tag:'埋身',fx:()=>{ S.food=clamp(S.food+fl(3)); log('你一头扎进泥里，蛇信擦过脊背。','win'); }},
    {label:'🌿 借草茎弹力弹开',tag:'巧避',fx:()=>{ if(Math.random()<0.55){ S.food=clamp(S.food+fl(2)); log('你弹离蛇信的路线。','win'); } else { S.food=clamp(S.food-fl(7)); log('弹得太慢，被蛇信扫中。','die'); } }},
    {label:'⚡ 僵直装死',tag:'装死',fx:()=>{ S.food=clamp(S.food+fl(1)); log('你一动不动，蛇以为是一截枯枝。'); }},
  ]},
  '鸡爪刨地':{prompt:'散养的鸡一爪刨来，泥土与碎肉齐飞，你被甩上半空。',responses:[
    {label:'🪶 借鸡羽缓冲落地',tag:'巧避',fx:()=>{ S.food=clamp(S.food+fl(3)); log('你扒住鸡羽，轻飘飘落回土里。','win'); }},
    {label:'🏃 趁爪落空滚远',tag:'逃生',fx:()=>{ S.food=clamp(S.food-fl(1)); log('你趁鸡爪抬起的间隙溜开。'); }},
    {label:'🛡 缩入土坑避险',tag:'藏身',fx:()=>{ S.food=clamp(S.food+fl(2)); log('你缩进被刨出的浅坑，鸡没瞧见。','win'); }},
  ]},
  '黄鼠狼嗅探':{prompt:'黄鼠狼凑得很近，鼻尖几乎贴上你的脊背，胡须扫动。',responses:[
    {label:'🎭 凝住不动装枯枝',tag:'装死',fx:()=>{ S.food=clamp(S.food+fl(1)); log('你凝如枯皮，黄鼠狼嗅了嗅走开。'); }},
    {label:'🏃 窜入石缝深处',tag:'逃生',fx:()=>{ S.food=clamp(S.food-fl(2)); log('你猛地窜入窄缝，黄鼠狼进不去。','win'); }},
    {label:'💨 喷出酸液扰其嗅觉',tag:'赌',fx:()=>{ if(Math.random()<0.5){ S.food=clamp(S.food+fl(3)); log('酸液糊了它的鼻头，它退开了。','win'); } else { S.food=clamp(S.food-fl(8)); log('它一爪把你拍飞。','die'); } }},
  ]},
  '壁虎突袭':{prompt:'壁虎闪电般弹射，咬住了你一角躯体。',responses:[
    {label:'🌀 扭身挣脱咬合',tag:'挣脱',fx:()=>{ if(Math.random()<0.6){ S.food=clamp(S.food+fl(2)); log('你猛一扭身滑脱。','win'); } else { S.food=clamp(S.food-fl(5)); log('被咬住一角，撕下一块皮。','die'); } }},
    {label:'🏠 钻进墙缝死角',tag:'藏身',fx:()=>{ S.food=clamp(S.food+fl(3)); log('墙缝太窄，壁虎进不来。','win'); }},
    {label:'🌑 贴墙静止',tag:'装死',fx:()=>{ S.food=clamp(S.food+fl(1)); log('你贴着墙纹丝不动，壁虎失了目标。'); }},
  ]},
  '蜻蜓点水掠':{prompt:'蜻蜓低掠觅食，阴影扫过你的身体，翅风凛冽。',responses:[
    {label:'🌑 贴地缩进阴影',tag:'藏身',fx:()=>{ S.food=clamp(S.food+fl(3)); log('你紧贴地面，蜻蜓掠过。','win'); }},
    {label:'💧 跃入积水避开',tag:'巧避',fx:()=>{ S.food=clamp(S.food+fl(2)); log('你跃入积水，蜻蜓够不着水面下。','win'); }},
    {label:'⚡ 装死不动',tag:'装死',fx:()=>{ S.food=clamp(S.food+fl(1)); log('你僵如浮尘，蜻蜓不屑一顾。'); }},
  ]},
  '刺猬拱土':{prompt:'刺猬拱翻腐叶，把你连同碎土甩出半尺远。',responses:[
    {label:'🛡 团成肉球护住要害',tag:'保命',fx:()=>{ S.food=clamp(S.food+fl(2)); log('你缩成团，硬刺奈何不了你。','win'); }},
    {label:'🏃 借抛飞落点滚走',tag:'逃生',fx:()=>{ S.food=clamp(S.food-fl(1)); log('你借势滚远，脱离拱土范围。'); }},
    {label:'🍂 藏进落叶背面',tag:'藏身',fx:()=>{ S.food=clamp(S.food+fl(2)); log('你翻到落叶背面，刺猬没注意。','win'); }},
  ]},
  '蚂蟥吸附':{prompt:'一条蚂蟥悄悄吸附上你的体壁，开始啜血。',responses:[
    {label:'🧂 蹭盐渍土层逼退',tag:'巧除',fx:()=>{ S.food=clamp(S.food+fl(2)); log('你蹭过咸涩的土，蚂蟥松了口。','win'); }},
    {label:'🌀 剧烈收缩挤脱',tag:'挣脱',fx:()=>{ if(Math.random()<0.6){ S.food=clamp(S.food+fl(1)); log('你一缩一胀，蚂蟥被挤出。','win'); } else { S.food=clamp(S.food-fl(4)); log('蚂蟥吸得更紧了。','die'); } }},
    {label:'🪨 蹭粗糙石面刮掉',tag:'巧除',fx:()=>{ S.food=clamp(S.food+fl(3)); log('石面刮落了吸附的蚂蟥。','win'); }},
  ]},
  '蜗牛黏液缚':{prompt:'蜗牛爬过，黏稠的黏液将你半边身子黏在原地。',responses:[
    {label:'🌀 缓慢扭动脱黏',tag:'挣脱',fx:()=>{ if(Math.random()<0.6){ S.food=clamp(S.food+fl(2)); log('你一点点扭出黏液牢笼。','win'); } else { S.food=clamp(S.food-fl(3)); log('黏液太黏，你费力挣动。','die'); } }},
    {label:'💧 借晨露化开黏液',tag:'巧避',fx:()=>{ S.food=clamp(S.food+fl(3)); log('露水溶开黏液，你滑脱出来。','win'); }},
    {label:'🍃 借落叶盖住身形',tag:'藏身',fx:()=>{ S.food=clamp(S.food+fl(2)); log('你借落叶遮掩，蜗牛爬向别处。'); }},
  ]},
  /* —— 新增天象 / 环境 —— */
  '冰雹砸落':{prompt:'豆大的冰雹砸在背上，生疼，世界一片混乱。',responses:[
    {label:'🪵 钻进腐木避雹',tag:'藏身',fx:()=>{ S.food=clamp(S.food+fl(5)); log('腐木挡下冰雹，你安然蜷着。','win'); }},
    {label:'🍂 顶一片落叶当伞',tag:'巧避',fx:()=>{ S.food=clamp(S.food+fl(3)); log('落叶替你挡下大半冰雹。'); }},
    {label:'🏃 滚向最近的土坑',tag:'逃生',fx:()=>{ S.food=clamp(S.food-fl(1)); log('你滚进浅坑，躲过最密的一阵。'); }},
  ]},
  '干涸逼近':{prompt:'水源渐远，周遭一片焦渴，你的体表开始发紧。',responses:[
    {label:'💧 啃食多汁腐叶解渴',tag:'甘露',fx:()=>{ S.food=clamp(S.food+fl(8)); log('腐叶里的水分救了你。','win'); }},
    {label:'🌑 钻入深层湿土',tag:'藏身',fx:()=>{ S.food=clamp(S.food+fl(5)); log('深处尚存潮气，你缩了进去。','win'); }},
    {label:'🏃 向湿润处缓缓挪动',tag:'觅水',fx:()=>{ S.food=clamp(S.food-fl(2)); log('你向着湿气更重的方向爬去。'); }},
  ]},
  '苔藓蔓延':{prompt:'湿润的苔藓悄悄爬上你的身侧，凉丝丝的。',responses:[
    {label:'🍃 借苔藓保湿',tag:'+恢复',fx:()=>{ S.food=clamp(S.food+fl(6)); log('苔藓锁住水分，你舒坦许多。','win'); }},
    {label:'🛡 借苔色伪装',tag:'伪装',fx:()=>{ S.camo=true; S.food=clamp(S.food+fl(2)); log('你与苔色融为一体。'); }},
    {label:'🌱 啃食苔尖当零嘴',tag:'觅食',fx:()=>{ S.food=clamp(S.food+fl(4)); log('苔尖清润，略解饥饿。'); }},
  ]},
  '落叶成毯':{prompt:'厚厚的落叶成了暖和的毯子，裹住了你的身躯。',responses:[
    {label:'🛌 裹在叶毯里休整',tag:'休整',fx:()=>{ S.food=clamp(S.food+fl(7)); log('暖意让你回了不少气。','win'); }},
    {label:'🛡 借叶层藏身避敌',tag:'藏身',fx:()=>{ S.food=clamp(S.food+fl(4)); log('叶层之下，天敌看不见你。','win'); }},
    {label:'🌿 啃食腐叶补充',tag:'觅食',fx:()=>{ S.food=clamp(S.food+fl(5)); log('腐叶里还有些养分。'); }},
  ]},
  '露重成霜':{prompt:'夜露凝霜，凉意刺骨，你的体节微微发僵。',responses:[
    {label:'🤝 与同胞挤暖',tag:'抱团',fx:()=>{ S.food=clamp(S.food-fl(5)); S.food=clamp(S.food+fl(7)); log('挤在一起，彼此的体温救了你。','win'); }},
    {label:'🍂 裹紧落叶御寒',tag:'保暖',fx:()=>{ S.food=clamp(S.food+fl(5)); log('枯叶如被，寒意稍退。'); }},
    {label:'🪵 钻入腐木深处',tag:'藏身',fx:()=>{ S.food=clamp(S.food+fl(4)); log('木心尚温，你缩了进去。'); }},
  ]},
  '地龙翻土':{prompt:'蚯蚓翻土，把你拱到了浅层，眼前豁然开朗。',responses:[
    {label:'🍖 趁乱啃食翻出的腐物',tag:'觅食',fx:()=>{ S.food=clamp(S.food+fl(10)); log('翻土带出碎食，你饱餐。','win'); }},
    {label:'🏠 占住蚯蚓留下的孔道',tag:'藏身',fx:()=>{ S.food=clamp(S.food+fl(4)); log('孔道成了现成的巢。','win'); }},
    {label:'🌿 随土堆爬向新处',tag:'迁移',fx:()=>{ S.food=clamp(S.food+fl(2)); log('你顺着新土堆挪到了别处。'); }},
  ]},
  /* —— 新增机缘 / 食物 —— */
  '蝇卵成窝':{prompt:'一处无人争夺的蝇卵窝，白花花一片，唾手可得。',responses:[
    {label:'🍳 大快朵颐饱餐',tag:'大餐',fx:()=>{ S.food=clamp(S.food+fl(20)); S.grow=clampG(S.grow+fl(3)); log('卵液灌满身体，圆润了一圈。','win'); }},
    {label:'📦 藏起一部分慢慢吃',tag:'囤粮',fx:()=>{ S.food=clamp(S.food+fl(11)); log('你衔了一块躲进暗处，细水长流。'); }},
    {label:'🤝 唤弱小同享换人情',tag:'结善',fx:()=>{ S.food=clamp(S.food+fl(9)); S.food=clamp(S.food+fl(2)); log('你让出些许，弱小同胞记住了你。'); }},
  ]},
  '落果成酱':{prompt:'熟透的果子烂成果酱，黏甜诱人，正汩汩渗着。',responses:[
    {label:'🍎 沉浸果酱大餐',tag:'大餐',fx:()=>{ S.food=clamp(S.food+fl(22)); S.grow=clampG(S.grow+fl(3)); log('甜腐的果汁灌满身体。','win'); }},
    {label:'🪣 蓄存果酱晚些再饮',tag:'囤粮',fx:()=>{ S.food=clamp(S.food+fl(12)); log('你小心含住，留待饥饿时。'); }},
    {label:'🐜 分一口给弱小换人情',tag:'结善',fx:()=>{ S.food=clamp(S.food+fl(10)); S.food=clamp(S.food+fl(2)); log('你让出些许，弱小同胞记住了你。'); }},
  ]},
  '骨髓渗出':{prompt:'碎骨缝里渗出油润的骨髓，腥香扑鼻。',responses:[
    {label:'🦴 深啜骨髓大补',tag:'大餐',fx:()=>{ S.food=clamp(S.food+fl(16)); S.grow=clampG(S.grow+fl(2)); log('骨髓油润，力气大增。','win'); }},
    {label:'📦 蓄存骨髓慢慢吸',tag:'囤粮',fx:()=>{ S.food=clamp(S.food+fl(10)); log('你小心含住，留待饥饿时。'); }},
    {label:'🛡 借骨缝藏身',tag:'藏身',fx:()=>{ S.food=clamp(S.food+fl(3)); log('骨缝窄而深，是个好藏处。','win'); }},
  ]},
  '蘑菇伞下':{prompt:'蘑菇伞下积着甜润的汁液，泛着微光。',responses:[
    {label:'🍄 畅饮伞下汁液',tag:'大餐',fx:()=>{ S.food=clamp(S.food+fl(14)); S.food=clamp(S.food+fl(4)); log('汁液清甜，浑身舒坦。','win'); }},
    {label:'🛡 借菌盖遮风',tag:'藏身',fx:()=>{ S.food=clamp(S.food+fl(5)); log('菌盖替你挡去风雨。'); }},
    {label:'🌱 啃食菌褶充饥',tag:'觅食',fx:()=>{ S.food=clamp(S.food+fl(8)); log('菌褶里也有些养分。'); }},
  ]},
  '沃土新肥':{prompt:'新翻的沃土里裹着养分，湿暖厚重。',responses:[
    {label:'🍃 大口吞食沃土',tag:'大餐',fx:()=>{ S.food=clamp(S.food+fl(16)); S.grow=clampG(S.grow+fl(3)); log('沃土养人，你鼓胀了一圈。','win'); }},
    {label:'🏠 钻入沃土筑巢',tag:'藏身',fx:()=>{ S.food=clamp(S.food+fl(6)); log('沃土松软，是个好窝。','win'); }},
    {label:'📦 衔一块慢慢消化',tag:'囤粮',fx:()=>{ S.food=clamp(S.food+fl(9)); log('你衔了一块躲进暗处。'); }},
  ]},
  '糖浆漏滴':{prompt:'树洞漏下黏稠的糖浆，金亮地糊了一身。',responses:[
    {label:'🍯 畅饮整汪糖浆',tag:'大餐',fx:()=>{ S.food=clamp(S.food+fl(18)); S.food=clamp(S.food+fl(4)); log('糖浆甜润，力气大增。','win'); }},
    {label:'🪣 蓄存糖浆晚些再饮',tag:'囤粮',fx:()=>{ S.food=clamp(S.food+fl(10)); log('你小心含住，留待饥饿时。'); }},
    {label:'🐜 引蚂蚁来此作掩护',tag:'巧思',fx:()=>{ S.food=clamp(S.food+fl(3)); log('蚂蚁循甜而来，喧闹成了你的荫蔽。'); }},
  ]},
  /* —— 新增竞争 —— */
  '抢巢斗殴':{prompt:'两只同胞为巢穴扭打，你被甩在战圈边缘。',responses:[
    {label:'🤼 抢回一口再退',tag:'强食',fx:()=>{ if(Math.random()<0.5){ S.food=clamp(S.food+fl(12)); log('你抢下一口扭头就溜。','win'); } else { S.food=clamp(S.food-fl(5)); log('被撞翻，只抢到残渣。','die'); } }},
    {label:'🏃 退避三舍另寻食',tag:'避让',fx:()=>{ S.food=clamp(S.food-fl(2)); S.food=clamp(S.food+fl(2)); log('你识趣退开，去别处觅食。'); }},
    {label:'🤝 与胜者结盟分食',tag:'结盟',fx:()=>{ S.food=clamp(S.food+fl(8)); S.food=clamp(S.food+fl(1)); log('你示好分一杯羹，竟得庇护。'); }},
  ]},
  '群蛆争路':{prompt:'密密麻麻的蛆群挤向一条窄道，你被夹在当中。',responses:[
    {label:'🌀 逆向挤回安全区',tag:'避让',fx:()=>{ S.food=clamp(S.food+fl(3)); log('你逆着人流退到边缘，躲过踩踏。','win'); }},
    {label:'🤼 强挤过去夺路',tag:'强食',fx:()=>{ if(Math.random()<0.5){ S.food=clamp(S.food+fl(8)); log('你挤过窄道，那头有残食。','win'); } else { S.food=clamp(S.food-fl(6)); log('被挤得直翻白眼。','die'); } }},
    {label:'🛌 趴在道边等潮退',tag:'休整',fx:()=>{ S.food=clamp(S.food+fl(4)); log('你贴边蛰伏，等蛆潮过去。'); }},
  ]},
  '强蛆占食':{prompt:'一头巨蛆霸占了整块腐肉，只留你渣滓。',responses:[
    {label:'🤼 挑衅夺回食源',tag:'豪赌',fx:()=>{ if(Math.random()<0.45){ S.food=clamp(S.food+fl(14)); S.grow=clampG(S.grow+fl(3)); log('你咬退巨蛆，占据了腐肉。','win'); } else { S.food=clamp(S.food-fl(12)); log('对方更强，你被撞翻。','die'); } }},
    {label:'🏃 退而觅他食',tag:'避让',fx:()=>{ S.food=clamp(S.food-fl(2)); S.food=clamp(S.food+fl(3)); log('你识趣退开，去别处找食。'); }},
    {label:'🤝 替它清理残渣换庇护',tag:'结盟',fx:()=>{ S.food=clamp(S.food+fl(8)); log('你舔净它身旁的渣，竟被默许同吃。','win'); }},
  ]},
  '甲虫驱赶':{prompt:'锹甲挥着大颚驱赶周遭小虫，顺带把你掀飞。',responses:[
    {label:'🛡 团身硬扛一击',tag:'保命',fx:()=>{ S.food=clamp(S.food+fl(2)); log('你缩成团，扛过掀飞。','win'); }},
    {label:'🏃 钻入它够不着的缝',tag:'逃生',fx:()=>{ S.food=clamp(S.food-fl(1)); log('你窜进窄缝，锹甲进不去。','win'); }},
    {label:'🍂 借落叶掩护溜走',tag:'巧避',fx:()=>{ S.food=clamp(S.food+fl(2)); log('落叶遮了身形，你悄悄溜了。'); }},
  ]},
  '争地盘':{prompt:'两窝蛆在边界推搡，你被无辜撞飞。',responses:[
    {label:'🤼 趁乱抢一口边角食',tag:'强食',fx:()=>{ S.food=clamp(S.food+fl(9)); log('你趁两方混战，偷吃了边角。','win'); }},
    {label:'🏃 退到无主的中间带',tag:'避让',fx:()=>{ S.food=clamp(S.food-fl(1)); log('你退到两不相干的地带，安稳下来。'); }},
    {label:'🤝 示好一方换庇护',tag:'结盟',fx:()=>{ S.food=clamp(S.food+fl(7)); log('你靠拢一方，被纳入庇护。','win'); }},
  ]},
  /* —— 新增奇遇 / 诡异 —— */
  '玻璃微光':{prompt:'一块碎玻璃折射出诡异的七彩微光，映在你身上。',responses:[
    {label:'🔮 凝视微光参悟',tag:'诡异',fx:()=>{ S.grow=clampG(S.grow+fl(3)); log('光里有字，你莫名明悟。'); }},
    {label:'🛡 用玻璃反光晃敌',tag:'巧思',fx:()=>{ S.food=clamp(S.food+fl(3)); log('反光晃花了天敌的眼，你脱身。','win'); }},
    {label:'🏃 避开光斑免生异变',tag:'避险',fx:()=>{ S.food=clamp(S.food+fl(1)); log('你避开光斑，不安地挪开。'); }},
  ]},
  '童谣飘落':{prompt:'谁在哼着一支古怪的童谣，调子钻进你的感官。',responses:[
    {label:'🎵 跟着调子轻轻摆动',tag:'诡异',fx:()=>{ S.grow=clampG(S.grow+fl(2)); log('你随调子晃动，莫名躁动又欢喜。'); }},
    {label:'🔥 蹭掉沾上的旋律',tag:'驱邪',fx:()=>{ S.food=clamp(S.food+fl(2)); log('你蹭去那股寒意，调子散了。'); }},
    {label:'🤫 蛰伏任其流过',tag:'隐忍',fx:()=>{ S.food=clamp(S.food+fl(1)); log('你屏息静听，调子渐远。'); }},
  ]},
  '风中低语':{prompt:'风里似有谁在呼唤你的名字，声声入体。',responses:[
    {label:'👂 凝神辨认呼唤',tag:'诡异',fx:()=>{ S.grow=clampG(S.grow+fl(2)); log('你听清了呼唤，体内一阵异样。'); }},
    {label:'🏃 逆风爬离声源',tag:'避险',fx:()=>{ S.food=clamp(S.food+fl(2)); log('你逆风爬开，呼唤渐弱。','win'); }},
    {label:'🤫 装作没听见',tag:'隐忍',fx:()=>{ S.food=clamp(S.food+fl(1)); log('你不动声色，任风掠过。'); }},
  ]},
  '星屑坠地':{prompt:'传闻中的星屑悄然坠落在你身侧，微微发烫。',responses:[
    {label:'✨ 舔舐星屑汲取',tag:'诡异',fx:()=>{ S.grow=clampG(S.grow+fl(5)); S.food=clamp(S.food+fl(4)); log('星屑入腹，你通体发亮。','win'); }},
    {label:'🔥 把星屑推入积水',tag:'驱邪',fx:()=>{ S.food=clamp(S.food+fl(2)); log('星屑沉水，那股躁动散了。'); }},
    {label:'🤫 蛰伏静观其变',tag:'隐忍',fx:()=>{ S.food=clamp(S.food+fl(1)); log('你伏着不动，看星屑慢慢冷却。'); }},
  ]},
  '古井回响':{prompt:'古井深处传来空洞的回响，像在应答什么。',responses:[
    {label:'👂 贴壁聆听回响',tag:'诡异',fx:()=>{ S.grow=clampG(S.grow+fl(2)); log('回响里有古老的低语，你似懂非懂。'); }},
    {label:'🏃 远离井口的寒意',tag:'避险',fx:()=>{ S.food=clamp(S.food+fl(2)); log('你爬离井口，寒意退去。','win'); }},
    {label:'🤫 以静默回应',tag:'隐忍',fx:()=>{ S.food=clamp(S.food+fl(1)); log('你以静默相答，回响渐止。'); }},
  ]},
  '残破玩偶':{prompt:'一只残破的玩偶半埋在土中，眼窟窿黑洞洞地盯着你。',responses:[
    {label:'🧸 钻进玩偶空腔躲藏',tag:'藏身',fx:()=>{ S.food=clamp(S.food+fl(4)); log('空腔里竟意外安全。','win'); }},
    {label:'🔥 把玩偶推入积水',tag:'驱邪',fx:()=>{ S.food=clamp(S.food+fl(2)); log('玩偶沉水，那股凝视散了。'); }},
    {label:'👁️ 回盯它的眼窟窿',tag:'诡异',fx:()=>{ S.grow=clampG(S.grow+fl(2)); log('你对视黑洞，生出莫名异样。'); }},
  ]},
  /* —— 新增状态触发 —— */
  '饥火中烧':{prompt:'饥饿烧灼体节，你几近失控，眼前只剩可吞之物。',responses:[
    {label:'🍖 扑向最近的腐物',tag:'强食',fx:()=>{ S.food=clamp(S.food+fl(12)); S.food=clamp(S.food-fl(2)); log('你狼吞虎咽，压下了饥火。','win'); }},
    {label:'🛌 蛰伏降低消耗',tag:'休整',fx:()=>{ S.food=clamp(S.food+fl(4)); log('你一动不动，省下一点体力。'); }},
    {label:'🏃 强撑找食源',tag:'觅食',fx:()=>{ S.food=clamp(S.food-fl(2)); S.food=clamp(S.food+fl(6)); log('你拖着身子寻到了一点残渣。'); }},
  ]},
  '巨躯显眼':{prompt:'你庞大的身躯成了醒目的靶子，暗处的目光纷纷投来。',responses:[
    {label:'🎨 裹泥压低轮廓',tag:'伪装',fx:()=>{ S.camo=true; S.food=clamp(S.food+fl(2)); log('泥膜模糊了你的身形。'); }},
    {label:'🏃 滚入暗处藏身',tag:'藏身',fx:()=>{ S.food=clamp(S.food-fl(1)); log('你滚进阴影，目光移开了。','win'); }},
    {label:'💪 以体量震慑来犯',tag:'威吓',fx:()=>{ S.food=clamp(S.food+fl(4)); log('你鼓胀身躯，小天敌纷纷退避。','win'); }},
  ]},
  '古神低语':{prompt:'古神的低语又在脑海里响起，躯体微微发烫。',responses:[
    {label:'🙏 顺从低语蜕变',tag:'变异',fx:()=>{ S.grow=clampG(S.grow+fl(5)); S.food=clamp(S.food-fl(2)); log('你顺从高语，躯体更深地异变。'); }},
    {label:'🧊 冷水冲去躁动',tag:'清醒',fx:()=>{ S.food=clamp(S.food+fl(4)); log('你浸入凉处，低语暂歇。','win'); }},
    {label:'🔥 焚去低语之源',tag:'驱邪',fx:()=>{ S.food=clamp(S.food+fl(2)); log('你蹭过灼物，驱散了低语。'); }},
  ]},
  '前世幻痛':{prompt:'前世被天敌撕咬的幻痛袭来，你本能地蜷缩。',responses:[
    {label:'🧊 蛰伏压下幻痛',tag:'休整',fx:()=>{ S.food=clamp(S.food+fl(5)); log('你蜷紧身子，幻痛缓缓退去。','win'); }},
    {label:'🛡 借旧记忆预警',tag:'警觉',fx:()=>{ S.food=clamp(S.food+fl(3)); log('前世的教训让你提前警觉。','win'); }},
    {label:'🏃 逃向记忆中的安全巢',tag:'避险',fx:()=>{ S.food=clamp(S.food-fl(1)); log('你奔向记忆里的安全处。'); }},
  ]},
  '蜕皮在即':{prompt:'旧皮紧绷，你快要蜕下一层，浑身又痒又涨。',responses:[
    {label:'🛌 静待自然蜕皮',tag:'成长',fx:()=>{ S.grow=clampG(S.grow+fl(4)); S.food=clamp(S.food-fl(2)); log('你顺利蜕下一层旧皮，又大了一圈。','win'); }},
    {label:'🌀 蹭粗物助蜕',tag:'成长',fx:()=>{ S.grow=clampG(S.grow+fl(3)); S.food=clamp(S.food+fl(1)); log('你蹭过粗物，旧皮裂开。'); }},
    {label:'🍖 吞下旧皮回收养分',tag:'回收',fx:()=>{ S.food=clamp(S.food+fl(8)); S.food=clamp(S.food+fl(3)); log('旧皮里还有残留养分。'); }},
  ]},
  '暴食欲至':{prompt:'一股暴欲涌上，你想吞下眼前的一切，连泥土都不放过。',responses:[
    {label:'🍖 纵情大啖',tag:'强食',fx:()=>{ S.food=clamp(S.food+fl(18)); S.grow=clampG(S.grow+fl(2)); S.food=clamp(S.food-fl(3)); log('你疯狂进食，撑到极限。','win'); }},
    {label:'🛌 硬压下去慢慢消化',tag:'休整',fx:()=>{ S.food=clamp(S.food+fl(4)); log('你强压暴欲，省下体力。'); }},
    {label:'🏃 冲向最近食源',tag:'觅食',fx:()=>{ S.food=clamp(S.food-fl(2)); S.food=clamp(S.food+fl(8)); log('你冲向食源，饱餐一顿。','win'); }},
  ]},
  '旧伤隐隐':{prompt:'往日的伤处隐隐作痛，你行动都慢了半拍。',responses:[
    {label:'🛌 蛰伏养伤',tag:'休整',fx:()=>{ S.food=clamp(S.food+fl(6)); log('你一动不动养神，伤痛渐缓。','win'); }},
    {label:'🍖 强撑觅食补身',tag:'强食',fx:()=>{ S.food=clamp(S.food+fl(10)); log('你咬牙进食，勉强支起身子。'); }},
    {label:'🌑 钻暗处免遭毒手',tag:'避险',fx:()=>{ S.food=clamp(S.food+fl(3)); log('你躲进暗处，免被天敌盯上。','win'); }},
  ]},
  '神思清明':{prompt:'你竟能"看见"周身流动的气，万物脉络分明。',responses:[
    {label:'🔮 借清明参悟天地',tag:'成长',fx:()=>{ S.grow=clampG(S.grow+fl(4)); log('你参透一二，悄然成长。','win'); }},
    {label:'🛡 预判天敌轨迹避让',tag:'警觉',fx:()=>{ S.food=clamp(S.food+fl(4)); log('你看清气流走向，从容避开危险。','win'); }},
    {label:'🌿 顺着气找食源',tag:'觅食',fx:()=>{ S.food=clamp(S.food+fl(8)); log('你循着气找到一处新食源。','win'); }},
  ]},
  /* —— 新增事件链 —— */
  '猎蝽余毒':{prompt:'刺吸处的余毒还在灼烧，体节一阵阵地发麻。',responses:[
    {label:'💧 分泌体液冲毒',tag:'解毒',fx:()=>{ if(Math.random()<0.6){ S.food=clamp(S.food+fl(3)); log('你挤出体液，灼痛稍缓。','win'); } else { S.food=clamp(S.food-fl(4)); log('中和失败，毒液仍蚀入。','die'); } }},
    {label:'🪨 蹭粗物刮去毒处',tag:'巧除',fx:()=>{ S.food=clamp(S.food+fl(3)); log('你蹭过粗石，刮去发麻处。','win'); }},
    {label:'🛌 蛰伏等毒散',tag:'休整',fx:()=>{ S.food=clamp(S.food+fl(4)); log('你强忍灼痛，盼它自行平息。','win'); }},
  ]},
  '蜂巢残迹':{prompt:'附近的蜂巢残留着甜腥，引来又赶走了不少虫。',responses:[
    {label:'🍯 舔食残留蜜腥',tag:'大餐',fx:()=>{ S.food=clamp(S.food+fl(14)); S.food=clamp(S.food+fl(4)); log('残蜜甜润，你饱餐。','win'); }},
    {label:'🏠 占下空巢当藏处',tag:'藏身',fx:()=>{ S.food=clamp(S.food+fl(5)); log('空巢成了现成的安全屋。','win'); }},
    {label:'🐝 以残巢诱开天敌',tag:'巧思',fx:()=>{ S.food=clamp(S.food+fl(3)); log('你挪动残巢，把天敌引向别处。'); }},
  ]},
  '冰雹坑洼':{prompt:'冰雹砸出的坑洼积起一洼清水，正好解渴。',responses:[
    {label:'💧 畅饮坑洼清水',tag:'甘露',fx:()=>{ S.food=clamp(S.food+fl(10)); log('清水解了干渴，浑身舒坦。','win'); }},
    {label:'🏠 占住水洼旁湿润处',tag:'藏身',fx:()=>{ S.food=clamp(S.food+fl(4)); log('水边湿润，是个好角落。','win'); }},
    {label:'🌿 借湿地引来新食',tag:'觅食',fx:()=>{ S.food=clamp(S.food+fl(7)); log('湿地引来小虫，你顺势捕食。','win'); }},
  ]},
  '童谣回响':{prompt:'那支童谣在夜里又响了起来，调子比上次更清晰。',responses:[
    {label:'🎵 跟着调子起舞参悟',tag:'诡异',fx:()=>{ S.grow=clampG(S.grow+fl(3)); log('你随调子舞动，体内一阵明悟。'); }},
    {label:'🔥 以泥土封住耳朵',tag:'驱邪',fx:()=>{ S.food=clamp(S.food+fl(2)); log('你封住听觉，调子远去。'); }},
    {label:'🤫 以静默相和',tag:'隐忍',fx:()=>{ S.food=clamp(S.food+fl(1)); log('你以静默相和，调子绕身三匝而去。'); }},
  ]},
  '星屑萌芽':{prompt:'星屑落处竟冒出微光的嫩芽，散发着清甜的香。',responses:[
    {label:'🌱 啃食微光嫩芽',tag:'变异',fx:()=>{ S.food=clamp(S.food+fl(12)); S.grow=clampG(S.grow+fl(3)); log('嫩芽清甜带光，你通体发暖。','win'); }},
    {label:'🛡 护住嫩芽待日后',tag:'长效',fx:()=>{ S.food=clamp(S.food+fl(3)); log('你小心护住嫩芽，它将在日后回护你。'); }},
    {label:'🌿 借微光照明觅食',tag:'觅食',fx:()=>{ S.food=clamp(S.food+fl(8)); log('微光照亮暗处，你找到食源。','win'); }},
  ]},
  '古井探秘':{prompt:'你鬼使神差地爬向那口古井，井壁湿冷，回声幽长。',responses:[
    {label:'🔍 探入井壁缝隙觅食',tag:'赌',fx:()=>{ if(Math.random()<0.5){ S.food=clamp(S.food+fl(14)); log('缝里有陈年残食，你饱餐。','win'); } else { S.food=clamp(S.food-fl(7)); log('井壁滑腻，你险些坠井。','die'); } }},
    {label:'🏠 占住井沿阴湿处',tag:'藏身',fx:()=>{ S.food=clamp(S.food+fl(4)); log('井沿阴湿，是个好藏处。','win'); }},
    {label:'👂 再听一次回响',tag:'诡异',fx:()=>{ S.grow=clampG(S.grow+fl(2)); log('回响里又多了几分低语。'); }},
  ]},
  '残偶私语':{prompt:'玩偶的眼窟窿里似有私语，一声声唤着你的名。',responses:[
    {label:'🧸 钻回玩偶空腔躲藏',tag:'藏身',fx:()=>{ S.food=clamp(S.food+fl(4)); log('空腔里意外安全，私语也成了掩护。','win'); }},
    {label:'🔥 把玩偶推入积水',tag:'驱邪',fx:()=>{ S.food=clamp(S.food+fl(2)); log('玩偶沉水，私语散了。'); }},
    {label:'👁️ 回瞪眼窟窿参悟',tag:'诡异',fx:()=>{ S.grow=clampG(S.grow+fl(2)); log('你对视黑洞，生出莫名异样。'); }},
  ]},
  '萤火引路二':{prompt:'萤火虫又来，引着你爬向一处温暖的穴。',responses:[
    {label:'🔥 随萤火入暖穴',tag:'觅食',fx:()=>{ S.food=clamp(S.food+fl(14)); log('暖穴里有残食，你饱餐。','win'); }},
    {label:'🏠 占住暖穴安身',tag:'藏身',fx:()=>{ S.food=clamp(S.food+fl(5)); log('暖穴成了你的新家。','win'); }},
    {label:'🌟 借萤光看清四周',tag:'警觉',fx:()=>{ S.food=clamp(S.food+fl(3)); log('萤光照亮暗处，你避开危险。','win'); }},
  ]},
  /* —— 新增轮回专属 —— */
  '同源呼唤':{prompt:'冥冥中有同源性呼唤你归巢，身不由己地想爬回某处。',responses:[
    {label:'🏠 顺呼唤归巢安身',tag:'藏身',fx:()=>{ S.food=clamp(S.food+fl(8)); log('你回到同源的巢，安稳一时。','win'); }},
    {label:'🍖 借呼唤之力饱食',tag:'强食',fx:()=>{ S.food=clamp(S.food+fl(12)); S.grow=clampG(S.grow+fl(3)); log('同源之力涌动，你饱餐成长。'); }},
    {label:'🧊 甩头回到当下',tag:'清醒',fx:()=>{ S.food=clamp(S.food+fl(4)); log('你甩去幻唤，专注眼前。','win'); }},
  ]},
  '旧敌重逢':{prompt:'一只似曾相识的天敌再度逼近，你的体节记得它的气味。',responses:[
    {label:'🛡 以旧记忆预判闪避',tag:'警觉',fx:()=>{ if(Math.random()<0.6){ S.food=clamp(S.food+fl(4)); log('你凭前世记忆提前闪开。','win'); } else { S.food=clamp(S.food-fl(8)); log('记忆混乱，你慢了半拍。','die'); } }},
    {label:'🏃 逃向记忆中的安全巢',tag:'避险',fx:()=>{ S.food=clamp(S.food-fl(1)); log('你奔向记得的安全处。','win'); }},
    {label:'💪 以体量硬撼',tag:'威吓',fx:()=>{ S.food=clamp(S.food+fl(5)); S.grow=clampG(S.grow+fl(2)); log('你鼓胀身躯，竟把它吓退。','win'); }},
  ]},
  '轮回印记':{prompt:'你体节上浮现出淡淡的轮回印记，温热而熟悉。',responses:[
    {label:'🔮 参悟印记之理',tag:'诡异',fx:()=>{ S.grow=clampG(S.grow+fl(4)); log('印记入魂，你明悟轮回。'); }},
    {label:'🛡 借印记威压小虫',tag:'威吓',fx:()=>{ S.food=clamp(S.food+fl(4)); log('印记微光让小虫退避。','win'); }},
    {label:'🌿 以印记滋养体魄',tag:'成长',fx:()=>{ S.food=clamp(S.food+fl(6)); log('印记温热，你回了不少气。','win'); }},
  ]},
  '羽化本能':{prompt:'你体内升起化蛹的本能冲动，翅芽隐隐发痒。',responses:[
    {label:'🪱 顺应本能寻找化蛹处',tag:'成长',fx:()=>{ S.grow=clampG(S.grow+fl(4)); S.food=clamp(S.food-fl(2)); log('你寻到化蛹的泥土，本能渐稳。'); }},
    {label:'🧊 压下冲动继续觅食',tag:'清醒',fx:()=>{ S.food=clamp(S.food+fl(6)); log('你压下冲动，先填饱肚子。','win'); }},
    {label:'🌿 借本能感知气流',tag:'警觉',fx:()=>{ S.food=clamp(S.food+fl(4)); log('本能让你看清朝向。','win'); }},
  ]},
  '前世味道':{prompt:'你莫名怀念起上世某味的腐肉，循着记忆里的香找去。',responses:[
    {label:'🍖 循味找到那味腐肉',tag:'大餐',fx:()=>{ S.food=clamp(S.food+fl(16)); S.grow=clampG(S.grow+fl(3)); log('那味道果然还在，你饱餐。','win'); }},
    {label:'🏃 失望于物是人非',tag:'避让',fx:()=>{ S.food=clamp(S.food+fl(2)); log('那处已无旧味，你悻悻离开。'); }},
    {label:'🤝 以记忆换同胞信任',tag:'结善',fx:()=>{ S.food=clamp(S.food+fl(6)); log('你讲起前世，弱小同胞信了你。','win'); }},
  ]},
  '蜂群盘旋':{prompt:'一群蜜蜂盘旋不去，振翅的嗡鸣震得你体节发麻。',responses:[
    {label:'🌸 借花香引蜂远离',tag:'巧避',fx:()=>{ S.food=clamp(S.food+fl(3)); log('你滚向花香更浓处，蜂群被引开。','win'); }},
    {label:'🛡 钻入花蕊深处藏身',tag:'藏身',fx:()=>{ S.food=clamp(S.food+fl(4)); S.food=clamp(S.food+fl(3)); log('你躲进花蕊深处，蜂群寻不到你。','win'); }},
    {label:'🏃 趁蜂群散开溜走',tag:'逃生',fx:()=>{ S.food=clamp(S.food-fl(1)); log('你趁蜂群散开的一瞬溜走。'); }},
  ]},
};

/* ---------------- 新体系：体力 / 体型 / 探索 三轴 ----------------
   体力(S.food)  ：起始 20，归零即死；进食恢复，每回合自然消耗，探索过高时消耗加剧。
   体型(S.grow)  ：起始 1，可无限成长；归零即死；越大越强（易胜天敌）也越显眼（易被发现）；
                   被天敌击败则按「体型差 × 天敌种类」损失体型。
   探索(S.explore)：起始 0，类 SAN/灵感；偏低易被天敌盯上，偏高（>75）触发克苏鲁事件。 */
function clampG(v){ return Math.max(0, v); }   // 体型只设下限，允许无限成长

/* 天敌档案：psize=相对体型/威胁度，lm=被击败时体型损失系数 */
const PREDATORS = {
  '蚂蚁工兵':{psize:0.6,lm:0.30}, '隐翅虫':{psize:1.5,lm:0.45}, '蟾蜍舌尖':{psize:25,lm:1.20},
  '寄生蜂':{psize:1.0,lm:0.35}, '蜘蛛':{psize:3,lm:0.60}, '步甲虫':{psize:2.5,lm:0.55},
  '蜈蚣':{psize:2,lm:0.50}, '家鼠刨食':{psize:18,lm:1.00}, '飞鸟俯冲':{psize:30,lm:1.30},
  '螳螂':{psize:4,lm:0.70}, '蚂蚁大军':{psize:1.6,lm:0.40}, '蚯蚓误缠':{psize:0.8,lm:0.20},
  '虫卵蠕动':{psize:0.5,lm:0.25},
  /* —— 新增天敌体型差对决档案 —— */
  '猎蝽刺吸':{psize:2,lm:0.50}, '蜉寄螨':{psize:0.7,lm:0.22}, '蛇信轻探':{psize:12,lm:0.90},
  '鸡爪刨地':{psize:8,lm:0.80}, '黄鼠狼嗅探':{psize:6,lm:0.75}, '壁虎突袭':{psize:1.2,lm:0.40},
  '蜻蜓点水掠':{psize:3,lm:0.55}, '刺猬拱土':{psize:5,lm:0.70}, '蚂蟥吸附':{psize:1,lm:0.35},
  '蜗牛黏液缚':{psize:0.9,lm:0.25}
};
/* 击败天敌概率：体型相对天敌越大越易胜（对数缩放，兼容无限成长）；古神祝福加成 */
function predWinP(psize){
  const m = S.grow;
  const adv = Math.log2(m+1) - Math.log2(psize+1);
  let p = 0.5 + 0.20*adv;
  if(S.blessed) p += 0.15;
  return Math.max(0.08, Math.min(0.95, p));
}
/* 被击败时损失体型：随体型差与天敌种类浮动，形成「不同数量」 */
function predSizeLoss(pr, m){
  const ratio = pr.lm * (0.5 + Math.random());   // 0.5~1.5 倍系数叠加随机
  return Math.max(0.15, m * ratio);
}
/* 探索越高，触发普通周遭事件的概率越大 */
function effTriggerP(){ return TRIGGER_P + S.explore*0.0015; }

/* 克苏鲁事件：探索 >75 时高频触发
   小概率 → 古神祝福变异（体型大涨）；中概率 → 直接死亡；大概率 → 损失大量体型 */
function triggerCthulhu(after){
  S.lastEvents=[]; S.situations=[];
  const bf=S.food, bg=S.grow, be=S.explore;
  const d=()=>({food:Math.round((S.food-bf)*10)/10, grow:Math.round((S.grow-bg)*10)/10, explore:Math.round((S.explore-be)*10)/10});
  const roll=Math.random();
  if(roll < 0.10){
    S.blessed=true;
    S.grow = clampG(S.grow + 20 + rnd(20));
    S.explore = clamp(S.explore - 30);
    log('【古神】虚空中有目光垂怜，你被赐下祝福——躯体异变，窥见了更深的世界。','win');
    S.lastEvents.push({name:'古神祝福', cat:'诡异', msg:'你被赐下古神祝福，躯体异变。', cls:'win', delta:d()});
  }else if(roll < 0.50){
    log('【克苏鲁】不可名状的低语撕裂神智，你的身躯在尖啸中崩解。','die');
    return die('深空中的低语撕裂了你的神智——你成了疯长的肉质祭品。');
  }else{
    const loss = S.grow * (0.3 + Math.random()*0.5);   // 损失 30%~80% 体型（必存活，但极痛）
    S.grow = clampG(S.grow - loss);
    S.food = clamp(S.food - 10);
    log('【克苏鲁】蔓延的虚空舔舐你的躯体，你被吞噬了一大块（体型 -'+loss.toFixed(1)+'）。','die');
    S.lastEvents.push({name:'虚空啃噬', cat:'诡异', msg:'虚空啃噬了你一大块躯体。', cls:'die', delta:d()});
  }
  if(S.grow<=0){ return die('你的躯体被虚空彻底吞没，连痕迹都不剩。'); }
  if(S.food<=0){ return die('祝福也填不满虚空啃噬后的枯竭——你消散了。'); }
  presentTrigger(after);
}

/* ---------------- 高探索奇遇（explore >= 55 触发，偏奖励式） ---------------- */
const HIGH_EXPLORE_EVENTS = [
  {name:'灵光乍现', cat:'奇遇', msg:'你忽然"看"清了周遭气味的脉络，找到了藏得最深的养分。',
    fx:()=>{ const g=6+Math.floor(Math.random()*8); S.grow=clampG(S.grow+g); S.food=clamp(S.food+10+Math.floor(Math.random()*10)); }},
  {name:'异界低语', cat:'奇遇', msg:'风中夹着不属于这世间的话语，你听懂了一两句，窥见前路。',
    fx:()=>{ const e=4+Math.floor(Math.random()*6); S.explore=clamp(S.explore+e); S.food=clamp(S.food+fl(6)); }},
  {name:'古老回响', cat:'奇遇', msg:'泥土深处传来远古蛆群的共鸣，你汲取了一段失传的生存直觉。',
    fx:()=>{ const f=10+Math.floor(Math.random()*12); S.food=clamp(S.food+f); const g=4+Math.floor(Math.random()*6); S.grow=clampG(S.grow+g); }},
  {name:'星屑入梦', cat:'奇遇', msg:'你缩起身子，竟在混沌中梦见了一片会发光的腐殖质。',
    fx:()=>{ const e=5+Math.floor(Math.random()*7); S.explore=clamp(S.explore+e); S.food=clamp(S.food+fl(8)); }},
  {name:'洞见之眼', cat:'奇遇', msg:'世界在你眼中裂开一道缝，你看见了寻常蛆看不见的逃生缝隙。',
    fx:()=>{ const f=8+Math.floor(Math.random()*10); S.food=clamp(S.food+f); S.grow=clampG(S.grow+fl(4)); }},
];
function triggerHighExplore(after){
  const e = HIGH_EXPLORE_EVENTS[Math.floor(Math.random()*HIGH_EXPLORE_EVENTS.length)];
  const before={food:S.food, grow:S.grow, explore:S.explore};
  try { e.fx(); } catch(err) {}
  const dlt = { food:Math.round(S.food-before.food), grow:Math.round(S.grow-before.grow), explore:Math.round(S.explore-before.explore) };
  log('【'+e.cat+'】'+e.name+'：'+e.msg, 'win');
  S.lastEvents.push({name:e.name, cat:e.cat, msg:e.msg, cls:'win', delta:dlt});
  if(S.food<=0){ return die('奇遇的代价骤然显现——你没能撑过这场变故。'); }
  if(S.grow<=0){ return die('你的躯体被奇遇掏空，再没能长大。'); }
  // 高探索奇遇已通过 S.lastEvents 在枢纽展示，无需服务端 modal 数据
  if (after) after();
}

/* ============================================================
 *  事件链系统：特殊事件（情境应对/天敌）之后，有概率卷入
 *  一段连续 5~10 次「事件内选择」的连环变故。
 *  链内不消耗天数，链结束才正常推进一回合。
 * ============================================================ */
const CHAIN_TEMPLATES = {
  survive: {
    name:'求生之链', icon:'⚔',
    steps:[
      { p:'追击尚未结束！那东西还在紧追不舍，腐土被震得簌簌直响。', opts:[
        {label:'🏃 拼尽全力加速逃窜',tag:'逃生',chance:0.55,ok:{food:2},fail:{food:-6},winTxt:'你爆发出惊人的速度，暂时甩开一截。','failTxt':'脚下一绊，你差点被咬中。'},
        {label:'🕳 就地钻洞躲藏',tag:'藏身',chance:0.75,ok:{food:3},fail:{food:-3},winTxt:'你一头扎进松土，气息被土腥味盖住。','failTxt':'土太浅，露出一截尾巴。'},
        {label:'🍂 滚进落叶堆混淆气味',tag:'伪装',chance:0.65,ok:{food:1,explore:3},fail:{food:-4},winTxt:'落叶掩盖了你的气味，追兵迟疑片刻。','failTxt':'枯叶沙沙作响，反而暴露了方位。'},
      ]},
      { p:'喘息片刻，前方出现两条岔路：一条通向开阔地，一条通向幽暗的裂隙。', opts:[
        {label:'🌞 冲进开阔地搏一线生机',tag:'赌命',chance:0.45,ok:{food:6},fail:{food:-9},winTxt:'开阔地上竟无追兵，你大口喘着气。','failTxt':'开阔地正是天敌的猎场！'},
        {label:'🕳 钻入幽暗裂隙',tag:'藏身',chance:0.8,ok:{food:2},fail:{food:-2},winTxt:'裂隙深处阴凉安全，追兵放弃了。','failTxt':'裂隙里盘踞着一窝蠼螋！'},
      ]},
      { p:'身后动静渐远，但你伤得不轻。伤口处渗出的体液吸引了蚊蝇。', opts:[
        {label:'🩹 用腐泥糊住伤口',tag:'自救',chance:0.7,ok:{food:3},fail:{food:-3},winTxt:'腐泥凝固封住伤口，血止住了。','failTxt':'腐泥里混着沙砾，伤口更疼了。'},
        {label:'🍖 强忍剧痛进食补充',tag:'觅食',chance:0.6,ok:{food:8},fail:{food:-2},winTxt:'你咬牙吞下腐肉，体力回升。','failTxt':'咀嚼牵动伤口，你疼得打滚。'},
      ]},
      { p:'追兵似乎放弃了。可你突然意识到——它只是在等，等你松懈的那一刻。', opts:[
        {label:'👀 假装松懈实则蓄力',tag:'反击',chance:0.6,ok:{food:4,grow:2},fail:{food:-8},winTxt:'它扑上来的一瞬，你反口咬住它的腿！','failTxt':'它识破了你的假动作，一口咬下。'},
        {label:'🌫 喷出体侧的气味迷惑',tag:'迷惑',chance:0.7,ok:{food:2,explore:4},fail:{food:-3},winTxt:'一股刺鼻气味炸开，它退开了好几步。','failTxt':'气味太淡，它迟疑后又逼近。'},
      ]},
      { p:'夜色降临，追兵终于消失在草丛深处。你蜷在树根下，浑身发抖。', opts:[
        {label:'🛌 就地休整恢复',tag:'休整',chance:0.85,ok:{food:6},fail:{food:-1},winTxt:'一夜无梦，体力回来了大半。','failTxt':'夜里被露水冻醒，只恢复了一点。'},
        {label:'🌙 趁夜色继续赶路',tag:'赶路',chance:0.5,ok:{food:2,explore:6},fail:{food:-5},winTxt:'月色下你摸到了新的觅食地。','failTxt':'夜行最是危险，你差点撞上癞蛤蟆。'},
      ]},
      { p:'天亮了。你活着——这本身就是奇迹。远处传来腐肉发酵的甜香。', opts:[
        {label:'🍖 循着香味饱餐一顿',tag:'庆祝',chance:0.9,ok:{food:12,grow:2},fail:{food:-2},winTxt:'劫后余生的大餐，格外香甜。','failTxt':'香味引来了别的觅食者，你只吃到一半。'},
        {label:'🌿 谨慎地标记新领地',tag:'立威',chance:0.7,ok:{food:4,explore:5},fail:{food:-3},winTxt:'你留下气味标记，这里归你了。','failTxt':'标记气味过重，惊动了附近的蛆群。'},
      ]},
    ],
    tail:{ txt:'🍀 你挺过了这场连环追杀，求生之链就此了结。', food:6, explore:3 },
  },

  weather: {
    name:'天候之变', icon:'🌦',
    steps:[
      { p:'天色骤变，风云翻涌。你得在坏天气彻底砸下来之前做好准备。', opts:[
        {label:'🏃 抢先寻找掩体',tag:'抢先',chance:0.7,ok:{food:2},fail:{food:-3},winTxt:'你在变天前找到了树根下的凹穴。','failTxt':'晚了一步，掩体被别的虫子占了。'},
        {label:'🍂 囤积落叶枯枝',tag:'囤材',chance:0.75,ok:{food:3,explore:2},fail:{food:-2},winTxt:'你拖回厚厚一摞落叶。','failTxt':'拖拽落叶耗了不少体力。'},
      ]},
      { p:'第一阵风雨砸了下来，世界变得嘈杂而冰冷。', opts:[
        {label:'🛌 缩进掩体按兵不动',tag:'守株',chance:0.8,ok:{food:2},fail:{food:-3},winTxt:'风雨打在头顶，你在掩体里安然无恙。','failTxt':'掩体漏水，你被淋了个透。'},
        {label:'💧 张嘴接住雨水解渴',tag:'蓄水',chance:0.6,ok:{food:4},fail:{food:-2},winTxt:'甘甜的雨水润过干涸的喉咙。','failTxt':'雨太急，呛得你直咳嗽。'},
      ]},
      { p:'风雨稍歇，气温骤降。寒意一寸寸渗进体节。', opts:[
        {label:'🤝 挤进蛆群抱团取暖',tag:'抱团',chance:0.85,ok:{food:4},fail:{food:-2},winTxt:'大家挤在一起，体温互相传递。','failTxt':'蛆群躁动，你被挤出了外围。'},
        {label:'🌞 冒险爬到表面晒太阳',tag:'赌暖',chance:0.5,ok:{food:6,explore:4},fail:{food:-6},winTxt:'云缝里漏出阳光，暖意融进身体。','failTxt':'乌云又合拢了，你白挨了冻。'},
      ]},
      { p:'天气转好，但四周积了水洼，水面上漂着可口的腐殖质。', opts:[
        {label:'🍖 冒险探身捞取腐殖质',tag:'觅食',chance:0.55,ok:{food:10},fail:{food:-4},winTxt:'你捞起一大块泡发的腐殖质，饱餐一顿。','failTxt':'水花惊动了水面的水黾，你仓皇缩回。'},
        {label:'🕳 绕开水洼走干燥路',tag:'稳健',chance:0.9,ok:{food:3},fail:{food:-1},winTxt:'干燥的路虽远，但安全。','failTxt':'绕路时迷了方向，多耗了些体力。'},
      ]},
      { p:'天气彻底放晴。暖阳晒干了大地的湿气，也晒得你浑身发懒。', opts:[
        {label:'🌿 趁机大范围探索新领地',tag:'探索',chance:0.7,ok:{food:3,explore:9},fail:{food:-3},winTxt:'你摸清了方圆几尺的每一处角落。','failTxt':'走得太远，差点找不到回来的路。'},
        {label:'🛌 在暖石上晒背休整',tag:'休整',chance:0.85,ok:{food:7},fail:{food:-1},winTxt:'暖石的热气渗进脊背，舒坦极了。','failTxt':'石头被晒得太烫，你滚了下来。'},
      ]},
      { p:'好景不长，远处传来闷雷。又一场暴雨在酝酿。但这次，你已胸有成竹。', opts:[
        {label:'🕳 提前挖好排水沟渠',tag:'远见',chance:0.75,ok:{food:3,explore:3},fail:{food:-2},winTxt:'雨水顺着你挖的沟渠流走，你滴水未沾。','failTxt':'沟渠挖歪了，水倒灌进来。'},
        {label:'🍖 趁雨前再饱餐一顿',tag:'囤膘',chance:0.8,ok:{food:9},fail:{food:-1},winTxt:'雨前的腐肉格外丰美，你吃了个饱。','failTxt':'吃得太急，肚子胀得难受。'},
      ]},
    ],
    tail:{ txt:'🌤 风雨过后，天地一新。天候之变就此平息。', food:5, explore:5 },
  },

  forage: {
    name:'饕餮之宴', icon:'🍖',
    steps:[
      { p:'一股浓烈的腐香钻进你的嗅觉。前方分明藏着一场盛宴，但也可能藏着陷阱。', opts:[
        {label:'👃 谨慎地循味靠近',tag:'试探',chance:0.8,ok:{food:3},fail:{food:-2},winTxt:'你贴着地面缓缓靠近，确认了香气的来源。','failTxt':'香气太浓反而可疑，你绕了远路。'},
        {label:'🏃 直接扑向香味源头',tag:'莽撞',chance:0.45,ok:{food:9},fail:{food:-6},winTxt:'你一头扎进腐堆，抢到一大块！','failTxt':'那里蹲着一只独居的甲虫！'},
      ]},
      { p:'你找到了源头——一块刚死不久的小兽尸体，周围还围着几只同窝的蛆。', opts:[
        {label:'🤝 与同伴分享盛宴',tag:'合作',chance:0.9,ok:{food:5},fail:{food:-1},winTxt:'大家各占一方，吃得其乐融融。','failTxt':'同伴挤过来抢食，你被拱到边上。'},
        {label:'🏰 霸占最好的部位',tag:'霸道',chance:0.55,ok:{food:10,grow:2},fail:{food:-5},winTxt:'你赶走了同伴，独享最肥美的内脏。','failTxt':'你激怒了同伴，被群起而攻。'},
      ]},
      { p:'吃饱之后，你的目光落在了远处的蛆巢——那里似乎藏着更多的好东西。', opts:[
        {label:'🍖 潜入蛆巢偷食储存',tag:'盗食',chance:0.5,ok:{food:14},fail:{food:-7},winTxt:'你偷出满满一肚子的存货，溜之大吉。','failTxt':'被守卫发现了，你连滚带爬地逃出来。'},
        {label:'🌿 见好就收，就地消化',tag:'知足',chance:0.9,ok:{food:4,grow:3},fail:{food:-1},winTxt:'你蜷在暗处慢慢消化，体型悄然增长。','failTxt':'消化时被蚂蚁抬走了一片腐皮。'},
      ]},
      { p:'夜深了。白天吃下的食物开始化作力量，但你的贪欲也在滋生。', opts:[
        {label:'💪 趁热打铁再搜刮一遍',tag:'贪婪',chance:0.4,ok:{food:12,grow:2},fail:{food:-8},winTxt:'夜深虫静，你搜刮到第二顿大餐！','failTxt':'夜行天敌太多，你差点成了夜宵。'},
        {label:'🛌 安静休息保存体力',tag:'节制',chance:0.85,ok:{food:6},fail:{food:-1},winTxt:'一夜好眠，体力充沛。','failTxt':'睡前没吃饱，半夜饿醒了。'},
      ]},
      { p:'清晨，你被一阵异香唤醒——那是发酵果实的味道，通常意味着一场狂欢。', opts:[
        {label:'🍺 啜饮发酵的果汁',tag:'醉宴',chance:0.7,ok:{food:9,explore:4},fail:{food:-4},winTxt:'酸甜的发酵汁灌入腹中，你晕乎乎地快活。','failTxt':'果汁太烈，你醉得爬不动路。'},
        {label:'📦 搬一些回巢储藏',tag:'囤积',chance:0.75,ok:{food:7},fail:{food:-2},winTxt:'你来回搬了好几趟，仓库充盈。','failTxt':'搬运途中掉落了一多半。'},
      ]},
      { p:'饕餮之宴接近尾声。你的身体明显圆润了一圈，也更有分量了。', opts:[
        {label:'🍖 最后一顿豪华大餐',tag:'收官',chance:0.8,ok:{food:13,grow:3},fail:{food:-3},winTxt:'盛宴的尾声依然丰盛，你吃得心满意足。','failTxt':'最后一顿竟吃出了异物，你吐了半天。'},
        {label:'🏃 带着满腹食物返回老巢',tag:'归巢',chance:0.9,ok:{food:5,explore:3},fail:{food:-2},winTxt:'满载而归，你成为窝里最肥的蛆。','failTxt':'归途遇上涨潮，你被冲走了一段路。'},
      ]},
    ],
    tail:{ txt:'🐷 饕餮之宴落幕，你的身体记住了每一口滋味。', food:8, grow:2 },
  },

  mystic: {
    name:'低语之迷', icon:'🌌',
    steps:[
      { p:'周围的空气忽然安静得诡异。你「听」到一些不属于这世界的声音，断断续续。', opts:[
        {label:'👂 凝神去听清低语',tag:'倾听',chance:0.6,ok:{explore:8},fail:{explore:-3,food:-2},winTxt:'低语拼凑成片段——那是关于地底宝库的指引。','failTxt':'低语刺痛了你的感官，你一阵恍惚。'},
        {label:'🙉 捂住感官装作没听见',tag:'抗拒',chance:0.9,ok:{food:2},fail:{explore:-2},winTxt:'你屏蔽了低语，世界恢复正常。','failTxt':'低语仍从缝隙渗进来，扰得你心神不宁。'},
      ]},
      { p:'低语指引你来到一截腐朽的树桩前。树桩的纹理似乎组成了一个符号。', opts:[
        {label:'🔍 用体节描摹那个符号',tag:'解读',chance:0.6,ok:{explore:10,food:2},fail:{explore:-4},winTxt:'符号亮起微光，一股远古的记忆涌入。','failTxt':'符号灼痛了你的体节，你赶紧缩回。'},
        {label:'🪵 啃食树桩查看内部',tag:'务实',chance:0.75,ok:{food:8},fail:{food:-2},winTxt:'树桩里藏着肥美的白蚁卵，你饱餐一顿。','failTxt':'树桩太硬，你啃得满嘴木渣。'},
      ]},
      { p:'夜幕低垂，头顶的星空似乎比往常更近。你觉得自己被什么东西注视着。', opts:[
        {label:'🌌 抬头凝视星空回应',tag:'回应',chance:0.5,ok:{explore:12,food:3},fail:{explore:-6},winTxt:'星光垂下细丝，抚过你的脊背，你隐隐明白了什么。','failTxt':'凝视过久，你的意识被拽入虚空一瞬。'},
        {label:'🕳 低头钻回土里避讳',tag:'回避',chance:0.9,ok:{food:3},fail:{explore:-2},winTxt:'你缩回黑暗里，那种被注视的感觉淡了。','failTxt':'土里也有回音，你辗转难眠。'},
      ]},
      { p:'第二天，你的体节上浮现出淡银色的纹路，像某种文字。同伴们远远躲开你。', opts:[
        {label:'📖 尝试解读身上的纹路',tag:'参悟',chance:0.55,ok:{explore:11,food:4},fail:{explore:-5},winTxt:'你拼读出「月下一跃，得见真土」——是化蛹的暗示！','failTxt':'纹路蛊惑你往危险处爬，你惊醒过来。'},
        {label:'💧 用湿泥抹掉纹路',tag:'抹除',chance:0.85,ok:{food:3},fail:{explore:-3},winTxt:'泥巴盖住了纹路，你看起来正常了。','failTxt':'纹路擦不掉，像烙在肉里。'},
      ]},
      { p:'低语声再次响起，这次它提出了交易：「献出一段记忆，换一段路。」', opts:[
        {label:'🤝 答应交易献出记忆',tag:'交易',chance:0.6,ok:{explore:14,food:5},fail:{explore:-7,food:-3},winTxt:'一段记忆被抽走，但你获得了地底宝库的准确方位。','failTxt':'它抽走的比约定的更多，你头晕目眩。'},
        {label:'🚫 拒绝交易保持自我',tag:'坚守',chance:0.9,ok:{explore:2,food:4},fail:{explore:-3},winTxt:'你拒绝了它，低语声带着恼怒消散了。','failTxt':'拒绝后低语纠缠了你一整夜。'},
      ]},
      { p:'晨曦破晓。低语彻底消失，仿佛从未存在。但你知道，有些东西已经改变了。', opts:[
        {label:'🌅 带着这份领悟走向新的一天',tag:'顿悟',chance:0.8,ok:{explore:8,food:5},fail:{explore:-3},winTxt:'你比昨天多懂了一些世界，也更多了一些底气。','failTxt':'领悟太深，你一时回不过神。'},
        {label:'🛌 假装什么都没发生过',tag:'遗忘',chance:0.9,ok:{food:4},fail:{explore:-2},winTxt:'你埋头过日子，把低语抛在脑后。','failTxt':'梦里它又来了，你惊醒数次。'},
      ]},
    ],
    tail:{ txt:'🌌 低语之迷解开了九分，剩下一分留给未来的你。', explore:10 },
  },
};

/* 情境名 → 链类型 */
function chainKindFor(name){
  const SURVIVE = ['蚂蚁','隐翅','蟾蜍','寄生蜂','蜘蛛','飞鸟','猎蝽','蜉寄','蛇信','鸡爪','黄鼠狼','壁虎','刺猬','蚂蟥','蜗牛','流浪猫','同类相食','步甲','蜈蚣','螳螂','家鼠','蚯蚓误缠'];
  const WEATHER = ['骤雨','烈日','寒夜','暖阳','冰雹','干涸','露重','月光','积水','寒霜'];
  const FORAGE = ['熟果','蜜露','菌毯','菌丝','地龙','蝇卵','饱食','虫口夺食','双生'];
  const MYSTIC = ['落叶信笺','孩童','科学家','虫卵蠕动','字迹','轮回残忆','旧巢','鼠穴','低语','星屑'];
  if(SURVIVE.some(k=>name.includes(k))) return 'survive';
  if(WEATHER.some(k=>name.includes(k))) return 'weather';
  if(FORAGE.some(k=>name.includes(k))) return 'forage';
  if(MYSTIC.some(k=>name.includes(k))) return 'mystic';
  return null;
}

/* 卷入事件链 */
function startChain(kind){
  if(S.chain || !S.alive || S.mode==='end') return;
  const tpl = CHAIN_TEMPLATES[kind];
  if(!tpl) return;
  S.chain = { kind, name: tpl.name, icon: tpl.icon || '⚡', total: tpl.steps.length, step: 1 };
  S.chainCount = (S.chainCount||0) + 1;
  log('⚡ 你卷入了「'+tpl.icon+' '+tpl.name+'」——连环变故，一步错步步错！','win');
  chainStep();
}

/* 生成链的当前一步选项 */
function chainStep(){
  const ch = S.chain;
  if(!ch) return;
  render();
  const sc = clearScene();
  const tpl = CHAIN_TEMPLATES[ch.kind];
  const step = tpl.steps[ch.step-1];
  sc._html = '【'+ch.icon+' '+ch.name+'】第 '+ch.step+' / '+ch.total+' 步\n'+step.p;
  const opts = step.opts;
  for(let i=0;i<opts.length;i++){
    const o = opts[i];
    choice(o.label, ()=>applyChainOption(o), o.tag || '');
  }
}

/* 应用链选项效果并推进 */
function applyChainOption(o){
  const chance = (o.chance !== undefined) ? o.chance : 0.7;
  const win = Math.random() < chance;
  const d = win ? o.ok : o.fail;
  if(d){
    // 单值自动 ±30% 浮动；数组则取范围内随机
    const fx = v => Array.isArray(v) ? (v[0] + rnd(v[1]-v[0]+1)) : fl(v);
    if(d.food) S.food = clamp(S.food + fx(d.food));
    if(d.grow) S.grow = clampG(S.grow + fx(d.grow));
    if(d.explore) S.explore = clamp(S.explore + fx(d.explore));
  }
  log((win ? (o.winTxt||'你成功了。') : (o.failTxt||'你失手了。')), win ? 'win' : 'die');
  if(S.food<=0){ return die('你在「'+S.chain.name+'」中耗尽了最后一点气力。'); }
  if(S.grow<=0){ return die('你在「'+S.chain.name+'」中被彻底摧毁。'); }
  S.chain.step++;
  if(S.chain.step > S.chain.total){ finishChain(); }
  else { chainStep(); }
}

/* 链结束：收尾奖励 + 正常推进一回合 */
function finishChain(){
  const ch = S.chain;
  const tpl = CHAIN_TEMPLATES[ch.kind];
  const tail = tpl.tail;
  if(tail){
    if(tail.food) S.food = clamp(S.food + tail.food);
    if(tail.grow) S.grow = clampG(S.grow + tail.grow);
    if(tail.explore) S.explore = clamp(S.explore + tail.explore);
    if(tail.txt) log(tail.txt, 'win');
  }
  S.chain = null;
  if(S.food<=0){ return die('你在「'+ch.name+'」的尾声没能撑住。'); }
  if(S.grow<=0){ return die('你的躯体在「'+ch.name+'」尾声彻底崩解。'); }
  endTurnOrDanger();
}

const TRIGGER_P = 0.55;   // 每回合触发「周遭骤变」的概率；一旦触发，发生 1 件特殊事件

function applyEvent(e){
  const r = a => a ? a[0]+rnd(a[1]-a[0]+1) : 0;
  const bf=S.food, bg=S.grow, be=S.explore;
  let df=r(e.df), dh=r(e.dh), dg=r(e.dg), de=r(e.de);
  if(S.camo && dh<0){ dh=Math.floor(dh/2); }
  S.food=clamp(S.food + df + dh);   // 饱食与损伤均作用于「体力」
  S.grow=clampG(S.grow + dg);       // 体型（可无限成长）
  if(de) S.explore=clamp(S.explore + de); // 探索值（部分事件影响）
  // —— 天敌：体型差对决，败则按「体型差 × 天敌种类」损失体型 ——
  const pr = PREDATORS[e.name];
  if(e.cat==='天敌' && pr){
    if(Math.random() < predWinP(pr.psize)){
      S.grow = clampG(S.grow + 0.2 + Math.random()*0.5);   // 险胜：撕下一点战利（浮动）
      S.food = clamp(S.food + 1 + rnd(3));                 // 战利品补充体力
      log('你凭借'+(S.grow>pr.psize?'壮硕的身躯':'灵活的身手')+'击退了'+e.name+'。','win');
    }else{
      const loss = predSizeLoss(pr, S.grow);
      S.grow = clampG(S.grow - loss);
      S.food = clamp(S.food - (2 + rnd(4)));               // 被咬亦损体力（浮动 2~5）
      log('不敌'+e.name+'，你被撕去一块躯体（体型 -'+loss.toFixed(1)+'）。','die');
    }
  }
  e._delta={ food:Math.round((S.food-bf)*10)/10, grow:Math.round((S.grow-bg)*10)/10, explore:Math.round((S.explore-be)*10)/10 };
  S.camo=false; // 伪装只持续一次事件
  S.seen.add(e.name);                        // 记录「以往已触发事件」，供后续事件链判定
  const sm = SITUATION_MAP[e.name];
  if(sm){ S.situations.push({name:e.name, cat:e.cat, prompt:sm.prompt, responses:sm.responses}); }
  return (S.food<bf || S.grow<bg) ? 'die' : 'win';
}
function drawEvent(){
  // 仅在「条件满足」的事件中抽 1 个事件（条件依赖自身状态 / 以往已触发事件）
  const pool = EVENTS.filter(e=> !e.cond || e.cond(S));
  if(!pool.length) return [];
  return [ pool[rnd(pool.length)] ];
}
/* 周遭骤变：以 TRIGGER_P 概率触发，触发即随机发生 1 件特殊事件 */
/* 探索值极端：过低→暗处被天敌吃掉；过高→探索过界遇险。命中概率后强制触发对应类别事件 */
function triggerForced(kind, after){
  const pool = EVENTS.filter(e=>{
    const catOK = kind==='predator' ? e.cat==='天敌'
                                     : (e.cat==='天象' || e.cat==='竞争');
    return catOK && (!e.cond || e.cond(S));
  });
  if(pool.length){
    const e = pool[rnd(pool.length)];
    const cls=applyEvent(e);
    log('【'+e.cat+'】'+e.name+'：'+e.msg, cls);
    S.lastEvents.push({name:e.name, cat:e.cat, msg:e.msg, cls, delta:e._delta});
  }else{
    log('【警示】你动静太大，引来了看不见的麻烦。', 'die');
    S.lastEvents.push({name:'暗处的窥伺', cat:'警示', msg:'你动静太大，引来了看不见的麻烦。', cls:'die'});
  }
  if(S.food<=0){ return die('周遭的杀机骤然降临——你没能撑过这场变故。'); }
  if(S.grow<=0){ return die('你的躯体被啃食殆尽，再没能长大。'); }
  presentTrigger(after);
}
function triggerEvents(after){
  S.lastEvents=[];
  S.situations=[]; // 新回合清空上一回合的情境应对
  // —— 探索值极高 → 克苏鲁事件 ——
  if(S.explore > 75){ return triggerCthulhu(after); }
  // —— 探索值偏高 → 高探索奇遇（奖励式，灵光/异界低语等）——
  if(S.explore >= 40 && Math.random() < 0.6){ return triggerHighExplore(after); }
  // —— 被天敌发现：体型越大越显眼；探索偏低则拙于躲避 ——
  let detect = 0.20;
  if(S.grow > 5)    detect += Math.min(0.40, S.grow*0.012);
  if(S.explore < 50) detect += (50 - S.explore)*0.006;
  detect = Math.min(0.92, detect);
  if(Math.random() < detect){ return triggerForced('predator', after); }
  // —— 普通周遭骤变（探索越高，越易触发）——
  if(Math.random() >= effTriggerP()){ after(); return; }
  const sel=drawEvent();
  for(const e of sel){
    const cls=applyEvent(e);
    log('【'+e.cat+'】'+e.name+'：'+e.msg, cls);
    S.lastEvents.push({name:e.name, cat:e.cat, msg:e.msg, cls, delta:e._delta});
  }
  if(S.food<=0){ return die('周遭的杀机骤然降临——你没能撑过这场变故。'); }
  if(S.grow<=0){ return die('你的躯体被啃食殆尽，再没能长大。'); }
  presentTrigger(after);
}

/* ---------------- 行动池（24 种） ---------------- */
/* 每个行动：id, label, tag, weight, order, cond(条件), fx(效果) */
/* fx 只负责本回合即时效果与日志；回合推进由 doAction 统一收尾 */
const ACTIONS = [
  /* 1 */
  {id:'eat', label:'🍖 啃食身边的腐肉，填饱肚子', tag:'+饱食', weight:10, order:10,
   cond:()=>true,
   fx:()=>{ S.food=clamp(S.food+fl(22)); S.grow=clampG(S.grow+(S.grow<70?7:2)); log('你大口吞食腐肉，身体又圆润了一分。','win'); }},
  /* 2 */
  {id:'burrow', label:'🐜 钻进腐肉深处，避开光线', tag:'+安全', weight:8, order:20,
   cond:()=>true,
   fx:()=>{ S.food=clamp(S.food+fl(6)); S.food=clamp(S.food+fl(4)); log('你钻入暗处，安全感让你恢复了些许体力。'); }},
  /* 3 */
  {id:'leaf', label:'🌿 爬向附近新鲜的落叶堆', tag:'探索', weight:7, order:30,
   cond:()=>true,
   fx:()=>{ spot='落叶堆'; S.food=clamp(S.food-fl(4)); log('你蠕动到落叶堆，这里气味更杂。'); }},
  /* 4 */
  {id:'bark', label:'🪵 滚向潮湿的树皮缝隙', tag:'探索', weight:7, order:40,
   cond:()=>true,
   fx:()=>{ spot='树皮缝'; S.food=clamp(S.food-fl(4)); log('你滚到树皮缝，潮气贴着体节。'); }},
  /* 5 */
  {id:'ferment', label:'🍺 啜饮腐肉底层的酸液', tag:'大餐/险', weight:4, order:50,
   cond:()=>spot==='腐肉堆',
   fx:()=>{ S.food=clamp(S.food+fl(18)); S.food=clamp(S.food-fl(4)); log('酸液灼烧食道，却也填饱肚子。','win'); }},
  /* 6 */
  {id:'egg', label:'🥚 吞下一颗软壳卵', tag:'变异', weight:3, order:55,
   cond:()=>S.food<75 && S.grow<60,
   fx:()=>{
     S.food=clamp(S.food+fl(12)); S.grow=clampG(S.grow+fl(5));
     if(Math.random()<0.3){ S.food=clamp(S.food-fl(8)); log('卵壳在腹中裂开，一股寄生感让你痉挛。','die'); }
     else log('卵中养分被你榨取，身体鼓胀了一圈。','win');
   }},
  /* 7 */
  {id:'fungus', label:'🍄 追逐树皮缝里的菌丝', tag:'+恢复', weight:5, order:60,
   cond:()=>spot==='树皮缝',
   fx:()=>{ S.food=clamp(S.food+fl(5)); S.food=clamp(S.food+fl(6)); log('菌丝清甜，让你缓了口气。','win'); }},
  /* 8 */
  {id:'sun', label:'☀️ 爬到表层晒一会儿太阳', tag:'+恢复', weight:4, order:65,
   cond:()=>S.day>=2,
   fx:()=>{ S.food=clamp(S.food+fl(8)); S.food=clamp(S.food-fl(2)); log('阳光温暖了冰凉的体节。'); }},
  /* 9 */
  {id:'playdead', label:'🌀 缩成 C 形装死', tag:'保命', weight:5, order:70,
   cond:()=>S.food<55,
   fx:()=>{ S.food=clamp(S.food+fl(10)); S.food=clamp(S.food-fl(3)); log('你僵直不动，天敌扫视一圈后悻悻离去。'); }},
  /* 10 */
  {id:'cannibal', label:'⚔️ 扑向一只更弱的同类', tag:'强食', weight:4, order:75,
   cond:()=>S.food<65 && S.grow>=20,
   fx:()=>{ S.food=clamp(S.food+fl(14)); S.grow=clampG(S.grow+fl(3)); S.food=clamp(S.food-fl(6)); log('同类相食虽然可耻，但确实顶饿。'); }},
  /* 11 */
  {id:'anttrail', label:'🐜 跟随蚂蚁留下的信息素', tag:'赌', weight:4, order:80,
   cond:()=>true,
   fx:()=>{
     if(Math.random()<0.5){ S.food=clamp(S.food+fl(15)); log('信息素指向一块遗落的甜屑。','win'); }
     else { S.food=clamp(S.food-fl(10)); log('你误闯入蚂蚁巡逻队，被狠狠咬了一口。','die'); }
   }},
  /* 12 */
  {id:'bones', label:'🦴 钻进碎骨阴影', tag:'藏身', weight:5, order:85,
   cond:()=>spot==='腐肉堆',
   fx:()=>{ S.food=clamp(S.food+fl(7)); S.food=clamp(S.food+fl(2)); log('碎骨间的阴影让你暂时安全。'); }},
  /* 13 */
  {id:'dew', label:'💧 接一滴坠落的晨露', tag:'甘露', weight:5, order:90,
   cond:()=>S.day<=7,
   fx:()=>{ S.food=clamp(S.food+fl(6)); S.food=clamp(S.food+fl(5)); log('一滴露水解了干渴。','win'); }},
  /* 14 */
  {id:'molt', label:'🕳️ 啃食自己刚蜕下的旧皮', tag:'回收', weight:3, order:95,
   cond:()=>S.grow>30,
   fx:()=>{ S.food=clamp(S.food+fl(8)); S.food=clamp(S.food+fl(4)); log('旧皮里还有一点残存的养分。'); }},
  /* 15 */
  {id:'smell', label:'👃 追逐蝇蛆的气息', tag:'觅食', weight:5, order:100,
   cond:()=>true,
   fx:()=>{
     S.food=clamp(S.food+fl(12));
     if(Math.random()<0.3){ S.food=clamp(S.food-fl(6)); log('美味引来了一只隐翅虫，你夺食而逃。','die'); }
     else log('你循味找到一处新鲜的腐汁。','win');
   }},
  /* 16 */
  {id:'feather', label:'🪶 躲进羽毛下面', tag:'藏身处', weight:4, order:105,
   cond:()=>spot==='落叶堆',
   fx:()=>{ S.food=clamp(S.food+fl(10)); S.food=clamp(S.food+fl(2)); log('羽毛像一床温暖的被，盖住了危险。'); }},
  /* 17 */
  {id:'dig', label:'⛏️ 向树皮缝更深处挖', tag:'深挖', weight:4, order:110,
   cond:()=>spot==='树皮缝',
   fx:()=>{ S.food=clamp(S.food+fl(5)); S.food=clamp(S.food+fl(8)); log('深处的腐殖质里藏着碎屑。'); }},
  /* 18 */
  {id:'wait', label:'⏳ 静止不动，等待时机', tag:'休整', weight:6, order:115,
   cond:()=>true,
   fx:()=>{ S.food=clamp(S.food+fl(4)); S.food=clamp(S.food+fl(3)); log('你一动不动，节省了一点体力。'); }},
  /* 19 */
  {id:'camo', label:'🎨 在身上裹一层薄泥', tag:'伪装', weight:4, order:120,
   cond:()=>true,
   fx:()=>{ S.food=clamp(S.food+fl(3)); S.camo=true; log('泥土让你和地面几乎融为一体，下一次灾祸会轻一些。'); }},
  /* 20 */
  {id:'rotwood', label:'🪵 啃一口半烂的腐木', tag:'磨牙', weight:4, order:125,
   cond:()=>spot==='树皮缝',
   fx:()=>{ S.food=clamp(S.food+fl(6)); S.food=clamp(S.food+fl(2)); log('腐木虽柴，也能垫垫肚子。'); }},
  /* 21 */
  {id:'fruit', label:'🍎 钻入一截半腐烂的果实', tag:'大餐', weight:4, order:130,
   cond:()=>spot==='落叶堆' || spot==='腐肉堆',
   fx:()=>{
     S.food=clamp(S.food+fl(20));
     if(Math.random()<0.3){ S.food=clamp(S.food-fl(5)); log('果肉卡住体节，你费尽力气才挣脱。','die'); }
     else log('甜腐的果汁灌满身体。','win');
   }},
  /* 22 */
  {id:'shade', label:'🌑 爬向阴影避暑', tag:'避暑', weight:4, order:135,
   cond:()=>S.day%3===0,
   fx:()=>{ S.food=clamp(S.food+fl(8)); log('阴影下暑气顿消。'); }},
  /* 23 */
  {id:'challenge', label:'🤼 挑衅最强壮的同类', tag:'豪赌', weight:2, order:140,
   cond:()=>S.grow>35 && S.food>40,
   fx:()=>{
     if(Math.random()<0.5){ S.grow=clampG(S.grow+fl(10)); S.food=clamp(S.food+fl(10)); log('你击败对手，吞下了战利品。','win'); }
     else { S.food=clamp(S.food-fl(20)); log('强者反咬，你落荒而逃。','die'); }
   }},
  /* 24 */
  {id:'listen', label:'👂 贴地倾听震动', tag:'警觉', weight:4, order:145,
   cond:()=>true,
   fx:()=>{ S.food=clamp(S.food+fl(4)); log('大地在颤动，你感到下一回合似乎会有事发生。'); }},
];

/* 事件衍生的限时行动已并入「事件应对」机制（见 SITUATION_MAP），此处不再需要 */

function getAction(id){ return ACTIONS.find(a=>a.id===id); }

/* 加权无放回随机抽取 */
function weightedSample(pool, n){
  const copy=pool.map(a=>({a,w:a.weight}));
  const res=[];
  for(let k=0;k<n && copy.length;k++){
    const total=copy.reduce((s,o)=>s+o.w,0);
    let r=Math.random()*total, i=0;
    while(r>copy[i].w){ r-=copy[i].w; i++; }
    res.push(copy[i].a);
    copy.splice(i,1);
  }
  return res;
}

function generateChoices(limit){
  limit = limit || 3;
  const normal=ACTIONS.filter(a=>a.cond());
  const chosen=[];
  // 生存兜底：饥饿/低体时优先保证基本恢复手段
  if(S.food<55){ const a=normal.find(x=>x.id==='eat'); if(a && !chosen.includes(a)) chosen.push(a); }
  if(S.food<45){ const a=normal.find(x=>x.id==='burrow'); if(a && !chosen.includes(a)) chosen.push(a); }
  // 加权补齐到恰好 limit 个（事件的专属应对在「事件应对」区单独呈现，不占此处名额）
  const rest=normal.filter(a=>!chosen.includes(a));
  const slots=Math.max(0, limit-chosen.length);
  chosen.push(...weightedSample(rest, Math.min(slots, rest.length)));
  // 严格限制为 limit 个（优先保留生存兜底与事件衍生行动）
  if(chosen.length>limit) chosen.length=limit;
  chosen.sort((a,b)=>(a.order||0)-(b.order||0));
  return chosen;
}

let spot='腐肉堆';
function currentSpot(){return spot;}

/* 行动对「探索值」的影响：正值=外出探索，负值=缩起隐蔽 */
const EXPLORE_DELTA = {
  eat:3, burrow:-4, leaf:16, bark:16, ferment:3, egg:3, fungus:7, sun:5,
  playdead:-3, cannibal:3, anttrail:11, bones:-3, dew:4, molt:3, smell:13,
  feather:-3, dig:10, wait:-2, camo:-2, rotwood:9, fruit:9, shade:3,
  challenge:9, listen:11,
};
function doAction(a){
  a.fx();
  if(EXPLORE_DELTA[a.id]) S.explore=clamp(S.explore+EXPLORE_DELTA[a.id]);
  endTurnOrDanger();
}

function endTurnOrDanger(){
  endTurn();
  if(!S.alive) return;
  triggerEvents(()=>hub());
}

/* ---------------- 场景：主枢纽（蛆之阶段） ---------------- */
function hub(){
  render();
  const sc=clearScene();
  let txt='你是一条约两厘米长的白胖蛆，蜷在【'+currentSpot()+'】。';
  if(S.generation>1) txt+='\n你体内残留着上几世羽化又轮回的记忆。';
  txt+='\n空气里弥漫着甜腐的气味。你蠕动着，饥肠辘辘。';
  sc.innerHTML=sceneHTML(txt);
  // 特殊事件记录框（始终显示：有事件列出名字，无事件则「平平无奇的一天」）
  if(S.lastEvents && S.lastEvents.length){
    const tags=S.lastEvents.map(e=>'<span class="eb-tag">'+e.name+'</span>').join('');
    sc.innerHTML+='<div class="events-box">'
      +'<div class="eb-head">⚡ 本回合遇见的特殊事件</div>'
      +'<div class="eb-list">'+tags+'</div></div>';
  }else{
    sc.innerHTML+='<div class="events-box">'
      +'<div class="eb-head">🍃 本回合</div>'
      +'<div class="eb-empty">平平无奇的一天</div></div>';
  }
  const ac=$('actions');
  // —— 平常行动（恒 3 个；可化蛹时 = 化蛹 + 2）：仅在未触发特殊事件时显示 ——
  if(!(S.situations && S.situations.length)){
    const c=document.createElement('div');c.className='choices';
    if(S.canPupa){
      c.appendChild(choice('🪱 找一处安全的泥土，开始化蛹',()=>pupa(),'化蛹'));
      generateChoices(2).forEach(a=>{
        c.appendChild(choice(a.label, ()=>doAction(a), a.tag));
      });
    }else{
      generateChoices(3).forEach(a=>{
        c.appendChild(choice(a.label, ()=>doAction(a), a.tag));
      });
    }
    ac.appendChild(c);
  }
  // —— 事件应对（仅「触发随机事件」后才出现，与平常行动分区区分）——
  if(S.situations && S.situations.length){
    const wrap=document.createElement('div');
    wrap.className='situations';
    const head=document.createElement('div');
    head.className='sit-head';
    head.textContent='⚡ 事件应对 · 周遭的变故，需要你立刻抉择';
    wrap.appendChild(head);
    for(const sit of S.situations){
      const blk=document.createElement('div');
      blk.className='situation';
      const p=document.createElement('div');
      p.className='sit-prompt';
      p.textContent=sit.prompt;
      blk.appendChild(p);
      const rc=document.createElement('div');
      rc.className='choices sit-choices';
      // 2 个专属应对（来自该事件行动池，随机取 2）+ 1 个普通选择（来自普通行动池）
      const pool=sit.responses.slice();
      for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
      pool.slice(0,2).forEach(resp=>{
        rc.appendChild(choice(resp.label, ()=>resolveSituation(sit,resp), resp.tag));
      });
      const normal=generateChoices(1)[0];
      if(normal){ rc.appendChild(choice(normal.label, ()=>doSituationNormal(normal), normal.tag)); }
      blk.appendChild(rc);
      wrap.appendChild(blk);
    }
    ac.appendChild(wrap);
  }
}

/* 记录当前三项属性，用于结算弹窗做差异展示 */
function capture(){ return {food:S.food, grow:S.grow, explore:S.explore}; }

/* 特殊事件触发时的「周遭骤变」弹窗：复用黑化遮罩 + 居中 modal。
   —— 若事件配有专属应对：弹窗内直接展示「2 专属 + 1 普通」选择，点选即结算并继续；
   —— 若事件无专属应对：展示事件卡片并附「确定」继续，避免卡死。 */
/* 仅展示「本次事件造成的属性增减」（不写初始/结果），零值省略 */
function deltaText(d){
  if(!d) return '';
  const f = v => { const r=Math.round(v*10)/10; return (Math.abs(r-Math.round(r))<1e-9 ? (v>0?'+':'')+Math.round(v) : (v>0?'+':'')+r.toFixed(1)); };
  const order=[['体力',d.food],['体型',d.grow],['探索',d.explore]];
  return order.filter(([,v])=> v!==0 && v!==undefined && v!==null).map(([n,v])=> n+' '+f(v)).join(' · ');
}
function presentTrigger(after){
  const ov=document.createElement('div');
  ov.className='overlay';
  const modal=document.createElement('div');
  modal.className='modal';
  modal.innerHTML='<div class="modal-title">⚡ 周遭骤变</div>'
    +'<div class="modal-sub">特殊事件降临 · 请立刻抉择</div>';
  const body=document.createElement('div');
  // 没有专属应对的纯叙事事件：仅展示信息卡片
  const noResp=(S.lastEvents||[]).filter(e=> !(S.situations||[]).some(s=>s.name===e.name));
  noResp.forEach(e=>{
    const color = e.cls==='die' ? '#ff8a6b' : (e.cls==='win' ? '#7fd97f' : 'var(--accent)');
    const card=document.createElement('div'); card.className='ev-trigger';
    card.innerHTML='<div class="ev-cat" style="color:'+color+'">【'+(e.cat||'事件')+'】</div>'
      +'<div class="ev-name" style="color:'+color+'">'+e.name+'</div>'
      +'<div class="ev-msg">'+(e.msg||'')+'</div>'
      + (e.delta ? '<div class="ev-delta">'+deltaText(e.delta)+'</div>' : '');
    body.appendChild(card);
  });
  // 配有专属应对的事件：弹窗内直接呈现选择块
  const blocks=document.createElement('div');
  blocks.className='trig-events';
  for(const sit of (S.situations||[])){
    const ev = S.lastEvents.find(e=>e.name===sit.name) || {};
    const color = sit.cls==='die' ? '#ff8a6b'
                : (sit.cls==='win' ? '#7fd97f' : 'var(--accent)');
    const blk=document.createElement('div');
    blk.className='trig-event';
    blk.innerHTML='<div class="ev-cat" style="color:'+color+'">【'+(ev.cat||sit.cat||'事件')+'】</div>'
      +'<div class="ev-name" style="color:'+color+'">'+sit.name+'</div>'
      +'<div class="ev-msg">'+(ev.msg||'')+'</div>'
      +'<div class="sit-prompt">'+(sit.prompt||'')+'</div>'
      + (ev.delta ? '<div class="ev-delta">'+deltaText(ev.delta)+'</div>' : '');
    const rc=document.createElement('div');
    rc.className='choices sit-choices';
    // 2 个专属应对（来自该事件行动池，随机取 2）
    const pool=sit.responses.slice();
    for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
    pool.slice(0,2).forEach(resp=>{
      rc.appendChild(choice(resp.label, ()=>{ if(ov.parentNode) ov.remove(); resolveSituation(sit,resp); }, resp.tag));
    });
    // 1 个普通选择（来自普通行动池）
    const normal=generateChoices(1)[0];
    if(normal){ rc.appendChild(choice(normal.label, ()=>{ if(ov.parentNode) ov.remove(); doSituationNormal(normal); }, normal.tag)); }
    blk.appendChild(rc);
    blocks.appendChild(blk);
  }
  body.appendChild(blocks);
  modal.appendChild(body);
  // 仅当「完全没有专属应对」时才提供「确定」跳过，避免无选择可点时卡死
  if(!(S.situations && S.situations.length)){
    const ok=document.createElement('button');
    ok.className='modal-ok'; ok.id='triggerOk'; ok.textContent='确定';
    ok.onclick=()=>{ if(ov.parentNode) ov.remove(); after(); };
    modal.appendChild(ok);
  }
  ov.appendChild(modal);
  document.body.appendChild(ov);
}

/* 居中灰度遮罩的「属性变化」结算特效，点「确定」才继续后续 */
function showOutcome(title, before, onConfirm){
  const after={food:S.food, grow:S.grow, explore:S.explore};
  const items=[['体力',before.food,after.food],['体型',before.grow,after.grow],
    ['探索',before.explore,after.explore]];
  const rows=items.map(([name,bv,av])=>{
    const d=av-bv;
    const cls=d>0?'up':(d<0?'down':'same');
    const sign=d>0?'+':(d<0?'':'');
    return '<div class="oc-row '+cls+'"><span class="oc-name">'+name+'</span>'
      +'<span class="oc-val">'+bv+' → '+av+'</span>'
      +'<span class="oc-delta">'+(d===0?'—':sign+d)+'</span></div>';
  }).join('');
  const ov=document.createElement('div');
  ov.className='overlay';
  ov.innerHTML='<div class="modal"><div class="modal-title">'+title+'</div>'
    +'<div class="modal-sub">属性变化</div>'
    +'<div class="oc-list">'+rows+'</div>'
    +'<button class="modal-ok" id="outcomeOk">确定</button></div>';
  document.body.appendChild(ov);
  const close=()=>{ if(ov.parentNode) ov.remove(); onConfirm(); };
  ov.querySelector('#outcomeOk').onclick=close;
  ov.addEventListener('click',(e)=>{ if(e.target===ov) close(); });
}

/* 处理某个触发事件的专属应对：应用效果 → 结算特效 → 移除待应对项并刷新枢纽 */
function resolveSituation(sit, resp){
  const before=capture();
  resp.fx();
  render();
  showOutcome('【'+sit.name+'】'+resp.label, before, ()=>{
    if(S.food<=0){ return die('你没能扛过这番变故，身躯渐渐没了声息。'); }
    if(S.grow<=0){ return die('你被啃食殆尽，再没能长大。'); }
    S.situations=S.situations.filter(s=>s!==sit);
    // —— 事件链：情境应对之后，有概率卷入连环变故 ——
    const kind = chainKindFor(sit.name);
    if(kind && !S.chain){
      const chance = kind==='survive' ? 0.5 : 0.35;
      if(Math.random() < chance){ return startChain(kind); }
    }
    hub();
  });
}

/* 事件块里的「1 个普通选择」：同样走结算特效，再进入常规回合推进 */
function doSituationNormal(a){
  const before=capture();
  a.fx();
  render();
  showOutcome('【应对】'+a.label, before, ()=>{
    if(S.chain) return; // 链中不再额外起链
    endTurnOrDanger();
  });
}

/* ---------------- 蝇之阶段：羽化之后仍可探索、繁衍、轮回 ---------------- */
function flyHub(){
  render();
  const sc=clearScene();
  let txt='你是一只有着湿润翅膀的蝇，悬在半空。';
  txt+='\n身下是那具早已认不出的腐尸，远处是花与风。';
  txt+='\n你赢得了自由，也终将面对繁衍与终结。';
  sc.innerHTML=sceneHTML(txt);
  const c=document.createElement('div');c.className='choices';
  c.appendChild(choice('🌸 停在花瓣上啜饮花蜜',()=>flyForage(),'+能量'));
  c.appendChild(choice('💞 与路过的同类交尾',()=>flyMate(),'繁衍'));
  c.appendChild(choice('🥚 产卵入土，重启轮回',()=>layEggs(),'轮回'));
  c.appendChild(choice('✟ 就此终结，留下生平',()=>endLife(),'终章'));
  $('actions').appendChild(c);
}
function flyAction(fn){
  fn();
  S.day++; S.totalDays++;
  render();
  if(S.food<=0){ return die('你在风中失了力气，坠入草丛，再没能起飞。'); }
  flyHub();
}
function flyForage(){
  flyAction(()=>{
    const g=6+rnd(8);
    S.food=clamp(S.food+g); S.food=clamp(S.food+fl(4));
    log('你停在花瓣上啜饮花蜜，翅尖沾满金黄。','win');
  });
}
function flyMate(){
  S.chronicle.push('第'+S.generation+'世：你在风中与同类交尾，赓续了种族的命脉。');
  flyAction(()=>{ log('交配之后，你心满意足地掠过花丛。','win'); });
}
function layEggs(){
  S.chronicle.push('第'+S.generation+'世：你产下一窝卵，将身躯沉入泥土，化作下一代的起始。');
  log('你产下卵，力竭而亡——但湿润的泥土里，新的白蛆正破壳而出。','win');
  // 轮回：以全新蛆之躯醒来（前世的羽化记忆深埋体内）
  S.generation++;
  S.phase='maggot';
  S.food=100; S.grow=1; S.day=0;
  S.blessed=false; S.camo=false; S.seen=new Set(); S.situations=[]; S.lastEvents=[];
  S.chronicle.push('第'+S.generation+'世：你以全新的白蛆之躯醒来，体内残留着前世羽化的记忆。');
  checkVersion();
  render();
  hub();
}
function endLife(){
  finale('你主动终结了这一生，将故事封存为生平日志。', true);
}

/* ---------------- 化蛹结局 ---------------- */
function pupa(){
  const sc=clearScene();
  sc.innerHTML=sceneHTML('你选了一处松软湿润的泥土，停止进食，身体渐渐僵硬、收缩，裹进褐色的蛹壳。'
    +'\n这是一场没有退路的豪赌——化蛹期间你毫无反抗之力。');
  const c=document.createElement('div');c.className='choices';
  c.appendChild(choice('🛡 把蛹埋得更深一些',()=>pupaGuard('deep'),'稳'));
  c.appendChild(choice('⚡  hurry——赶紧完成蜕变',()=>pupaGuard('fast'),'险'));
  $('actions').appendChild(c);
}
function pupaGuard(way){
  S.day++;
  if(way==='deep'){
    // 更安全
    if(Math.random()<0.78){ emerge('你在深埋的安静中完成了蜕皮。一具白蛹裂开，你振翅而出——你活成了会飞的样子。'); }
    else { die('泥土深处潜伏着食蛹的甲虫幼虫，它们循味而来，将你啃食殆尽。'); }
  }else{
    if(Math.random()<0.45){ emerge('你仓促却成功地羽化了！翅膀尚软，但你已挣脱大地。'); }
    else { die('蜕变尚未完成，一只鸟啄开了半硬的蛹壳。'); }
  }
}

/* ---------------- 开场 ---------------- */
function start(){
  spot='腐肉堆';
  const sc=clearScene();
  sc.innerHTML=sceneHTML(
    '你在一具不知名小兽的尸体里醒来。\n'
    +'没有眼睛，没有腿，只有一条会蠕动的白色身躯和永不餍足的饥饿。\n'
    +'你是上百只同胞之一。在这里，活得久一点，就是全部的野心。\n'
    +'——动起来吧。');
  const c=document.createElement('div');c.className='choices';
  c.appendChild(choice('开始蠕动',()=>{ log('你睁开了「不存在的眼睛」，世界是一团气味。'); hub(); }));
  $('actions').appendChild(c);
}

/* ---------------- 重置 ---------------- */
function resetGame(){
  S=newState();
  $('log').innerHTML='';
  render();
  start();
}
