// JavaScript for handling "Read More" functionality
document.addEventListener("DOMContentLoaded", function() {
    const readMoreButtons = document.querySelectorAll(".read-more");

    readMoreButtons.forEach(button => {

        const details = button.nextElementSibling;
        details.style.display = "none"; // Ensure it's initially hidden
        
        button.addEventListener("click", function(e) {
            e.preventDefault();
           
            if (details.style.display === "none") {
                details.style.display = "block";
            } else {
                details.style.display = "none";
            }
        });
    });
});
