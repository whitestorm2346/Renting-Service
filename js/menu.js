// Using RWD created by Tse-Hsun Yu on 2023/12/25

// const navBtn1 = document.querySelector("#nav-btn-1");
// const navBtn2 = document.querySelector("#nav-btn-2");
// const closeBtn1 = document.querySelector("#close-btn-1");
// const closeBtn2 = document.querySelector("#close-btn-2");
const menubtn1 = document.querySelector("#toggler1");
const menubtn2 = document.querySelector("#toggler2");
const menu1 = document.querySelector("#menu-1");
const menu2 = document.querySelector("#menu-2");

// navBtn1.addEventListener("click", function () {
//     menu1.classList.add("show-menu");
//     closeBtn1.classList.remove("hide-btn");
//     navBtn1.classList.add("hide-btn");
// });

// closeBtn1.addEventListener("click", function () {
//     menu1.classList.remove("show-menu");
//     navBtn1.classList.remove("hide-btn");
//     closeBtn1.classList.add("hide-btn");
// });

// navBtn2.addEventListener("click", function () {
//     menu2.classList.add("show-menu");
//     closeBtn2.classList.remove("hide-btn");
//     navBtn2.classList.add("hide-btn");
// });

// closeBtn2.addEventListener("click", function () {
//     menu2.classList.remove("show-menu");
//     navBtn2.classList.remove("hide-btn");
//     closeBtn2.classList.add("hide-btn");
// });

menubtn1.addEventListener("click", function () {
    if(menubtn1.checked) menu1.classList.add("show-menu");
    else menu1.classList.remove("show-menu");
});

menubtn2.addEventListener("click", function () {
    if(menubtn2.checked) menu2.classList.add("show-menu");
    else menu2.classList.remove("show-menu");
});