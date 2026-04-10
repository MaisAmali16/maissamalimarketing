// NOTE: I fixed the case sensitivity for airon-4 and airon-6 to match your exact folder screenshot!
// I also loaded in the exact 5 portfolio pieces and their rationale text.

const WORK = [
  {
    id: "cia-promo",
    company: "Cognition in Action",
    role: "Content Creator & Editor",
    tags: ["Gen-Z Marketing", "Video Editing", "Analytics"],
    tileRatio: "9/16",
    rationale: {
      why: "This video demonstrates my ability to connect with the Gen-Z student body by acknowledging a real struggle—short attention spans—with relatable, self-aware humor. Using the popular 'split-screen' format made the piece highly engaging, trendy, and memorable.",
      role: "I managed the end-to-end production. While two of our executive members acted as the on-camera talent, I handled the directing, filming, and video editing. Post-production, I wrote the caption, published the video, and tracked the engagement metrics.",
      objective: "The objective was to target students who had visited our booth during a tabling event and remind them to officially sign up. I wanted to make our executive team look approachable and show prospective members that we understand their daily student life.",
      results: "This is our most-viewed video to date, reaching 2,815 views (an over 630% increase compared to our first reel). More importantly, it successfully converted viewers into members, resulting in 8 direct sign-ups via our Linktree immediately after posting."
    },
    media: [
      // REPLACE THIS PLACEHOLDER WITH YOUR ACTUAL FILE IN THE ASSETS FOLDER
      { type: "video", src: "assets/01_CognitionInAction_PromoVideo.mp4", caption: "CIA Promo Video" }
    ]
  },
  {
    id: "book-club",
    company: "York Book Club",
    role: "Engagement Coordinator",
    tags: ["Graphic Design", "Community Building", "Discord"],
    tileRatio: "4/5",
    rationale: {
      why: "I chose this graphic because it highlights my proficiency in digital design and community-building. A successful student organization relies on its members feeling heard, and this post was designed to empower our community by giving them a voice in our monthly programming.",
      role: "As the Engagement Coordinator, I served as the lead graphic designer and copywriter. I utilized design software to create a visually appealing layout that aligned with the club's aesthetic while clearly communicating the call to action.",
      objective: "To announce our 'Book-to-Movie Adaptations' theme and direct our audience to Discord to cast their vote. The post also communicated our flexible participation model—letting students know they can read the book, watch the movie, or just join the trivia.",
      results: "The poster successfully drove traffic to our Discord, resulting in active voting. This funneled directly into a highly successful virtual event a month later, which saw a turnout of 20 attendees and led to 15 new general member sign-ups."
    },
    media: Array.from({ length: 7 }, (_, i) => ({
      type: "image",
      src: `assets/bookclub-${i + 1}.png`,
      caption: `Book Club — Campaign Asset ${i + 1}.`
    }))
  },
  {
    id: "tabling-event",
    company: "Student Club Tabling Event",
    role: "Event Photographer / Content Curator",
    tags: ["Photography", "Event Coverage", "Storytelling"],
    tileRatio: "4/5",
    rationale: {
      why: "I chose this photo carousel to demonstrate my event photography skills and my ability to tell a compelling visual story. This piece highlights my capacity to curate a visual narrative that creates 'FOMO' (Fear Of Missing Out), effectively translating real-world community engagement into digital content.",
      role: "I acted as the event photographer and content curator. I captured candid moments of our team engaging with students, playing games, and handing out candy, and then edited and arranged the images into a cohesive carousel.",
      objective: "The objective was to visually showcase our club's vision and friendly atmosphere to students who may have missed the tabling event. It was intended to put friendly, recognizable faces to our executive team.",
      results: "By visually capturing the high energy of the event, the carousel effectively demonstrated to non-attendees that we are an active, highly engaged organization. It proved that our team is approachable and eager to discuss our ideas with students."
    },
    media: [
      // REPLACE THIS PLACEHOLDER WITH YOUR ACTUAL PHOTO SAMPLES
      { type: "image", src: "assets/03_TablingEvent_EngagementCarousel.jpg", caption: "Tabling Event Carousel" }
    ]
  },
  {
    id: "cia-exec",
    company: "CIA Executive Team",
    role: "On-Camera Talent & Coordinator",
    tags: ["Trend Forecasting", "Humor", "Team Building"],
    tileRatio: "9/16",
    rationale: {
      why: "I chose this piece to demonstrate my on-camera presence and my ability to humanize an organization. It highlights my comfort level with acting as the face of a brand and using relatable humor to make student leadership feel approachable.",
      role: "I appeared on-camera alongside two other executive members, and I managed the video's overall production. I collaborated with the team to find the right trending audio, conceptualized the joke, and coordinated the filming.",
      objective: "The objective of this video is to pull back the curtain on the Executive Team by playfully mimicking our internal 'conflicts.' It is designed to build a stronger connection with our student audience through highly relatable humor.",
      results: "This video is currently scheduled in our content calendar for release later this month. Producing this piece in advance demonstrates my ability to proactively build a backlog of high-quality content and effectively manage a social media pipeline."
    },
    media: [
      // REPLACE THIS PLACEHOLDER WITH YOUR ACTUAL FILE
      { type: "video", src: "assets/04_CIA_ExecTeam_TrendVideo.mp4", caption: "Exec Team Trend Video" }
    ]
  },
  {
    id: "airon-robo",
    company: "AIRON AI",
    role: "Marketing Intern",
    tags: ["B2B SaaS", "TikTok Strategy", "CapCut"],
    tileRatio: "9/16",
    rationale: {
      why: "I chose this piece to demonstrate my understanding of current internet culture, agile marketing, and trend forecasting. It highlights my ability to leverage humor to make a tech brand relatable and drive specific business goals.",
      role: "As the Marketing Intern, I acted as the copywriter and trend strategist. I sourced a highly relevant trending CapCut template (a popular pop-culture meme), wrote the 'POV' hook, and edited the video.",
      objective: "To build brand awareness and foster a sense of community around our AI digital assistant. The goal was to use relatable humor to bond our audience over a shared experience—the 'pain' of a free trial ending.",
      results: "By tapping into existing internet trends, I was able to generate highly relatable content that contributed to a 70% overall increase in the brand's digital engagement. It resulted in 15 new free trial sign-ups shortly after posting."
    },
    media: [
      { type: "video", src: "assets/airon-1.mp4", caption: "AIRON — short-form video (1)." },
      { type: "video", src: "assets/airon-2.mp4", caption: "AIRON — short-form video (2)." },
      { type: "video", src: "assets/airon-3.mp4", caption: "AIRON — short-form video (3)." },
      { type: "video", src: "assets/airon-4.mp4", caption: "AIRON — short-form video (4)." }, // Fixed extension
      { type: "video", src: "assets/airon-5.mp4", caption: "AIRON — short-form video (5)." },
      { type: "video", src: "assets/airon-6.mp4", caption: "AIRON — short-form video (6)." }, // Fixed extension
      { type: "video", src: "assets/airon-7.mp4", caption: "AIRON — short-form video (7)." }
    ]
  }
];

