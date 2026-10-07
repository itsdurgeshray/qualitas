(() => {
  const html = document.documentElement;
  const deck = document.getElementById("deck");
  const slides = [...deck.querySelectorAll(".slide")];

  /* ---------- Content (stand-ins for CMS fields) ---------- */

  // Our Story build step: the problems teams brought us → what we build instead.
  const PROBLEMS = ["Slow websites", "Monolithic systems", "Tech debt", "Poor Lighthouse score", "Broken integrations", "Data silos", "High bounce rate", "Low conversion rates"];
  const ANSWERS = ["Edge rendering", "Composable architecture", "Headless CMS", "Core Web Vitals", "API orchestration", "Decoupled frontend", "Personalization", "Conversion optimization"];

  // PLACEHOLDER milestones: replace with the real dates and events.
  const MILESTONES = [
    { year: "2019", text: "Weframe Tech starts in Bangalore" },
    { year: "2020", text: "First headless commerce build ships" },
    { year: "2021", text: "All-in on composable and Jamstack" },
    { year: "2023", text: "First clients in the UK and USA" },
    { year: "2025", text: "Shipping across three continents" },
    { year: "2026", text: "Framing tech for the top 1%", now: true },
  ];

  /* ---------- Build dynamic bits ---------- */

  const rot = (i) => [-2, 1.5, -1, 2.5, -2.5, 1, -1.5, 2][i % 8];
  const chips = (list, cls) => `<div class="cloud__set ${cls}">${list.map((t, k) =>
    `<span class="chip-x" style="--k:${k};--r:${rot(k)}deg">${t}</span>`).join("")}</div>`;
  document.getElementById("cloud").innerHTML = chips(PROBLEMS, "cloud__set--problem") + chips(ANSWERS, "cloud__set--answer");

  document.getElementById("milestones").innerHTML = MILESTONES.map((m, c) =>
    `<li class="ms${m.now ? " is-now" : ""}" style="--c:${c}"><span class="ms__year">${m.year}</span><span class="ms__text">${m.text}</span></li>`).join("");

  const pad = (n) => String(n).padStart(2, "0");
  document.getElementById("chapters").innerHTML = slides.slice(1).map((s, i) =>
    `<li><button type="button" data-go="${i + 1}"><i>${pad(i + 2)}</i>${s.dataset.title}</button></li>`).join("");

  slides.forEach((s) => s.querySelectorAll(".a-in").forEach((el, i) => el.style.setProperty("--i", i)));

  /* ---------- Deck state ---------- */

  const steps = (s) => Number(s.dataset.steps || 1);
  let idx = 0, step = 0, mode = html.classList.contains("mode-linear") ? "linear" : "pitch";

  const progress = document.getElementById("ctl-progress");
  progress.innerHTML = slides.map((s, i) => `<button type="button" role="tab" aria-label="Slide ${i + 1}: ${s.dataset.title}"></button>`).join("");
  document.getElementById("ctl-total").textContent = pad(slides.length);
  const live = document.getElementById("live");

  function render(dir) {
    deck.dataset.dir = dir || "fwd";
    const s = slides[idx];
    slides.forEach((x, i) => {
      const cur = i === idx;
      x.classList.toggle("is-current", cur);
      x.setAttribute("aria-hidden", String(!cur));
      x.inert = !cur;
      if (!cur) x.classList.remove("is-on");
    });
    if (s.dataset.steps) s.dataset.step = String(step);
    // Replay entrance animations on the incoming slide.
    if (!s.classList.contains("is-on")) { void s.offsetWidth; s.classList.add("is-on"); }
    s.scrollTop = 0;

    document.getElementById("ctl-num").textContent = pad(idx + 1);
    document.getElementById("ctl-title").textContent = s.dataset.title;
    [...progress.children].forEach((b, i) => {
      b.classList.toggle("is-current", i === idx);
      b.classList.toggle("is-done", i < idx);
      b.setAttribute("aria-selected", String(i === idx));
    });
    document.getElementById("ctl-prev").disabled = idx === 0 && step === 0;
    document.getElementById("ctl-next").disabled = idx === slides.length - 1;
    live.textContent = `Slide ${idx + 1} of ${slides.length}: ${s.dataset.title}`;
    history.replaceState(null, "", "#" + s.id);
  }

  function go(i, st = 0) {
    i = Math.max(0, Math.min(slides.length - 1, i));
    if (i === idx && st === step) return;
    const dir = i > idx || (i === idx && st > step) ? "fwd" : "back";
    idx = i; step = st;
    render(dir);
  }
  const next = () => (step < steps(slides[idx]) - 1 ? go(idx, step + 1) : go(idx + 1, 0));
  const prev = () => (step > 0 ? go(idx, step - 1) : idx > 0 && go(idx - 1, steps(slides[idx - 1]) - 1));
  const jump = (i) => {
    if (mode === "pitch") go(i);
    else slides[i].scrollIntoView({ behavior: "smooth" });
  };

  /* ---------- Inputs (Story Mode) ---------- */

  const hint = document.getElementById("key-hint");
  let interacted = false;
  const touched = () => { if (!interacted) { interacted = true; hint.classList.add("is-hidden"); } wake(); };

  document.addEventListener("keydown", (e) => {
    if (mode !== "pitch" || e.metaKey || e.ctrlKey || e.altKey) return;
    const k = e.key;
    if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(k)) { e.preventDefault(); next(); touched(); }
    else if (["ArrowLeft", "ArrowUp", "PageUp"].includes(k)) { e.preventDefault(); prev(); touched(); }
    else if (k === "Home") { go(0); touched(); }
    else if (k === "End") { go(slides.length - 1); touched(); }
    else if (k === "f" || k === "F") toggleFullscreen();
  });

  let wheelLock = 0;
  window.addEventListener("wheel", (e) => {
    if (mode !== "pitch") return;
    if (e.target.closest(".founders") && Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
    // A slide taller than the screen (phones) scrolls internally until it reaches an edge.
    const s = slides[idx];
    if (s.scrollHeight > s.clientHeight + 4) {
      const atTop = s.scrollTop <= 0, atEnd = s.scrollTop + s.clientHeight >= s.scrollHeight - 2;
      if ((e.deltaY > 0 && !atEnd) || (e.deltaY < 0 && !atTop)) return;
    }
    e.preventDefault();
    const now = Date.now();
    if (now < wheelLock || Math.abs(e.deltaY) + Math.abs(e.deltaX) < 18) return;
    wheelLock = now + 900;
    (Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX) > 0 ? next() : prev();
    touched();
  }, { passive: false });

  let tx = 0, ty = 0;
  deck.addEventListener("touchstart", (e) => { tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, { passive: true });
  deck.addEventListener("touchend", (e) => {
    if (mode !== "pitch" || e.target.closest(".founders")) return;
    const dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.2) { dx < 0 ? next() : prev(); touched(); }
  });

  document.getElementById("ctl-next").addEventListener("click", () => { next(); touched(); });
  document.getElementById("ctl-prev").addEventListener("click", () => { prev(); touched(); });
  progress.addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) { go([...progress.children].indexOf(b)); touched(); } });
  document.addEventListener("click", (e) => {
    const g = e.target.closest("[data-go]");
    if (g) { jump(Number(g.dataset.go)); touched(); return; }
    if (e.target.closest("[data-next]")) { mode === "pitch" ? next() : jump(1); touched(); return; }
    // In-page links (#team, #contact) move to that slide in Story Mode.
    const a = e.target.closest('a[href^="#"]');
    if (a && mode === "pitch") {
      const i = slides.findIndex((s) => "#" + s.id === a.getAttribute("href"));
      if (i >= 0) { e.preventDefault(); go(i); }
    }
  });

  function toggleFullscreen() {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen?.().catch(() => {});
    else document.exitFullscreen?.();
  }
  document.getElementById("ctl-fs").addEventListener("click", toggleFullscreen);

  // Controls fade out after a few idle seconds and return on any movement.
  const controls = document.querySelector(".controls");
  let idleT;
  function wake() {
    controls.classList.remove("is-idle");
    clearTimeout(idleT);
    idleT = setTimeout(() => { if (mode === "pitch" && !controls.matches(":hover")) controls.classList.add("is-idle"); }, 3500);
  }
  document.addEventListener("mousemove", wake, { passive: true });
  document.addEventListener("touchstart", wake, { passive: true });

  /* ---------- Scroll view ---------- */

  const nav = document.querySelector(".about-nav");
  window.addEventListener("scroll", () => nav.classList.toggle("is-scrolled", mode === "linear" && scrollY > 12), { passive: true });

  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (!en.isIntersecting || mode !== "linear") return;
    const s = en.target;
    s.classList.add("is-on");
    if (s.dataset.steps) { s.dataset.step = "0"; setTimeout(() => (s.dataset.step = "1"), 2200); }
    io.unobserve(s);
  }), { threshold: 0.2 });

  function setMode(m, scrollToCurrent = true) {
    mode = m;
    html.classList.remove("mode-pitch", "mode-linear");
    html.classList.add("mode-" + m);
    try { localStorage.setItem("wft-about-mode", m); } catch (e) {}
    if (m === "pitch") {
      io.disconnect();
      nav.classList.remove("is-scrolled");
      slides.forEach((s) => s.classList.remove("is-on"));
      render();
      wake();
    } else {
      slides.forEach((s) => { s.classList.remove("is-current", "is-on"); s.removeAttribute("aria-hidden"); s.inert = false; io.observe(s); });
      if (scrollToCurrent) requestAnimationFrame(() => slides[idx].scrollIntoView({ block: "start" }));
    }
  }
  document.querySelectorAll(".view-toggle button").forEach((b) => b.addEventListener("click", () => {
    if (b.dataset.mode === mode) return;
    if (mode === "linear") {
      // Open Story Mode on whichever slide is in view.
      const mid = innerHeight / 2;
      const i = slides.findIndex((s) => { const r = s.getBoundingClientRect(); return r.top <= mid && r.bottom > mid; });
      idx = Math.max(0, i); step = 0;
    }
    setMode(b.dataset.mode);
  }));

  /* ---------- Start ---------- */
  const fromHash = slides.findIndex((s) => "#" + s.id === location.hash);
  if (fromHash > 0) idx = fromHash;
  if (mode === "pitch") { render(); wake(); }
  else setMode("linear", fromHash > 0);
})();
