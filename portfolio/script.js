/* =========================================================
   Sharma Niraj — Portfolio script
   - 日本語 / English 切り替え
   - ライト / ダーク テーマ
   - 作品・スキルの描画
   - スクロール表示アニメーション、時計、メールフォーム
   ========================================================= */

/* ---------- 文言 (i18n) ---------- */
const TEXT = {
  jp: {
    skip: "本文へスキップ",
    navName: "シャルマ ニラジュ",
    navAbout: "自己紹介",
    navWorks: "作品",
    navSkills: "スキル",
    navContact: "連絡",
    eyebrow: "2027年卒・ITエンジニア志望 — 就職活動中",
    heroTitle: "コツコツが<br />勝つコツ<span class=\"red\">。</span>",
    heroSub: "<em>small steps, every day</em> — from Kathmandu to Tokyo.",
    heroLead:
      "はじめまして、<strong>シャルマ ニラジュ</strong>です。ネパールから来日し、日本語をゼロから学び、いまは東京テクニカルカレッジ情報処理科でプログラミングを勉強しています。授業の外でも、小さな作品をひとつずつ自分で作っています。",
    ctaWorks: "作品を見る",
    ctaResume: "履歴書 PDF",
    photoAlt: "桜の下に立つシャルマ ニラジュ",
    photoCap: "東京の春 🌸",
    fSchool: "所属",
    fSchoolV: "東京テクニカルカレッジ<br />情報処理科 2年",
    fGrad: "卒業見込",
    fLang: "言語",
    fLangV: "日本語 · English · नेपाली",
    fTime: "いまの時刻",
    tokyo: "東京",
    ktm: "カトマンズ",

    aboutTitle: "自己紹介",
    aboutBig: "日本に来たばかりの頃は、授業の日本語も専門用語もほとんど分かりませんでした。",
    aboutP1:
      "それでも毎日少しずつ復習し、分からないことは先生や友人に質問し続けました。気づけば理解できる範囲が広がり、今ではクラスで責任を持って課題やグループ活動を進められるようになりました。",
    aboutP2:
      "プログラミングも同じです。すぐに分からなくても、調べて、試して、また調べる。作るときはいつも「<strong>どうすればもっと使いやすくなるか</strong>」を考えるようにしています。",
    aboutP3:
      "目標は、日本のIT企業で経験を積み、<strong>人々の生活を便利にするシステムやアプリ</strong>を作れるエンジニアになることです。",
    tl1: "ネパールで生まれる",
    tl2: "来日。日本語をゼロから学び始める",
    tl3: "東京テクニカルカレッジ 情報処理科 入学",
    tl4: "C・Java・SQL・Webを学びながら、6つの作品を自主制作",
    tl5: "卒業見込 → ITエンジニアとして社会へ",
    tr1h: "コツコツ続ける",
    tr1p: "毎日少しずつ積み重ねる。日本語もプログラミングも、この方法で苦手を得意に変えてきました。",
    tr2h: "責任感",
    tr2p: "任されたことは最後までやり切る。チームの中で、安心して任せてもらえる人でいたいです。",
    tr3h: "使う人の目線",
    tr3p: "ただ動くだけでなく、「もっと使いやすくするには？」を考えて作ります。",

    worksTitle: "作品",
    worksIntro: "すべてHTML / CSS / JavaScriptで、ゼロから自分で作りました。クリックすると実際に動かせます。",
    featured: "いちばんの自信作",

    skillsTitle: "スキル",
    nowTitle: "いま学んでいること",
    nowNote: "基礎を固めながら、作品を少しずつ増やしています。",
    skillsLegend: "● = 自己評価（5段階）。学生として正直に付けています。",

    contactTitle: "一緒に<br />働きませんか<span class=\"red\">？</span>",
    contactLead: "面談・インターン・会社説明会のご案内など、お気軽にご連絡ください。",
    chipResume: "履歴書 PDF ↗",
    formTo: "宛先：シャルマ ニラジュ",
    formHint: "送信するとメールアプリが開きます",
    fName: "お名前・会社名",
    fSubject: "件名",
    fMsg: "メッセージ",
    fSend: "メールを作成する",
    nameRequired: "お名前を入力してください。",
    mailOpened: "メールアプリを開きました。届かない場合は上のアドレスへ直接お送りください。",
    defaultSubject: "ポートフォリオを拝見しました",

    footerMade: "東京で、HTML・CSS・JavaScriptを使って手作り。",
    toTop: "↑ トップへ",
    docTitle: "シャルマ ニラジュ — ポートフォリオ",
  },

  en: {
    skip: "Skip to content",
    navName: "Sharma Niraj",
    navAbout: "About",
    navWorks: "Works",
    navSkills: "Skills",
    navContact: "Contact",
    eyebrow: "Class of 2027 · Aspiring IT engineer — open to offers",
    heroTitle: "Small steps,<br />every day<span class=\"red\">.</span>",
    heroSub: "<em>Small steps, every day</em> — from Kathmandu to Tokyo.",
    heroLead:
      "Hi, I'm <strong>Sharma Niraj</strong>. I came to Japan from Nepal, learned Japanese from zero, and now study programming in the Information Processing course at Tokyo Technical College. Outside class, I build small projects one by one.",
    ctaWorks: "See my work",
    ctaResume: "Resume PDF",
    photoAlt: "Sharma Niraj standing under cherry blossoms",
    photoCap: "Spring in Tokyo 🌸",
    fSchool: "School",
    fSchoolV: "Tokyo Technical College<br />Information Processing, Yr 2",
    fGrad: "Graduating",
    fLang: "Languages",
    fLangV: "日本語 · English · नेपाली",
    fTime: "Right now",
    tokyo: "Tokyo",
    ktm: "Kathmandu",

    aboutTitle: "About",
    aboutBig: "When I first arrived in Japan, I could barely follow the Japanese in class — let alone the technical terms.",
    aboutP1:
      "So I reviewed a little every day and kept asking teachers and friends whenever I got stuck. Slowly, what I could understand grew. Today I take responsibility for assignments and group work in my class.",
    aboutP2:
      "Programming works the same way: look it up, try it, look it up again. Whenever I build something, I ask myself <strong>“how could this be easier to use?”</strong>",
    aboutP3:
      "My goal is to grow at a Japanese IT company and become an engineer who builds <strong>systems and apps that make everyday life easier</strong>.",
    tl1: "Born in Nepal",
    tl2: "Moved to Japan and started learning Japanese from zero",
    tl3: "Entered Tokyo Technical College, Information Processing",
    tl4: "Studying C, Java, SQL and web — and built 6 projects on my own",
    tl5: "Graduating → starting my career as an IT engineer",
    tr1h: "Consistency",
    tr1p: "A little every day. That's how I turned both Japanese and programming from weaknesses into strengths.",
    tr2h: "Responsibility",
    tr2p: "I finish what I'm given. I want to be the teammate people can rely on.",
    tr3h: "User's point of view",
    tr3p: "Not just “does it work?” — but “how can it be easier to use?”",

    worksTitle: "Works",
    worksIntro: "Everything here was built from scratch with HTML, CSS and JavaScript. Click any project to try it live.",
    featured: "Proudest build",

    skillsTitle: "Skills",
    nowTitle: "Currently learning",
    nowNote: "Building strong fundamentals — and shipping a little more every month.",
    skillsLegend: "● = self-assessment out of 5. Honest student ratings.",

    contactTitle: "Let's work<br />together<span class=\"red\">.</span>",
    contactLead: "Interviews, internships, company info sessions — I'd love to hear from you.",
    chipResume: "Resume PDF ↗",
    formTo: "To: Sharma Niraj",
    formHint: "Sending opens your email app",
    fName: "Your name / company",
    fSubject: "Subject",
    fMsg: "Message",
    fSend: "Write an email",
    nameRequired: "Please enter your name.",
    mailOpened: "Your email app should open now. If not, write to the address above directly.",
    defaultSubject: "Saw your portfolio",

    footerMade: "Handmade in Tokyo with HTML, CSS & JavaScript.",
    toTop: "↑ Back to top",
    docTitle: "Sharma Niraj — Portfolio",
  },
};

