// --------- Configure your simple student info here ---------
const CONFIG = {
  NAME: "シャルマニラジュ",
  ROLE: "情報処理科 1年生（2年制）",
  BIO_JP: "私は情報処理科の1年生です。プログラミングを勉強しています。",
  BIO_EN: "I am a 1st-year Information Processing student learning programming.",
  ABOUT_JP: {
    intro: "こんにちは！シャルマニラジュです。専門学校東京テクニカルカレッジの情報処理科で、プログラミングとWeb開発の基礎を学んでいます。",
    interests: [
      "Web開発（HTML/CSS/JavaScript）",
      "プログラミング基礎（C言語、Java）",
      "UI/UXデザイン",
      "アプリ開発"
    ],
    skills: [
      "HTML/CSS/JavaScript（基礎）",
      "Webページ制作",
      "簡単なアプリケーション開発"
    ],
    goals: "将来は、ユーザーにとって使いやすく、美しいWebアプリケーションやモバイルアプリを開発できるエンジニアになりたいです。現在は基礎をしっかり学びながら、小さなプロジェクトを通じて実践的な経験を積んでいます。",
    hobbies: "趣味はプログラミングの勉強と、新しい技術を試すことです。また、自分の国の文化や伝統について学び、それをWebサイトで紹介することも楽しんでいます。"
  },
  ABOUT_EN: {
    intro: "Hello! I'm Niraj Sharma. I'm studying at Tokyo Technical College, majoring in Information Processing, where I'm learning the fundamentals of programming and web development.",
    interests: [
      "Web Development (HTML/CSS/JavaScript)",
      "Programming Basics (C, Java)",
      "UI/UX Design",
      "App Development"
    ],
    skills: [
      "HTML/CSS/JavaScript (Basics)",
      "Web Page Creation",
      "Simple Application Development"
    ],
    goals: "In the future, I want to become an engineer who can develop user-friendly and beautiful web applications and mobile apps. Currently, I'm learning the fundamentals while gaining practical experience through small projects.",
    hobbies: "My hobbies include studying programming and trying out new technologies. I also enjoy learning about my country's culture and traditions and introducing them through websites."
  },
  IMAGE_URL: "images/img.JPG",
  EMAIL: "your.email@example.com",
  PROJECTS: [
    {
      title: "電卓アプリ (練習)",
      desc: "HTML/CSS/JavaScriptで作る、簡単な電卓。",
      link: "./calculator/index.html",
    },
    {
      title: "サイコロゲーム (JavaScript)",
      desc: "ランダムにサイコロが出るゲーム。",
      link: "./サイコロゲーム/index.html",
      image: "./サイコロゲーム/images/dice.png",
    },
    {
      title: "自分の国のお祭り紹介ページ",
      desc: "自分の国の文化や伝統を紹介。",
      link: "./festival/index.html",
      image: "./festival/images/FLAG.PNG",
    },
  ],
};
// ----------------------------------------------------------

const nameText = document.getElementById("nameText");
const roleText = document.getElementById("roleText");
const profileImg = document.getElementById("profileImg");
const heroLead = document.getElementById("heroLead");
const projectsList = document.getElementById("projectsList");
const aboutCard = document.getElementById("aboutCard");

function init() {
  nameText.textContent = CONFIG.NAME;
  roleText.textContent = CONFIG.ROLE;
  document.querySelector(".brand").textContent = CONFIG.NAME + "（学生）";
  document.getElementById("heroTitle").textContent =
    `こんにちは。私は ${CONFIG.NAME}、情報処理科 1年生です。`;
  heroLead.textContent = CONFIG.BIO_JP;
  profileImg.src = CONFIG.IMAGE_URL;
  document.getElementById("year").textContent = new Date().getFullYear();
  renderAbout(CONFIG.ABOUT_JP, true);

  // Render projects
  projectsList.innerHTML = "";
  CONFIG.PROJECTS.forEach((p) => {
    const card = document.createElement("div");
    card.className = "project";

    if (p.image) {
      const img = document.createElement("img");
      img.src = p.image;
      img.className = "project-image";
      img.alt = p.title;
      img.onerror = function() {
        this.style.display = "none";
      };
      card.appendChild(img);
    } else {
      // 画像がない場合はプレースホルダーを表示
      const placeholder = document.createElement("div");
      placeholder.className = "project-image-placeholder";
      placeholder.textContent = "📱";
      card.appendChild(placeholder);
    }

    const title = document.createElement("div");
    title.className = "project-title";
    title.style.fontWeight = "600";
    title.textContent = p.title;
    card.appendChild(title);

    const desc = document.createElement("div");
    desc.className = "muted project-desc";
    desc.style.marginTop = "6px";
    desc.textContent = p.desc;
    card.appendChild(desc);

    if (p.link) {
      const a = document.createElement("a");
      a.href = p.link;
      a.target = "_blank";
      a.rel = "noreferrer";
      a.style.textDecoration = "none";
      a.style.color = "inherit";
      a.appendChild(card);
      projectsList.appendChild(a);
    } else {
      projectsList.appendChild(card);
    }
  });
}

