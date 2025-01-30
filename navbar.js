// Variables to track scroll position and timeout
let lastScrollTop = 0;
let scrollTimeout;
const navbar = document.querySelector('.navbar');

// Function to handle scroll events
function handleScroll() {
    // Clear the existing timeout
    clearTimeout(scrollTimeout);

    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Only show navbar if we've scrolled past 100px (to avoid initial flicker)
    if (currentScroll > 100) {
        // Scrolling down
        if (currentScroll > lastScrollTop) {
            navbar.classList.add('hidden');
            navbar.classList.remove('visible');
        }
        // Scrolling up
        else {
            navbar.classList.add('visible');
            navbar.classList.remove('hidden');
        }
    }

    lastScrollTop = currentScroll;

    // Set timeout to hide navbar after 2 seconds of no scrolling
    scrollTimeout = setTimeout(() => {
        if (currentScroll > 100) {
            navbar.classList.add('hidden');
            navbar.classList.remove('visible');
        }
    }, 2000);
}

// Add scroll event listener with performance optimization
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
        });
        ticking = true;
    }
});

// Show navbar when mouse moves to top of screen
let mouseTimeout;
window.addEventListener('mousemove', (e) => {
    if (e.clientY < 50) {  // Mouse is within 50px of top
        clearTimeout(mouseTimeout);
        navbar.classList.add('visible');
        navbar.classList.remove('hidden');
        
        // Hide after 2 seconds if mouse leaves the navbar area
        mouseTimeout = setTimeout(() => {
            if (e.clientY >= 50) {
                navbar.classList.add('hidden');
                navbar.classList.remove('visible');
            }
        }, 2000);
    }
});