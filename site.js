(function () {
  var nav = document.querySelector('.site-nav');
  if (!nav) return;
  var btn = nav.querySelector('.nav-toggle');
  if (!btn) return;

  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  nav.querySelectorAll('.nav-menu a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
})();

(function () {
  document.querySelectorAll('.yt-facade').forEach(function (facade) {
    var btn = facade.querySelector('.yt-play-btn');
    if (!btn) return;

    btn.addEventListener('click', function () {
      var iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + facade.getAttribute('data-id') +
        '?start=' + (facade.getAttribute('data-start') || '0') + '&autoplay=1&rel=0';
      iframe.title = facade.getAttribute('data-title') || 'YouTube-Video';
      iframe.setAttribute('allow', 'autoplay; encrypted-media; picture-in-picture; fullscreen');
      iframe.setAttribute('allowfullscreen', '');
      facade.replaceWith(iframe);
    });
  });
})();

(function () {
  document.querySelectorAll('.apolut-facade').forEach(function (facade) {
    var btn = facade.querySelector('.apolut-play-btn');
    if (!btn) return;

    btn.addEventListener('click', function () {
      var iframe = document.createElement('iframe');
      iframe.src = 'https://tube4.apolut.net/videos/embed/' +
        encodeURIComponent(facade.getAttribute('data-id')) + '?autoplay=1';
      iframe.title = facade.getAttribute('data-title') || 'apolut-Video';
      iframe.setAttribute('allow', 'autoplay; picture-in-picture; fullscreen');
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('referrerpolicy', 'no-referrer');
      iframe.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms');
      facade.replaceWith(iframe);
    });
  });
})();

document.addEventListener('keydown', function (e) {
  if (e.key !== 'Escape') return;
  var nav = document.querySelector('.site-nav');
  var btn = nav && nav.querySelector('.nav-toggle');
  if (nav && nav.classList.contains('open')) {
    nav.classList.remove('open');
    if (btn) { btn.setAttribute('aria-expanded', 'false'); btn.focus(); }
  }
});
window.addEventListener('resize', function () {
  if (window.innerWidth > 900) {
    var nav = document.querySelector('.site-nav');
    var btn = nav && nav.querySelector('.nav-toggle');
    if (nav) nav.classList.remove('open');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  }
});
