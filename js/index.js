function toggleMenu() {
    var navbarCollapse = document.getElementById("navbarCollapse");
    navbarCollapse.classList.toggle("active");
    
  }

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe por defecto

    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var mensaje = document.getElementById("mensaje").value;

    // Formar el mensaje a enviar por WhatsApp
    var mensajeWhatsApp = "Nombre: " + nombre + "\nApellidos: " + apellidos + "\nMensaje: " + mensaje;

    // Reemplaza 'XXXXXXXXXX' con tu número de teléfono de WhatsApp, incluyendo el código de país
    var telefonoWhatsApp = "527721402353";

    // Abrir la aplicación de WhatsApp con el mensaje predefinido
    window.open("https://api.whatsapp.com/send?phone=" + telefonoWhatsApp + "&text=" + encodeURIComponent(mensajeWhatsApp));
});