import './style.css'

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.style.opacity = 1;
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section > div').forEach(section => {
    section.style.opacity = 0;
    section.classList.add('transition-all', 'duration-1000');
    observer.observe(section);
});
