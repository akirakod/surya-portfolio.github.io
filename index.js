document.addEventListener("DOMContentLoaded", function() {
  // Select only anchor tags within .work-item articles
  document.querySelectorAll('.work-item a').forEach(function(anchor, index) {
    // Ensure the anchor has a valid href attribute
    const hrefValue = anchor.getAttribute('href');
    console.log(`Anchor #${index} href: ${hrefValue}`);

    // Check if href exists and is not empty
    if (hrefValue && hrefValue !== '') {
      // Attach the click event to each valid link
      anchor.addEventListener('click', function(event) {
        console.log(`Clicked on link: ${hrefValue}`);

        // Open the link in a new tab
        window.open(hrefValue, '_blank');
        console.log('Opened the link in a new tab.');

        // Prevent default anchor behavior (since we already opened it in a new tab)
        event.preventDefault();
      });

      // Attach the click event to the image inside the anchor (if image is clicked)
      anchor.querySelector('img').addEventListener('click', function(event) {
        console.log(`Clicked on image for link: ${hrefValue}`);

        // Open the link in a new tab
        window.open(hrefValue, '_blank');
        console.log('Opened the link in a new tab.');

        // Prevent the default action of the image click (which is not needed here)
        event.preventDefault();
      });
    } else {
      console.log(`No valid href found for anchor #${index}.`);
    }
  });
});
