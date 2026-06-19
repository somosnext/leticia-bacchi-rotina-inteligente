const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

document.querySelector('[data-checkout]').addEventListener('click', (event) => {
  event.preventDefault();
  alert('O site está pronto para receber o link de pagamento da Letícia.');
});
