/* app.js — entry point. Fill links from META, build the stations, start the scene. */
(function (SITE) {
  'use strict';
  function applyMeta() {
    var map = {
      email: 'mailto:' + SITE.META.email,
      github: SITE.META.github,
      linkedin: SITE.META.linkedin,
      resume: SITE.META.resume
    };
    Object.keys(map).forEach(function (key) {
      document.querySelectorAll('[data-link=' + key + ']').forEach(function (a) {
        a.href = map[key];
      });
    });
  }
  document.addEventListener('DOMContentLoaded', function () {
    applyMeta();
    SITE.renderStations();
    SITE.initScene();
  });
})(window.SITE = window.SITE || {});
