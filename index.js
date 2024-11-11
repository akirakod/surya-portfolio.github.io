// Assuming your JavaScript file is targeting work items or using a lightbox library
document.addEventListener('DOMContentLoaded', function() {
    // Select all work-item links
    const workItems = document.querySelectorAll('.work-item a');

    workItems.forEach(item => {
        // Check if the item has 'target="_blank"' to identify external links
        if (item.getAttribute('target') === '_blank') {
            item.addEventListener('click', function(event) {
                // Prevent any lightbox or default behavior if using a lightbox library
                event.stopPropagation();
            });
        }
    });
});

// If using a lightbox library, make sure to initialize it with conditions
// Example using lightbox conditional initialization (if applicable)
const lightboxOptions = {
    selector: '.image:not([target="_blank"])', // Initialize lightbox only for items without target="_blank"
    // Other lightbox options as needed
};
