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

document.addEventListener("DOMContentLoaded", function() {
    // var inner_menus = document.querySelectorAll('.inner-menu2')

    // inner_menus.forEach(function(inner_menu) {
    //     var icon = bar.querySelector('i.fa-angle-down')

    //     if (icon) { // 檢查是否找到 i.fa-angle-down 元素
    //         icon.addEventListener('click', function() {
    //         icon.classList.toggle('fa-angle-down')
    //         icon.classList.toggle('fa-angle-up')

    //         bars.forEach(function(otherBar) {
    //             if (otherBar !== bar && otherBar.querySelector('i.fa-angle-down')) {
    //                 otherBar.querySelector('i').classList.remove('fa-angle-up')
    //                 otherBar.querySelector('i').classList.add('fa-angle-down')
    //             }
    //         })
    //     } 
    //     })


    var bars = document.querySelectorAll('.bar')

    bars.forEach(function(bar) {
      var icon = bar.querySelector('i.fa-angle-down')

      if (icon) { // 檢查是否找到 i.fa-angle-down 元素
        icon.addEventListener('click', function() {
          icon.classList.toggle('fa-angle-down')
          icon.classList.toggle('fa-angle-up')

          bars.forEach(function(otherBar) {
            if (otherBar !== bar && otherBar.querySelector('i.fa-angle-down')) {
              otherBar.querySelector('i').classList.remove('fa-angle-up')
              otherBar.querySelector('i').classList.add('fa-angle-down')
            }
          })
        })
      }
    })
})

document.getElementById("show-inner-menu-btn-1").addEventListener(
    "click", 
    function() {
        var ulElement = document.getElementById("inner-menu2-1");
        var iconElement = document.getElementById("show-inner-menu-btn-1");
        
        if (iconElement.classList.contains("fa-angle-up")) {
            ulElement.style.display = "block";
        } else {
            ulElement.style.display = "none";
        }
    }
);