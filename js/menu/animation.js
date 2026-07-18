// Global Animation
const fadeInSlideUp = document.querySelectorAll(".fade-in-slide-up");
const headerBorderAnimation = document.querySelectorAll(".header-border-animation");

// Text Animation
const focusOnPageLoad = document.querySelector(".focusme").focus();

document.addEventListener("scroll", ()=>{
    fadeInSlideUp.forEach((fadeInSlideUps)=>{
        let clientHeight = document.documentElement.clientHeight;
        let fadeInSlideUpY = fadeInSlideUps.getBoundingClientRect().y;
        let fadeInSlideUpHeight = fadeInSlideUps.getBoundingClientRect().height;
        
        if(clientHeight > fadeInSlideUpY + fadeInSlideUpHeight * 2/3){
            fadeInSlideUps.style.animation = "fade-in-slide-up 1s forwards ease";
        }
    })
    headerBorderAnimation.forEach((headerBorderAnimations)=>{
        let clientHeight = document.documentElement.clientHeight;
        let headerBorderAnimationY = headerBorderAnimations.getBoundingClientRect().y;
        let headerBorderAnimationHeight = headerBorderAnimations.getBoundingClientRect().height;
        
        if(clientHeight > headerBorderAnimationY + headerBorderAnimationHeight * 2/3){
            headerBorderAnimations.style.animation = "header-border-animation 1s .2s forwards ease";
        }
    })
})