/* ---------- 作品 ---------- */
const PROJECTS = [
  {
    key: "festival",
    size: "feature",
    title: { jp: "ネパール祭りガイド", en: "Nepal Festival Guide" },
    desc: {
      jp: "ダサイン、ティハール、ホーリーなど、ふるさとネパールの10の祭りを日英2か国語で紹介するWebサイト。自分の文化を日本の人に伝えたくて作りました。",
      en: "A bilingual (JP/EN) website introducing 10 festivals from my home country — Dashain, Tihar, Holi and more. I made it to share my culture with people in Japan.",
    },
    tags: ["HTML", "CSS", "JavaScript", "13 pages", "JP / EN"],
    link: "festival/index.html",
    img: "images/fes.png",
  },
  {
    key: "typing",
    title: { jp: "タイピング練習", en: "Typing Practice" },
    desc: {
      jp: "Monkeytype風のタイピング練習。制限時間を選んで、WPMと正確さをリアルタイムで計測。",
      en: "A Monkeytype-style trainer. Pick a time limit and see WPM and accuracy live.",
    },
    tags: ["JavaScript", "keydown", "WPM"],
    link: "typing/index.html",
    img: "images/TYPING.png",
  },
  {
    key: "grades",
    title: { jp: "成績計算ツール", en: "Grade Calculator" },
    desc: {
      jp: "科目・点数・単位を入力すると、平均点・加重平均・GPAを自動で計算。",
      en: "Enter subjects, scores and credits to get the average, weighted average and GPA.",
    },
    tags: ["JavaScript", "DOM"],
    link: "grades/index.html",
    img: "images/grades.png",
  },
  {
    key: "todo",
    title: { jp: "ToDoアプリ", en: "ToDo App" },
    desc: {
      jp: "ブラウザに保存されるタスク管理。リロードしても消えず、完了したタスクはまとめて削除。",
      en: "A task manager that saves to the browser — survives reloads, and clears finished tasks in one click.",
    },
    tags: ["JavaScript", "localStorage"],
    link: "todo/index.html",
    img: "images/todo.jpg",
  },
  {
    key: "calc",
    title: { jp: "電卓アプリ", en: "Calculator" },
    desc: {
      jp: "はじめて作った作品。四則演算と％、キーボード入力にも対応。",
      en: "My very first project. Basic math and %, with keyboard support.",
    },
    tags: ["HTML", "CSS", "JS"],
    link: "calculator/index.html",
    img: "images/cal.png",
    contain: true,
  },
  {
    key: "dice",
    title: { jp: "サイコロゲーム", en: "Dice Game" },
    desc: {
      jp: "ボタンを押すとランダムにサイコロを振るミニゲーム。",
      en: "A mini game that rolls a random die at the press of a button.",
    },
    tags: ["Math.random", "JS"],
    link: "サイコロゲーム/index.html",
    img: "images/sai.png",
    contain: true,
  },
];

