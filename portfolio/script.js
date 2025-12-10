 const data = {
        brandJP: "シャルマニラジュ（学生）",
        brandEN: "Sharma Niraj (Student)",
        nameJP: "こんにちは。私は シャルマニラジュ、情報処理科 1年生です。",
        nameEN:
          "Hello, I am Sharma Niraj, a first-year student in Information Processing.",
        leadJP:
          "基礎を丁寧に学び、小さな作品を積み重ねています。興味はウェブ制作・プログラミング・ネットワーク基礎です。",
        leadEN:
          "Learning fundamentals carefully and building small projects. Interests: web development, programming, and basic networking.",
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
          document.getElementById("footerName").textContent = data.footerEN;
          document.getElementById("chipGithub").textContent = data.socialsEN[0];
          document.getElementById("chipFacebook").textContent =
            data.socialsEN[1];
          document.getElementById("chipEmail").textContent = data.socialsEN[2];

         
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
          document.getElementById("footerName").textContent = data.footerJP;
          document.getElementById("chipGithub").textContent = data.socialsJP[0];
          document.getElementById("chipFacebook").textContent =
            data.socialsJP[1];
          document.getElementById("chipEmail").textContent = data.socialsJP[2];

         
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
      try {
        const saved = localStorage.getItem("site-theme");
        if (saved) body.setAttribute("data-theme", saved);
      } catch (e) {}

      
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