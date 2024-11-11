document.addEventListener('DOMContentLoaded', function() {
document.querySelectorAll('.work-item a').forEach(function(anchor, index) {
  // Log the href attribute to verify it's being read correctly
  console.log(`Anchor #${index} href: ${anchor.getAttribute('href')}`);

  anchor.addEventListener('click', function(event) {
    const hrefValue = this.getAttribute('href');
    console.log(`Clicked on link: ${hrefValue}`);

    if (hrefValue) {
      // Open the link in a new tab without preventing default behavior
      window.open(hrefValue, '_blank');
      console.log('Opened the link in a new tab.');
    } else {
      console.log('No valid href found.');
    }
  });
});

});