// Render about section
function renderAbout(about, isJapanese = true) {
  aboutCard.innerHTML = "";
  
  const titles = isJapanese ? {
    interests: "興味・関心",
    skills: "スキル",
    goals: "目標",
    hobbies: "趣味"
  } : {
    interests: "Interests",
    skills: "Skills",
    goals: "Goals",
    hobbies: "Hobbies"
  };
  
  // Introduction
  const intro = document.createElement("p");
  intro.textContent = about.intro;
  intro.style.marginBottom = "16px";
  aboutCard.appendChild(intro);
  
  // Interests
  const interestsTitle = document.createElement("h3");
  interestsTitle.textContent = titles.interests;
  interestsTitle.style.fontSize = "16px";
  interestsTitle.style.marginTop = "20px";
  interestsTitle.style.marginBottom = "8px";
  aboutCard.appendChild(interestsTitle);
  
  const interestsList = document.createElement("ul");
  interestsList.style.marginLeft = "20px";
  interestsList.style.marginBottom = "16px";
  about.interests.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    interestsList.appendChild(li);
  });
  aboutCard.appendChild(interestsList);
  
  // Skills
  const skillsTitle = document.createElement("h3");
  skillsTitle.textContent = titles.skills;
  skillsTitle.style.fontSize = "16px";
  skillsTitle.style.marginTop = "20px";
  skillsTitle.style.marginBottom = "8px";
  aboutCard.appendChild(skillsTitle);
  
  const skillsList = document.createElement("ul");
  skillsList.style.marginLeft = "20px";
  skillsList.style.marginBottom = "16px";
  about.skills.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    skillsList.appendChild(li);
  });
  aboutCard.appendChild(skillsList);
  
  // Goals
  const goalsTitle = document.createElement("h3");
  goalsTitle.textContent = titles.goals;
  goalsTitle.style.fontSize = "16px";
  goalsTitle.style.marginTop = "20px";
  goalsTitle.style.marginBottom = "8px";
  aboutCard.appendChild(goalsTitle);
  
  const goals = document.createElement("p");
  goals.textContent = about.goals;
  goals.style.marginBottom = "16px";
  aboutCard.appendChild(goals);
  
  // Hobbies
  const hobbiesTitle = document.createElement("h3");
  hobbiesTitle.textContent = titles.hobbies;
  hobbiesTitle.style.fontSize = "16px";
  hobbiesTitle.style.marginTop = "20px";
  hobbiesTitle.style.marginBottom = "8px";
  aboutCard.appendChild(hobbiesTitle);
  
  const hobbies = document.createElement("p");
  hobbies.textContent = about.hobbies;
  hobbies.style.marginBottom = "0";
  aboutCard.appendChild(hobbies);
}

// language switch
document.getElementById("lang").addEventListener("change", (e) => {
  const v = e.target.value;
  if (v === "jp") {
    heroLead.textContent = CONFIG.BIO_JP;
    renderAbout(CONFIG.ABOUT_JP, true);
  } else {
    heroLead.textContent = CONFIG.BIO_EN;
    renderAbout(CONFIG.ABOUT_EN, false);
  }
});

// theme toggle
const themeBtn = document.getElementById("themeToggle");
function setTheme(t) {
  document.body.setAttribute("data-theme", t);
  themeBtn.textContent = t === "dark" ? "ライト" : "ダーク";
}
setTheme("light");

themeBtn.addEventListener("click", () =>
  setTheme(document.body.getAttribute("data-theme") === "dark" ? "light" : "dark")
);

// contact form
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("nameField").value;
  const subject = document.getElementById("subjectField").value || "連絡";
  const message = document.getElementById("messageField").value;
  const body = encodeURIComponent(`Name: ${name}\n\n${message}`);
  window.location.href = `mailto:${CONFIG.EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${body}`;
});

// initialize
init();
