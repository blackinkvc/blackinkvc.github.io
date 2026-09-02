(function () {
  const cv = null;
  const G = {
    ws: null, roomId: null, playerId: null, isHost: false,
    state: null, myVote: null,
    deadline: 0, turnMs: 60000, _timerTick: null, _revealTimer: null
  };

  // ---------- WebSocket ----------
  let connectTimeout = null;
  let connectAttempt = 0;
  function connect() {
    const proto = location.protocol === 'https:' ? 'wss' : 'ws';
    const ws = new WebSocket(`${proto}://${location.host}`);
    G.ws = ws;
    setJoinLoading(true);
    connectTimeout = setTimeout(() => { if (ws.readyState !== 1) toast('正在钻入腐肉世界…连接稍慢，请稍候'); }, 4000);
    ws.onopen = () => {
      clearTimeout(connectTimeout); connectAttempt = 0;
      // 曾成功加入过（断线重连）：复用原身份，避免产生重复玩家
      if (G.playerId) ws.send(JSON.stringify({ type: 'rejoin', name: G._name, roomId: G._room, playerId: G.playerId }));
      else ws.send(JSON.stringify({ type: 'join', name: G._name, roomId: G._room }));
    };
    ws.onmessage = (e) => { try { handleMsg(JSON.parse(e.data)); } catch (err) {} };
    ws.onerror = () => { clearTimeout(connectTimeout); };
    ws.onclose = () => {
      clearTimeout(connectTimeout);
      if (!G.playerId) setJoinLoading(false);
      // 自动重试：首次失败也会重连（指数退避，最多 10 次）
      if (connectAttempt < 10) {
        connectAttempt++;
        const delay = Math.min(20000, 1000 * connectAttempt);
        setTimeout(connect, delay);
      } else if (!G.playerId) {
        toast('连接失败，请刷新页面重试');
      }
    };
  }

  function handleMsg(m) {
    if (m.type === 'joined') {
      G.roomId = m.roomId; G.playerId = m.playerId; G.isHost = false;
      setJoinLoading(false);
      hide('login'); show('lobby');
      document.getElementById('lobbyRoom').textContent = m.roomId;
      document.getElementById('roomTag').textContent = '房间 ' + m.roomId;
    } else if (m.type === 'error') {
      toast(m.msg);
    } else if (m.type === 'reveal') {
      showReveal(m);
    } else if (m.type === 'lobby') {
      renderLobby(m.players);
    } else if (m.type === 'state') {
      G.state = m;
      G.isHost = (m.players || []).find(p => p.id === G.playerId && p.host) ? true : G.isHost;
      G.mode = m.mode || 'vote';
      // 倒计时截止时间戳
      if (m.deadline && m.phase === 'playing' && !m.ended) {
        G.deadline = m.deadline; G.turnMs = m.turnMs || 60000; startTimerTick();
      } else {
        G.deadline = 0; stopTimerTick();
      }
      if (m.phase === 'lobby') {
        // 回到大厅（如「再来一局」后）：显示大厅、隐藏其他界面
        hide('result'); hide('hud'); hide('main');
        show('lobby');
        renderLobby(m.players || []);
        if (m.mode) renderModeSelector(m.mode);
        return;
      }
      // 进入游戏主界面
      if (m.phase === 'playing' || m.phase === 'ended') {
        if (document.getElementById('lobby').classList.contains('hidden') === false) hide('lobby');
        if (document.getElementById('result').classList.contains('hidden') === false) hide('result');
        show('hud'); show('main');
      }
      if (m.phase === 'ended') { renderResult(); show('result'); }
      else { hide('result'); }
      if (m.phase !== 'ended') { renderGame(m); }
    }
  }

  // ---------- UI ----------
  function show(id) { document.getElementById(id).classList.remove('hidden'); }
  function hide(id) { document.getElementById(id).classList.add('hidden'); }
  function toast(msg) {
    const t = document.getElementById('toast'); t.textContent = msg; t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2200);
  }
  function setJoinLoading(on) {
    const btn = document.getElementById('joinBtn'); if (!btn) return;
    if (on) { btn.disabled = true; btn.dataset.old = btn.textContent; btn.textContent = '正在钻入腐肉世界…'; }
    else if (btn.disabled) { btn.disabled = false; btn.textContent = btn.dataset.old || '钻入腐肉世界'; }
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }

  // ---------- 倒计时（状态栏右侧） ----------
  function startTimerTick() {
    if (G._timerTick) return;
    const el = document.getElementById('timerTag');
    const render = () => {
      const left = G.deadline - Date.now();
      if (left <= 0) { el.classList.remove('hidden'); el.innerHTML = '<span class="tnum">0</span><span style="font-size:11px">秒</span>'; el.classList.add('warn'); return; }
      const sec = Math.ceil(left / 1000);
      const pct = Math.max(0, Math.min(100, (left / (G.turnMs || 60000)) * 100));
      el.classList.remove('hidden');
      el.classList.toggle('warn', sec <= 10);
      el.innerHTML = `<span class="tnum">${sec}</span><span style="font-size:11px">秒</span><span class="tbar"><i style="width:${pct}%"></i></span>`;
    };
    render();
    G._timerTick = setInterval(render, 250);
  }
  function stopTimerTick() {
    if (G._timerTick) { clearInterval(G._timerTick); G._timerTick = null; }
    const el = document.getElementById('timerTag');
    if (el) { el.classList.add('hidden'); el.classList.remove('warn'); el.innerHTML = ''; }
  }

  // 回合最终选项揭晓特效：先展示「选择效果」结果弹窗，结束后蛆绕结果转圈
  function showReveal(m) {
    const dim = document.getElementById('revealDim');
    const stage = document.getElementById('revealStage');
    const boxEl = document.getElementById('revealBox');
    if (!dim || !stage || !boxEl) return;

    // —— 第一步：结果弹窗（选择效果）——
    boxEl.querySelector('.rb-label').textContent = m.label || '';
    boxEl.querySelector('.rb-delta').textContent = deltaText(m.delta || {});
    boxEl.querySelector('.rb-sub').textContent = m.mode === 'coop' ? '合作模式 · 全员抉择已定' : '投票模式 · 命运揭晓';
    // 结果弹窗居中偏上
    boxEl.style.left = '50%';
    boxEl.style.top = '30%';
    boxEl.style.width = 'min(420px, 84vw)';
    boxEl.style.height = 'auto';
    // 蛆先藏起来（效果展示阶段不转）
    const worm = boxEl.querySelector('.reveal-worm');
    if (worm) { worm.style.animation = 'none'; worm.style.opacity = '0'; }

    dim.classList.remove('hidden'); stage.classList.remove('hidden');
    void boxEl.offsetWidth;
    dim.classList.add('show');
    boxEl.classList.add('show');

    // —— 第二步：效果展示结束后，蛆绕结果弹窗转一圈 ——
    clearTimeout(G._revealTimer);
    if (worm) {
      setTimeout(() => {
        if (!boxEl.classList.contains('hidden')) {
          worm.style.opacity = '1';
          worm.style.animation = 'none';
          void worm.offsetWidth;
          worm.style.animation = '';
        }
      }, 950);
    }
    // —— 第三步：淡出 ——
    G._revealTimer = setTimeout(() => {
      dim.classList.remove('show');
      boxEl.classList.remove('show');
      dim.classList.add('hidden');
      stage.classList.add('hidden');
    }, 2500);
  }

  function renderLobby(players) {
    document.getElementById('lobbyCount').textContent = players.length;
    const box = document.getElementById('lobbyPlayers');
    box.innerHTML = '';
    players.forEach(p => {
      const el = document.createElement('div'); el.className = 'pcard big';
      el.innerHTML = `<span class="dot" style="background:${p.online ? 'var(--accent)' : '#555'}"></span><span>${esc(p.name)}</span>${p.host ? '<span class="host">房主</span>' : ''}`;
      box.appendChild(el);
    });
    const me = players.find(p => p.id === G.playerId);
    G.isHost = me ? me.host : false;
    const solo = players.filter(p => p.online).length <= 1;
    const startBtn = document.getElementById('startBtn');
    startBtn.disabled = !G.isHost;
    startBtn.classList.toggle('ready', !!G.isHost);
    const sub = document.getElementById('lobbySub');
    if (sub) sub.innerHTML = solo
      ? '暂时只有你一只蛆 · 一个人也能直接开始（房主）'
      : `等待伙伴钻入（${players.length}/6）· 截图房间号分享出去`;
    document.getElementById('lobbyHint').textContent = G.isHost
      ? (solo ? '你是房主，一个人也能直接开始 ↓' : '你是房主，可以开始游戏')
      : '等待房主开始游戏…';
    if (G.mode) renderModeSelector(G.mode);
  }

  // 大厅模式选择（房主可改，其他人只读）
  function renderModeSelector(mode) {
    const row = document.getElementById('modeRow');
    if (!row) return;
    [...row.children].forEach(btn => {
      const bm = btn.getAttribute('data-mode');
      btn.classList.toggle('active', bm === mode);
      if (G.isHost) {
        btn.classList.remove('locked');
      } else {
        btn.classList.add('locked');
      }
    });
    const title = document.querySelector('.mode-title');
    if (title) title.textContent = G.isHost ? '选择游戏模式（你是房主）' : '当前模式：' + modeName(mode);
  }
  function modeName(m) { return m === 'vote' ? '投票' : m === 'coop' ? '投票&合作' : m === 'race' ? '竞赛' : m; }

  function roundV(v) { const r = Math.round(v * 10) / 10; return Math.abs(r - Math.round(r)) < 1e-9 ? Math.round(r) : r; }

  function renderGame(s) {
    const st = s.status;
    document.getElementById('vFood').textContent = roundV(st.food);
    document.getElementById('vGrow').textContent = roundV(st.grow);
    document.getElementById('vExp').textContent = roundV(st.explore);
    document.getElementById('vDay').textContent = st.day;
    document.getElementById('vVer').textContent = 'v' + st.version;
    document.getElementById('phaseTag').textContent = st.phaseName === 'fly' ? '🪰 蝇之阶段' : '🪱 蛆之阶段';
    setBar('bFood', st.food); setBar('bGrow', st.grow > 100 ? 100 : st.grow); setBar('bExp', st.explore);
    document.getElementById('roomTag').textContent = '房间 ' + s.roomId;

    // 场景
    document.getElementById('scene').textContent = s.sceneText || '';

    // 事件弹窗提示
    const evBox = document.getElementById('eventBox');
    const evList = document.getElementById('eventList');
    if (s.modal && s.modal.type === 'event' && s.modal.events && s.modal.events.length) {
      evBox.style.display = 'block';
      evList.innerHTML = s.modal.events.map(e =>
        `<div class="ev ${e.cls || ''}"><span class="nm">【${esc(e.cat || '事件')}】${esc(e.name)}</span> ${esc(e.msg || '')}` +
        (e.delta ? ` <span class="dl">(${esc(deltaText(e.delta))})</span>` : '') + `</div>`
      ).join('');
    } else { evBox.style.display = 'none'; evList.innerHTML = ''; }

    // 候选行动（投票）
    renderChoices(s);

    // 日志
    const log = document.getElementById('log');
    log.innerHTML = (s.log || []).map(l => `<div class="log-line ${l.cls || ''}">${l.msg}</div>`).join('');
    log.scrollTop = log.scrollHeight;

    // 玩家 + 投票
    if (G.mode === 'race') renderRanking(s);
    else renderPlayers(s);
    // 聊天
    renderChat(s);
  }

  function deltaText(d) {
    if (!d) return '';
    const f = v => { const r = Math.round(v * 10) / 10; return (Math.abs(r - Math.round(r)) < 1e-9 ? (v > 0 ? '+' : '') + Math.round(v) : (v > 0 ? '+' : '') + r.toFixed(1)); };
    return ['体力', '体型', '探索'].map((n, i) => { const v = [d.food, d.grow, d.explore][i]; return (v !== 0 && v !== undefined && v !== null) ? n + ' ' + f(v) : null; }).filter(Boolean).join(' · ');
  }

  function setBar(id, val) {
    const bar = document.getElementById(id);
    bar.classList.toggle('low', val < 30 && id !== 'bGrow');
    bar.classList.toggle('high', val > 70 && id === 'bExp');
    bar.querySelector('i').style.width = Math.min(100, val) + '%';
  }

  function renderChoices(s) {
    const box = document.getElementById('choices');
    box.innerHTML = '';
    if (G.mode === 'race') {
      // 竞赛模式：每人独立蛆，点击直接行动
      (s.choices || []).forEach(c => {
        const b = document.createElement('button');
        b.className = 'choice';
        b.innerHTML = `<span>${esc(c.label)}</span><span class="tag">${esc(c.tag || '')}</span>`;
        b.onclick = () => sendAct(c.index);
        box.appendChild(b);
      });
      if (!(s.choices || []).length && !s.ended) {
        box.innerHTML = '<div class="hint">你的蛆已谢幕…</div>';
      }
      return;
    }
    // 当前我的投票
    const me = (s.players || []).find(p => p.id === G.playerId);
    const myVote = me ? me.vote : null;
    (s.choices || []).forEach(c => {
      const b = document.createElement('button');
      b.className = 'choice' + (myVote === c.index ? ' mine' : '');
      const cnt = (s.votes && s.votes[c.index]) ? s.votes[c.index].length : 0;
      b.innerHTML = `<span>${esc(c.label)}</span><span style="display:flex;gap:8px;align-items:center"><span class="tag">${esc(c.tag || '')}</span><span class="vcount">${cnt > 0 ? '🗳' + cnt : ''}</span></span>`;
      b.onclick = () => sendVote(c.index);
      box.appendChild(b);
    });
    if (!(s.choices || []).length && !s.ended) {
      box.innerHTML = '<div class="hint">等待命运揭晓…</div>';
    }
  }

  function renderPlayers(s) {
    document.getElementById('pc').textContent = (s.players || []).length;
    const list = document.getElementById('playerList');
    list.innerHTML = '';
    (s.players || []).forEach(p => {
      const el = document.createElement('div');
      el.className = 'pcard' + (p.online ? '' : ' off');
      const voted = (p.vote !== null && p.vote !== undefined);
      el.innerHTML = `<span class="dot"></span><span>${esc(p.name)}</span>${p.host ? '<span class="host">主</span>' : ''}${voted ? '<span class="vmark">🗳</span>' : ''}`;
      list.appendChild(el);
    });
  }

  // 竞赛模式：排行榜（按存活>天数>体型）
  function renderRanking(s) {
    const list = document.getElementById('playerList');
    const pc = document.getElementById('pc');
    if (pc) pc.textContent = (s.ranking || []).length;
    list.innerHTML = '';
    (s.ranking || []).forEach((p, i) => {
      const el = document.createElement('div');
      el.className = 'pcard' + (p.alive ? '' : ' off');
      el.innerHTML = `<span class="dot" style="background:${p.alive ? 'var(--accent)' : '#555'}"></span>` +
        `<span style="min-width:16px;color:var(--muted)">${i + 1}.</span>` +
        `<span>${esc(p.name)}</span>${p.alive ? '' : '💀'}` +
        `<span class="vmark">${p.day}天${p.generation > 1 ? '·轮回' + p.generation : ''}</span>`;
      list.appendChild(el);
    });
    const ph = document.querySelector('#players .ph');
    if (ph) ph.textContent = '🏁 存活排行榜';
  }

  function renderChat(s) {
    const box = document.getElementById('chat');
    box.innerHTML = (s.chat || []).map(c => `<div class="cmsg"><span class="cn">${esc(c.name)}：</span>${esc(c.text)}</div>`).join('');
    box.scrollTop = box.scrollHeight;
  }

  function renderResult() {
    const o = G.state.outcome;
    if (!o) return;
    document.getElementById('resSub').textContent = o.isWin ? '一个圆满的结局 · 你主动封存了故事' : '一切都已落幕';
    document.getElementById('endTitle').textContent = `历经 ${o.days} 个昼夜 · ${o.lives} 次轮回`;
    document.getElementById('endTitle').style.color = o.isWin ? 'var(--win)' : 'var(--die)';
    const ch = document.getElementById('chronicle');
    ch.innerHTML = '<div class="ch-title">— 生平拾遗 —</div>' + (o.chronicle || []).map(t => `<div class="ch-item">· ${esc(t)}</div>`).join('');
    const vl = document.getElementById('verList');
    vl.innerHTML = '<div class="ch-title">— 版本演进（终局 v' + o.version + '）—</div>' + (o.verLog || []).map(v => `<div class="ch-item" style="color:var(--muted)">· ${esc(v)}</div>`).join('');
    document.getElementById('restartBtn').disabled = !G.isHost;
  }

  // ---------- 输入/发送 ----------
  function sendVote(idx) {
    if (!G.ws || G.ws.readyState !== 1) return;
    G.ws.send(JSON.stringify({ type: 'vote', idx }));
    // 即时反馈
    const box = document.getElementById('choices');
    [...box.children].forEach((b, i) => { b.classList.toggle('mine', i === idx); });
    toast('已投票，等待伙伴…');
  }
  function sendAct(idx) {
    if (!G.ws || G.ws.readyState !== 1) return;
    G.ws.send(JSON.stringify({ type: 'act', idx }));
    const box = document.getElementById('choices');
    [...box.children].forEach((b, i) => { b.disabled = true; });
    toast('你的蛆行动了…');
  }
  function sendChat(text) {
    if (!G.ws || G.ws.readyState !== 1) return;
    G.ws.send(JSON.stringify({ type: 'chat', text }));
  }

  // ---------- 事件绑定 ----------
  document.getElementById('joinBtn').addEventListener('click', () => {
    G._name = (document.getElementById('nameInput').value || '匿名蛆').slice(0, 12);
    G._room = (document.getElementById('roomInput').value || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
    connect();
  });
  document.getElementById('nameInput').addEventListener('keydown', e => { if (e.key === 'Enter') document.getElementById('joinBtn').click(); });
  document.getElementById('roomInput').addEventListener('keydown', e => { if (e.key === 'Enter') document.getElementById('joinBtn').click(); });
  document.getElementById('startBtn').addEventListener('click', () => { if (G.ws) G.ws.send(JSON.stringify({ type: 'start' })); });
  // 大厅模式选择（仅房主可点）
  document.getElementById('modeRow').addEventListener('click', (e) => {
    const btn = e.target.closest('.mode-btn');
    if (!btn || !G.ws || !G.isHost) return;
    const mode = btn.getAttribute('data-mode');
    if (mode === G.mode) return;
    G.ws.send(JSON.stringify({ type: 'setMode', mode }));
    toast('已切换为「' + modeName(mode) + '」');
  });
  document.getElementById('restartBtn').addEventListener('click', () => { if (G.ws) G.ws.send(JSON.stringify({ type: 'restart' })); });
  document.getElementById('leaveBtn').addEventListener('click', () => location.reload());
  document.getElementById('chatSend').addEventListener('click', () => {
    const inp = document.getElementById('chatText'); sendChat(inp.value); inp.value = '';
  });
  document.getElementById('chatText').addEventListener('keydown', e => { if (e.key === 'Enter') { sendChat(e.target.value); e.target.value = ''; } });

  // 供外壳「☠ 离场」按钮调用
  window.returnToLobby = function () {
    try { if (G.ws) G.ws.close(); } catch (e) {}
    G.ws = null; G.roomId = null; G.playerId = null; G.isHost = false; G.state = null; G.deadline = 0;
    stopTimerTick();
    hide('lobby'); hide('result'); hide('hud'); hide('main');
    show('login');
  };
})();
