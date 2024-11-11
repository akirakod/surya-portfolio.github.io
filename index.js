document.querySelectorAll('.work-item a').forEach(function(anchor, index) {
  console.log(`Processing anchor #${index} with href: ${anchor.href}`);

  anchor.addEventListener('click', function(event) {
    console.log(`Clicked on link: ${this.href}`);

    // Open the link in a new tab
    window.open(this.href, '_blank');
    console.log('Opened the link in a new tab.');

    // Prevent the default behavior to avoid the current page navigation
    event.preventDefault();
    console.log('Default behavior prevented.');
  });
});