/* ---------- スキル（level: 5段階の自己評価） ---------- */
const SKILLS = [
  {
    name: "HTML / CSS",
    level: 4,
    note: { jp: "6つの作品をすべてゼロから制作。レスポンシブ対応も。", en: "Built all 6 projects from scratch, including responsive layouts." },
  },
  {
    name: "JavaScript",
    level: 3,
    note: { jp: "DOM操作・イベント処理・localStorage。", en: "DOM manipulation, events, localStorage." },
  },
  {
    name: "Java / Servlet",
    level: 3,
    note: { jp: "授業でオブジェクト指向とServletの基礎を学習中。", en: "Learning OOP and Servlet basics in class." },
  },
  {
    name: { jp: "C言語", en: "C" },
    level: 3,
    note: { jp: "プログラミングの基礎（変数・制御構文・配列・関数）。", en: "Programming fundamentals: control flow, arrays, functions." },
  },
  {
    name: "Oracle SQL",
    level: 3,
    note: { jp: "SELECT・JOIN・テーブル設計の基本。", en: "SELECT, JOIN, and basic table design." },
  },
  {
    name: { jp: "ネットワーク基礎", en: "Networking basics" },
    level: 2,
    note: { jp: "TCP/IP・IPアドレスなど、基本的な仕組み。", en: "TCP/IP, IP addressing and the fundamentals." },
  },
  {
    name: "Git / GitHub",
    level: 2,
    note: { jp: "このポートフォリオもGitで管理しています。", en: "This portfolio itself is version-controlled with Git." },
  },
];

