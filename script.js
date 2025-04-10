// Theme Toggle Function
let darkMode = false;
function toggleTheme() {
    darkMode = !darkMode;
    if (darkMode) {
        document.body.style.background = "linear-gradient(135deg, #2d2d2d, #6c6c6c)";
        document.querySelectorAll('.glass').forEach(el => el.style.background = "rgba(255, 255, 255, 0.05)");
        document.querySelectorAll('.cta-button, .submit-btn').forEach(el => el.style.backgroundColor = "#ff6b6b");
    } else {
        document.body.style.background = "linear-gradient(135deg, #ff6b6b, #f7b7a3)";
        document.querySelectorAll('.glass').forEach(el => el.style.background = "rgba(255, 255, 255, 0.1)");
        document.querySelectorAll('.cta-button, .submit-btn').forEach(el => el.style.backgroundColor = "#ff6b6b");
    }
}
