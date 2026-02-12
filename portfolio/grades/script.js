const rowsEl = document.getElementById("rows");
const addRowBtn = document.getElementById("addRow");
const clearRowsBtn = document.getElementById("clearRows");
const calcBtn = document.getElementById("calcBtn");
const avgEl = document.getElementById("avg");
const wavgEl = document.getElementById("wavg");
const gpaEl = document.getElementById("gpa");
const bgCanvas = document.getElementById("bgCanvas");
const bgCtx = bgCanvas.getContext("2d");

let rafId = null;
let particles = [];

function fitCanvas() {
  const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
  bgCanvas.width = Math.floor(innerWidth * dpr);
  bgCanvas.height = Math.floor(innerHeight * dpr);
  bgCanvas.style.width = innerWidth + "px";
  bgCanvas.style.height = innerHeight + "px";
  bgCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
function spawnBurst(x, y, color) {
  const count = 16 + Math.floor(Math.random() * 12);
  for (let i = 0; i < count; i++) {
    const a = Math.random() * Math.PI * 2;
    const s = 0.6 + Math.random() * 1.8;
    particles.push({
      x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: 36 + Math.floor(Math.random() * 28), r: 2 + Math.random() * 2, color
    });
  }
}
function loop() {
  bgCtx.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.02;
    p.life -= 1;
    if (p.life <= 0) particles.splice(i, 1);
    else {
      bgCtx.beginPath();
      bgCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      bgCtx.fillStyle = p.color || "rgba(124,92,255,0.8)";
      bgCtx.fill();
    }
  }
  rafId = requestAnimationFrame(loop);
}
function letterFromScore(s) {
  if (s >= 90) return "A";
  if (s >= 80) return "B";
  if (s >= 70) return "C";
  if (s >= 60) return "D";
  return "F";
}
function pointFromScore(s) {
  if (s >= 90) return 4.0;
  if (s >= 80) return 3.0;
  if (s >= 70) return 2.0;
  if (s >= 60) return 1.0;
  return 0.0;
}
function makeRow(data) {
  const row = document.createElement("div");
  row.className = "row reveal";
  row.innerHTML = `
    <input type="text" placeholder="科目名" value="${data && data.name ? data.name : ""}">
    <input type="number" min="0" max="100" placeholder="点数" value="${data && data.score != null ? data.score : ""}">
    <input type="number" min="0" max="10" placeholder="単位" value="${data && data.credits != null ? data.credits : 1}">
    <div class="grade">-</div>
    <button class="del">削除</button>
  `;
  rowsEl.appendChild(row);
  setTimeout(() => row.classList.add("show"), 30 + rowsEl.children.length * 40);
  const inputs = row.querySelectorAll("input");
  const gradeEl = row.querySelector(".grade");
  const delBtn = row.querySelector(".del");
  function update() {
    const s = parseFloat(inputs[1].value || "0");
    gradeEl.textContent = inputs[1].value ? letterFromScore(s) : "-";
  }
  inputs.forEach((inp) => inp.addEventListener("input", update));
  delBtn.addEventListener("click", () => {
    const rect = delBtn.getBoundingClientRect();
    spawnBurst(rect.left + rect.width / 2, rect.top, "rgba(255,107,107,0.9)");
    row.remove();
    calc();
  });
  update();
}
function calc() {
  const rows = Array.from(rowsEl.children);
  let sumScore = 0;
  let sumCredits = 0;
  let sumPoints = 0;
  rows.forEach((r) => {
    const inputs = r.querySelectorAll("input");
    const s = parseFloat(inputs[1].value || "0");
    const c = parseFloat(inputs[2].value || "0");
    if (!isNaN(s)) sumScore += s;
    if (!isNaN(c)) sumCredits += c;
    sumPoints += pointFromScore(s) * (isNaN(c) ? 0 : c);
  });
  const avg = rows.length ? sumScore / rows.length : 0;
  const wavg = sumCredits ? sumScore / rows.length * (rows.length / sumCredits) : 0;
  const gpa = sumCredits ? sumPoints / sumCredits : 0;
  avgEl.textContent = Math.round(avg);
  wavgEl.textContent = wavg.toFixed(2);
  gpaEl.textContent = gpa.toFixed(2);
}
addRowBtn.addEventListener("click", () => {
  makeRow({ name: "", score: "", credits: 1 });
});
clearRowsBtn.addEventListener("click", () => {
  rowsEl.innerHTML = "";
  calc();
});
calcBtn.addEventListener("click", () => {
  calc();
  const rect = calcBtn.getBoundingClientRect();
  spawnBurst(rect.left + rect.width / 2, rect.top, "rgba(124,255,167,0.9)");
});
window.addEventListener("resize", fitCanvas);
fitCanvas();
for (let i = 0; i < 4; i++) makeRow({ name: "", score: "", credits: 1 });
calc();
loop();