const STUDY = {
  jp: [
    "プログラミング基礎（C言語 / Java / Servlet）",
    "情報処理（データの扱い・ネットワーク）",
    "Web基礎（HTML / CSS / JavaScript）",
    "データベース（Oracle SQL）",
    "作品づくりで実践 — 次は小さなWebアプリをJavaで",
  ],
  en: [
    "Programming basics (C / Java / Servlet)",
    "Information processing (data handling & networking)",
    "Web fundamentals (HTML / CSS / JavaScript)",
    "Databases (Oracle SQL)",
    "Learning by building — next up: a small Java web app",
  ],
};

/* ---------- helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const root = document.documentElement;
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const pick = (v, lang) => (typeof v === "string" ? v : v[lang]);
const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const store = {
  get(k) {
    try { return localStorage.getItem(k); } catch (e) { return null; }
  },
  set(k, v) {
    try { localStorage.setItem(k, v); } catch (e) {}
  },
};

let lang = store.get("site-lang") === "en" ? "en" : "jp";

/* ---------- render ---------- */
function renderWorks() {
  const list = $("#worksList");
  list.innerHTML = PROJECTS.map((p, i) => {
    const t = esc(pick(p.title, lang));
    const cls = ["work", "reveal", p.size ? "work--" + p.size : ""].join(" ").trim();
    const badge = p.size === "feature" ? `<span class="work__badge">★ ${esc(TEXT[lang].featured)}</span>` : "";
    return `
      <a class="${cls}" href="${encodeURI(p.link)}">
        <div class="work__thumb${p.contain ? " is-contain" : ""}">
          <img src="${p.img}" alt="${t}" loading="lazy" />
          <span class="work__no">${String(i + 1).padStart(2, "0")}</span>
          ${badge}
        </div>
        <div class="work__body">
          <h3 class="work__title">${t}
            <span class="work__arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
          </h3>
          <p class="work__desc">${esc(pick(p.desc, lang))}</p>
          <div class="work__tags">${p.tags.map((x) => `<span>${esc(x)}</span>`).join("")}</div>
        </div>
      </a>`;
  }).join("");
  observe($$(".reveal", list));
}

function renderSkills() {
  const list = $("#skillsList");
  list.innerHTML = SKILLS.map((s) => {
    const dots = Array.from({ length: 5 }, (_, i) => `<i class="${i < s.level ? "on" : ""}" style="transition-delay:${i * 70}ms"></i>`).join("");
    return `
      <div class="skill">
        <span class="skill__name">${esc(pick(s.name, lang))}</span>
        <span class="skill__dots" role="img" aria-label="${s.level} / 5">${dots}</span>
        <span class="skill__note">${esc(pick(s.note, lang))}</span>
      </div>`;
  }).join("");

  $("#studyList").innerHTML = STUDY[lang].map((x) => `<li>${esc(x)}</li>`).join("");
}

function splitTitle() {
  // 見出しを1文字ずつアニメーション
  const h = $("#heroTitle");
  if (reduceMotion) return;
  let n = 0;
  const walk = (node) => {
    Array.from(node.childNodes).forEach((c) => {
      if (c.nodeType === 3) {
        const frag = document.createDocumentFragment();
        for (const ch of c.textContent) {
          if (ch.trim() === "") {
            frag.appendChild(document.createTextNode(ch));
            continue;
          }
          const s = document.createElement("span");
          s.className = "ch";
          s.textContent = ch;
          s.style.animationDelay = 120 + n++ * 55 + "ms";
          frag.appendChild(s);
        }
        c.replaceWith(frag);
      } else if (c.nodeType === 1 && c.tagName !== "BR") {
        walk(c);
      }
    });
  };
  walk(h);
}

