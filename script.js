document.addEventListener('DOMContentLoaded', () => {
    // Animasi fade-in untuk setiap section
    const sections = document.querySelectorAll('section');

    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
    
});
// document.addEventListener('DOMContentLoaded', () => {
//     AOS.init({
//         duration: 1000,
//         once: true
//     });
// });
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'slide',
    });
});

// script.js
// document.addEventListener('DOMContentLoaded', () => {
//     const sliderContainer = document.querySelector('.slider-container');
//     const sliderWidth = sliderContainer.scrollWidth;
//     let scrollPosition = 0;

//     function scrollSlider() {
//         scrollPosition += 2; // Adjust scroll speed here
//         if (scrollPosition >= sliderWidth / 8) {
//             scrollPosition = 0;
//         }
//         sliderContainer.style.transform = `translateX(-${scrollPosition}px)`;
//         requestAnimationFrame(scrollSlider);
//     }

//     scrollSlider();
// });

