// WARNING: Please check the "src" paths below. 
// They must match your actual folder filenames exactly (including capital letters and spaces).
// I have set them to lowercase as a safe default based on your previous errors.

const EXPERIENCES = [
  {
    id: "cia",
    company: "Cognition in Action (CIA)",
    role: "Content Creator & Editor / Executive Team",
    description: "Managed the end-to-end production of digital content targeting the Gen-Z student body. Directed, filmed, and edited promotional videos leveraging trending audio and relatable humor to increase overall engagement and drive membership sign-ups.",
    media: [
      // REPLACE THESE WITH YOUR ACTUAL CIA FILENAMES
      { type: "video", src: "assets/cia-1.mp4", caption: "Promo Video", shape: "vertical" },
      { type: "video", src: "assets/cia-2.mp4", caption: "Executive Team Trend Video", shape: "vertical" },
      { type: "image", src: "assets/tabling-1.jpg", caption: "Tabling Event Photography", shape: "square" }
    ]
  },
  {
    id: "dealhunt",
    company: "Deal Hunt",
    role: "Social Media Assistant",
    description: "Developed and curated social media content to promote exclusive deals. Monitored engagement metrics and optimized posting schedules to maximize reach and conversion.",
    media: [
      // REPLACE THESE WITH YOUR ACTUAL DEAL HUNT FILENAMES
      { type: "video", src: "assets/dealhunt-1.mp4", caption: "Deal Hunt Promo 1", shape: "vertical" },
      { type: "video", src: "assets/dealhunt-2.mp4", caption: "Deal Hunt Promo 2", shape: "vertical" }
    ]
  },
  {
    id: "bookclub",
    company: "York Book Club",
    role: "Engagement Coordinator",
    description: "Served as the lead graphic designer and copywriter. Utilized design software to create visually appealing layouts that aligned with the club's aesthetic while clearly communicating calls-to-action for our Discord community.",
    media: [
      // Check these names against your folder
      { type: "image", src: "assets/bookclub-1.png", caption: "Campaign Asset 1", shape: "square" },
      { type: "image", src: "assets/bookclub-2.png", caption: "Campaign Asset 2", shape: "square" },
      { type: "image", src: "assets/bookclub-3.png", caption: "Campaign Asset 3", shape: "square" }
    ]
  },
  {
    id: "airon",
    company: "AIRON AI",
    role: "Marketing Intern",
    description: "Sourced relevant CapCut templates and trends to create short-form marketing content designed for TikTok and Instagram. Focused on quick hooks, clear benefit framing, and humanizing the brand's AI tools.",
    media: [
      // I have made these all lowercase based on your previous bug. 
      { type: "video", src: "assets/airon-1.mp4", caption: "AIRON Video 1", shape: "vertical" },
      { type: "video", src: "assets/airon-2.mp4", caption: "AIRON Video 2", shape: "vertical" },
      { type: "video", src: "assets/airon-3.mp4", caption: "AIRON Video 3", shape: "vertical" },
      { type: "video", src: "assets/airon-4.mp4", caption: "AIRON Video 4", shape: "vertical" },
      { type: "video", src: "assets/airon-5.mp4", caption: "AIRON Video 5", shape: "vertical" },
      { type: "video", src: "assets/airon-6.mp4", caption: "AIRON Video 6", shape: "vertical" },
      { type: "video", src: "assets/airon-7.mp4", caption: "AIRON Video 7", shape: "vertical" }
    ]
  },
  {
    id: "wfc",
    company: "Women's Fitness Club",
    role: "Marketing Assistant",
    description: "Supported the execution of marketing campaigns aimed at increasing gym memberships and class attendance. Created engaging visual content and managed community interactions.",
    media: [
      // REPLACE THESE WITH YOUR ACTUAL WFC FILENAMES
      { type: "image", src: "assets/wfc-1.jpg", caption: "WFC Promo Graphic", shape: "square" }
    ]
  }
];

document.getElementById("year").textContent = new Date().getFullYear();
const workList = document.getElementById("workList");

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

  if (item.type === "video") {
    const v = document.createElement("video");
    v.src = item.src;
    v.controls = true;
    v.setAttribute("playsinline", "");
    modalMedia.appendChild(v);
  } else {
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.caption || "Image";
    modalMedia.appendChild(img);
  }

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

// Render the Experience blocks
EXPERIENCES.forEach((exp) => {
  const block = el("div", { class: "experience-block", id: exp.id });
  
  const header = el("div", { class: "exp-header" });
  header.appendChild(el("h3", { class: "exp-company", html: exp.company }));
  header.appendChild(el("p", { class: "exp-role", html: exp.role }));
  header.appendChild(el("p", { class: "exp-desc", html: exp.description }));
  block.appendChild(header);

  if (exp.media && exp.media.length > 0) {
    const grid = el("div", { class: "media-grid" });
    exp.media.forEach((m, idx) => {
      const tileClass = m.shape === "square" ? "tile square" : "tile";
      const tile = el("button", { class: tileClass, type: "button" });
      
      if (m.type === "video") {
        const v = document.createElement("video");
        v.src = m.src;
        v.muted = true;
        v.playsInline = true;
        tile.appendChild(v);
        tile.appendChild(el("span", { class: "play-badge", html: "Video" }));
      } else {
        const img = document.createElement("img");
        img.src = m.src;
        img.loading = "lazy";
        tile.appendChild(img);
      }

      tile.addEventListener("click", () => openViewer(exp.media, idx));
      grid.appendChild(tile);
    });
    block.appendChild(grid);
  }
  
  workList.appendChild(block);
});