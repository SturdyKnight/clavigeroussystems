// JavaScript to highlight the active navbar link
document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname.split("/").pop(); // Get the current page name
    const navLinks = document.querySelectorAll("nav a"); // Select all navbar links

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});
