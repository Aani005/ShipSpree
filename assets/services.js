/* ============================================================
   ShipSpree — Services section injector
   Adds a "Specialized services" section (Drayage, Amazon, Costco)
   after the "How it works" section. Injected via JS and re-checked,
   because Framer's runtime re-renders the DOM and would drop a static
   block. Self-contained styling (brand: navy #0F1D2E, bone #F5F3EE,
   orange #F0602A, DM Sans).
   ============================================================ */
(function () {
  "use strict";

  var SECTION_ID = "ss-services";

  // Inline SVG icons (stroke = currentColor), simple + on-brand.
  var ICONS = {
    drayage:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="1.5" y="7" width="12" height="9" rx="1"/><path d="M13.5 10h3.5l3 3v3h-6.5z"/><circle cx="6" cy="18" r="1.6"/><circle cx="17" cy="18" r="1.6"/><path d="M1.5 4h8"/></svg>',
    amazon:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M3 7v10l9 4 9-4V7"/><path d="M12 11v10"/></svg>',
    costco:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="1.5"/><path d="M3 9h18"/><path d="M8 13h8M8 16h5"/></svg>'
  };

  var SERVICES = [
    {
      icon: ICONS.drayage,
      tag: "New service",
      title: "Drayage",
      body: "Port and rail container moves, handled end to end. We pull your containers from the terminal, manage chassis and appointments, and get them to the warehouse or final stop — with the same visibility as every other load."
    },
    {
      icon: ICONS.amazon,
      tag: "Special focus",
      title: "Amazon deliveries",
      body: "FBA and vendor shipments done to Amazon's spec — ISA/ARN appointments, pallet and labeling requirements, and delivery windows managed so your inventory checks in clean, without chargebacks."
    },
    {
      icon: ICONS.costco,
      tag: "Special focus",
      title: "Costco deliveries",
      body: "Costco depot and warehouse deliveries that meet their strict routing, appointment and compliance rules — coordinated carefully so your freight is accepted on the first attempt."
    }
  ];

  function css() {
    if (document.getElementById("ss-services-style")) return;
    var st = document.createElement("style");
    st.id = "ss-services-style";
    st.textContent = [
      "#" + SECTION_ID + "{background:#F5F3EE;color:#0F1D2E;font-family:'DM Sans','DM Sans Placeholder',sans-serif;padding:96px 24px;box-sizing:border-box;}",
      "#" + SECTION_ID + " .ssx-inner{max-width:1120px;margin:0 auto;}",
      "#" + SECTION_ID + " .ssx-eyebrow{font-size:13px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#F0602A;margin:0 0 14px;}",
      "#" + SECTION_ID + " .ssx-head{font-size:clamp(28px,4vw,42px);font-weight:700;letter-spacing:-.02em;line-height:1.08;margin:0 0 16px;}",
      "#" + SECTION_ID + " .ssx-sub{font-size:17px;line-height:1.6;color:rgba(15,29,46,.72);max-width:620px;margin:0 0 48px;}",
      "#" + SECTION_ID + " .ssx-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}",
      "#" + SECTION_ID + " .ssx-card{background:#fff;border:1px solid rgba(15,29,46,.08);border-radius:16px;padding:28px;transition:transform .25s ease,box-shadow .25s ease;}",
      "#" + SECTION_ID + " .ssx-card:hover{transform:translateY(-4px);box-shadow:0 18px 40px rgba(15,29,46,.10);}",
      "#" + SECTION_ID + " .ssx-ico{width:44px;height:44px;border-radius:12px;background:#0F1D2E;color:#F5F3EE;display:flex;align-items:center;justify-content:center;margin-bottom:18px;}",
      "#" + SECTION_ID + " .ssx-ico svg{width:24px;height:24px;}",
      "#" + SECTION_ID + " .ssx-tag{display:inline-block;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:#F0602A;background:rgba(240,96,42,.10);padding:4px 10px;border-radius:999px;margin-bottom:12px;}",
      "#" + SECTION_ID + " .ssx-card h3{font-size:21px;font-weight:700;letter-spacing:-.01em;margin:0 0 10px;}",
      "#" + SECTION_ID + " .ssx-card p{font-size:15px;line-height:1.6;color:rgba(15,29,46,.70);margin:0 0 20px;}",
      "#" + SECTION_ID + " .ssx-link{display:inline-flex;align-items:center;gap:6px;font-size:14px;font-weight:600;color:#0F1D2E;text-decoration:none;}",
      "#" + SECTION_ID + " .ssx-link:hover{color:#F0602A;}",
      "@media(max-width:900px){#" + SECTION_ID + " .ssx-grid{grid-template-columns:1fr;}#" + SECTION_ID + "{padding:72px 20px;}}"
    ].join("");
    document.head.appendChild(st);
  }

  function build() {
    var sec = document.createElement("section");
    sec.id = SECTION_ID;
    var cards = SERVICES.map(function (s) {
      return (
        '<div class="ssx-card">' +
          '<div class="ssx-ico">' + s.icon + "</div>" +
          '<span class="ssx-tag">' + s.tag + "</span>" +
          "<h3>" + s.title + "</h3>" +
          "<p>" + s.body + "</p>" +
          '<a class="ssx-link" href="./#quote">Request this →</a>' +
        "</div>"
      );
    }).join("");
    sec.innerHTML =
      '<div class="ssx-inner">' +
        '<p class="ssx-eyebrow">What we move</p>' +
        '<h2 class="ssx-head">Specialized freight, handled with focus.</h2>' +
        '<p class="ssx-sub">Beyond standard pallet shipments, ShipSpree runs the lanes that need extra care — from port drayage to retailer-specific deliveries with strict compliance rules.</p>' +
        '<div class="ssx-grid">' + cards + "</div>" +
      "</div>";
    return sec;
  }

  function inject() {
    if (document.getElementById(SECTION_ID)) return; // already present
    // Anchor: the "Live tracking preview" section — insert our section before it.
    var anchor = document.querySelector('[data-framer-name="Live tracking preview"]');
    if (!anchor || !anchor.parentNode) return;
    css();
    anchor.parentNode.insertBefore(build(), anchor);
  }

  function boot() {
    inject();
    var mo = new MutationObserver(function () { inject(); });
    if (document.body) mo.observe(document.body, { childList: true, subtree: true });
    var start = Date.now();
    (function raf() { inject(); if (Date.now() - start < 4000) requestAnimationFrame(raf); })();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else { boot(); }
  window.addEventListener("load", inject);
})();
