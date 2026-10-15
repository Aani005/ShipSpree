/* ============================================================
   ShipSpree — "How it works" alignment fixes
   1) Truck icon in the dashed roadmap box was pinned left:473px; repin right.
   2) Left image column hung lower than the right step-cards column; make the
      columns equal height and bottom-align the image so the edges line up.
   Injected stylesheet with !important so Framer's generated CSS can't win.
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
      ".framer-85CZi .framer-1y4der5{left:auto !important;right:22px !important;bottom:9px !important;}",
      /* Make the two columns equal height so the left image bottom lines up
         with the bottom of the right step-cards column. */
      ".framer-85CZi .framer-uhv2b3{align-items:stretch !important;}",
      /* Left column stretches; push the image to the bottom so its lower edge
         aligns with the right column's last card. */
      ".framer-85CZi .framer-13xvv2v{justify-content:flex-start !important;}",
      ".framer-85CZi .framer-13xvv2v .framer-1mocqjh-container{margin-top:auto !important;}"
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
