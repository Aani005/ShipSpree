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
  var PARCEL_ID = "ss-parcel";

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
      "@media(max-width:900px){#" + SECTION_ID + " .ssx-grid{grid-template-columns:1fr;}#" + SECTION_ID + "{padding:72px 20px;}}",
      // ---- Parcel section (navy, distinct offering) ----
      "#" + PARCEL_ID + "{background:#0F1D2E;color:#F5F3EE;font-family:'DM Sans','DM Sans Placeholder',sans-serif;padding:96px 24px;box-sizing:border-box;}",
      "#" + PARCEL_ID + " .ssp-inner{max-width:1120px;margin:0 auto;display:grid;grid-template-columns:1.1fr .9fr;gap:56px;align-items:center;}",
      "#" + PARCEL_ID + " .ssp-eyebrow{font-size:13px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#F0602A;margin:0 0 14px;}",
      "#" + PARCEL_ID + " h2{font-size:clamp(28px,4vw,42px);font-weight:700;letter-spacing:-.02em;line-height:1.08;margin:0 0 18px;}",
      "#" + PARCEL_ID + " .ssp-lead{font-size:17px;line-height:1.6;color:rgba(245,243,238,.78);margin:0 0 28px;}",
      "#" + PARCEL_ID + " .ssp-points{list-style:none;padding:0;margin:0 0 32px;display:grid;gap:14px;}",
      "#" + PARCEL_ID + " .ssp-points li{display:flex;gap:12px;align-items:flex-start;font-size:15px;line-height:1.5;color:rgba(245,243,238,.88);}",
      "#" + PARCEL_ID + " .ssp-check{flex:none;width:20px;height:20px;border-radius:999px;background:#F0602A;color:#0F1D2E;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;margin-top:1px;}",
      "#" + PARCEL_ID + " .ssp-cta{display:inline-flex;align-items:center;gap:8px;background:#F5F3EE;color:#0F1D2E;font-size:15px;font-weight:600;padding:14px 24px;border-radius:10px;text-decoration:none;transition:background .2s ease;}",
      "#" + PARCEL_ID + " .ssp-cta:hover{background:#F0602A;color:#fff;}",
      "#" + PARCEL_ID + " .ssp-rate{background:rgba(245,243,238,.06);border:1px solid rgba(245,243,238,.14);border-radius:18px;padding:34px;}",
      "#" + PARCEL_ID + " .ssp-rate .ssp-rk{font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:rgba(245,243,238,.6);margin:0 0 8px;}",
      "#" + PARCEL_ID + " .ssp-rate .ssp-big{font-size:clamp(34px,5vw,52px);font-weight:800;letter-spacing:-.03em;line-height:1;margin:0 0 6px;}",
      "#" + PARCEL_ID + " .ssp-rate .ssp-note{font-size:13px;color:rgba(245,243,238,.6);margin:0 0 22px;}",
      "#" + PARCEL_ID + " .ssp-rate .ssp-row{display:flex;justify-content:space-between;font-size:14px;padding:12px 0;border-top:1px solid rgba(245,243,238,.10);}",
      "#" + PARCEL_ID + " .ssp-rate .ssp-row span:last-child{color:#F0602A;font-weight:600;}",
      "@media(max-width:900px){#" + PARCEL_ID + " .ssp-inner{grid-template-columns:1fr;gap:36px;}#" + PARCEL_ID + "{padding:72px 20px;}}"
    ].join("");
    document.head.appendChild(st);
  }

  function buildParcel() {
    var sec = document.createElement("section");
    sec.id = PARCEL_ID;
    sec.innerHTML =
      '<div class="ssp-inner">' +
        "<div>" +
          '<p class="ssp-eyebrow">Parcel &amp; last mile</p>' +
          "<h2>Parcel delivery, direct to your customers.</h2>" +
          '<p class="ssp-lead">Not every shipment is a pallet. ShipSpree delivers individual parcels straight to your customers’ doors — at the most competitive rates we can source, with the same clear tracking you get on freight.</p>' +
          '<ul class="ssp-points">' +
            '<li><span class="ssp-check">✓</span><span>Most competitive parcel rates we can source, compared across carriers for each shipment.</span></li>' +
            '<li><span class="ssp-check">✓</span><span>Direct-to-customer delivery — residential or business addresses.</span></li>' +
            '<li><span class="ssp-check">✓</span><span>Tracking and delivery confirmation passed straight through to you.</span></li>' +
            '<li><span class="ssp-check">✓</span><span>One point of contact for parcels and freight together.</span></li>' +
          "</ul>" +
          '<a class="ssp-cta" href="./#quote">Get a parcel rate →</a>' +
        "</div>" +
        '<div class="ssp-rate" aria-hidden="true">' +
          '<p class="ssp-rk">Competitive rates</p>' +
          '<p class="ssp-big">Best available</p>' +
          '<p class="ssp-note">We shop carriers per shipment so you don’t overpay.</p>' +
          '<div class="ssp-row"><span>Rate comparison</span><span>Every parcel</span></div>' +
          '<div class="ssp-row"><span>Delivery</span><span>Direct to door</span></div>' +
          '<div class="ssp-row"><span>Tracking</span><span>Included</span></div>' +
        "</div>" +
      "</div>";
    return sec;
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
    // Anchor: the "Live tracking preview" section — insert our sections before it.
    var anchor = document.querySelector('[data-framer-name="Live tracking preview"]');
    if (!anchor || !anchor.parentNode) return;
    css();
    // Specialized services section.
    if (!document.getElementById(SECTION_ID)) {
      anchor.parentNode.insertBefore(build(), anchor);
    }
    // Parcel section — right after services, before the tracking preview.
    if (!document.getElementById(PARCEL_ID)) {
      anchor.parentNode.insertBefore(buildParcel(), anchor);
    }
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
