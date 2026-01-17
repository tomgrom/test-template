// ===== THEME TOGGLE FUNCTIONALITY =====
// This script allows users to switch between light and dark mode

// Get the theme toggle button from the HTML
const themeToggle = document.getElementById('theme-toggle');

// Get the current theme from localStorage, or default to 'light'
// localStorage remembers user preferences even after closing the browser
let currentTheme = localStorage.getItem('theme') || 'light';

// Apply the saved theme when the page loads
document.documentElement.setAttribute('data-theme', currentTheme);

// Listen for clicks on the theme toggle button
themeToggle.addEventListener('click', () => {
    // If currently light, switch to dark. If dark, switch to light.
    if (currentTheme === 'light') {
        currentTheme = 'dark';
    } else {
        currentTheme = 'light';
    }

    // Apply the new theme to the page
    document.documentElement.setAttribute('data-theme', currentTheme);

    // Save the preference so it persists across page reloads
    localStorage.setItem('theme', currentTheme);
});

// ===== SMOOTH SCROLL ANIMATION (BONUS) =====
// This makes the page feel more polished when it first loads

// Add a subtle fade-in animation to sections as the page loads
window.addEventListener('load', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        // Stagger the animations slightly for each section
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 100); // Delay each section by 100ms
    });
});