const workMenu = document.getElementById("workMenu");
const workList = document.getElementById("workList");
document.getElementById("year").textContent = new Date().getFullYear();

// Modal elements
const viewer = document.getElementById("viewer");
const modalMedia = document.getElementById("modalMedia");
const modalCaption = document.getElementById("modalCaption");
const modalCounter = document.getElementById("modalCounter");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let activeList = [];
let activeIndex = 0;

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") node.className = v;
    else if (k === "html") node.innerHTML = v;
    else node.setAttribute(k, v);
  }
  children.forEach((c) => node.appendChild(c));
  return node;
}

function renderMenu() {
  WORK.forEach((w) => {
    const a = el("a", { href: `#${w.id}`, role: "menuitem" }, [
      el("span", { html: w.company }),
      el("span", { class: "chip", html: `${w.media.length} items` })
    ]);
    workMenu.appendChild(a);
  });
}

function openViewer(list, index) {
  activeList = list;
  activeIndex = index;
  viewer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  renderViewer();
}

function closeViewer() {
  viewer.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  stopVideoIfAny();
  modalMedia.innerHTML = "";
}

function stopVideoIfAny() {
  const v = modalMedia.querySelector("video");
  if (v) { try { v.pause(); } catch {} }
}

function renderViewer() {
  stopVideoIfAny();
  modalMedia.innerHTML = "";

  const item = activeList[activeIndex];
  if (!item) return;

  const frame = document.createElement("div");
  frame.className = "frame";
  
  if (item.type === "image") {
    frame.style.aspectRatio = "4 / 5";
  } else {
    frame.style.aspectRatio = "9 / 16";
  }

  if (item.type === "video") {
    const v = document.createElement("video");
    v.src = item.src;
    v.controls = true;
    v.preload = "metadata";
    v.setAttribute("playsinline", "");
    frame.appendChild(v);
  } else {
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.caption || "Image";
    img.loading = "eager";
    frame.appendChild(img);
  }

  modalMedia.appendChild(frame);
  modalCaption.textContent = item.caption || "";
  modalCounter.textContent = `${activeIndex + 1} / ${activeList.length}`;
}

