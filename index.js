// document.addEventListener('DOMContentLoaded', function() {
//     // Select all elements with the class 'image fit thumb'
//     const imageLinks = document.querySelectorAll('.image.fit.thumb');

//     // Loop through all the image links and add click event listeners
//     imageLinks.forEach(function(link) {
//         link.addEventListener('click', function(event) {
//             // Prevent the default anchor behavior (don't navigate directly on click)
//             event.preventDefault();

//             // Open the URL in a new tab
//             const url = link.getAttribute('href');
//             window.open(url, '_blank');
//         });
//     });
// });

document.querySelectorAll('.image.thumb').forEach(function(image) {
  image.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link action

    // Open the link in a new tab
    const link = this.closest('a').href; // Get the link associated with the image
    window.open(link, '_blank'); // Open the link in a new tab
  });
});
