document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.work-item a'); // Select all anchor tags within the work-item articles

    thumbnails.forEach(thumbnail => {
        // Add a click event to open the link when the image or the "view" button is clicked
        thumbnail.addEventListener('click', function(event) {
            const url = thumbnail.getAttribute('href');
            if (url) {
                // Open the link in a new tab
                window.open(url, '_blank');
            }
            // Prevent the default behavior of clicking the anchor
            event.preventDefault(); 
        });
    });
});
