// Select all images with class 'image'
const images = document.querySelectorAll('.image.fit.thumb');

// Loop through each image
images.forEach((image) => {
    image.addEventListener('click', (event) => {
        // Prevent the default action to avoid any conflicts
        event.preventDefault();

        // Find the nearest anchor tag (parent element)
        const link = image.closest('a');

        // Check if the anchor tag exists
        if (link) {
            // Simulate a click on the anchor tag
            window.open(link.href, '_blank');  // Opens the link in a new tab
        }
    });
});
