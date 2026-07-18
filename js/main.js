/* Удам Бэхи Холбоо ТББ — interactions */
(function () {
  "use strict";

  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Sticky nav shadow on scroll */
  var nav = document.querySelector(".nav");
  function onScroll() {
    nav.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile menu */
  var burger = document.getElementById("burger");
  burger.addEventListener("click", function () {
    var open = nav.classList.toggle("menu-open");
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Цэс хаах" : "Цэс нээх");
  });
  document.querySelectorAll(".nav__links a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("menu-open");
      burger.setAttribute("aria-expanded", "false");
    });
  });

  /* Reveal on scroll */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !prefersReduced) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* Cycling affirmations */
  var affirm = document.getElementById("affirmText");
  if (affirm) {
    var phrases = [
      "Та ганцаараа биш",
      "Таны өвдөлт үнэн, таны дуу хоолой чухал",
      "Өөрийгөө хайрлаарай",
      "Бид таны хажууд байна",
      "Асуух нь хүч — эрт оношлуулаарай"
    ];
    var idx = 0;
    setInterval(function () {
      idx = (idx + 1) % phrases.length;
      if (prefersReduced) { affirm.textContent = phrases[idx]; return; }
      affirm.classList.add("is-out");
      setTimeout(function () {
        affirm.textContent = phrases[idx];
        affirm.classList.remove("is-out");
      }, 360);
    }, 3800);
  }

  /* Count-up stats */
  var counters = document.querySelectorAll("[data-count]");
  function animateCount(el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    if (prefersReduced) { el.textContent = target.toLocaleString("mn-MN"); return; }
    var duration = 1400;
    var start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString("mn-MN");
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ("IntersectionObserver" in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          cio.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { cio.observe(el); });
  } else {
    counters.forEach(animateCount);
  }
})();
