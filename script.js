/**
 * Ethyl Cat Website
 * Created & Developed by: Zahara Ali
 * © 2026 Zahara Ali & Ethyl Cat - All Rights Reserved
 */

// Display creator signature in console
console.log('%cWebsite Created & Designed by: Zahara Ali', 'color: #020e1a; font-weight: bold;');
console.log('%c© 2026 Zahara Ali & Ethyl Cat - All Rights Reserved', 'color: #020e1a; font-weight: bold;');

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        alert(`Thank you for signing up! We'll send updates to ${email}`);
        this.reset();
    });
}

// Contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        alert('Thank you for reaching out! We will get back to you soon.');
        this.reset();
    });
}

// Mobile menu toggle (if needed for smaller screens)
const navMenu = document.querySelector('.nav-menu');
const navContainer = document.querySelector('.nav-container');

// Add mobile responsiveness
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        // Mobile adjustments if needed
    }
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideDown 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe tour cards and other elements
document.querySelectorAll('.tour-card, .member, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});
