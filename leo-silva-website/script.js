const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const year = document.getElementById('year');
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

year.textContent = new Date().getFullYear();

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const nombre = formData.get('nombre');
  const correo = formData.get('correo');
  const area = formData.get('area');
  const mensaje = formData.get('mensaje');

  const subject = encodeURIComponent(`Consulta legal - ${area}`);
  const body = encodeURIComponent(
    `Nombre: ${nombre}\nCorreo: ${correo}\nÁrea: ${area}\n\nMensaje:\n${mensaje}`
  );

  window.location.href = `mailto:contacto@leosilvaabogados.com?subject=${subject}&body=${body}`;
  formNote.textContent = 'Revisa los datos antes de enviar.';
});
