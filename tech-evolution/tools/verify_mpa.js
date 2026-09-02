const { chromium } = require("playwright");
const path = require("path");

const BASE = "file://" + path.resolve(__dirname, "..");
const pages = [
  { file: "worldview.html", check: "#stats-grid", expectFilled: true },
  { file: "browse.html", check: "#card-grid", expectFilled: true },
  { file: "timeline.html", check: "#timeline", expectFilled: true },
  { file: "tree.html", check: "#tree-svg", expectFilled: true },
  { file: "lineage.html", check: "#lineage-svg", expectFilled: true },
  { file: "method.html", check: "#method-doc", expectFilled: true },
  { file: "midtech.html", check: "#mid-doc", expectFilled: true },
  { file: "progress.html", check: "#prog-doc", expectFilled: true },
  { file: "sop.html", check: "#sop-doc", expectFilled: true },
  { file: "analysis.html", check: "#an-doc", expectFilled: true }
];

(async () => {
  const browser = await chromium.launch();
  const results = [];
  for (const p of pages) {
    const ctx = await browser.newContext();
    const page = await ctx.newPage();
    const errors = [];
    page.on("console", m => { if (m.type() === "error") errors.push(m.text()); });
    page.on("pageerror", e => errors.push("PAGEERROR: " + e.message));
    const url = BASE + "/" + p.file;
    await page.goto(url, { waitUntil: "networkidle" });
    // 等待渲染
    await page.waitForTimeout(1200);
    const filled = await page.evaluate(sel => {
      const el = document.querySelector(sel);
      return el ? (el.children.length > 0 || el.innerHTML.trim().length > 0) : false;
    }, p.check);
    const navActive = await page.evaluate(() => {
      const a = document.querySelector(".nav-main a.active");
      return a ? a.getAttribute("href") : null;
    });
    const modalOK = await page.evaluate(() => !!document.querySelector("#modal"));
    results.push({ file: p.file, errors, filled, check: p.check, navActive, modalOK });
    await ctx.close();
  }

  // 跨页跳转测试：worldview 图例点击 -> browse.html?cat=...
  const ctx = await browser.newContext();
  const page = await ctx.newPage();
  const navErrors = [];
  page.on("pageerror", e => navErrors.push(e.message));
  await page.goto(BASE + "/worldview.html", { waitUntil: "networkidle" });
  await page.waitForTimeout(800);
  await page.click("#legend .chip");
  await page.waitForTimeout(800);
  const afterJump = page.url();
  const browseRendered = await page.evaluate(() => document.querySelector("#card-grid") && document.querySelector("#card-grid").children.length > 0);
  results.push({ file: "CROSS:legend->browse", errors: navErrors, jumpUrl: afterJump, browseRendered });

  // 中间技术「查看来龙去脉」-> lineage.html?id=...
  await page.goto(BASE + "/midtech.html", { waitUntil: "networkidle" });
  await page.waitForTimeout(800);
  await page.click("#mid-doc [data-lineage]");
  await page.waitForTimeout(1000);
  const lineageUrl = page.url();
  const lineageRendered = await page.evaluate(() => document.querySelector("#lineage-svg") && document.querySelector("#lineage-svg").children.length > 0);
  results.push({ file: "CROSS:midtech->lineage", jumpUrl: lineageUrl, lineageRendered, errors: navErrors });

  await browser.close();

  let pass = true;
  results.forEach(r => {
    const ok = (r.errors && r.errors.length === 0) && (r.filled !== false) && (r.browseRendered !== false) && (r.lineageRendered !== false);
    if (!ok) pass = false;
    console.log(JSON.stringify(r));
  });
  console.log("\n=== TOTAL:", results.length, "PASS:", pass ? "ALL" : "SOME FAILED", "===");
  process.exit(pass ? 0 : 1);
})();
