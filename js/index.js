/*
    Script Principal para la página de Tech Solutions
    -------------------------------------------------
    Maneja la interactividad del header, el formulario de contacto y las animaciones de scroll.
*/

document.addEventListener('DOMContentLoaded', function() {

    // --- MANEJO DEL HEADER Y MENÚ MÓVIL ---
    const header = document.getElementById('header');
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-gray-900/80', 'backdrop-blur-sm', 'shadow-lg');
        } else {
            header.classList.remove('bg-gray-900/80', 'backdrop-blur-sm', 'shadow-lg');
        }
    });

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // --- ACTUALIZACIÓN AUTOMÁTICA DEL AÑO EN EL FOOTER ---
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- MANEJO DEL FORMULARIO DE CONTACTO POR WHATSAPP ---
    const contactForm = document.querySelector('#contacto form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const nombre = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const proyecto = this.querySelector('textarea').value;
            const telefono = '5215539948515';

            let mensajeWhatsApp = `¡Hola Tech Solutions! 👋\n\n`;
            mensajeWhatsApp += `Estoy interesado en sus servicios y me gustaría iniciar una conversación.\n\n`;
            mensajeWhatsApp += `*👤 Nombre:* ${nombre}\n`;
            mensajeWhatsApp += `*📧 Correo:* ${email}\n`;
            mensajeWhatsApp += `*📝 Sobre mi proyecto:*\n${proyecto}\n\n`;
            mensajeWhatsApp += `Quedo a la espera de su contacto. ¡Gracias!`;

            const mensajeCodificado = encodeURIComponent(mensajeWhatsApp);
            const url = `https://wa.me/${telefono}?text=${mensajeCodificado}`;
            window.open(url, '_blank').focus();
            this.reset();
        });
    }

    // --- EFECTO DE BRILLO EN TARJETAS "¿POR QUÉ NOSOTROS?" ---
    document.querySelectorAll('.why-us-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // --- ANIMACIONES DE SCROLL CON SCROLLREVEAL.JS ---
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: false
    });

    sr.reveal('#servicios .text-center > h2, #servicios .text-center > p');
    sr.reveal('.grid > div', { interval: 150 });
    sr.reveal('#tecnologias .text-center > h2, #tecnologias .text-center > p');
    sr.reveal('.tech-logo', { interval: 100 });
    sr.reveal('#porque-nosotros .text-center > h2, #porque-nosotros .text-center > p');
    sr.reveal('.why-us-card', { interval: 200, scale: 0.95 });
    sr.reveal('#contacto .text-center > h2, #contacto .text-center > p');
    sr.reveal('#contacto form > *', { interval: 150, origin: 'right' });

    // --- NAVEGACIÓN ACTIVA AL HACER SCROLL ---
    const sections = document.querySelectorAll('section[id]');
    
    function onScroll() {
        const scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const link = document.querySelector(`.nav-link[href*="${sectionId}"]`);

            if (link) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    link.classList.add('nav-active');
                } else {
                    link.classList.remove('nav-active');
                }
            }
        });
    }
    window.addEventListener('scroll', onScroll);
});
