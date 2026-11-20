/* render.js — builds the station panels from SITE.STATIONS and drops them into
   #track, just before the contact panel. The departure (#stn0) and contact
   (#stn5) panels live in index.html because they are one-offs. */

(function (SITE) {
  'use strict';
  var PANEL_W = 1200;

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  // Platform furniture repeats on every station panel. doorRight = 2nd pillar x.
  function furniture(doorRight) {
    return '' +
      '<div class="floor"></div>' +
      '<div class="floor-edge"></div>' +
      '<div class="pillar" style="left:40px"></div>' +
      '<div class="pillar-base" style="left:40px"></div>' +
      '<div class="pillar" style="left:' + doorRight + 'px"></div>' +
      '<div class="pillar-base" style="left:' + doorRight + 'px"></div>';
  }

  function rows(lines) {
    return lines.map(function (l) {
      return '<div class="row">' +
        (l.tag ? '<div class="tag">' + esc(l.tag) + '</div>' : '') +
        '<div class="text">' + esc(l.text) + '</div></div>';
    }).join('');
  }

  function stationPanel(s) {
    var panel = document.createElement('section');
    panel.id = s.id;
    panel.className = 'panel';
    panel.innerHTML =
      furniture(628) +
      '<div class="yboard">' +
        '<span class="bolt l"></span><span class="bolt r"></span>' +
        '<div class="hi">' + esc(s.hindi) + '</div>' +
        '<div class="en">' + esc(s.name) + '</div>' +
        '<div class="ends"><span>' + esc(s.prev) + '</span><span>' + esc(s.next) + '</span></div>' +
      '</div>' +
      '<div class="led"><span class="marquee">' + esc(s.led) + '</span></div>' +
      '<div class="sign"><div class="hi">' + esc(s.signHi) + '</div>' +
        '<div class="en">' + esc(s.signEn) + '</div></div>' +
      '<div class="plate">Stand behind the yellow line</div>' +
      '<div class="info">' +
        '<div class="kicker">' + esc(s.kicker) + '</div>' +
        '<div class="title">' + esc(s.name) + '</div>' +
        '<div class="body">' + rows(s.lines) + '</div>' +
        '<div class="foot"><span>' + esc(s.foot) + '</span>' +
          '<a class="jump" href="' + s.nextHref + '">Next station →</a></div>' +
      '</div>';
    return panel;
  }

  SITE.renderStations = function () {
    var track = document.getElementById('track');
    var contact = document.getElementById('stn5');
    SITE.STATIONS.forEach(function (s) {
      track.insertBefore(stationPanel(s), contact);
    });
    // departure + stations + contact, each one panel wide
    track.style.width = (SITE.STATIONS.length + 2) * PANEL_W + 'px';
  };
})(window.SITE = window.SITE || {});
