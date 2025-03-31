document.addEventListener('DOMContentLoaded', () => {
    filterProducts('all')
});

function filterProducts(category) {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
      if (category === 'all') {
        product.classList.add('visible');
      } else if (product.classList.contains(category)) {
        product.classList.add('visible');
      } else {
        product.classList.remove('visible');
      }
    });
};

function scrollBlock(id, offset = 50, page = null) {
  document.querySelector('.burger')?.classList.remove('active');
    document.querySelector('.menu')?.classList.remove('open');

    if (window.location.pathname !== "/index.html" && window.location.pathname !== "/") {
        // Если мы НЕ на index.html, переходим на него
        window.location.href = `../index.html#${id}`;
    } else {
        // Если уже на index.html, просто скроллим
        const target = document.getElementById(id);
        if (!target) return;

        requestAnimationFrame(() => {
            window.scrollTo({ top: target.offsetTop - offset, behavior: "smooth" });
        });
    }
};

const handleImageChange = (offset) => {
  const activeSlide = document.querySelector("[data-active]")
  const slides = [...document.querySelectorAll(".block-item")]
  const currentIndex = slides.indexOf(activeSlide)
  let newIndex = currentIndex + offset

  if(newIndex < 0) newIndex = slides.length - 1
  if(newIndex >= slides.length) newIndex = 0

  slides[newIndex].dataset.active = true;
  delete activeSlide.dataset.active
};

const onNext = () => handleImageChange(1);
const onPrev = () => handleImageChange(-1);
