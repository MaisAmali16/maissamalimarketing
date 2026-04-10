// All file extensions standardized to lowercase

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
      { type: "video", src: "assets/airon-4.mp4", caption: "AIRON — short-form video (4)." },
      { type: "video", src: "assets/airon-5.mp4", caption: "AIRON — short-form video (5)." },
      { type: "video", src: "assets/airon-6.mp4", caption: "AIRON — short-form video (6)." },
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
      { type: "image", src: "assets/dealhunt-1.png", caption: "Deal Hunt — social post." },
      { type: "video", src: "assets/dealhunt-2.mp4", caption: "Deal Hunt — promo video." }
    ]
  },
  {
    id: "womens-fitness-club",
    company: "Women’s Fitness Club of York University",
    role: "Vice President of Marketing",
    description:
      "Posters and social posts designed for consistent branding across campaigns.",
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
      "Content focused on engagement, community prompts, and recurring programming.",
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
  modalMedia.innerHTML = "";
}

function renderViewer() {
  modalMedia.innerHTML = "";
  const item = activeList[activeIndex];
  if (!item) return;

  const frame = document.createElement("div");
  frame.className = "frame";

  if (item.type === "video") {
    const v = document.createElement("video");
    v.src = item.src;
    v.controls = true;
    frame.appendChild(v);
  } else {
    const img = document.createElement("img");
    img.src = item.src;
    frame.appendChild(img);
  }

  modalMedia.appendChild(frame);
  modalCaption.textContent = item.caption || "";
  modalCounter.textContent = `${activeIndex + 1} / ${activeList.length}`;
}

function go(delta) {
  activeIndex = (activeIndex + delta + activeList.length) % activeList.length;
  renderViewer();
}

prevBtn.onclick = () => go(-1);
nextBtn.onclick = () => go(1);

function renderWork() {
  WORK.forEach((w) => {
    const article = el("article", { id: w.id, class: "work" });

    // 🔥 TOP ROW (2-column layout)
    const top = el("div", { class: "work-top" });

    // LEFT SIDE (text)
    const left = el("div", { class: "work-left" });
    left.appendChild(el("h3", { class: "work-title", html: w.company }));
    left.appendChild(el("p", { class: "work-tag", html: w.role }));
    left.appendChild(el("p", { class: "work-desc", html: w.description }));

    const tagsWrap = el("div", { class: "tags" });
    (w.tags || []).forEach(t =>
      tagsWrap.appendChild(el("span", { class: "tag", html: t }))
    );
    left.appendChild(tagsWrap);

    // RIGHT SIDE (featured media)
    const right = el("div", { class: "work-right" });
    const featured = w.media[0];

    if (featured) {
      const hero = document.createElement(
        featured.type === "video" ? "video" : "img"
      );

      hero.src = featured.src;

      if (featured.type === "video") {
        hero.autoplay = true;
        hero.loop = true;
        hero.muted = true;
        hero.playsInline = true;
      }

      hero.className = "hero-media";
      right.appendChild(hero);
    }

    top.appendChild(left);
    top.appendChild(right);

    // 🔽 GRID BELOW
    const frame = el("div", { class: "media-frame" });
    const grid = el("div", { class: "grid" });

    w.media.forEach((m, idx) => {
      const tile = el("button", { class: "tile" });

      if (m.type === "video") {
        const v = document.createElement("video");
        v.src = m.src;
        v.muted = true;
        v.playsInline = true;

        tile.addEventListener("mouseenter", () => v.play());
        tile.addEventListener("mouseleave", () => v.pause());

        tile.appendChild(v);
      } else {
        const img = document.createElement("img");
        img.src = m.src;
        tile.appendChild(img);
      }

      tile.onclick = () => openViewer(w.media, idx);
      grid.appendChild(tile);
    });

    frame.appendChild(grid);

    article.appendChild(top);
    article.appendChild(frame);
    workList.appendChild(article);
  });
}

renderMenu();
renderWork();