const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const clearDoneBtn = document.getElementById("clearDoneBtn");
const listEl = document.getElementById("todoList");
const totalEl = document.getElementById("total");
const doneEl = document.getElementById("done");
const bgCanvas = document.getElementById("bgCanvas");
const bgCtx = bgCanvas.getContext("2d");

let items = [];
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
function load() {
  try {
    items = JSON.parse(localStorage.getItem("todo-items") || "[]");
  } catch (e) {
    items = [];
  }
}
function save() {
  try {
    localStorage.setItem("todo-items", JSON.stringify(items));
  } catch (e) {}
}
function spawnBurst(x, y, color) {
  const count = 12 + Math.floor(Math.random() * 10);
  for (let i = 0; i < count; i++) {
    const a = Math.random() * Math.PI * 2;
    const s = 0.6 + Math.random() * 1.6;
    particles.push({
      x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: 34 + Math.floor(Math.random() * 22), r: 2 + Math.random() * 2, color
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
function stats() {
  totalEl.textContent = items.length;
  doneEl.textContent = items.filter((i) => i.done).length;
}
function render() {
  listEl.innerHTML = "";
  items.forEach((it, i) => {
    const li = document.createElement("li");
    li.className = "item reveal" + (it.done ? " doneItem" : "");
    li.innerHTML = `
      <div class="txt">${it.text}</div>
      <div class="act">
        <button data-act="toggle">完了</button>
        <button data-act="del">削除</button>
      </div>
    `;
    listEl.appendChild(li);
    setTimeout(() => { li.classList.add("show"); }, 50 + i * 60);
    li.querySelector('[data-act="toggle"]').addEventListener("click", (e) => {
      it.done = !it.done;
      save();
      const rect = e.target.getBoundingClientRect();
      spawnBurst(rect.left, rect.top, it.done ? "rgba(124,255,167,0.9)" : "rgba(255,107,107,0.9)");
      render();
      stats();
    });
    li.querySelector('[data-act="del"]').addEventListener("click", (e) => {
      const rect = e.target.getBoundingClientRect();
      spawnBurst(rect.left, rect.top, "rgba(255,107,107,0.9)");
      items.splice(i, 1);
      save();
      render();
      stats();
    });
  });
}
addBtn.addEventListener("click", () => {
  const val = input.value.trim();
  if (!val) return;
  items.unshift({ text: val, done: false });
  input.value = "";
  save();
  render();
  stats();
  const rect = addBtn.getBoundingClientRect();
  spawnBurst(rect.left + rect.width / 2, rect.top, "rgba(124,92,255,0.9)");
});
clearDoneBtn.addEventListener("click", () => {
  items = items.filter((i) => !i.done);
  save();
  render();
  stats();
});
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addBtn.click();
});
window.addEventListener("resize", fitCanvas);
fitCanvas();
load();
render();
stats();
loop();
