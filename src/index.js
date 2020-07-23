import "./styles/styles.scss";

const toggleBtn = document.querySelector('#checkbox');
const body = document.querySelector('body');

const switchTheme = () => {
    if (toggleBtn.checked) {
        body.className = "light-theme";
    } else {
        body.className = "dark-theme";
    }
}

toggleBtn.addEventListener('change', switchTheme);
window.addEventListener('load', switchTheme);