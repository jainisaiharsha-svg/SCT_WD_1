document.addEventListener('DOMContentLoaded', function() {

    // --- 1. Navigation bar scroll effect ---
    const nav = document.getElementById('main-nav');
    const handleNavScroll = () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleNavScroll);


    // --- 2. Scroll-in animation for content sections ---
    const revealElements = document.querySelectorAll('.reveal');

    // Create an observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is in the viewport
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Stop observing the element after it has been revealed
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Observe each element with the 'reveal' class
    revealElements.forEach(element => {
        observer.observe(element);
    });

});