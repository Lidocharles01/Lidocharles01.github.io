document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        // Add click event listener to menu button
        menuBtn.addEventListener('click', () => {
            // Toggle active classes
            navLinks.classList.toggle('active');
            menuBtn.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', (e) => {
                // Close menu
                navLinks.classList.remove('active');
                menuBtn.classList.remove('active');

                // Scroll to section
                const target = document.querySelector(e.target.getAttribute('href'));
                if (target) {
                    e.preventDefault();
                    // Add delay for animation to complete
                    setTimeout(() => {
                        target.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }, 300);
                }
            });
        });
    }
});
