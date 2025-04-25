// const mov = document.getElementById("moving-card")
// const sign = document.getElementById("signup")
// const upp = document.getElementById("signupp")
// const inn = document.getElementById("signinform")
// const innbutton = document.getElementById("user")
// const welcome = document.getElementById("welcome")
// const glad = document.getElementById("glad")
// const mediaQuery = window.matchMedia('(max-width: 1010px)');

// sign.onclick = function () {
//     mov.style.transform = "translateX(160%)"
//     mov.style.transition = "400ms"
//     upp.style = "opacity: 1; transition: 400ms;"
//     inn.style = "opacity: 0; transition: 400ms;"
//     welcome.innerHTML = "HI! NICE TO MEET YOU."
// }
// innbutton.onclick = function () {
//     mov.style.transform = "translateX(0px)"
//     mov.style.transition = "400ms"
//     upp.style = "opacity: 0; transition: 400ms;"
//     inn.style = "opacity: 1; transition: 400ms;"
//     welcome.innerHTML = "WELCOME BACK!"
// }

// function handleScreenChange(e) {
//     if (e.matches) {
//       sign.onclick = function () {
//           mov.style.transform = "translateY(100%)"
//           mov.style.transition = "400ms"
//           mov.style.borderBottomLeftRadius = "10px"
//           mov.style.borderBottomRightRadius = "10px"
//           mov.style.borderTopRightRadius = "0px"
//           mov.style.borderTopLeftRadius = "0px"
//           upp.style = "opacity: 1; transition: 400ms;"
//           inn.style = "opacity: 0; transition: 400ms;"
//           welcome.innerHTML = "HI! NICE TO MEET YOU."
//       }
//       innbutton.onclick = function () {
//         mov.style.transform = "translateX(0px)"
//         mov.style.transition = "400ms"
//         upp.style = "opacity: 0; transition: 400ms;"
//         inn.style = "opacity: 1; transition: 400ms;"
//         welcome.innerHTML = "WELCOME BACK!"
//         mov.style.borderBottomLeftRadius = "0px"
//         mov.style.borderBottomRightRadius = "0px"
//         mov.style.borderTopRightRadius = "10px"
//         mov.style.borderTopLeftRadius = "10px"
//     }
//       console.log('Screen is 1260px or smaller');
//     } else {
//       console.log('Screen is wider than 1260px');
//     }
//   }
//   handleScreenChange(mediaQuery);
//   mediaQuery.addEventListener('change', handleScreenChange);
  
const mov = document.getElementById("moving-card");
const sign = document.getElementById("signup");
const upp = document.getElementById("signupp");
const inn = document.getElementById("signinform");
const innbutton = document.getElementById("user");
const welcome = document.getElementById("welcome");
const mediaQuery = window.matchMedia('(max-width: 1010px)');

let isMobile = mediaQuery.matches; // Track current mode (mobile or not)

// Update on screen resize
mediaQuery.addEventListener('change', (e) => {
    isMobile = e.matches;
});

// One consistent click handler for sign-up
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
        mov.style.borderRadius = ""; // Reset if needed
    }
};

// One consistent click handler for sign-in
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
        mov.style.borderRadius = ""; // Reset if needed
    }
};
