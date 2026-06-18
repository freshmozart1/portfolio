/*
 * main.js — language toggle + scroll-reveal.
 * Depends on I18N from content.js (loaded first).
 */
(function () {
  "use strict";

  var dictionaries = typeof I18N !== "undefined" ? I18N : { en: {} };

  /* ---------- i18n ---------- */
  function applyLang(lang) {
    var dict = dictionaries[lang] || dictionaries.en || {};
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n")];
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-content]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n-content")];
      if (v != null) el.setAttribute("content", v);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n-aria")];
      if (v != null) el.setAttribute("aria-label", v);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n-alt")];
      if (v != null) el.setAttribute("alt", v);
    });
    if (dict["meta.title"]) document.title = dict["meta.title"];

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    try { localStorage.setItem("lang", lang); } catch (e) { /* ignore */ }
  }

  function initialLang() {
    var saved;
    try { saved = localStorage.getItem("lang"); } catch (e) { /* ignore */ }
    if (saved && dictionaries[saved]) return saved;
    var nav = (navigator.language || "en").toLowerCase();
    return nav.indexOf("de") === 0 ? "de" : "en";
  }

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.getAttribute("data-lang"));
    });
  });

  applyLang(initialLang());

  /* ---------- scroll reveal ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }
})();
