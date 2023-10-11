document.addEventListener("DOMContentLoaded", function () {
    // Select all anchor links that start with "#" (internal links)
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
    // Loop through each anchor link
    anchorLinks.forEach(function (link) {
        // Add a click event listener to each link
        link.addEventListener("click", function (e) {
            // Prevent the default link behavior
            e.preventDefault();
            
            // Get the target section's ID from the link's href attribute
            const targetId = this.getAttribute("href").substring(1);
            
            // Find the target section by its ID
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Calculate the scroll position of the target section
                const targetOffsetTop = targetSection.offsetTop;
                
                // Scroll to the target section smoothly
                window.scrollTo({
                    top: targetOffsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});
