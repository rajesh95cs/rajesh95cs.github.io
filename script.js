document.addEventListener("DOMContentLoaded", function() {
    // Add animation on page load
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(50px)";
    });

    const fadeIn = () => {
        let delay = 0;
        sections.forEach(section => {
            setTimeout(() => {
                section.style.transition = "all 0.5s";
                section.style.opacity = 1;
                section.style.transform = "translateY(0)";
            }, delay);
            delay += 200;
        });
    };

    fadeIn();
});