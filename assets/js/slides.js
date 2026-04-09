const slides = Array.from(document.querySelectorAll(".slide"));
const counter = document.getElementById("counter");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pdfBtn = document.getElementById("pdfBtn");
const jumpInput = document.getElementById("jumpInput");
const jumpBtn = document.getElementById("jumpBtn");
const fullscreenBtn = document.getElementById("fullscreenBtn");
const helpBtn = document.getElementById("helpBtn");
const helpPanel = document.getElementById("helpPanel");
const progressBar = document.getElementById("progressBar");

let current = getInitialSlide();

function getInitialSlide() {
  const hash = window.location.hash.replace("#slide-", "");
  const parsed = Number.parseInt(hash, 10);

  if (Number.isNaN(parsed)) return 0;
  if (parsed < 1 || parsed > slides.length) return 0;
  return parsed - 1;
}

function updateHash() {
  const targetHash = `#slide-${current + 1}`;
  if (window.location.hash !== targetHash) {
    history.replaceState(null, "", targetHash);
  }
}

function toggleHelp(force) {
  const shouldShow =
    typeof force === "boolean"
      ? force
      : !helpPanel.classList.contains("is-visible");

  helpPanel.classList.toggle("is-visible", shouldShow);
  helpPanel.setAttribute("aria-hidden", String(!shouldShow));
}

function render() {
  slides.forEach((slide, index) => {
    slide.classList.toggle("active", index === current);
    slide.setAttribute("aria-hidden", String(index !== current));
  });

  counter.textContent = `${current + 1} / ${slides.length}`;
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === slides.length - 1;
  progressBar.style.width = `${((current + 1) / slides.length) * 100}%`;
  document.title = `${slides[current].querySelector("h1, h2")?.textContent || "Slide Template"} · Slide ${current + 1}`;
  updateHash();
}

function jumpTo(targetIndex) {
  if (targetIndex < 0 || targetIndex >= slides.length) return;
  current = targetIndex;
  render();
}

function go(delta) {
  jumpTo(current + delta);
}

async function toggleFullscreen() {
  if (!document.fullscreenElement) {
    await document.documentElement.requestFullscreen?.();
    return;
  }

  await document.exitFullscreen?.();
}

prevBtn.addEventListener("click", () => go(-1));
nextBtn.addEventListener("click", () => go(1));
pdfBtn.addEventListener("click", () => window.print());
helpBtn.addEventListener("click", () => toggleHelp());
fullscreenBtn.addEventListener("click", () => {
  toggleFullscreen().catch(() => {});
});

jumpBtn.addEventListener("click", () => {
  const parsed = Number.parseInt(String(jumpInput.value), 10);
  if (!Number.isNaN(parsed)) jumpTo(parsed - 1);
  jumpInput.value = "";
});

jumpInput.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;

  const parsed = Number.parseInt(String(jumpInput.value), 10);
  if (!Number.isNaN(parsed)) jumpTo(parsed - 1);
  jumpInput.value = "";
});

document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();

  if (key === "arrowright" || key === " ") go(1);
  if (key === "arrowleft") go(-1);
  if (key === "home") jumpTo(0);
  if (key === "end") jumpTo(slides.length - 1);
  if (key === "p") window.print();
  if (key === "f") {
    toggleFullscreen().catch(() => {});
  }
  if (key === "?") toggleHelp();
  if (key === "escape") toggleHelp(false);
});

window.addEventListener("hashchange", () => {
  current = getInitialSlide();
  render();
});

render();
