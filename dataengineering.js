// JavaScript for handling "Read More" functionality
document.addEventListener("DOMContentLoaded", function() {
    const readMoreButtons = document.querySelectorAll(".read-more");

    readMoreButtons.forEach(button => {
        button.addEventListener("click", function(e) {
            e.preventDefault();
            const details = button.nextElementSibling;
            details.classList.toggle("hidden");
        });
    });
});
