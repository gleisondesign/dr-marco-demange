
// Intersection Observer para animações ao rolar
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, observerOptions);

  // Observar todos os elementos com a classe fade-in-section
  const elements = document.querySelectorAll('.fade-in-section');
  elements.forEach(el => observer.observe(el));
};

// Inicializar quando o DOM estiver carregado
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initScrollAnimations);
  
  // Para casos onde o DOM já está carregado
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollAnimations);
  } else {
    initScrollAnimations();
  }
}