function applyLang(next, first) {
  lang = next;
  const T = TEXT[lang];
  root.setAttribute("lang", lang === "en" ? "en" : "ja");
  document.title = T.docTitle;
  $$("[data-i18n]").forEach((el) => {
    const v = T[el.dataset.i18n];
    if (v != null) el.innerHTML = v;
  });
  $$("[data-i18n-alt]").forEach((el) => {
    const v = T[el.dataset.i18nAlt];
    if (v != null) el.alt = v;
  });
  $$(".seg button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  renderWorks();
  renderSkills();
  splitTitle();
  // 描画し直した要素はすぐ表示
  if (!first) $$(".reveal").forEach((el) => el.classList.add("is-in"));
  if (!first) $("#skillsList").classList.add("is-in");
  store.set("site-lang", lang);
}

/* ---------- reveal on scroll ---------- */
const io =
  "IntersectionObserver" in window
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("is-in");
              if (e.target.id === "skillsList") e.target.classList.add("is-in");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      )
    : null;

function observe(els) {
  els.forEach((el, i) => {
    if (!io) return el.classList.add("is-in");
    if (el.classList.contains("work")) el.style.transitionDelay = (i % 3) * 90 + "ms";
    io.observe(el);
  });
}

/* ---------- clocks ---------- */
function tickClocks() {
  const fmt = (tz) =>
    new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: tz }).format(new Date());
  try {
    $("#clockTokyo").textContent = fmt("Asia/Tokyo");
    $("#clockKtm").textContent = fmt("Asia/Kathmandu");
  } catch (e) {}
}

/* ---------- init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  $("#year").textContent = new Date().getFullYear();

  applyLang(lang, true);
  observe($$(".reveal"));

  // スキルのドット
  const skills = $("#skillsList");
  if (io) io.observe(skills);
  else skills.classList.add("is-in");

  // 言語
  $$(".seg button").forEach((b) =>
    b.addEventListener("click", () => {
      if (b.dataset.lang !== lang) applyLang(b.dataset.lang);
    })
  );

  // テーマ
  $("#themeToggle").addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    $('meta[name="theme-color"]').setAttribute("content", next === "dark" ? "#12110f" : "#f4f0e8");
    store.set("site-theme", next);
  });
  if (root.getAttribute("data-theme") === "dark") {
    $('meta[name="theme-color"]').setAttribute("content", "#12110f");
  }

  // ナビ：スクロールで線を出す＋現在のセクションを強調
  const nav = $("#nav");
  const onScroll = () => nav.classList.toggle("is-scrolled", scrollY > 8);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (io) {
    const links = $$(".nav__links a");
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            links.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + e.target.id));
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ["about", "works", "skills", "contact"].forEach((id) => spy.observe(document.getElementById(id)));
  }

  // 時計
  tickClocks();
  setInterval(tickClocks, 15000);

  // 連絡フォーム → メールアプリを開く（本当に届く）
  $("#contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const T = TEXT[lang];
    const nameEl = $("#nameField");
    const status = $("#formStatus");
    const name = nameEl.value.trim();
    status.classList.remove("ok");
    if (!name) {
      status.textContent = T.nameRequired;
      nameEl.classList.add("is-error");
      nameEl.focus();
      return;
    }
    nameEl.classList.remove("is-error");
    const subject = $("#subjectField").value.trim() || T.defaultSubject;
    const body = $("#messageField").value.trim() + "\n\n— " + name;
    location.href =
      "mailto:ns25304019@ga.ttc.ac.jp?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    status.textContent = T.mailOpened;
    status.classList.add("ok");
  });
});
