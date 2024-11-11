document.addEventListener('DOMContentLoaded', function() {
    // Select all anchor tags that wrap the images
    const thumbnails = document.querySelectorAll('.work-item a');

    thumbnails.forEach(thumbnail => {
        // When the user clicks anywhere inside the anchor tag (image or text), the link should open in a new tab
        thumbnail.addEventListener('click', function(event) {
            // Get the link from the anchor tag
            const url = thumbnail.getAttribute('href');
            if (url) {
                // Open the link in a new tab
                window.open(url, '_blank');
            }
        });
    });
});
