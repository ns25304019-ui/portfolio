const wordsPool = [
  "hello","world","program","code","array","object","function","class","public","static",
  "return","const","let","var","input","output","debug","error","compile","run",
  "network","http","fetch","json","server","client","logic","state","render","event",
  "string","number","boolean","null","true","false","while","for","if","else",
  "switch","case","break","continue","map","filter","reduce","index","value","length",
  "design","ui","ux","style","grid","flex","node","npm","java","oracle"
];

const wordsEl = document.getElementById("words");
const timeEl = document.getElementById("time");
const wpmEl = document.getElementById("wpm");
const accEl = document.getElementById("acc");
const hintEl = document.getElementById("hint");
const startBtn = document.getElementById("startBtn");
const durationSel = document.getElementById("duration");
const bgCanvas = document.getElementById("bgCanvas");
const bgCtx = bgCanvas.getContext("2d");

let chars = [];
let activeIndex = 0;
let started = false;
let finished = false;
let timer = null;
let timeLeft = parseInt(durationSel.value, 10);
let typed = 0;
let correct = 0;
let rafId = null;
let particles = [];

function randomWords(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(wordsPool[Math.floor(Math.random() * wordsPool.length)]);
  }
  return arr.join(" ");
}

function fitCanvas() {
  const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
  bgCanvas.width = Math.floor(innerWidth * dpr);
  bgCanvas.height = Math.floor(innerHeight * dpr);
  bgCanvas.style.width = innerWidth + "px";
  bgCanvas.style.height = innerHeight + "px";
  bgCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
function spawnBurst(x, y) {
  const count = 10 + Math.floor(Math.random() * 8);
  for (let i = 0; i < count; i++) {
    const a = Math.random() * Math.PI * 2;
    const s = 0.6 + Math.random() * 1.6;
    particles.push({
      x,
      y,
      vx: Math.cos(a) * s,
      vy: Math.sin(a) * s,
      life: 30 + Math.floor(Math.random() * 20),
      r: 2 + Math.random() * 2,
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
      bgCtx.fillStyle = "rgba(124,92,255,0.8)";
      bgCtx.fill();
    }
  }
  rafId = requestAnimationFrame(loop);
}

function renderWords() {
  const text = randomWords(80);
  wordsEl.innerHTML = "";
  chars = [];
  for (let i = 0; i < text.length; i++) {
    const span = document.createElement("span");
    span.className = "char";
    span.textContent = text[i];
    chars.push(span);
    wordsEl.appendChild(span);
  }
  activeIndex = 0;
  if (chars.length) chars[0].classList.add("active");
}

function reset() {
  started = false;
  finished = false;
  typed = 0;
  correct = 0;
  timeLeft = parseInt(durationSel.value, 10);
  timeEl.textContent = timeLeft;
  wpmEl.textContent = "0";
  accEl.textContent = "0%";
  if (timer) clearInterval(timer);
  timer = null;
  hintEl.textContent = "タイプすると開始します";
  wordsEl.classList.remove("done");
  renderWords();
}

function startTimer() {
  if (timer) return;
  timer = setInterval(() => {
    timeLeft -= 1;
    if (timeLeft <= 0) {
      timeLeft = 0;
      finish();
    }
    timeEl.textContent = timeLeft;
    updateStats();
  }, 1000);
}

function updateStats() {
  const elapsed = parseInt(durationSel.value, 10) - timeLeft;
  const minutes = elapsed > 0 ? elapsed / 60 : 1 / 60;
  const wpm = Math.floor((correct / 5) / minutes);
  const acc = typed > 0 ? Math.round((correct / typed) * 100) : 0;
  wpmEl.textContent = String(wpm);
  accEl.textContent = acc + "%";
}

function finish() {
  if (finished) return;
  finished = true;
  if (timer) clearInterval(timer);
  timer = null;
  wordsEl.classList.add("done");
  updateStats();
}

function onKey(e) {
  if (finished) return;
  const key = e.key;
  if (!started) {
    started = true;
    hintEl.textContent = "";
    startTimer();
  }
  if (key.length === 1 || key === " ") {
    const ch = key;
    const cur = chars[activeIndex];
    if (!cur) return;
    typed += 1;
    if (cur.textContent === ch) {
      cur.classList.remove("wrong");
      cur.classList.add("correct");
      correct += 1;
      const rect = cur.getBoundingClientRect();
      spawnBurst(rect.left + rect.width / 2, rect.top + rect.height / 2);
    } else {
      cur.classList.remove("correct");
      cur.classList.add("wrong");
      wordsEl.classList.add("shake");
      setTimeout(() => wordsEl.classList.remove("shake"), 160);
    }
    cur.classList.remove("active");
    activeIndex += 1;
    if (chars[activeIndex]) chars[activeIndex].classList.add("active");
    updateStats();
    e.preventDefault();
    return;
  }
  if (key === "Backspace") {
    const prev = activeIndex - 1;
    if (prev >= 0) {
      const el = chars[prev];
      if (el.classList.contains("correct")) {
        correct -= 1;
      }
      el.classList.remove("correct");
      el.classList.remove("wrong");
      el.classList.add("active");
      if (chars[activeIndex]) chars[activeIndex].classList.remove("active");
      activeIndex = prev;
      typed = Math.max(0, typed - 1);
      updateStats();
    }
    e.preventDefault();
    return;
  }
}

startBtn.addEventListener("click", () => {
  reset();
});
durationSel.addEventListener("change", () => {
  reset();
});

window.addEventListener("keydown", onKey);
reset();
fitCanvas();
loop();
window.addEventListener("resize", fitCanvas);
