/**
 * Created by tsehsun on 2024/05/14.
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
        document.getElementById("frame_school_area_info").src = 'medical.html';
    }
    switch (parseInt(option)) {
        case -1:
        case 302:
            document.getElementById("frame_school_area_info").src = 'medical.html';
            break;
        case 303:
            document.getElementById("frame_school_area_info").src = 'firefighting.html';
            break;
        case 304:
            document.getElementById("frame_school_area_info").src = 'police.html';
            break;
        // case 300:
        //     document.getElementById("frame_school_area_info").src = 'communities.html';
        //     break;
        // case 301:
        //     document.getElementById("frame_school_area_info").src = 'utility_area.html';
        //     break;
        // case 301:
        //     document.getElementById("frame_school_area_info").src = 'common_pages/fixing.html';
        //     break;
    }
}
function changeOption2(option) {
    document.location.href = "school_area_info.html?option=" + option;
}


function SetCwinHeight() {
    var iframeid = document.getElementById("frame_school_area_info"); //iframe id
    if (document.getElementById) {
        if (iframeid && !window.opera) {
            if (iframeid.contentDocument && iframeid.contentDocument.body.offsetHeight) {
                iframeid.height = iframeid.contentDocument.body.offsetHeight;
            }
            else if (iframeid.Document && iframeid.Document.body.scrollHeight) {
                iframeid.height = iframeid.Document.body.scrollHeight;
            }
        }
    }
};