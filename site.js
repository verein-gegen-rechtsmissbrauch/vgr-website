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
