// Animasi scroll
const elements = document.querySelectorAll('.card, .portfolio img');
window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});
elements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(30px)";
  el.style.transition = "0.6s ease";
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');
hamburger.addEventListener('click', () => {
  navbar.classList.toggle('show');
});

// Form submit
const form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Terima kasih, pesan Anda sudah terkirim!');
  form.reset();
});