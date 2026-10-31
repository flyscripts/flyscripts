// TR / EN geçişi: ?lang=en ya da tarayıcı dili; seçim düğmelerle değiştirilir.
(function () {
  var q = new URLSearchParams(location.search).get('lang');
  var lang = q === 'en' || q === 'tr' ? q : ((navigator.language || 'tr').toLowerCase().startsWith('tr') ? 'tr' : 'en');
  function set(l) {
    document.body.classList.remove('tr', 'en');
    document.body.classList.add(l);
    document.documentElement.lang = l;
    document.querySelectorAll('.lang button').forEach(function (b) { b.classList.toggle('on', b.dataset.l === l); });
    window.siteLang = l;
    document.dispatchEvent(new CustomEvent('langchange', { detail: l }));
  }
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.lang button').forEach(function (b) { b.addEventListener('click', function () { set(b.dataset.l); }); });
    set(lang);
  });
})();
