// Object containing image IDs and their respective URLs
const imageLinks = {
    "pharmaImage": "https://public.tableau.com/views/abbviepharmasales/Dashboard1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    "neuralImage": "https://github.com/akirakod/Neural-Net",
    "financeImage": "https://balancemyhamentry.streamlit.app",
    "animeImage": "https://animerecommendationtools.streamlit.app",
    "summerImage": "https://github.com/akirakod/summer24app"
};

// Loop through each image ID and add a click event listener
document.addEventListener("DOMContentLoaded", () => {
    for (const [imgId, url] of Object.entries(imageLinks)) {
        const imgElement = document.getElementById(imgId);
        if (imgElement) {
            imgElement.addEventListener("click", function(event) {
                event.preventDefault(); // Prevent the default <a> behavior
                window.open(url, "_blank"); // Open the URL in a new tab
            });
        }
    }
});
