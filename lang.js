(function () {
  'use strict';

  function applyLang(lang) {
    document.documentElement.setAttribute('data-lang', lang);

    document.querySelectorAll('[data-ua]').forEach(function (el) {
      el.textContent = lang === 'ru' ? el.getAttribute('data-ru') : el.getAttribute('data-ua');
    });

    document.querySelectorAll('[data-ua-placeholder]').forEach(function (el) {
      el.placeholder = lang === 'ru'
        ? el.getAttribute('data-ru-placeholder')
        : el.getAttribute('data-ua-placeholder');
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    try {
      localStorage.setItem('skarlat_lang', lang);
    } catch (e) { /* storage unavailable */ }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var saved;
    try {
      saved = localStorage.getItem('skarlat_lang');
    } catch (e) { saved = null; }
    var lang = saved || 'ua';

    applyLang(lang);

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLang(btn.getAttribute('data-lang'));
      });
    });
  });
})();
