// Selecciona los elementos que queremos animar al hacer scroll
const selectors = ['.polaroid', '.letter', '.reasons li', '.footer'];
const elements = document.querySelectorAll(selectors.join(', '));

// Les agrega la clase "reveal" para que empiecen ocultos
elements.forEach((el) => el.classList.add('reveal'));

// Observa cuándo entran o salen de pantalla y repite la animación cada vez
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    } else {
      entry.target.classList.remove('is-visible');
    }
  });
}, { threshold: 0.15 });

elements.forEach((el) => io.observe(el));