document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");

    // Toggle the navigation menu on mobile
    navToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
     
    });

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    for (const anchorLink of anchorLinks) {
        anchorLink.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust for header height
                    behavior: "smooth",
                });
            }

            // Close the mobile menu after clicking a link
            navMenu.classList.remove("active");
        });
    }
});
