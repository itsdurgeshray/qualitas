(() => {
  /* =========================================================
     CONTENT — stand-ins for CMS collections. Swap for API data.
     ========================================================= */

  // Trust bar: logo entries (image) or name entries (icon + text).
  const LOGOS = [
    { logo: "assets/logo-bentley.svg", name: "Bentley" },
    { icon: "assets/icon-certifyos.png", name: "CertifyOS" },
    { logo: "assets/logo-oneplus.svg", name: "OnePlus" },
    { icon: "assets/icon-luma.png", name: "Luma Travel" },
    { logo: "assets/logo-dubai.svg", name: "Dubai" },
    { icon: "assets/icon-unimig.svg", name: "Unimig" },
    { logo: "assets/logo-insta360.svg", name: "Insta360" },
    { icon: "assets/logo-skinlaundry.png", name: "Skin Laundry" },
    { icon: "assets/logo-catalyser.png", name: "Catalyser" },
  ];

  // PLACEHOLDER project descriptions — confirm with each client before launch.
  const CLIENTS = [
    { name: "CertifyOS", icon: "assets/icon-certifyos.png", category: "Health-Tech", project: "Composable marketing site · Glasgow, UK" },
    { name: "Luma Travel", icon: "assets/icon-luma.png", category: "Travel", project: "Headless booking funnel and content system" },
    { name: "Unimig", icon: "assets/icon-unimig.svg", category: "E-commerce", project: "Headless storefront and product catalogue" },
    { name: "Skin Laundry", icon: "assets/logo-skinlaundry.png", category: "Beauty & wellness", project: "Multi-location site · California, USA" },
    { name: "Catalyser", icon: "assets/logo-catalyser.png", category: "B2B services", project: "Platform rebuild · Melbourne, Australia" },
    { name: "Velmie", mono: "V", category: "Fintech", project: "Partner portal and integrations" },
  ];

  const CAPABILITIES = [
    { title: "Headless CMS", text: "Content models editors love, on the CMS that fits your team.", chips: ["Sanity", "Directus", "Contentful", "Strapi"], icon: '<path d="M4 5h16v5H4zM4 14h7v5H4zM14 14h6v5h-6z"/>' },
    { title: "Headless ecommerce", text: "Fast, flexible storefronts without replatforming your operations.", chips: ["Shopify", "Medusa.js", "Custom APIs"], icon: '<path d="M4 7h16l-1.5 9h-13L4 7Zm4 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM8 7l2-3h4l2 3"/>' },
    { title: "Next.js", text: "Server components, edge rendering and Core Web Vitals in the green.", chips: ["React", "Edge", "ISR"], icon: '<circle cx="12" cy="12" r="9"/><path d="M9 8v8M9 8l7 9M15 8v5"/>' },
    { title: "Directus", text: "Data platforms and back offices with custom extensions and roles.", chips: ["Extensions", "Flows", "RBAC"], icon: '<path d="M4 7c0-2 3.6-3 8-3s8 1 8 3-3.6 3-8 3-8-1-8-3Zm0 0v10c0 2 3.6 3 8 3s8-1 8-3V7M4 12c0 2 3.6 3 8 3s8-1 8-3"/>' },
    { title: "Integrations", text: "Your CMS, commerce, CRM, ERP and payments talking to each other.", chips: ["GraphQL", "Webhooks", "ERP / PIM"], icon: '<path d="M8 12h8M5 8a3 3 0 1 0 0 8M19 8a3 3 0 1 1 0 8"/>' },
    { title: "Migrations", text: "Move off WordPress, Magento or a legacy CMS with zero-downtime cutover.", chips: ["Content", "Redirects", "SEO"], icon: '<path d="M4 7h12l-3-3M20 17H8l3 3"/>' },
  ];

  // FAQ answers marked "from Figma" reuse pricing/timeline/support facts from the design file; review the rest.
  const FAQ_CATS = ["Process", "Pricing", "Timeline", "CMS", "Ecommerce", "Technology", "Support", "Migration", "Communication"];
  const FAQS = [
    { cat: "Process", q: "What happens after I submit an enquiry?", a: "A founder reads it and replies within one business day. If it’s a fit, we book a 30-minute discovery call, then scope the work and send a fixed proposal, usually within two weeks." },
    { cat: "Process", q: "Do you sign NDAs?", a: "Yes. We’re happy to sign your NDA, or send ours, before you share code, data or roadmaps." },
    { cat: "Pricing", q: "How much does a project cost?", a: "Single-site CMS builds with one content model start from $8,000. Multi-site or multi-locale platforms start from $22,000. Migrations are scoped after a free content audit, so you get a fixed price before we start." },
    { cat: "Pricing", q: "Do you work on fixed price or time and materials?", a: "Most projects are fixed scope and fixed price. For ongoing product work we offer monthly retainers with a dedicated team." },
    { cat: "Timeline", q: "How long does a typical build take?", a: "Most builds launch in 4 to 8 weeks. Larger multi-locale platforms and complex migrations take longer; we’ll give you a week-by-week plan in the proposal." },
    { cat: "Timeline", q: "Can you work to a hard launch date?", a: "Yes. Tell us the date in the enquiry form. We’ll plan backwards from it and tell you upfront what fits and what doesn’t." },
    { cat: "CMS", q: "Which CMS should we choose?", a: "It depends on your editors, content model and budget. We work across Sanity, Directus, Contentful and Strapi, and we’ll recommend one on the discovery call with the trade-offs explained." },
    { cat: "CMS", q: "Will our team be able to edit content without developers?", a: "That’s the point. Every build includes a content model designed around your editors, plus editor training before launch." },
    { cat: "Ecommerce", q: "Can we keep our current ecommerce backend?", a: "Usually, yes. We often keep Shopify or your existing commerce engine and replace only the storefront, so operations don’t change." },
    { cat: "Ecommerce", q: "Do you handle multi-region and multi-currency stores?", a: "Yes. We build for multiple markets, currencies and languages, including localised content and pricing." },
    { cat: "Technology", q: "What’s your core stack?", a: "Next.js and React on the front end, a headless CMS such as Sanity or Directus, headless commerce such as Shopify or Medusa.js, and GraphQL or REST to tie it together." },
    { cat: "Technology", q: "Who owns the code?", a: "You do, 100%. Everything lives in your repositories and accounts from day one." },
    { cat: "Support", q: "What support is included after launch?", a: "Builds include 30 or 90 days of post-launch support depending on the package. After that, you can move to a support SLA or a monthly retainer." },
    { cat: "Support", q: "Can you take over a site another agency built?", a: "Yes. We start with a short technical audit so we know what we’re inheriting before we commit to anything." },
    { cat: "Migration", q: "Will we lose SEO when we migrate?", a: "Not if it’s planned properly. Every migration includes a redirect and SEO preservation plan, full content and asset migration, and a zero-downtime cutover." },
    { cat: "Migration", q: "Which platforms can you migrate from?", a: "WordPress, Contentful, Magento, Drupal and most legacy or custom CMSs. If it has a database or an export, we can move it." },
    { cat: "Communication", q: "How will we communicate during the project?", a: "A shared Slack channel, a weekly demo and one point of contact who knows your project inside out." },
    { cat: "Communication", q: "Which time zones do you work in?", a: "We’re based in Bangalore (IST) and work with teams in the UK, Europe, the US and Australia, with overlapping hours for calls." },
  ];

  // Project enquiry form schema (CMS-driven in production). `when` makes a step or field conditional.
  const has = (arr, ...vals) => Array.isArray(arr) && vals.some((v) => arr.includes(v));
  const FORM = [
    { id: "services", kicker: "Services", title: "What do you need help with?", desc: "Pick everything that applies. We’ll tailor the next questions.",
      fields: [{ id: "services", type: "chips", multi: true, required: true, label: "Services required",
        options: ["Development", "Migration", "Ecommerce", "CMS", "UI/UX", "Maintenance", "Integrations", "SEO", "CRO", "CTO as a Service"] }] },
    { id: "project", kicker: "Project", title: "Tell us about the project.", desc: "A few lines is plenty. We’ll dig into details on the call.",
      fields: [
        { id: "projectType", type: "chips", required: true, label: "What kind of project is it?", options: ["New build", "Rebuild / redesign", "Replatform / migration", "Ongoing development"] },
        { id: "summary", type: "textarea", required: true, label: "Goals and requirements", placeholder: "What are you building, who is it for, and what does success look like?" },
        { id: "currentSite", type: "url", label: "Current website", placeholder: "https://" },
      ] },
    { id: "cms", kicker: "CMS requirements", title: "Your content and CMS.", desc: "Added because you selected CMS or Migration.", when: (d) => has(d.services, "CMS", "Migration"),
      fields: [
        { id: "currentCms", type: "chips", label: "Current CMS", options: ["WordPress", "Contentful", "Sanity", "Strapi", "Directus", "Drupal", "Custom / in-house", "None"] },
        { id: "preferredCms", type: "chips", label: "Preferred CMS", hint: "(if you have one)", options: ["Sanity", "Directus", "Contentful", "Strapi", "Payload", "Not sure, advise us"] },
        { id: "migrate", type: "toggle", label: "Do you need existing content migrated?" },
        { id: "volume", type: "chips", label: "Roughly how much content?", when: (d) => d.migrate === "Yes", options: ["Under 500 entries", "500 – 5,000", "5,000 – 50,000", "50,000+"] },
        { id: "cmsIntegrations", type: "chips", multi: true, label: "Integrations", options: ["Search", "DAM", "Translation", "Analytics", "CRM", "Marketing automation"] },
        { id: "customFn", type: "textarea", label: "Custom functionality", placeholder: "Workflows, custom Studio tools, previews, roles…" },
      ] },
    { id: "ecom", kicker: "Ecommerce requirements", title: "Your store.", desc: "Added because you selected Ecommerce.", when: (d) => has(d.services, "Ecommerce"),
      fields: [
        { id: "ecomPlatform", type: "chips", label: "Current platform", options: ["Shopify", "WooCommerce", "Magento", "BigCommerce", "Custom", "Not live yet"] },
        { id: "ecomTarget", type: "chips", label: "Where do you want to be?", options: ["Headless Shopify", "Medusa.js", "Keep current backend", "Not sure, advise us"] },
        { id: "skus", type: "chips", label: "Number of products (SKUs)", options: ["Under 100", "100 – 1,000", "1,000 – 10,000", "10,000+"] },
        { id: "multiRegion", type: "toggle", label: "Do you sell in multiple countries or currencies?" },
        { id: "markets", type: "number", label: "How many markets?", placeholder: "e.g. 4", when: (d) => d.multiRegion === "Yes" },
        { id: "b2b", type: "toggle", label: "Do you need B2B features (price lists, quotes, accounts)?" },
        { id: "ecomIntegrations", type: "chips", multi: true, label: "Systems to connect", options: ["ERP", "PIM", "OMS / fulfilment", "Payments", "Reviews", "Loyalty"] },
      ] },
    { id: "budget", kicker: "Budget & timeline", title: "Budget and timing.", desc: "Ranges are fine. This helps us propose the right shape of project.",
      fields: [
        { id: "budget", type: "chips", required: true, label: "Budget range (USD)", options: ["Under $10k", "$10k – $25k", "$25k – $50k", "$50k – $100k", "$100k+", "Not sure yet"] },
        { id: "timeline", type: "chips", required: true, label: "When do you want to start?", options: ["ASAP", "Within 1 month", "1 – 3 months", "3+ months"] },
        { id: "deadline", type: "date", label: "Launch deadline", hint: "(optional)" },
        { id: "hardDeadline", type: "toggle", label: "Is that a hard deadline?", when: (d) => !!d.deadline },
      ] },
    { id: "company", kicker: "About you", title: "Who should we reply to?", desc: "We only use this to respond to your enquiry.",
      fields: [
        { id: "name", type: "text", required: true, label: "Full name", auto: "name", half: true },
        { id: "role", type: "text", label: "Role", placeholder: "e.g. Head of Product", auto: "organization-title", half: true },
        { id: "email", type: "email", required: true, label: "Work email", auto: "email", half: true },
        { id: "company", type: "text", required: true, label: "Company", auto: "organization", half: true },
        { id: "website", type: "url", label: "Company website", placeholder: "https://", auto: "url", half: true },
        { id: "location", type: "text", label: "Location", placeholder: "City, country", half: true },
        { id: "source", type: "select", label: "How did you hear about us?", options: ["Google search", "AI search (ChatGPT, Perplexity…)", "Referral", "LinkedIn", "Clutch / directory", "Other"] },
        { id: "consent", type: "checkbox", required: true, label: "I agree to Weframetech contacting me about this enquiry." },
      ] },
  ];

  /* =========================================================
     Helpers
     ========================================================= */
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const store = {
    get(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} },
    del(k) { try { localStorage.removeItem(k); } catch (e) {} },
  };
  // Replace with the real endpoint (HubSpot, Cal.com, CRM…). Resolves after a short delay for the prototype.
  const sendToBackend = (type, payload) => new Promise((res) => { console.info("[contact] " + type, payload); setTimeout(res, 700); });

  /* =========================================================
     Nav state, reveals, video modal
     ========================================================= */
  const nav = $(".nav");
  const onScroll = () => nav.classList.toggle("is-scrolled", scrollY > 12);
  addEventListener("scroll", onScroll, { passive: true }); onScroll();

  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" });
  const observeReveals = () => $$(".reveal:not(.is-in)").forEach((el, i) => { el.style.transitionDelay = `${(i % 4) * 70}ms`; io.observe(el); });

  const modal = $("#video-modal");
  document.addEventListener("click", (e) => {
    const v = e.target.closest("[data-video]");
    if (v) { $("#video-title").textContent = v.dataset.video; modal.hidden = false; $(".modal__close", modal).focus(); }
    if (e.target.closest("[data-close]")) modal.hidden = true;
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") modal.hidden = true; });

  /* =========================================================
     Logo strip, client showcase, capabilities
     ========================================================= */
  const logoHTML = LOGOS.map((l) => l.logo
    ? `<span class="marquee__item"><img src="${l.logo}" alt="${esc(l.name)}" /></span>`
    : `<span class="marquee__item"><img class="mi-icon" src="${l.icon}" alt="" /><b>${esc(l.name)}</b></span>`).join("");
  $("#marquee").innerHTML = logoHTML + logoHTML.replace(/alt="[^"]+"/g, 'alt=""').replace(/<span class="marquee__item">/g, '<span class="marquee__item" aria-hidden="true">');

  $("#showcase").innerHTML = CLIENTS.map((c) => `<li class="reveal"><a href="#">
    ${c.icon ? `<img src="${c.icon}" alt="" />` : `<span class="sc-mono">${c.mono}</span>`}
    <span><b>${esc(c.name)}</b><small>${esc(c.project)}</small></span>
    <span class="tag">${esc(c.category)}</span><span class="sc-arrow" aria-hidden="true">→</span></a></li>`).join("");

  $("#capability-grid").innerHTML = CAPABILITIES.map((c) => `<div class="how__item reveal">
    <span class="ico-tile"><svg viewBox="0 0 24 24">${c.icon}</svg></span>
    <h3>${esc(c.title)}</h3><p>${esc(c.text)}</p>
    <div class="how__chips">${c.chips.map((x) => `<span class="tag">${esc(x)}</span>`).join("")}</div></div>`).join("");

  /* =========================================================
     Start tabs (Book a meeting / Project enquiry)
     ========================================================= */
  function openTab(name, scroll = true) {
    $$(".start-tab").forEach((t) => { const on = t.dataset.tab === name; t.classList.toggle("is-active", on); t.setAttribute("aria-selected", String(on)); });
    $("#panel-book").hidden = name !== "book";
    $("#panel-enquiry").hidden = name !== "enquiry";
    if (scroll) $("#start").scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }
  $$(".start-tab").forEach((t) => t.addEventListener("click", () => openTab(t.dataset.tab, false)));
  $(".start-tabs").addEventListener("keydown", (e) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const next = $(".start-tab:not(.is-active)"); openTab(next.dataset.tab, false); next.focus();
  });
  document.addEventListener("click", (e) => {
    const a = e.target.closest("[data-open-tab]");
    if (!a) return;
    e.preventDefault();
    openTab(a.dataset.openTab);
    history.replaceState(null, "", "#" + a.dataset.openTab);
  });
  if (location.hash === "#enquiry" || location.hash === "#book") openTab(location.hash.slice(1), false);

  /* =========================================================
     Meeting booking
     ========================================================= */
  const HOST_OFFSET_MIN = 330;                 // slots are defined in IST (UTC+05:30)
  const DAY_START = 10 * 60, DAY_END = 18 * 60; // 10:00 – 18:30 IST, 30-min calls
  const BOOK_AHEAD_DAYS = 45;
  const ZONES = ["Asia/Kolkata", "Europe/London", "Europe/Berlin", "America/New_York", "America/Chicago", "America/Los_Angeles", "Australia/Melbourne", "Asia/Singapore", "Asia/Dubai"];

  const tzSel = $("#tz");
  const rawTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const localTz = rawTz === "Asia/Calcutta" ? "Asia/Kolkata" : rawTz;
  const zones = ZONES.includes(localTz) ? ZONES : [localTz, ...ZONES];
  const tzLabel = (z) => { const o = new Intl.DateTimeFormat("en", { timeZone: z, timeZoneName: "shortOffset" }).formatToParts(new Date()).find((p) => p.type === "timeZoneName"); return `${z.split("/").pop().replace(/_/g, " ")} (${o ? o.value : ""})`; };
  tzSel.innerHTML = zones.map((z) => `<option value="${z}"${z === localTz ? " selected" : ""}>${tzLabel(z)}</option>`).join("");

  const ymd = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const hash = (s) => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const lastDay = new Date(today); lastDay.setDate(lastDay.getDate() + BOOK_AHEAD_DAYS);
  // Prototype availability: weekdays from tomorrow, a few days fully booked. Replace with the calendar API.
  const isOpen = (d) => d > today && d <= lastDay && d.getDay() % 6 !== 0 && hash(ymd(d)) % 7 !== 0;
  const slotsFor = (d) => {
    const out = [];
    for (let m = DAY_START; m <= DAY_END; m += 30) {
      const utc = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), 0, m - HOST_OFFSET_MIN);
      out.push({ utc, taken: hash(ymd(d) + m) % 4 === 0 });
    }
    return out;
  };

  const book = { month: new Date(today.getFullYear(), today.getMonth(), 1), date: null, slot: null };
  const fmtTime = (utc) => new Intl.DateTimeFormat("en", { timeZone: tzSel.value, hour: "numeric", minute: "2-digit" }).format(utc);
  const fmtLong = (utc) => new Intl.DateTimeFormat("en", { timeZone: tzSel.value, weekday: "long", day: "numeric", month: "long", hour: "numeric", minute: "2-digit", timeZoneName: "short" }).format(utc);

  function renderCal() {
    const m = book.month, y = m.getFullYear(), mo = m.getMonth();
    $("#cal-month").textContent = m.toLocaleString("en", { month: "long", year: "numeric" });
    const first = (new Date(y, mo, 1).getDay() + 6) % 7; // Monday-first
    const days = new Date(y, mo + 1, 0).getDate();
    let html = "";
    for (let i = 0; i < first; i++) html += `<span></span>`;
    for (let dd = 1; dd <= days; dd++) {
      const d = new Date(y, mo, dd), open = isOpen(d), sel = book.date && ymd(book.date) === ymd(d);
      const label = d.toLocaleDateString("en", { weekday: "long", month: "long", day: "numeric" }) + (open ? ", available" : ", unavailable");
      html += open
        ? `<button type="button" class="day day--open${sel ? " is-selected" : ""}${+d === +today ? " day--today" : ""}" data-date="${ymd(d)}" aria-label="${label}" aria-pressed="${sel}">${dd}</button>`
        : `<span class="day${+d === +today ? " day--today" : ""}" aria-label="${label}">${dd}</span>`;
    }
    $("#cal-grid").innerHTML = html;
    $("#cal-prev").disabled = y === today.getFullYear() && mo === today.getMonth();
    $("#cal-next").disabled = new Date(y, mo + 1, 1) > lastDay;
  }
  function renderSlots() {
    const list = $("#slots");
    if (!book.date) { list.innerHTML = `<p class="slots__empty">Available times show up here.</p>`; return; }
    $("#slots-date").textContent = book.date.toLocaleDateString("en", { weekday: "long", month: "short", day: "numeric" });
    list.innerHTML = slotsFor(book.date).map((s) => `<button type="button" class="slot${book.slot === s.utc ? " is-selected" : ""}" role="option" aria-selected="${book.slot === s.utc}" data-utc="${s.utc}"${s.taken ? " disabled" : ""}>${fmtTime(s.utc)}</button>`).join("");
    $("#to-details").disabled = !book.slot;
  }
  function firstOpenDay() { const d = new Date(today); for (let i = 0; i < 60; i++) { d.setDate(d.getDate() + 1); if (isOpen(d)) return new Date(d); } return null; }
  function bstep(n) {
    $$(".bstep").forEach((s) => s.classList.toggle("is-active", s.dataset.bstep === String(n)));
    if (n === 2) $("#booking-form [name=name]").focus();
    if (n === 3) $('.bstep[data-bstep="3"]').focus();
  }

  $("#cal-grid").addEventListener("click", (e) => {
    const b = e.target.closest("[data-date]"); if (!b) return;
    const [y, m, d] = b.dataset.date.split("-").map(Number);
    book.date = new Date(y, m - 1, d); book.slot = null;
    renderCal(); renderSlots();
  });
  $("#slots").addEventListener("click", (e) => {
    const b = e.target.closest("[data-utc]"); if (!b || b.disabled) return;
    book.slot = Number(b.dataset.utc); renderSlots();
  });
  $("#cal-prev").addEventListener("click", () => { book.month = new Date(book.month.getFullYear(), book.month.getMonth() - 1, 1); renderCal(); });
  $("#cal-next").addEventListener("click", () => { book.month = new Date(book.month.getFullYear(), book.month.getMonth() + 1, 1); renderCal(); });
  tzSel.addEventListener("change", () => { renderSlots(); if (book.slot) $("#picked").textContent = fmtLong(book.slot); });
  $("#to-details").addEventListener("click", () => { $("#picked").textContent = "📅 " + fmtLong(book.slot) + " · 30 min"; bstep(2); });
  $("[data-bback]").addEventListener("click", () => bstep(1));

  function validateFields(fields) {
    let firstBad = null;
    fields.forEach((input) => {
      const wrap = input.closest(".field");
      const bad = (input.required && !input.value.trim()) || (input.type === "email" && input.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) || (input.type === "url" && input.value && !/^https?:\/\/\S+\.\S+/.test(input.value));
      wrap.classList.toggle("is-invalid", bad);
      wrap.querySelector(".err")?.remove();
      input.setAttribute("aria-invalid", String(bad));
      if (bad) {
        const msg = !input.value.trim() ? "This is required." : input.type === "email" ? "Enter a valid email address." : "Enter a full URL, starting with https://";
        wrap.insertAdjacentHTML("beforeend", `<p class="err" role="alert">${msg}</p>`);
        firstBad = firstBad || input;
      }
    });
    if (firstBad) firstBad.focus();
    return !firstBad;
  }

  $("#booking-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!validateFields($$("input, textarea", form))) return;
    const btn = $("button[type=submit]", form);
    btn.disabled = true; btn.textContent = "Booking…";
    const data = Object.fromEntries(new FormData(form));
    await sendToBackend("booking", { ...data, startUtc: new Date(book.slot).toISOString(), timeZone: tzSel.value });
    btn.disabled = false; btn.textContent = "Book Meeting";
    $("#booked-summary").innerHTML = `${esc(fmtLong(book.slot))}. A Google Meet invite is on its way to <b>${esc(data.email)}</b>.`;
    book.contact = data;
    bstep(3);
  });
  $("#ics").addEventListener("click", () => {
    const s = new Date(book.slot), e = new Date(book.slot + 30 * 60000);
    const f = (d) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
    const ics = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Weframetech//Discovery call//EN", "BEGIN:VEVENT", `UID:${book.slot}@weframetech`, `DTSTAMP:${f(new Date())}`, `DTSTART:${f(s)}`, `DTEND:${f(e)}`, "SUMMARY:Discovery call with Weframetech", "DESCRIPTION:30-minute discovery call. Meeting link in your confirmation email.", "END:VEVENT", "END:VCALENDAR"].join("\r\n");
    const a = Object.assign(document.createElement("a"), { href: URL.createObjectURL(new Blob([ics], { type: "text/calendar" })), download: "weframetech-discovery-call.ics" });
    a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  });

  // Preselect the first open day so times are visible straight away.
  const fo = firstOpenDay();
  if (fo) { book.month = new Date(fo.getFullYear(), fo.getMonth(), 1); book.date = fo; }
  renderCal(); renderSlots();

  /* =========================================================
     Project enquiry (schema-driven, conditional, multi-step)
     ========================================================= */
  const DRAFT_KEY = "wft-enquiry-draft";
  const data = store.get(DRAFT_KEY) || {};
  let cur = 0, maxReached = 0, submitted = false;
  const allFields = FORM.flatMap((s) => s.fields);
  const visibleSteps = () => FORM.filter((s) => !s.when || s.when(data));
  const fieldVisible = (f) => !f.when || f.when(data);

  function fieldHTML(f) {
    const req = f.required ? " *" : "";
    const hint = f.hint ? ` <span class="q__hint">${f.hint}</span>` : "";
    const hidden = fieldVisible(f) ? "" : " hidden";
    if (f.type === "chips" || f.type === "toggle") {
      const opts = f.type === "toggle" ? ["Yes", "No"] : f.options;
      const kind = f.multi ? "checkbox" : "radio";
      return `<fieldset class="q" data-q="${f.id}"${hidden}><legend class="q__label">${f.label}${req}${hint}${f.multi ? ' <span class="q__hint">· choose any</span>' : ""}</legend>
        <div class="opts">${opts.map((o) => `<label class="opt"><input type="${kind}" name="${f.id}" value="${esc(o)}" /><span>${esc(o)}</span></label>`).join("")}</div></fieldset>`;
    }
    if (f.type === "checkbox") return `<div class="q" data-q="${f.id}"${hidden}><label class="check"><input type="checkbox" name="${f.id}" value="Yes" /><span>${f.label}${req}</span></label></div>`;
    const auto = f.auto ? ` autocomplete="${f.auto}"` : "";
    const ph = f.placeholder ? ` placeholder="${esc(f.placeholder)}"` : "";
    const ctrl = f.type === "textarea" ? `<textarea name="${f.id}" rows="4"${ph}${f.required ? " required" : ""}></textarea>`
      : f.type === "select" ? `<select name="${f.id}"><option value="">Select…</option>${f.options.map((o) => `<option>${esc(o)}</option>`).join("")}</select>`
      : `<input type="${f.type}" name="${f.id}"${ph}${auto}${f.required ? " required" : ""}${f.type === "number" ? ' min="1"' : ""} />`;
    return `<div class="q${f.half ? " q--half" : ""}" data-q="${f.id}"${hidden}><label class="field"><span>${f.label}${req}${hint}</span>${ctrl}</label></div>`;
  }
  function stepHTML(s) {
    const halves = s.fields.every((f) => f.half || f.type === "select" || f.type === "checkbox");
    const body = halves
      ? `<div class="q__grid">${s.fields.filter((f) => f.half).map(fieldHTML).join("")}</div>${s.fields.filter((f) => !f.half).map(fieldHTML).join("")}`
      : s.fields.map(fieldHTML).join("");
    return `<section class="estep" data-step="${s.id}" aria-labelledby="h-${s.id}"><header class="estep__head"><p class="estep__k">${s.kicker}</p><h3 class="estep__t" id="h-${s.id}" tabindex="-1">${s.title}</h3><p class="estep__d">${s.desc}</p></header>${body}</section>`;
  }
  $("#enquiry-steps").innerHTML = FORM.map(stepHTML).join("") +
    `<section class="estep" data-step="review" aria-labelledby="h-review"><header class="estep__head"><p class="estep__k">Review</p><h3 class="estep__t" id="h-review" tabindex="-1">Check your answers.</h3><p class="estep__d">Edit anything before you send it.</p></header><div class="review" id="review"></div></section>` +
    `<section class="estep" data-step="done"><div class="esuccess" id="esuccess" tabindex="-1"></div></section>`;

  // Restore a saved draft into the inputs.
  const form = $("#enquiry-form");
  Object.entries(data).forEach(([k, v]) => {
    $$(`[name="${k}"]`, form).forEach((el) => {
      if (el.type === "checkbox" || el.type === "radio") el.checked = Array.isArray(v) ? v.includes(el.value) : v === el.value;
      else el.value = v;
    });
  });
  if (Object.keys(data).length) $("#draft-note").textContent = "We restored your saved answers on this device.";

  function readField(name) {
    const f = allFields.find((x) => x.id === name);
    const els = $$(`[name="${name}"]`, form);
    if (f.multi) return els.filter((e) => e.checked).map((e) => e.value);
    if (els[0].type === "radio" || els[0].type === "checkbox") return (els.find((e) => e.checked) || {}).value || "";
    return els[0].value.trim();
  }
  function applyConditions() {
    allFields.forEach((f) => {
      if (!f.when) return;
      const q = $(`[data-q="${f.id}"]`, form), show = fieldVisible(f);
      if (q.hidden && show) { q.hidden = false; q.classList.add("is-revealed"); }
      else if (!show) q.hidden = true;
    });
    renderStepper();
  }
  form.addEventListener("input", (e) => {
    const name = e.target.name; if (!name || !allFields.some((f) => f.id === name)) return;
    data[name] = readField(name);
    const q = e.target.closest(".q"); q.classList.remove("is-invalid"); q.querySelector(".err")?.remove();
    q.querySelector(".field")?.classList.remove("is-invalid");
    store.set(DRAFT_KEY, data);
    applyConditions();
  });

  let prevStepIds = visibleSteps().map((s) => s.id);
  function renderStepper() {
    const steps = visibleSteps(), ids = steps.map((s) => s.id);
    const all = [...steps.map((s) => ({ id: s.id, label: s.kicker, cond: !!s.when })), { id: "review", label: "Review" }];
    $("#stepper").innerHTML = all.map((s, i) => {
      const state = submitted ? "is-done" : i < cur ? "is-done" : i === cur ? "is-current" : "";
      const isNew = s.cond && !prevStepIds.includes(s.id);
      return `<li class="${state}${isNew ? " is-new" : ""}"><button type="button" data-goto="${i}" ${i > maxReached || submitted ? "disabled" : ""} ${i === cur ? 'aria-current="step"' : ""}><i>${i < cur || submitted ? "✓" : i + 1}</i>${s.label}${s.cond ? "<small>Added</small>" : ""}</button></li>`;
    }).join("");
    prevStepIds = ids;
    $("#eq-count").textContent = submitted ? "" : `Step ${Math.min(cur + 1, all.length)} of ${all.length}`;
  }
  function showStep(i, focus = true) {
    const steps = visibleSteps();
    cur = Math.max(0, Math.min(i, steps.length));
    maxReached = Math.max(maxReached, cur);
    const id = cur === steps.length ? "review" : steps[cur].id;
    $$(".estep", form).forEach((s) => s.classList.toggle("is-active", s.dataset.step === id));
    if (id === "review") renderReview();
    $("#eq-back").hidden = cur === 0;
    $("#eq-next").textContent = id === "review" ? "Submit Project Enquiry" : cur === steps.length - 1 ? "Review" : "Continue";
    renderStepper();
    if (focus) { $(`#h-${id}`)?.focus({ preventScroll: true }); const top = $("#panel-enquiry").getBoundingClientRect().top; if (top < 0) $("#panel-enquiry").scrollIntoView({ behavior: "smooth" }); }
  }
  function validateStep(step) {
    let firstBad = null;
    step.fields.filter(fieldVisible).forEach((f) => {
      const q = $(`[data-q="${f.id}"]`, form), v = data[f.id];
      q.querySelector(".err")?.remove(); q.classList.remove("is-invalid");
      let msg = "";
      if (f.required && (!v || (Array.isArray(v) && !v.length))) msg = f.type === "chips" ? "Choose at least one option." : f.type === "checkbox" ? "Please confirm to continue." : "This is required.";
      else if (v && f.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) msg = "Enter a valid email address.";
      else if (v && f.type === "url" && !/^https?:\/\/\S+\.\S+/.test(v)) msg = "Enter a full URL, starting with https://";
      if (msg) {
        q.classList.add("is-invalid"); q.querySelector(".field")?.classList.add("is-invalid");
        q.insertAdjacentHTML("beforeend", `<p class="err" role="alert">${msg}</p>`);
        firstBad = firstBad || q.querySelector("input, textarea, select");
      }
    });
    if (firstBad) firstBad.focus();
    return !firstBad;
  }
  function renderReview() {
    $("#review").innerHTML = visibleSteps().map((s, i) => {
      const rows = s.fields.filter(fieldVisible).filter((f) => f.type !== "checkbox").map((f) => {
        const v = data[f.id]; const val = Array.isArray(v) ? v.join(", ") : v;
        return val ? `<dt>${f.label}</dt><dd>${esc(val)}</dd>` : "";
      }).join("");
      return `<div class="review__card"><header><h4>${s.kicker}</h4><button type="button" data-goto="${i}">Edit</button></header><dl>${rows || "<dd>—</dd>"}</dl></div>`;
    }).join("");
  }
  async function submitEnquiry() {
    const btn = $("#eq-next"); btn.disabled = true; btn.textContent = "Sending…";
    const payload = {}; visibleSteps().forEach((s) => s.fields.filter(fieldVisible).forEach((f) => (payload[f.id] = data[f.id] ?? "")));
    await sendToBackend("enquiry", payload);
    submitted = true; store.del(DRAFT_KEY);
    $("#enquiry-foot").hidden = true;
    $("#esuccess").innerHTML = `
      <span class="done__check" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m5 12 5 5 9-10"/></svg></span>
      <h3 class="done__t">Thanks, ${esc((data.name || "").split(" ")[0] || "we’ve got it")}.</h3>
      <p class="done__d">Your brief is with the founders. We’ll reply to <b>${esc(data.email || "")}</b> within one business day.</p>
      <div class="btn-row"><button type="button" class="btn btn--primary" id="book-after">Book your discovery call now</button></div>
      <ol class="process">${$$("#process .process__step").map((s) => `<li class="process__step">${s.innerHTML}</li>`).join("")}</ol>`;
    $$(".estep", form).forEach((s) => s.classList.toggle("is-active", s.dataset.step === "done"));
    renderStepper();
    $("#esuccess").focus();
    $("#book-after").addEventListener("click", () => {
      const f = $("#booking-form");
      [["name", data.name], ["email", data.email], ["company", data.company], ["website", data.website]].forEach(([k, v]) => { if (v) f.elements[k].value = v; });
      openTab("book");
    });
  }

  $("#eq-next").addEventListener("click", () => {
    const steps = visibleSteps();
    if (cur === steps.length) return submitEnquiry();
    if (validateStep(steps[cur])) showStep(cur + 1);
  });
  $("#eq-back").addEventListener("click", () => showStep(cur - 1));
  form.addEventListener("click", (e) => { const g = e.target.closest("[data-goto]"); if (g && !g.disabled) showStep(Number(g.dataset.goto)); });
  $("#stepper").addEventListener("click", (e) => { const g = e.target.closest("[data-goto]"); if (g && !g.disabled) showStep(Number(g.dataset.goto)); });
  form.addEventListener("submit", (e) => e.preventDefault());
  form.addEventListener("keydown", (e) => { if (e.key === "Enter" && e.target.matches("input:not([type=checkbox]):not([type=radio])")) { e.preventDefault(); $("#eq-next").click(); } });
  showStep(0, false);

  /* =========================================================
     FAQ — categories, search, accordion
     ========================================================= */
  let faqCat = "All", faqAll = false;
  const FAQ_PREVIEW = 8;
  const counts = FAQ_CATS.reduce((m, c) => ((m[c] = FAQS.filter((f) => f.cat === c).length), m), {});
  $("#faq-cats").innerHTML = ["All", ...FAQ_CATS].map((c) => `<button type="button" role="tab" data-cat="${c}" class="${c === "All" ? "is-active" : ""}" aria-selected="${c === "All"}">${c}<span>${c === "All" ? FAQS.length : counts[c]}</span></button>`).join("");
  function renderFaq() {
    const q = $("#faq-search").value.trim().toLowerCase();
    const matches = FAQS.filter((f) => (faqCat === "All" || f.cat === faqCat) && (!q || (f.q + " " + f.a).toLowerCase().includes(q)));
    const items = faqCat === "All" && !q && !faqAll ? matches.slice(0, FAQ_PREVIEW) : matches;
    const more = items.length < matches.length ? `<button type="button" class="btn btn--outline faq__more" id="faq-more">Show all ${matches.length} questions</button>` : "";
    $("#faq-list").innerHTML = items.length
      ? items.map((f, i) => `<details class="faq-item"${i === 0 ? " open" : ""}><summary>${esc(f.q)}<span class="faq__cat">${f.cat}</span></summary><p>${esc(f.a)}</p></details>`).join("") + more
      : `<p class="faq__empty">No questions match that yet. <a href="#enquiry" data-open-tab="enquiry">Ask us directly</a> and we’ll answer within a day.</p>`;
  }
  $("#faq-list").addEventListener("click", (e) => { if (e.target.id === "faq-more") { faqAll = true; renderFaq(); } });
  $("#faq-cats").addEventListener("click", (e) => {
    const b = e.target.closest("[data-cat]"); if (!b) return;
    faqCat = b.dataset.cat;
    $$("#faq-cats button").forEach((x) => { x.classList.toggle("is-active", x === b); x.setAttribute("aria-selected", String(x === b)); });
    renderFaq();
  });
  // Searching looks across every category.
  $("#faq-search").addEventListener("input", () => {
    if ($("#faq-search").value.trim() && faqCat !== "All") $('#faq-cats [data-cat="All"]').click();
    else renderFaq();
  });
  renderFaq();

  observeReveals();
})();
