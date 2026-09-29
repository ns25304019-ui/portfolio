(function () {
  "use strict";

  /* =========================================================
     Content dictionary — JA / EN
     ========================================================= */
  var i18n = {
    ja: {
      "hero-name": "Niraj Sharma — 専門学校東京テクニカルカレッジ 情報処理科学科",
      "hero-title": "Software Developer",
      "hero-sub": "システム・Web開発の基礎を習得し、実務に活かせるスキルを磨いています。",
      "nav-works": "Works",
      "nav-about": "About",
      "nav-contact": "Contact",
      "works-head": "Works",
      "works-desc": "授業および自主学習で制作したWeb・プログラミング作品です。",
      "about-head": "About",
      "about-p1": "はじめまして、シャルマ ニラジュです。専門学校東京テクニカルカレッジの情報処理科学科で、プログラミングとシステム開発の基礎を学んでいます。",
      "about-p2": "授業で学んだ内容をもとに、JavaScriptを中心としたWebアプリケーション制作に取り組み、DOM操作・状態管理・UI設計など、実務に近い形で手を動かしながら理解を深めています。",
      "about-p3": "新しい技術を学ぶことが好きで、小さな作品を一つずつ完成させながら、着実にスキルを積み重ねています。今後はチーム開発やより実践的なプロジェクトにも挑戦していきたいと考えています。",
      "about-meta": "Tokyo, Japan · 情報処理科学科 在学中",
      "about-btn": "お問い合わせはこちら",
      "contact-head": "Contact",
      "contact-desc": "ご連絡・お問い合わせは下記メールアドレスまでお願いいたします。",
      "contact-email-btn": "メール",
      "footer-text": "2026 Niraj Sharma — Built with HTML, CSS & JavaScript",
      "lang-label": "言語"
    },
    en: {
      "hero-name": "Niraj Sharma — Tokyo Technical College, Dept. of Information Processing Science",
      "hero-title": "Software Developer",
      "hero-sub": "Building a solid foundation in systems and web development, one project at a time.",
      "nav-works": "Works",
      "nav-about": "About",
      "nav-contact": "Contact",
      "works-head": "Works",
      "works-desc": "Web and programming projects built through coursework and self-study.",
      "about-head": "About",
      "about-p1": "Hi, I'm Niraj Sharma. I'm studying programming and systems development at Tokyo Technical College's Department of Information Processing Science.",
      "about-p2": "I build web applications mostly with JavaScript, applying what I learn in class to real hands-on practice — DOM manipulation, state management, and interface design.",
      "about-p3": "I enjoy picking up new tools and finishing small projects one at a time. Going forward, I want to take on team-based development and more practical, real-world projects.",
      "about-meta": "Tokyo, Japan · Information Processing Science, in progress",
      "about-btn": "Get in touch",
      "contact-head": "Contact",
      "contact-desc": "Feel free to reach out through any of the channels below.",
      "contact-email-btn": "Email",
      "footer-text": "2026 Niraj Sharma — Built with HTML, CSS & JavaScript",
      "lang-label": "Language"
    }
  };

  var htmlEl = document.getElementById("html-lang");
  var langSelect = document.getElementById("lang-select");

  function applyLang(lang) {
    var dict = i18n[lang] || i18n.ja;
    Object.keys(dict).forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      el.textContent = dict[id];
    });
    htmlEl.setAttribute("lang", lang);
    document.title = lang === "en"
      ? "Niraj Sharma | Portfolio — Tokyo Technical College"
      : "シャルマニラジュ | Portfolio — 専門学校東京テクニカルカレッジ 情報処理科学科";
    localStorage.setItem("site-lang", lang);
  }

  var savedLang = null;
  try { savedLang = localStorage.getItem("site-lang"); } catch (e) {}
  var initialLang = savedLang || "ja";
  if (langSelect) langSelect.value = initialLang;
  applyLang(initialLang);

  if (langSelect) {
    langSelect.addEventListener("change", function () {
      applyLang(this.value);
    });
  }

  /* =========================================================
     Theme toggle (dark default, light optional)
     ========================================================= */
  var themeBtn = document.getElementById("theme-toggle");
  var root = document.documentElement;

  function applyTheme(theme) {
    if (theme === "light") {
      root.setAttribute("data-theme", "light");
      if (themeBtn) themeBtn.textContent = i18n[langSelect ? langSelect.value : "ja"].lang === undefined ? "Dark" : "Dark";
    } else {
      root.removeAttribute("data-theme");
      if (themeBtn) themeBtn.textContent = "Light";
    }
    try { localStorage.setItem("site-theme", theme); } catch (e) {}
  }

  var savedTheme = null;
  try { savedTheme = localStorage.getItem("site-theme"); } catch (e) {}
  applyTheme(savedTheme || "dark");

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
      applyTheme(current === "light" ? "dark" : "light");
    });
  }

  /* =========================================================
     Mobile nav toggle
     ========================================================= */
  var navToggle = document.querySelector(".nav-toggle");
  var navLinks = document.querySelector(".nav-links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });
    navLinks.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { navLinks.classList.remove("open"); });
    });
  }

  /* =========================================================
     Email reveal
     ========================================================= */
  var emailBtn = document.getElementById("contact-email-btn");
  var emailLink = document.getElementById("contact-email");
  if (emailBtn && emailLink) {
    emailBtn.addEventListener("click", function () {
      emailLink.classList.toggle("visible");
      emailLink.classList.toggle("contact-email-hidden");
    });
  }

  /* =========================================================
     Ambient background — particle network
     Subtle, professional motion: soft dots drifting, thin
     lines connecting nearby ones. Pauses for reduced-motion.
     ========================================================= */
  (function initParticleNetwork() {
    var canvas = document.getElementById("bg-canvas");
    if (!canvas) return;
    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    var ctx = canvas.getContext("2d");
    var particles = [];
    var w, h, dpr;
    var LINK_DIST = 150;
    var COUNT_DENSITY = 16000; // px^2 per particle

    function colorFor(varName, fallback) {
      var v = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
      return v || fallback;
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth = window.innerWidth;
      h = canvas.clientHeight = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      var count = Math.max(24, Math.min(90, Math.floor((w * h) / COUNT_DENSITY)));
      particles = [];
      for (var i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: Math.random() * 1.4 + 0.6,
          accent: Math.random() < 0.12
        });
      }
    }

    function step() {
      ctx.clearRect(0, 0, w, h);
      var lineColor = colorFor("--hairline", "#2b3140");
      var dotColor = colorFor("--slate", "#8891a6");
      var accentColor = colorFor("--amber", "#e8a33d");

      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        for (var j = i + 1; j < particles.length; j++) {
          var q = particles[j];
          var dx = p.x - q.x, dy = p.y - q.y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            ctx.globalAlpha = (1 - dist / LINK_DIST) * 0.5;
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      for (var k = 0; k < particles.length; k++) {
        var pt = particles[k];
        ctx.beginPath();
        ctx.fillStyle = pt.accent ? accentColor : dotColor;
        ctx.globalAlpha = pt.accent ? 0.9 : 0.55;
        ctx.arc(pt.x, pt.y, pt.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      if (!reduceMotion) requestAnimationFrame(step);
    }

    resize();
    window.addEventListener("resize", resize);
    step();
    if (reduceMotion) step(); // draw one static frame only
  })();

  /* =========================================================
     Scroll reveal
     ========================================================= */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in-view"); });
  }
})();
