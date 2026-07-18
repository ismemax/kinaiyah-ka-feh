// Only show the loading spinner if the page load takes longer than 400ms
let loaderTimeout = setTimeout(() => {
    const spinner = document.querySelector(".logo-spinner");
    if (spinner) {
        spinner.style.display = "flex";
    }
}, 400);

function hideLoader() {
    clearTimeout(loaderTimeout);
    const mainBody = document.querySelector(".main-body");
    const spinner = document.querySelector(".logo-spinner");
    
    if (mainBody) {
        mainBody.style.visibility = "visible";
    }
    
    if (spinner) {
        if (spinner.style.display === "flex") {
            // Fade out the spinner smoothly if it became visible
            spinner.style.transition = "opacity 0.5s ease, visibility 0.5s ease";
            spinner.style.opacity = "0";
            spinner.style.visibility = "hidden";
            setTimeout(() => {
                spinner.style.display = "none";
            }, 500);
        } else {
            spinner.style.display = "none";
        }
    }
}

if (document.readyState === "complete") {
    hideLoader();
} else {
    window.addEventListener("load", hideLoader);
}
