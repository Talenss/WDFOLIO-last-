// Select the button and body
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

// Check if dark mode is already enabled in localStorage
if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
}

// Toggle dark mode on button click
darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Save preference to localStorage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});


const navbar = document.querySelector(".navbar");
let lastScrollY = window.scrollY;
let hideTimeout;

// Function to check if the user is at the top
function isAtTop() {
    return window.scrollY === 0;
}

// Scroll event
window.addEventListener("scroll", () => {
    if (isAtTop()) {
        navbar.classList.remove("hidden"); // Keep navbar visible at the top
    } else if (window.scrollY > lastScrollY) {
        navbar.classList.add("hidden"); // Hide when scrolling down
    } else {
        navbar.classList.remove("hidden"); // Show when scrolling up
    }
    lastScrollY = window.scrollY;

    // Start hide timer after 1 second if not hovered
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
        if (!navbar.matches(":hover") && !isAtTop()) {
            navbar.classList.add("hidden");
        }
    }, 1000);
});

// Prevent hiding when hovering
navbar.addEventListener("mouseenter", () => {
    navbar.classList.remove("hidden");
    clearTimeout(hideTimeout);
});

// Hide after 1 second if not hovered
navbar.addEventListener("mouseleave", () => {
    if (!isAtTop()) {
        hideTimeout = setTimeout(() => {
            navbar.classList.add("hidden");
        }, 1000);
    }
});

document.getElementById("toggle-resume").addEventListener("click", function () {
    document.getElementById("resume-pdf").style.display = "block";
    document.getElementById("cv-pdf").style.display = "none";
});

document.getElementById("toggle-cv").addEventListener("click", function () {
    document.getElementById("resume-pdf").style.display = "none";
    document.getElementById("cv-pdf").style.display = "block";
});

let zoomLevel = 1;
function zoomPDF(factor) {
    zoomLevel *= factor;
    document.getElementById("resume-pdf").style.transform = `scale(${zoomLevel})`;
    document.getElementById("cv-pdf").style.transform = `scale(${zoomLevel})`;
}

function resetZoom() {
    zoomLevel = 1;
    document.getElementById("resume-pdf").style.transform = "scale(1)";
    document.getElementById("cv-pdf").style.transform = "scale(1)";
}

const profileImg = document.getElementById("profile-img");

const hoverImage = "images/matcho.png";  // New image
const originalImage = "images/IMG_4917.png";  // Default image
let timeout; // Store timeout reference

profileImg.addEventListener("mouseover", () => {
    timeout = setTimeout(() => {
        profileImg.src = hoverImage;
    }, 2000); // Change 500ms (0.5s) to any delay you want
});

profileImg.addEventListener("mouseout", () => {
    clearTimeout(timeout); // Prevents change if mouse leaves quickly
    setTimeout(() => {
        profileImg.src = originalImage;
    }, 2000); // Delay returning to original image
});

function toggleMenu() {
    const menu = document.getElementById("skillsMenu");
    menu.classList.toggle("active");
}
