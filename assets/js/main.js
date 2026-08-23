/* CSC4801 — shared behavior: mobile nav, scroll reveal,
   deterministic grayscale SVG avatars, and the footer year stamp. */
(function () {
  "use strict";

  /* ---- mobile nav ---- */
  var toggle = document.querySelector(".nav__toggle");
  var links = document.querySelector(".nav__links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- scroll reveal ---- */
  var revealables = document.querySelectorAll(".reveal");
  if (revealables.length && "IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    revealables.forEach(function (el) { io.observe(el); });
  } else {
    revealables.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- deterministic grayscale avatars ----
     any element with [data-avatar="Initials"] gets an inline SVG.
     Monochrome to match the black-and-white theme: each seed picks a
     stable pair of grays, so a person's placeholder never changes. */
  function hash(str) {
    var h = 0;
    for (var i = 0; i < str.length; i++) { h = (h << 5) - h + str.charCodeAt(i); h |= 0; }
    return Math.abs(h);
  }
  var PAIRS = [
    ["#1F2328", "#59636E"], ["#24292F", "#424A53"], ["#32383F", "#6E7781"],
    ["#0D1117", "#4C535B"], ["#414A53", "#6E7781"], ["#161B22", "#57606A"]
  ];
  document.querySelectorAll("[data-avatar]").forEach(function (el) {
    var initials = el.getAttribute("data-avatar").trim();
    var seed = el.getAttribute("data-seed") || initials;
    var h = hash(seed);
    var pair = PAIRS[h % PAIRS.length];
    var rot = h % 360;
    var gid = "g" + h.toString(36);
    var svg =
      '<svg viewBox="0 0 100 100" width="100%" height="100%" role="img" aria-label="' + initials + ' placeholder portrait" xmlns="http://www.w3.org/2000/svg">' +
      '<defs><linearGradient id="' + gid + '" gradientTransform="rotate(' + rot + ' .5 .5)">' +
      '<stop offset="0%" stop-color="' + pair[0] + '"/><stop offset="100%" stop-color="' + pair[1] + '"/>' +
      '</linearGradient></defs>' +
      '<rect width="100" height="100" fill="url(#' + gid + ')"/>' +
      '<circle cx="50" cy="50" r="34" fill="rgba(255,255,255,.10)"/>' +
      '<text x="50" y="50" dy=".35em" text-anchor="middle" ' +
      'font-family="Inter, system-ui, sans-serif" font-size="33" font-weight="600" fill="#fff">' +
      initials + '</text></svg>';
    el.innerHTML = svg;
  });

  /* ---- year stamp ---- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
