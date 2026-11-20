/* scene.js — turns horizontal scroll position into the moving scene.
   One scroll listener updates: sky gradient, sun arc, clouds, the parallax
   layers, the mast/sleeper offsets, the active nav item, and whether the
   train runs or pauses. Everything is pure maths off scrollLeft. */

(function (SITE) {
  'use strict';
  var MAXS = 6000;        // full scroll range (6 panels => 5 * 1200)
  var PANEL_W = 1200;
  var PAUSE_AFTER = 180;  // ms of stillness before the train stops

  // Sky keyframes: [progress, topRGB, bottomRGB]. Morning -> night.
  var SKY = [
    [0,    [96,100,160], [250,190,140]],
    [0.22, [90,160,225], [190,225,245]],
    [0.6,  [70,150,220], [175,215,242]],
    [0.85, [90,80,140],  [250,160,110]],
    [1,    [24,32,70],   [90,70,120]]
  ];

  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
  function wrap(v, m) { return ((v % m) + m) % m; }
  function rgb(c) { return 'rgb(' + c[0] + ',' + c[1] + ',' + c[2] + ')'; }

  function lerpSky(t) {
    for (var i = 0; i < SKY.length - 1; i++) {
      var a = SKY[i], b = SKY[i + 1];
      if (t >= a[0] && t <= b[0]) {
        var k = (t - a[0]) / (b[0] - a[0]);
        var mix = function (p, q) {
          return [0, 1, 2].map(function (j) { return Math.round(p[j] + (q[j] - p[j]) * k); });
        };
        return [mix(a[1], b[1]), mix(a[2], b[2])];
      }
    }
    return [SKY[SKY.length - 1][1], SKY[SKY.length - 1][2]];
  }

  SITE.initScene = function () {
    var byId = function (id) { return document.getElementById(id); };
    var sc = byId('scroller');
    var d = {
      sky: byId('sky'), sun: byId('sun'), glow: byId('sunGlow'),
      c1: byId('cloud1'), c2: byId('cloud2'), c3: byId('cloud3'),
      skyline: byId('skyline'), trees: byId('trees'), masts: byId('masts'),
      sleepers: byId('sleepers'), ballast: byId('ballast'),
      train: byId('train'), hint: byId('hint')
    };
    var navs = Array.prototype.slice.call(document.querySelectorAll('#nav a'));
    var ticking = false, stopTimer = null;

    function paint() {
      ticking = false;
      var sx = sc.scrollLeft;
      var t = clamp(sx / MAXS, 0, 1);

      var pair = lerpSky(t);
      d.sky.style.background = 'linear-gradient(180deg,' + rgb(pair[0]) + ',' + rgb(pair[1]) + ')';

      var sunX = Math.round(80 + t * 1000);
      var sunY = Math.round(360 - Math.sin(Math.PI * t) * 280);
      d.sun.style.left = sunX + 'px'; d.sun.style.top = sunY + 'px';
      d.glow.style.left = (sunX - 95) + 'px'; d.glow.style.top = (sunY - 95) + 'px';

      d.c1.style.left = Math.round(wrap(200  - sx * 0.15, 1400) - 200) + 'px';
      d.c2.style.left = Math.round(wrap(700  - sx * 0.10, 1400) - 200) + 'px';
      d.c3.style.left = Math.round(wrap(1000 - sx * 0.20, 1400) - 200) + 'px';

      d.skyline.style.transform = 'translateX(' + (-Math.round(wrap(sx * 0.2, PANEL_W))) + 'px)';
      d.trees.style.transform   = 'translateX(' + (-Math.round(wrap(sx * 0.4, PANEL_W))) + 'px)';
      d.masts.style.backgroundPosition = Math.round(-sx * 0.8) + 'px 0';
      d.ballast.style.backgroundPosition  = Math.round(-sx) + 'px 0';
      d.sleepers.style.backgroundPosition = Math.round(-sx) + 'px 0';

      d.hint.style.display = sx < 40 ? 'block' : 'none';

      var active = clamp(Math.round(sx / PANEL_W), 0, navs.length - 1);
      navs.forEach(function (n, i) { n.classList.toggle('active', i === active); });
    }

    function onScroll() {
      if (!ticking) { ticking = true; requestAnimationFrame(paint); }
      d.train.classList.remove('paused');
      clearTimeout(stopTimer);
      stopTimer = setTimeout(function () { d.train.classList.add('paused'); }, PAUSE_AFTER);
    }

    sc.addEventListener('scroll', onScroll, { passive: true });

    // Vertical wheel scrolls the page sideways, UNLESS the pointer is over a
    // card body that can still scroll in that direction (then let it scroll).
    sc.addEventListener('wheel', function (e) {
      var body = e.target && e.target.closest ? e.target.closest('.body') : null;
      if (body) {
        var canUp = body.scrollTop > 0;
        var canDown = body.scrollTop + body.clientHeight < body.scrollHeight - 1;
        if ((e.deltaY < 0 && canUp) || (e.deltaY > 0 && canDown)) { return; }
      }
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        sc.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    }, { passive: false });

    // In-page station links scroll within the frame.
    document.querySelectorAll('a[href^="#stn"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        var target = document.getElementById(a.getAttribute('href').slice(1));
        if (target) sc.scrollTo({ left: target.offsetLeft, behavior: 'smooth' });
      });
    });

    paint();
  };
})(window.SITE = window.SITE || {});
