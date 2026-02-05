// NR Consultancy - Interaction Logic

document.addEventListener('DOMContentLoaded', () => {

    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Mobile Menu Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Simple mobile menu fix if not in CSS:
            if (navLinks.classList.contains('active')) {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = '#050505';
                navLinks.style.padding = '20px';
                navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
            } else {
                navLinks.style.display = ''; // Reset to CSS default
            }
        });
    }

    // --- Booking Page Logic ---
    // Only runs if the booking form exists (i.e., on booking.html)
    const bookingFormPage = document.getElementById('bookingFormPage');

    if (bookingFormPage) {
        bookingFormPage.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('pageName').value;
            const mobile = document.getElementById('pageMobile').value;
            const purpose = document.getElementById('pagePurpose').value;

            // Format WhatsApp Message
            const message = `*New Consultation Request*%0A%0AName: ${name}%0AMobile: ${mobile}%0APurpose: ${purpose}`;
            const whatsappUrl = `https://wa.me/919182727927?text=${message}`;

            // Redirect
            window.location.href = whatsappUrl;
        });
    }

    // --- Scroll Reveal Animation ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements to animate
    const animatedElements = document.querySelectorAll('.service-card, .section-title, .about-preview, .cta-section, .booking-card');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Add visible class styling dynamically
    const style = document.createElement('style');
    style.innerHTML = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});
