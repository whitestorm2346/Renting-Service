/**
 * Created by tsehsun on 2024/05/14.
 */
let optionCount = 0;

function changeFrameURL(option) {
    if (option == null) {
        document.getElementById("frame_rental_safety").src = 'safe.html';
    }
    switch (parseInt(option)) {
        case -1:
        case 300:
            document.getElementById("frame_rental_safety").src = 'safe.html';
            break;
        case 301:
            document.getElementById("frame_rental_safety").src = 'notice_index.html';
            break;
        case 302:
            document.getElementById("frame_rental_safety").src = 'contract.html';
            break;
        case 303:
            document.getElementById("frame_rental_safety").src = 'law.html';
            break;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    var url = window.location;
    var urlAux = url.toString().split("=");
    var option = urlAux[1];
    optionCount = (option == null) ? -1 : option;
    changeFrameURL(optionCount);
});

function changeOption2(option) {
    document.location.href = "rental_safety.html?option=" + option;
}