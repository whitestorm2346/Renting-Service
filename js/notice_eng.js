/**
 * Created by amyjim9907 on 2016/11/17.
 */
/**
 * Created by amyjim9907 on 2016/10/10.
 */
var optionCount = 0;
$(function () {
    var url = window.location;
    var urlAux = url.toString().split("=");
    var option = urlAux[1];
    optionCount = option;
    changeFrameURL(optionCount);
});

function changeFrameURL(option) {
    if (option == null) {
        document.getElementById("frame_notice").src = 'notice_main_eng.html';
    }
    switch (parseInt(option)) {
        case -1:
            document.getElementById("frame_notice").src = 'notice_main_eng.html';
            break;
        case 2011:
            document.getElementById("frame_notice").src = 'notice_2011_eng.html';
            break;
        case 2012:
            document.getElementById("frame_notice").src = 'notice_2012_eng.html';
            break;
        case 2013:
            document.getElementById("frame_notice").src = 'notice_2013_eng.html';
            break;
    }
}
function changeOption2(option) {
    document.location.href = "notice_201_eng.html?option=" + option;
}
function show(obj, id) {
    var o = document.getElementById(id);

    if (o.className == 'content') {
        o.className = 'show-content';
    }
    else if (o.className == 'show-content') {
        o.className = 'content';
    }
}


