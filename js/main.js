// Sustainable Living - Main JavaScript

// Carousel functionality (for homepage only)
if (document.querySelector('.hero-carousel')) {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.carousel-dot');

  function changeSlide(index) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');

    currentSlide = index;

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  // Auto-advance carousel every 5 seconds
  setInterval(() => {
    let nextSlide = (currentSlide + 1) % slides.length;
    changeSlide(nextSlide);
  }, 5000);

  // Make changeSlide globally accessible for onclick handlers
  window.changeSlide = changeSlide;
}

// Header scroll behavior (homepage only)
if (document.body.classList.contains('home')) {
  const header = document.getElementById('header');

  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add white background when scrolling down past 50px
    if (scrollTop > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);

  // Call once on load to set initial state
  handleScroll();
}
