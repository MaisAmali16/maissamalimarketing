// Order: AIRON → Deal Hunt → Clubs
// NOTE: Case-sensitive filenames on GitHub Pages:
// airon-4.MP4 and airon-6.MP4 must be referenced exactly.

const WORK = [
  {
    id: "airon-robo",
    company: "AIRON / Robo The Virtual Bot",
    role: "Marketing Intern",
    description:
      "Short-form marketing content designed for TikTok/Instagram-style audiences — quick hooks, clear benefit framing, and clean pacing.",
    tags: ["TikTok", "Short-form video", "Product marketing"],
    tileRatio: "9/16",
    media: [
      { type: "video", src: "assets/airon-1.mp4", caption: "AIRON — short-form video (1)." },
      { type: "video", src: "assets/airon-2.mp4", caption: "AIRON — short-form video (2)." },
      { type: "video", src: "assets/airon-3.mp4", caption: "AIRON — short-form video (3)." },
      { type: "video", src: "assets/airon-4.MP4", caption: "AIRON — short-form video (4)." },
      { type: "video", src: "assets/airon-5.mp4", caption: "AIRON — short-form video (5)." },
      { type: "video", src: "assets/airon-6.MP4", caption: "AIRON — short-form video (6)." },
      { type: "video", src: "assets/airon-7.mp4", caption: "AIRON — short-form video (7)." }
    ]
  },
  {
    id: "deal-hunt",
    company: "Deal Hunt Liquidation Store",
    role: "Marketing & Sales Coordinator",
    description:
      "Vertical social content and promos built for quick attention, clear value, and strong calls to action.",
    tags: ["Instagram", "TikTok", "Local marketing"],
    tileRatio: "9/16",
    media: [
      { type: "image", src: "assets/dealhunt-1.png", caption: "Deal Hunt — social post (PNG)." },
      { type: "video", src: "assets/dealhunt-2.mp4", caption: "Deal Hunt — promo video (MP4)." }
    ]
  },
  {
    id: "womens-fitness-club",
    company: "Women’s Fitness Club of York University",
    role: "Vice President of Marketing",
    description:
      "A set of posters and social posts designed to keep branding consistent across announcements, events, and campaigns.",
    tags: ["Posters", "Event promos", "Brand consistency"],
    tileRatio: "4/5",
    media: Array.from({ length: 14 }, (_, i) => ({
      type: "image",
      src: `assets/wfc-${i + 1}.png`,
      caption: `WFC — post ${i + 1}.`
    }))
  },
  {
    id: "book-club",
    company: "Book Club of York University",
    role: "Engagement Coordinator",
    description:
      "Social content and promotional graphics focused on participation, community prompts, and recurring programming.",
    tags: ["Engagement", "Promos", "Community"],
    tileRatio: "4/5",
    media: Array.from({ length: 7 }, (_, i) => ({
      type: "image",
      src: `assets/bookclub-${i + 1}.png`,
      caption: `Book Club — post ${i + 1}.`
    }))
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

/**
 * ✅ Viewer rendering using a fixed "frame" + object-fit: contain
 * This prevents videos/images from being cropped.
 */
function renderViewer() {
  stopVideoIfAny();
  modalMedia.innerHTML = "";

  const item = activeList[activeIndex];
  if (!item) return;

  const frame = document.createElement("div");
  frame.className = "frame";

  // Posters tend to look better in 4:5; videos in 9:16
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

    const header = el("header", { class: "work-header" });
    header.appendChild(el("h3", { class: "work-title", html: w.company }));
    header.appendChild(el("p", { class: "work-tag", html: w.role }));
    header.appendChild(el("p", { class: "work-desc", html: w.description }));

    const tagsWrap = el("div", { class: "tags" });
    (w.tags || []).forEach(t => tagsWrap.appendChild(el("span", { class: "tag", html: t })));
    header.appendChild(tagsWrap);

    const frame = el("div", { class: "media-frame" });
    const grid = el("div", { class: "grid" });

    // Set tile ratio per section (vertical vs poster)
    grid.style.setProperty("--tile-ratio", w.tileRatio || "9/16");

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
      grid.appendChild(tile);
    });

    frame.appendChild(grid);

    article.appendChild(header);
    article.appendChild(frame);
    workList.appendChild(article);
  });
}

renderMenu();
renderWork();
