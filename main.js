// Ernst Barbian GmbH – kleine UI-Interaktionen (mobiles Menü, Kontaktformular)
document.addEventListener('DOMContentLoaded', function () {

  // Mobiles Menü
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Kontaktformular: clientseitiges Demo-Verhalten (es wird nichts versendet)
  var form = document.querySelector('[data-contact-form]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var formCard = document.querySelector('[data-form-card]');
      var successCard = document.querySelector('[data-form-success]');
      if (formCard) formCard.classList.add('is-hidden');
      if (successCard) successCard.classList.remove('is-hidden');
    });
    var resetBtn = document.querySelector('[data-form-reset]');
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        var formCard = document.querySelector('[data-form-card]');
        var successCard = document.querySelector('[data-form-success]');
        if (formCard) formCard.classList.remove('is-hidden');
        if (successCard) successCard.classList.add('is-hidden');
        form.reset();
      });
    }
  }
});
