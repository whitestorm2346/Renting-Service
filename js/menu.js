const menubtn1 = document.querySelector("#toggler1");
const menu1 = document.querySelector("#menu-1");

menubtn1.addEventListener("click", function () {
    if(menubtn1.checked) {
        menu1.classList.add("show-menu");
        menu1.classList.remove("hide-menu");
    }
    else {
        menu1.classList.add("hide-menu");
        menu1.classList.remove("show-menu");
    }
});


// inner menu part 

function showInnerMenu(index) {
    for(var i = 1; i <= 3; i++){
        var hide_btn = document.querySelector("#hide-inner-menu-btn-" + index)
        var show_btn = document.querySelector("#show-inner-menu-btn-" + index)
        
        if(i == index) {
            show_btn.classList.add("hide-btn")
            hide_btn.classList.remove("hide-btn")
        }
        else {
            show_btn.classList.remove("hide-btn")
            hide_btn.classList.add("hide-btn")
        }
    }

    var inner_menu = document.querySelector("#inner-menu2-" + index)
    inner_menu.classList.add("show-inner-menu")
}

function hideInnerMenu(index) {
    for(var i = 1; i <= 3; i++){
        var hide_btn = document.querySelector("#hide-inner-menu-btn-" + index)
        var show_btn = document.querySelector("#show-inner-menu-btn-" + index)
        
        if(i == index) {
            show_btn.classList.remove("hide-btn")
            hide_btn.classList.add("hide-btn")
        }
        else {
            show_btn.classList.add("hide-btn")
            hide_btn.classList.remove("hide-btn")
        }
    }

    var inner_menu = document.querySelector("#inner-menu2-" + index)
    inner_menu.classList.remove("show-inner-menu")
}

document.querySelector("#angle-btn-1").addEventListener(
    "click",
    () => {
        
    }
)
document.querySelector("#angle-btn-2").addEventListener(
    "click",
    () => {

    }
)
document.querySelector("#angle-btn-3").addEventListener(
    "click",
    () => {

    }
)