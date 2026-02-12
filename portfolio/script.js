 const data = {
        brandJP: "シャルマ ニラジュ — 就職活動用ポートフォリオ",
        brandEN: "Sharma Niraj — Job Hunting Portfolio",
        nameJP: "シャルマ ニラジュ（情報処理科 1年）です。ITエンジニアを目指しています。",
        nameEN:
          "I am Sharma Niraj (Year 1, Information Processing). Aspiring IT engineer.",
        leadJP:
          "基礎力・継続力・責任感を武器に、Web・プログラミング・ネットワークの分野で成長中です。",
        leadEN:
          "Focused on fundamentals, consistency, and responsibility. Growing in web, programming, and networking.",
        skillsTitleJP: "スキル",
        skillsTitleEN: "Skills",
        roleJP: "情報処理科 1年生（2年制）",
        roleEN: "1st year — Information Processing",
        schoolJP: "専門学校東京テクニカルカレッジ／情報処理科",
        schoolEN: "Tokyo Technical College — Information Processing",
        studyTitleJP: "1年生の勉強プラン（例）",
        studyTitleEN: "Study Plan (Year 1 example)",
        studyListJP: [
          "プログラミング基礎（C言語 / Java入門）",
          "情報処理（データの扱い・ネットワークの基礎）",
          "Web基礎（HTML / CSS / JavaScript）",
          "データベース（Oracle SQL 基礎）",
          "小さな作品で実践（電卓・サイコロ・祭り紹介ページ）",
        ],
        studyListEN: [
          "Programming basics (C / Intro to Java)",
          "Information processing (data handling & basic networking)",
          "Web fundamentals (HTML / CSS / JavaScript)",
          "Databases (Oracle SQL fundamentals)",
          "Practice with small projects (calculator, dice game, festival page)",
        ],
        studyNoteJP:
          "今は基礎を固めて、作品を少しずつ増やすフェーズです。良い習慣を持つことが大事。",
        studyNoteEN:
          "Currently focusing on fundamentals and gradually increasing project work. Good habits matter.",
        projectsTitleJP: "はじめての作品（例）",
        projectsTitleEN: "Sample Projects (examples)",
        contactTitleJP: "連絡(デモ)",
        contactTitleEN: "Contact (demo)",
        footerJP: "シャルマニラジュ — 1年生向けページ",
        footerEN: "Niraj Sharma — Year 1 Student Page",
        socialsJP: ["GitHub", "Facebook", "Email"],
        socialsEN: ["GitHub", "Facebook", "Email"],
        
        projects: [
          {
            titleJP: "電卓アプリ",
            titleEN: "Calculator App",
            descJP: "HTML/CSS/JSで作ったシンプルな電卓",
            descEN: "Simple calculator built with HTML/CSS/JS",
            link: "calculator/index.html",
            img: "images/cal.png",
          },
          {
            titleJP: "サイコロゲーム",
            titleEN: "Dice Game",
            descJP: "ランダムでサイコロを振るゲーム",
            descEN: "Small dice-rolling game",
            link: "サイコロゲーム/index.html",
            img: "images/sai.png",
          },
          {
            titleJP: "祭り紹介ページ",
            titleEN: "Festival Page",
            descJP: "自分の国の祭りを紹介するページ",
            descEN: "A page introducing a local festival",
            link: "festival/index.html",
            img: "images/fes.png",
          },
          {
            titleJP: "タイピング練習",
            titleEN: "Typing Practice",
            descJP: "MonkeyType風のタイピング練習サイト",
            descEN: "Monkeytype-style typing practice site",
            link: "typing/index.html",
            img: "images/TYPING.png",
          },
          {
            titleJP: "ToDoアプリ",
            titleEN: "ToDo App",
            descJP: "ローカル保存・アニメーション付きタスク管理",
            descEN: "Task manager with local storage and animations",
            link: "todo/index.html",
            img: "images/todo.jpg",
          },
          {
            titleJP: "成績計算",
            titleEN: "Grade Calculator",
            descJP: "平均・加重平均・GPAを計算する簡易ツール",
            descEN: "Simple tool to compute average, weighted average, and GPA",
            link: "grades/index.html",
            img: "images/grades.png",
          },
        ],
        skills: [
          { nameJP: "HTML/CSS", nameEN: "HTML/CSS", level: 70 },
          { nameJP: "JavaScript", nameEN: "JavaScript", level: 65 },
          { nameJP: "Java", nameEN: "Java", level: 55 },
          { nameJP: "C言語", nameEN: "C", level: 60 },
          { nameJP: "Oracle SQL", nameEN: "Oracle SQL", level: 55 },
          { nameJP: "ネットワーク基礎", nameEN: "Networking Basics", level: 50 },
        ],
        messages: {
          nameRequiredJP: "お名前を入力してください。",
          nameRequiredEN: "Please enter your name.",
          receivedJP: "メッセージを受け取りました（デモ）。",
          receivedEN: "Message received (demo).",
        },
      };


      const langSelect = document.getElementById("lang");
      const brandText = document.getElementById("brandText");
      const nameText = document.getElementById("nameText");
      const heroLead = document.getElementById("heroLead");
      const roleText = document.getElementById("roleText");
      const schoolText = document.getElementById("schoolText");
      const studyList = document.getElementById("studyList");
      const studyNote = document.getElementById("studyNote");
      const projectsList = document.getElementById("projectsList");
      const yearSpan = document.getElementById("year");
      const themeToggle = document.getElementById("themeToggle");
      const body = document.body;
      const aboutCard = document.getElementById("aboutCard");
      const bgSelect = document.getElementById("bgSelect");
      const skillsList = document.getElementById("skillsList");
      const resumeBtn = document.getElementById("resumeBtn");
      const bgSpeed = document.getElementById("bgSpeed");
      const bgIntensity = document.getElementById("bgIntensity");

      yearSpan.textContent = new Date().getFullYear();

      function renderProjects(lang) {
        projectsList.innerHTML = "";
        data.projects.forEach((p, i) => {
          const el = document.createElement("article");
          el.className = "project";
          const title = lang === "en" ? p.titleEN : p.titleJP;
          const desc = lang === "en" ? p.descEN : p.descJP;
          const visitLabel = lang === "en" ? "Visit" : "見る";
         
          const imgHtml = p.img
            ? `<a href="${p.link}" target="_blank" rel="noopener" aria-label="${title}"><div class="thumb"><img src="${p.img}" alt="${title}" onerror="this.style.display='none';this.parentNode.innerHTML='<div style=&quot;color:var(--muted);font-size:13px&quot;>No image</div>'" /></div></a>`
            : `<div class="thumb"><div style="color:var(--muted);font-size:13px">No image</div></div>`;
          el.innerHTML = `
            ${imgHtml}
            <div style="padding:10px 6px;display:flex;flex-direction:column;gap:8px">
              <h3 style="margin:0;font-size:15px">${escapeHtml(title)}</h3>
              <p style="margin:0;color:var(--muted);font-size:13px">${escapeHtml(
                desc
              )}</p>
              <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:6px">
                <a class="chip" href="${
                  p.link
                }" target="_blank" rel="noopener">${visitLabel}</a>
              </div>
            </div>
          `;
          el.style.opacity = 0;
          el.style.transform = "translateY(12px)";
          projectsList.appendChild(el);
          setTimeout(() => {
            el.style.transition = "opacity .6s ease, transform .6s ease";
            el.style.opacity = 1;
            el.style.transform = "none";
          }, 120 * i);
        });
      }

      function escapeHtml(s) {
        return (s || "")
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }

      function renderLanguage(lang) {
        if (lang === "en") {
          brandText.textContent = data.brandEN;
          nameText.textContent = data.nameEN;
          heroLead.textContent = data.leadEN;
          roleText.textContent = data.roleEN;
          schoolText.textContent = data.schoolEN;
          document.getElementById("studyPlanTitle").textContent =
            data.studyTitleEN;
          studyNote.textContent = data.studyNoteEN;
          document.getElementById("projectsTitle").textContent =
            data.projectsTitleEN;
          document.getElementById("contactTitle").textContent =
            data.contactTitleEN;
          document.getElementById("skillsTitle").textContent =
            data.skillsTitleEN;
          document.getElementById("footerName").textContent = data.footerEN;
          document.getElementById("chipGithub").textContent = data.socialsEN[0];
          document.getElementById("chipFacebook").textContent =
            data.socialsEN[1];
          document.getElementById("chipEmail").textContent = data.socialsEN[2];
          if (resumeBtn) resumeBtn.textContent = "Resume (PDF)";

         
          aboutCard.innerHTML = `
            <p>Hello — my name is <strong>Sharma Niraj</strong>, a first-year student in the Information Processing department at Tokyo Technical College. I am <strong>Nepalese</strong> and came to Japan to study and pursue a career as an IT engineer.</p>
            <p>I am passionate about programming and IT technologies, and I am currently studying <strong>C, Java, HTML/CSS, JavaScript, and Oracle SQL</strong>. Although I am still learning, I build small projects on my own to steadily improve my skills.</p>
            <p>My strengths are <strong>responsibility and persistence</strong>. I value teamwork and actively take on new technologies and challenges.</p>
            <p>In the future, I aim to gain experience at a Japanese IT company and become an engineer who contributes to society. Thank you for your consideration.</p>
          `;
        } else {
          brandText.textContent = data.brandJP;
          nameText.textContent = data.nameJP;
          heroLead.textContent = data.leadJP;
          roleText.textContent = data.roleJP;
          schoolText.textContent = data.schoolJP;
          document.getElementById("studyPlanTitle").textContent =
            data.studyTitleJP;
          studyNote.textContent = data.studyNoteJP;
          document.getElementById("projectsTitle").textContent =
            data.projectsTitleJP;
          document.getElementById("contactTitle").textContent =
            data.contactTitleJP;
          document.getElementById("skillsTitle").textContent =
            data.skillsTitleJP;
          document.getElementById("footerName").textContent = data.footerJP;
          document.getElementById("chipGithub").textContent = data.socialsJP[0];
          document.getElementById("chipFacebook").textContent =
            data.socialsJP[1];
          document.getElementById("chipEmail").textContent = data.socialsJP[2];
          if (resumeBtn) resumeBtn.textContent = "履歴書(PDF)";

         
          aboutCard.innerHTML = `
            <p>はじめまして。現在、専門学校東京テクニカルカレッジ 情報処理科1年の <strong>シャルマ ニラジュ</strong> と申します。<br><strong>ネパール国籍</strong>で、日本には学習と将来のITエンジニアとしてのキャリアを築くために来日しました。</p>
            <p>プログラミングとIT技術に強い興味があり、現在 <strong>C言語・Java・HTML/CSS・JavaScript・Oracle SQL</strong> を中心に学んでいます。まだ学習途中ではありますが、授業以外でも自主的に小さな作品制作に取り組むことで、着実にスキルを伸ばしています。</p>
            <p>私は<strong>責任感が強く、最後まで諦めず継続できること</strong>が自分の強みです。チームワークを大切にしながら、新しい技術にも積極的にチャレンジしていきたいと考えています。</p>
            <p>将来は、日本のIT企業で経験を積み、社会に貢献できるエンジニアになることを目標としています。どうぞよろしくお願いいたします。</p>
          `;
        }
        
        studyList.innerHTML = "";
        const arr =
          lang === "en" ? data.studyListEN || [] : data.studyListJP || [];
        (arr || []).forEach((it) => {
          const li = document.createElement("li");
          li.textContent = it;
          studyList.appendChild(li);
        });
        
        renderProjects(lang);
        renderSkills(lang);
      }

      langSelect.addEventListener("change", (e) => {
        renderLanguage(e.target.value === "en" ? "en" : "jp");
        runTypewriter();
      });
      themeToggle.addEventListener("click", () => {
        const cur = body.getAttribute("data-theme") || "dark";
        const next = cur === "dark" ? "light" : "dark";
        body.setAttribute("data-theme", next);
        themeToggle.textContent =
          next === "dark"
            ? langSelect.value === "en"
              ? "Light"
              : "ライト"
            : langSelect.value === "en"
            ? "Dark"
            : "ダーク";
        try {
          localStorage.setItem("site-theme", next);
        } catch (e) {}
      });
      if (bgSelect) {
        bgSelect.addEventListener("change", (e) => {
          const v = e.target.value || "gradient";
          body.setAttribute("data-bg", v);
          try {
            localStorage.setItem("site-bg", v);
          } catch (e) {}
        });
      }
      function readControls() {
        const s = Math.max(1, Math.min(10, parseInt((bgSpeed && bgSpeed.value) || "5", 10)));
        const i = Math.max(1, Math.min(10, parseInt((bgIntensity && bgIntensity.value) || "6", 10)));
        return { s, i };
      }
      function saveControls() {
        try {
          if (bgSpeed) localStorage.setItem("bg-speed", bgSpeed.value);
          if (bgIntensity) localStorage.setItem("bg-intensity", bgIntensity.value);
        } catch (e) {}
      }
      function renderSkills(lang) {
        if (!skillsList) return;
        skillsList.innerHTML = "";
        data.skills.forEach((s, i) => {
          const el = document.createElement("article");
          el.className = "skill";
          const title = lang === "en" ? s.nameEN : s.nameJP;
          el.innerHTML = `
            <h3 style="margin:0;font-size:15px">${escapeHtml(title)}</h3>
            <div class="meter" aria-label="${title}">
              <div class="val" style="width:${Math.max(0, Math.min(100, s.level))}%"></div>
            </div>
          `;
          el.style.opacity = 0;
          el.style.transform = "translateY(12px)";
          skillsList.appendChild(el);
          setTimeout(() => {
            el.style.transition = "opacity .6s ease, transform .6s ease";
            el.style.opacity = 1;
            el.style.transform = "none";
          }, 120 * i);
        });
      }
      try {
        const saved = localStorage.getItem("site-theme");
        if (saved) body.setAttribute("data-theme", saved);
      } catch (e) {}
      try {
        const savedBg = localStorage.getItem("site-bg");
        const v = savedBg || "gradient";
        body.setAttribute("data-bg", v);
        if (bgSelect) bgSelect.value = v;
      } catch (e) {}
      try {
        const sv = localStorage.getItem("bg-speed");
        const iv = localStorage.getItem("bg-intensity");
        if (bgSpeed && sv) bgSpeed.value = sv;
        if (bgIntensity && iv) bgIntensity.value = iv;
      } catch (e) {}

      let bgCanvas = document.getElementById("bgCanvas");
      let bgCtx = bgCanvas ? bgCanvas.getContext("2d") : null;
      let rafId = null;
      let matrixRafId = null;
      let hexRafId = null;
      let codeRafId = null;
      let running = "";
      function fitCanvas() {
        if (!bgCanvas) return;
        const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
        bgCanvas.width = Math.floor(innerWidth * dpr);
        bgCanvas.height = Math.floor(innerHeight * dpr);
        bgCanvas.style.width = innerWidth + "px";
        bgCanvas.style.height = innerHeight + "px";
        if (bgCtx) bgCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
      function stopParticles() {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = null;
        running = "";
        window.removeEventListener("mousemove", onMouse);
        window.removeEventListener("resize", onResize);
      }
      function stopMatrix() {
        if (matrixRafId) cancelAnimationFrame(matrixRafId);
        matrixRafId = null;
        running = "";
        window.removeEventListener("resize", onResize);
      }
      function stopHex() {
        if (hexRafId) cancelAnimationFrame(hexRafId);
        hexRafId = null;
        running = "";
        window.removeEventListener("resize", onResize);
      }
      function stopCode() {
        if (codeRafId) cancelAnimationFrame(codeRafId);
        codeRafId = null;
        running = "";
        window.removeEventListener("resize", onResize);
      }
      function onResize() {
        fitCanvas();
      }
      let mouseX = 0;
      let mouseY = 0;
      function onMouse(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
      }
      function startParticles() {
        if (!bgCanvas || !bgCtx) return;
        stopMatrix();
        stopHex();
        stopCode();
        fitCanvas();
        window.addEventListener("resize", onResize);
        window.addEventListener("mousemove", onMouse);
        running = "particles";
        const ctl = readControls();
        const base = Math.max(40, Math.min(140, Math.floor((innerWidth * innerHeight) / 14000)));
        const count = Math.floor(base * (0.6 + ctl.i / 10));
        const parts = [];
        for (let i = 0; i < count; i++) {
          parts.push({
            x: Math.random() * innerWidth,
            y: Math.random() * innerHeight,
            vx: (Math.random() - 0.5) * (0.3 + ctl.s * 0.08),
            vy: (Math.random() - 0.5) * (0.3 + ctl.s * 0.08),
            r: 1 + Math.random() * 2,
          });
        }
        function loop() {
          bgCtx.clearRect(0, 0, innerWidth, innerHeight);
          for (let i = 0; i < parts.length; i++) {
            const p = parts[i];
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < -10) p.x = innerWidth + 10;
            if (p.x > innerWidth + 10) p.x = -10;
            if (p.y < -10) p.y = innerHeight + 10;
            if (p.y > innerHeight + 10) p.y = -10;
          }
          for (let i = 0; i < parts.length; i++) {
            const p = parts[i];
            const dx = mouseX - p.x;
            const dy = mouseY - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 100 + ctl.i * 8) {
              p.vx += dx * (0.0006 + ctl.s * 0.00008);
              p.vy += dy * (0.0006 + ctl.s * 0.00008);
            }
          }
          for (let i = 0; i < parts.length; i++) {
            const p = parts[i];
            bgCtx.beginPath();
            bgCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            bgCtx.fillStyle = body.getAttribute("data-theme") === "dark" ? "rgba(230,238,248,0.8)" : "rgba(6,17,37,0.6)";
            bgCtx.fill();
          }
          for (let i = 0; i < parts.length; i++) {
            for (let j = i + 1; j < parts.length; j++) {
              const a = parts[i];
              const b = parts[j];
              const dx = a.x - b.x;
              const dy = a.y - b.y;
              const d = dx * dx + dy * dy;
              const lim = 100 + ctl.i * 12;
              if (d < lim * lim) {
                const alpha = Math.max(0, 1 - d / (lim * lim));
                bgCtx.strokeStyle = body.getAttribute("data-theme") === "dark" ? "rgba(230,238,248," + (alpha * 0.25) + ")" : "rgba(6,17,37," + (alpha * 0.25) + ")";
                bgCtx.lineWidth = 1;
                bgCtx.beginPath();
                bgCtx.moveTo(a.x, a.y);
                bgCtx.lineTo(b.x, b.y);
                bgCtx.stroke();
              }
            }
          }
          rafId = requestAnimationFrame(loop);
        }
        loop();
      }
      function startMatrix() {
        if (!bgCanvas || !bgCtx) return;
        stopParticles();
        stopHex();
        stopCode();
        fitCanvas();
        window.addEventListener("resize", onResize);
        running = "matrix";
        const ctl = readControls();
        const cols = Math.floor(innerWidth / 12);
        const ypos = new Array(cols).fill(0);
        const chars = "01";
        function loop() {
          bgCtx.fillStyle = body.getAttribute("data-theme") === "dark" ? "rgba(7,16,38,0.15)" : "rgba(234,242,255,0.15)";
          bgCtx.fillRect(0, 0, innerWidth, innerHeight);
          for (let i = 0; i < cols; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            const x = i * 12;
            const y = ypos[i] * 16;
            bgCtx.fillStyle = body.getAttribute("data-theme") === "dark" ? "rgba(0,255,135,0.9)" : "rgba(37,99,235,0.9)";
            bgCtx.font = "14px monospace";
            bgCtx.fillText(text, x, y);
            if (y > innerHeight && Math.random() > 0.975) ypos[i] = 0;
            else ypos[i] += 0.5 + ctl.s * 0.6;
          }
          matrixRafId = requestAnimationFrame(loop);
        }
        loop();
      }
      function startHex() {
        if (!bgCanvas || !bgCtx) return;
        stopParticles();
        stopMatrix();
        stopCode();
        fitCanvas();
        window.addEventListener("resize", onResize);
        running = "hex";
        const ctl = readControls();
        const cols = Math.floor(innerWidth / 12);
        const ypos = new Array(cols).fill(0);
        const chars = "0123456789ABCDEF";
        function loop() {
          bgCtx.fillStyle = body.getAttribute("data-theme") === "dark" ? "rgba(7,16,38,0.12)" : "rgba(234,242,255,0.12)";
          bgCtx.fillRect(0, 0, innerWidth, innerHeight);
          for (let i = 0; i < cols; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            const x = i * 12;
            const y = ypos[i] * 16;
            const hue = 200 + (i % 40);
            bgCtx.fillStyle = body.getAttribute("data-theme") === "dark" ? "hsl(" + hue + " 90% 60% / 0.9)" : "hsl(" + (hue - 120) + " 80% 40% / 0.9)";
            bgCtx.font = "13px monospace";
            bgCtx.fillText(text, x, y);
            if (y > innerHeight && Math.random() > 0.97) ypos[i] = 0;
            else ypos[i] += 0.6 + ctl.s * 0.6;
          }
          hexRafId = requestAnimationFrame(loop);
        }
        loop();
      }
      function startCode() {
        if (!bgCanvas || !bgCtx) return;
        stopParticles();
        stopMatrix();
        stopHex();
        fitCanvas();
        window.addEventListener("resize", onResize);
        running = "code";
        const ctl = readControls();
        const lines = [
          "const sum = (a,b) => a + b;",
          "for (let i=0;i<10;i++) process(i);",
          "SELECT * FROM users WHERE active = 1;",
          "public static void main(String[] args) {}",
          "function render(){ requestAnimationFrame(render); }",
          "if (err) throw err;",
          "ping 8.8.8.8 -t",
          "git status",
          "console.log('Hello');",
          "int x = 0; x++;",
          "fetch('/api').then(r=>r.json())",
          "C:\\> dir",
        ];
        const stream = [];
        const count = Math.floor(8 + ctl.i * 1.8);
        for (let i = 0; i < count; i++) {
          stream.push({
            text: lines[Math.floor(Math.random() * lines.length)],
            x: -40 + Math.random() * (innerWidth - 80),
            y: Math.random() * innerHeight,
            vy: (-0.4 - ctl.s * 0.2) + Math.random() * (-0.2),
          });
        }
        function loop() {
          bgCtx.fillStyle = body.getAttribute("data-theme") === "dark" ? "rgba(7,16,38,0.12)" : "rgba(234,242,255,0.12)";
          bgCtx.fillRect(0, 0, innerWidth, innerHeight);
          bgCtx.font = "12px monospace";
          for (let i = 0; i < stream.length; i++) {
            const ln = stream[i];
            ln.y += ln.vy;
            if (ln.y < -40) {
              ln.y = innerHeight + 20;
              ln.text = lines[Math.floor(Math.random() * lines.length)];
              ln.x = -40 + Math.random() * (innerWidth - 80);
            }
            bgCtx.fillStyle = body.getAttribute("data-theme") === "dark" ? "rgba(230,238,248,0.85)" : "rgba(6,17,37,0.7)";
            bgCtx.fillText(ln.text, ln.x, ln.y);
          }
          codeRafId = requestAnimationFrame(loop);
        }
        loop();
      }
      function ensureBackground() {
        const v = body.getAttribute("data-bg");
        if (v === "particles") startParticles();
        else if (v === "matrix") startMatrix();
        else if (v === "hex") startHex();
        else if (v === "code") startCode();
        else {
          stopParticles();
          stopMatrix();
          stopHex();
          stopCode();
        }
      }
      ensureBackground();
      if (bgSelect) {
        bgSelect.addEventListener("change", () => {
          ensureBackground();
        });
      }
      if (bgSpeed) bgSpeed.addEventListener("input", () => {
        saveControls();
        ensureBackground();
      });
      if (bgIntensity) bgIntensity.addEventListener("input", () => {
        saveControls();
        ensureBackground();
      });
      
      document.getElementById("contactForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("nameField").value.trim();
        const lang = langSelect.value === "en" ? "en" : "jp";
        const status = document.getElementById("formStatus");
        if (!name) {
          status.textContent =
            lang === "en"
              ? data.messages.nameRequiredEN
              : data.messages.nameRequiredJP;
          status.style.color = "crimson";
          return;
        }
        try {
          const storage = JSON.parse(
            localStorage.getItem("contactMessages") || "[]"
          );
          storage.push({
            name,
            subject: document.getElementById("subjectField").value,
            message: document.getElementById("messageField").value,
            when: new Date().toISOString(),
          });
          localStorage.setItem("contactMessages", JSON.stringify(storage));
        } catch (err) {}
        status.textContent =
          lang === "en" ? data.messages.receivedEN : data.messages.receivedJP;
        status.style.color = "lime";
        document.getElementById("contactForm").reset();
      });

   
      const revealTargets = document.querySelectorAll(".reveal");
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((ent) => {
            if (ent.isIntersecting) {
              ent.target.classList.add("show");
              io.unobserve(ent.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      revealTargets.forEach((t) => io.observe(t));

      
      function runTypewriter() {
        const el = document.getElementById("nameText");
        const txt = el.textContent || "";
        el.textContent = "";
        let i = 0;
        const speed = 80;
        const interval = setInterval(() => {
          el.textContent += txt[i++] || "";
          if (i > txt.length) clearInterval(interval);
        }, speed);
      }

      document.addEventListener("DOMContentLoaded", () => {
        const initialLang =
          langSelect && langSelect.value ? langSelect.value : "jp";
        renderLanguage(initialLang);
        setTimeout(() => {
          document
            .querySelectorAll(".reveal")
            .forEach((r, i) => (r.style.transitionDelay = i * 80 + "ms"));
        }, 120);
        runTypewriter();
      });
