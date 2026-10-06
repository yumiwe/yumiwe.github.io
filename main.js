/* Progressive enhancement only.
   The site is fully readable without this file. */

(function () {
  "use strict";

  var items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  var reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  function showAll() {
    items.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  if (reduceMotion || !("IntersectionObserver" in window)) {
    showAll();
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
  );

  items.forEach(function (el) {
    observer.observe(el);
  });
})();
