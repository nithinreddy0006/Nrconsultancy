// SEO-Friendly Scroll Reveal Script
// Uses IntersectionObserver to trigger animations when elements enter the viewport

document.addEventListener('DOMContentLoaded', () => {

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% of element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target); 
            } else {
                // Optional: Remove class to re-animate when scrolling back up
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    // Target all elements with .reveal-on-scroll class
    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => observer.observe(el));
});
