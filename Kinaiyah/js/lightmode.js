function applyTheme(isLight) {
    let dropShadowLight = document.querySelectorAll(".light-drop-shadow");
    let lightBackground = document.querySelectorAll(".light-background");
    let color = document.querySelectorAll(".light-color");
    let lightMode = document.querySelectorAll(".light-mode");
    let menuBackgroundHover = document.querySelectorAll(".light-menu-background-hover");
    let menuBackground = document.querySelectorAll(".light-menu-background");
    let menuCardBackground = document.querySelectorAll(".light-menu-card-background");
    let footerBackground = document.querySelectorAll(".light-footer-background");
    let colorOrange = document.querySelectorAll(".light-color-orange");
    let boxShadow = document.querySelectorAll(".light-box-shadow");

    lightBackground.forEach(e => {
        e.classList.toggle("light-mode-background", isLight);
    });
    dropShadowLight.forEach(e => {
        e.classList.toggle("light-mode-drop-shadow", isLight);
    });
    color.forEach(e => {
        e.classList.toggle("light-mode-color", isLight);
    });
    lightMode.forEach(e => {
        e.classList.toggle("light-mode-mode", isLight);
    });
    menuBackgroundHover.forEach(e => {
        e.classList.toggle("light-mode-menu-background-hover", isLight);
    });
    menuBackground.forEach(e => {
        e.classList.toggle("light-mode-menu-background", isLight);
    });
    menuCardBackground.forEach(e => {
        e.classList.toggle("light-mode-menu-card-background", isLight);
    });
    footerBackground.forEach(e => {
        e.classList.toggle("light-mode-footer-background", isLight);
    });
    colorOrange.forEach(e => {
        e.classList.toggle("light-mode-color-orange", isLight);
    });
    boxShadow.forEach(e => {
        e.classList.toggle("light-mode-box-shadow", isLight);
    });

    let switches = document.querySelectorAll(".light-mode-switch");
    switches.forEach(sw => {
        sw.textContent = isLight ? "DARK MODE" : "LIGHT MODE";
    });
}

function lightmode() {
    let isLight = localStorage.getItem("theme") !== "light";
    localStorage.setItem("theme", isLight ? "light" : "dark");
    applyTheme(isLight);
}

// Apply theme as soon as DOM content is parsed to prevent layout flash
document.addEventListener("DOMContentLoaded", () => {
    let isLight = localStorage.getItem("theme") === "light";
    applyTheme(isLight);
});