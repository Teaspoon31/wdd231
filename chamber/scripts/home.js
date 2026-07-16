// Ensure DOM is fully parsed and active
document.addEventListener("DOMContentLoaded", () => {
    // Populate the current year dynamically
    const yearSpan = document.getElementById("currentyear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Populate the document's last modified date
    const modifiedSpan = document.getElementById("lastModified");
    if (modifiedSpan) {
        modifiedSpan.textContent = document.lastModified;
    }
});