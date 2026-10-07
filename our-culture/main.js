// Content below stands in for CMS data (events, videos). Swap the arrays for API responses.
const u = (id, w = 1000) => `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

const EVENTS = {
  coorg: {
    title: "Coorg Offsite", meta: "March 2026 · 38 people · 3 days",
    photos: ["photo-1530099486328-e021101a494a", "photo-1529156069898-49953e39b3ac", "photo-1511632765486-a01980e01a18", "photo-1543269865-cbf427effbad", "photo-1528605248644-14dd04022da1"],
  },
  dinners: {
    title: "Team Dinners", meta: "Monthly · Indiranagar & beyond",
    photos: ["photo-1511632765486-a01980e01a18", "photo-1543269865-cbf427effbad", "photo-1519671482749-fd09be7ccebf", "photo-1515187029135-18ee286d815b", "photo-1529156069898-49953e39b3ac"],
  },
  sports: {
    title: "Weframe Sports League", meta: "Cricket, badminton & a lot of trash talk",
    photos: ["photo-1517457373958-b7bdd4587205", "photo-1523580494863-6f3031224c94", "photo-1528605248644-14dd04022da1", "photo-1530099486328-e021101a494a", "photo-1543269865-cbf427effbad"],
  },
  meetups: {
    title: "Community Meetups", meta: "Sanity & Jamstack BLR · 6 talks given",
    photos: ["photo-1540575467063-178a50c2df87", "photo-1515187029135-18ee286d815b", "photo-1556761175-5973dc0f32e7", "photo-1542744173-8e7e53415bb0", "photo-1552664730-d307ca884978"],
  },
};

function renderEvent(key) {
  const ev = EVENTS[key];
  const grid = document.getElementById("event-grid");
  grid.innerHTML = ev.photos.map((id, i) => `
    <figure style="animation-delay:${i * 60}ms">
      <img src="${u(id, i === 0 ? 1200 : 700)}" alt="${ev.title} photo ${i + 1}" loading="${i === 0 ? "eager" : "lazy"}" />
      ${i === 0 ? `<div class="event-info"><div><b>${ev.title}</b><span>${ev.meta}</span></div><span class="tag">${ev.photos.length} photos</span></div>` : ""}
    </figure>`).join("");
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((t) => { t.classList.remove("is-active"); t.setAttribute("aria-selected", "false"); });
    tab.classList.add("is-active");
    tab.setAttribute("aria-selected", "true");
    renderEvent(tab.dataset.event);
  });
});
renderEvent("coorg");

// Stories carousel arrows
document.querySelectorAll("[data-scroll]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const track = document.getElementById(btn.dataset.scroll);
    const card = track.querySelector(".story");
    track.scrollBy({ left: Number(btn.dataset.dir) * (card.offsetWidth + 24), behavior: "smooth" });
  });
});

// Sticky nav state + mobile menu
const nav = document.querySelector(".nav");
const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 12);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
const toggle = document.querySelector(".nav__toggle");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});

// Video modal
const modal = document.getElementById("video-modal");
document.querySelectorAll("[data-video]").forEach((el) => el.addEventListener("click", () => { modal.hidden = false; }));
modal.querySelectorAll("[data-close]").forEach((el) => el.addEventListener("click", () => { modal.hidden = true; }));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") modal.hidden = true; });

// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
  });
}, { rootMargin: "0px 0px -8% 0px" });
document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 70}ms`;
  io.observe(el);
});
