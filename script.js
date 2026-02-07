// script.js

// Function to toggle dark/light mode
function toggleMode() {
    const body = document.body;
    const currentMode = localStorage.getItem('mode');
    
    if (currentMode === 'dark') {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('mode', 'light');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('mode', 'dark');
    }
}

// Initialize mode based on local storage
document.addEventListener('DOMContentLoaded', () => {
    const currentMode = localStorage.getItem('mode') || 'light';
    const body = document.body;
    body.classList.add(currentMode === 'dark' ? 'dark-mode' : 'light-mode');
});

// Example: Hook to a button click for toggling
// document.getElementById('toggleButton').addEventListener('click', toggleMode);
