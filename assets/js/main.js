// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle?.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Booking bar submit (placeholder until connected to a real booking engine)
const bookingBar = document.getElementById('bookingBar');
bookingBar?.addEventListener('submit', (e) => {
  e.preventDefault();
  const checkin = document.getElementById('checkin').value;
  const checkout = document.getElementById('checkout').value;
  if (!checkin || !checkout) {
    alert('Selecciona fecha de llegada y salida.');
    return;
  }
  alert('Disponibilidad simulada: conecta este formulario a tu motor de reservas real.');
});
