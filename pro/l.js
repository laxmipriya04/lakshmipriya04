document.addEventListener("DOMContentLoaded", function () {
    // Show only the selected section
    window.showSection = function (sectionId) {
        let sections = document.querySelectorAll(".content");
        sections.forEach(section => section.classList.remove("active"));
        document.getElementById(sectionId).classList.add("active");
    };

    // Donor registration form submission
    document.getElementById("donorForm").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Donor Registered Successfully!");
    });

    // Food donation form submission
    document.getElementById("donateForm").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Food Donated Successfully!");
    });

    // Recipient registration form submission
    document.getElementById("recipientForm").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Recipient Registered Successfully!");
    });
});