function go(delta) {
  const total = activeList.length;
  if (!total) return;
  activeIndex = (activeIndex + delta + total) % total;
  renderViewer();
}

prevBtn.addEventListener("click", () => go(-1));
nextBtn.addEventListener("click", () => go(1));

viewer.addEventListener("click", (e) => {
  if (e.target?.dataset?.close === "true") closeViewer();
});

document.addEventListener("keydown", (e) => {
  if (viewer.getAttribute("aria-hidden") === "true") return;
  if (e.key === "Escape") closeViewer();
  if (e.key === "ArrowLeft") go(-1);
  if (e.key === "ArrowRight") go(1);
});

function renderWork() {
  WORK.forEach((w) => {
    const article = el("article", { id: w.id, class: "work" });

    // LEFT SIDE: Text and Rationale
    const infoCol = el("div", { class: "work-info" });
    infoCol.appendChild(el("h3", { class: "work-title", html: w.company }));
    infoCol.appendChild(el("p", { class: "work-role", html: w.role }));

    const tagsWrap = el("div", { class: "tags" });
    (w.tags || []).forEach(t => tagsWrap.appendChild(el("span", { class: "tag", html: t })));
    infoCol.appendChild(tagsWrap);

    const rationaleWrap = el("div", { class: "rationale" });
    const addBlock = (title, text) => {
      if(!text) return;
      const b = el("div", { class: "rationale-block" });
      b.appendChild(el("h4", { html: title }));
      b.appendChild(el("p", { html: text }));
      rationaleWrap.appendChild(b);
    };

    if (w.rationale) {
      addBlock("1. Why I selected this piece:", w.rationale.why);
      addBlock("2. My specific role:", w.rationale.role);
      addBlock("3. Objective and audience:", w.rationale.objective);
      addBlock("4. Measurable results:", w.rationale.results);
    }
    infoCol.appendChild(rationaleWrap);
    
    // RIGHT SIDE: Carousel
    const frameCol = el("div", { class: "carousel-frame" });
    const carousel = el("div", { class: "carousel" });

    carousel.style.setProperty("--tile-ratio", w.tileRatio || "9/16");

    w.media.forEach((m, idx) => {
      const tile = el("button", { class: "tile", type: "button", "aria-label": `Open item ${idx + 1}` });

      if (m.type === "video") {
        const v = document.createElement("video");
        v.src = m.src;
        v.muted = true;
        v.playsInline = true;
        v.preload = "metadata";
        tile.appendChild(v);
        tile.appendChild(el("span", { class: "play-badge", html: "Video" }));
      } else {
        const img = document.createElement("img");
        img.src = m.src;
        img.alt = m.caption || "Thumbnail";
        img.loading = "lazy";
        tile.appendChild(img);
      }

      tile.addEventListener("click", () => openViewer(w.media, idx));
      carousel.appendChild(tile);
    });

    frameCol.appendChild(carousel);

    article.appendChild(infoCol);
    article.appendChild(frameCol);
    workList.appendChild(article);
  });
}

renderMenu();
renderWork();