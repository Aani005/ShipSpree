/* ============================================================
   ShipSpree — align the "How it works" dashed box truck graphic
   Framer positions the truck icon inside the dashed roadmap box with a
   hardcoded left:473px, so it doesn't sit flush with the box's right
   edge (looks misaligned vs the colored step cards below). Override to
   pin it to the right with consistent padding. Injected stylesheet with
   !important so Framer's inline/generated CSS can't win.
   ============================================================ */
(function () {
  "use strict";
  var ID = "ss-howitworks-fix";
  function inject() {
    if (document.getElementById(ID)) return;
    var st = document.createElement("style");
    st.id = ID;
    st.textContent = [
      /* The dashed roadmap box — ensure it fills the column like the cards */
      ".framer-85CZi .framer-1nsat4c{width:100% !important;box-sizing:border-box !important;}",
      /* The truck graphic inside it: pin to the right with padding instead of left:473px */
      ".framer-85CZi .framer-1y4der5{left:auto !important;right:22px !important;bottom:9px !important;}"
    ].join("");
    document.head.appendChild(st);
  }
  inject();
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", inject);
  window.addEventListener("load", inject);
  // Framer re-renders styles late; re-assert briefly.
  var mo = new MutationObserver(inject);
  if (document.head) mo.observe(document.head, { childList: true });
})();
