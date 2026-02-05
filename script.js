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
            // Check if we need to add a class for mobile menu visibility
            // The CSS didn't explicitly define a '.nav-links.active' state for mobile
            // taking a safer bet by toggling display style for now or assuming CSS will handle it
            // Let's add the class and ensure CSS supports it (I might need to patch styling if missed)
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

    // --- Consultation Modal Logic ---
    const modal = document.getElementById('bookingModal');
    const closeBtn = document.getElementById('closeModal');
    const bookingForm = document.getElementById('bookingForm');

    // Open Modal on "Book Consultation" clicks
    // Note: We use e.preventDefault() to stop the default link behavior
    const bookBtns = document.querySelectorAll('.nav-cta, .btn-primary');

    bookBtns.forEach(btn => {
        if (btn.innerText.includes('Book') || btn.innerText.includes('Consultation')) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                modal.classList.add('active');
            });
        }
    });

    // Close Modal
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    // Close on clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Handle Form Submit
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('userName').value;
            const mobile = document.getElementById('userMobile').value;
            const purpose = document.getElementById('userPurpose').value;

            // Format WhatsApp Message
            const message = `*New Lead from Website*%0A%0AName: ${name}%0AMobile: ${mobile}%0APurpose: ${purpose}`;
            const whatsappUrl = `https://wa.me/919182727927?text=${message}`;

            // Redirect
            window.open(whatsappUrl, '_blank');
            modal.classList.remove('active');
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
    const animatedElements = document.querySelectorAll('.service-card, .section-title, .about-preview, .cta-section');

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
