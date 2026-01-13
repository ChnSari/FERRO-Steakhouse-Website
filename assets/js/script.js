/* === MENU === */
const hamburger = document.getElementById('hamburgerBtn');
const menuOverlay = document.getElementById('menuOverlay');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menuOverlay.classList.toggle('active');
});

/* === FLAVORS SLIDER === */
const items = document.querySelectorAll('.flavor-card');
const dotsContainer = document.querySelector('.dots');
let currentIndex = 0;

/* --- Dots oluşturma --- */
items.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');

  dot.addEventListener('click', () => moveToSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

/* --- Slider fonksiyonu --- */
function moveToSlide(index) {
  currentIndex = index;

  // Mobilde yalnızca aktif olan görünür
  if (window.innerWidth <= 768) {
    items.forEach((item, i) => {
      item.style.display = (i === index) ? "block" : "none";
    });
  }

  updateDots();
}

/* --- Dots güncelleme --- */
function updateDots() {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

/* --- Dokunmatik (Swipe) --- */
let startX = 0;

document.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", e => {
  const endX = e.changedTouches[0].clientX;

  // Sola kaydır → ileri
  if (startX - endX > 50 && currentIndex < items.length - 1) {
    moveToSlide(currentIndex + 1);
  }

  // Sağa kaydır → geri
  if (endX - startX > 50 && currentIndex > 0) {
    moveToSlide(currentIndex - 1);
  }
});

/* --- İlk slide --- */
moveToSlide(0);


