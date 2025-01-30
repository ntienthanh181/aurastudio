const slides = document.querySelectorAll('.slide');
        let currentSlide = 0;

        function nextSlide() {
            // Remove active class from current slide
            slides[currentSlide].classList.remove('active');
            
            // Move to next slide
            currentSlide = (currentSlide + 1) % slides.length;
            
            // Add active class to new slide
            slides[currentSlide].classList.add('active');
        }

        // Start the slideshow
        setInterval(nextSlide, 4000);

        // Preload images for smooth transitions
        function preloadImages() {
            slides.forEach(slide => {
                const imgUrl = slide.style.backgroundImage.slice(4, -1).replace(/"/g, '');
                const img = new Image();
                img.src = imgUrl;
            });
        }

        // Call preloadImages when the page loads
        window.addEventListener('load', preloadImages);