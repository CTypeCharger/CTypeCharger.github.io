(function () {
  var SECTION_IDS = ['publications', 'education', 'news', 'awards', 'research'];

  function activeId() {
    var h = (location.hash || '').replace(/^#/, '');
    return SECTION_IDS.indexOf(h) !== -1 ? h : '';
  }

  function apply() {
    var root = document.querySelector('.page__content');
    if (!root) return;

    var intro = root.querySelector('.home-intro');
    var panels = root.querySelectorAll('.home-section');
    if (!panels.length) return;

    var id = activeId();

    if (!id) {
      document.body.classList.remove('home-view-filtered');
      if (intro) intro.removeAttribute('hidden');
      panels.forEach(function (el) {
        el.removeAttribute('hidden');
      });
      return;
    }

    document.body.classList.add('home-view-filtered');
    if (intro) intro.setAttribute('hidden', '');
    panels.forEach(function (el) {
      if (el.id === id) {
        el.removeAttribute('hidden');
      } else {
        el.setAttribute('hidden', '');
      }
    });

    requestAnimationFrame(function () {
      var target = document.getElementById(id);
      if (target && target.scrollIntoView) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  window.addEventListener('hashchange', apply);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', apply);
  } else {
    apply();
  }
})();
