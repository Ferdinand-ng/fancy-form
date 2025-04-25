const mov = document.getElementById("moving-card");
const sign = document.getElementById("signup");
const upp = document.getElementById("signupp");
const inn = document.getElementById("signinform");
const innbutton = document.getElementById("user");
const welcome = document.getElementById("welcome");
const mediaQuery = window.matchMedia('(max-width: 1010px)');
let isMobile = mediaQuery.matches; 

mediaQuery.addEventListener('change', (e) => {
    isMobile = e.matches;
});

sign.onclick = function () {
    mov.style.transition = "400ms";
    upp.style.opacity = "1";
    upp.style.transition = "400ms";
    inn.style.opacity = "0";
    inn.style.transition = "400ms";
    welcome.innerHTML = "HI! NICE TO MEET YOU.";

    if (isMobile) {
        mov.style.transform = "translateY(100%)";
        mov.style.borderBottomLeftRadius = "10px";
        mov.style.borderBottomRightRadius = "10px";
        mov.style.borderTopLeftRadius = "0px";
        mov.style.borderTopRightRadius = "0px";
    } else {
        mov.style.transform = "translateX(160%)";
        mov.style.borderRadius = "";
    }
};
innbutton.onclick = function () {
    mov.style.transition = "400ms";
    upp.style.opacity = "0";
    upp.style.transition = "400ms";
    inn.style.opacity = "1";
    inn.style.transition = "400ms";
    welcome.innerHTML = "WELCOME BACK!";

    if (isMobile) {
        mov.style.transform = "translateX(0px)";
        mov.style.borderBottomLeftRadius = "0px";
        mov.style.borderBottomRightRadius = "0px";
        mov.style.borderTopLeftRadius = "10px";
        mov.style.borderTopRightRadius = "10px";
    } else {
        mov.style.transform = "translateX(0px)";
        mov.style.borderRadius = ""; 
    }
};
