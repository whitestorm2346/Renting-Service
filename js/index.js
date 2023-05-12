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
    if (option == null) document.getElementById("frame_content").src = 'index_main.html';

    switch (parseInt(option)) {
        case 0:
            document.getElementById("frame_content").src = 'search.html';
            break;
        case 1:
            document.getElementById("frame_content").src = 'safe.html';
            break;
        case 11:
            document.getElementById("frame_content").src = 'safe_eng.html';
            break;
        case 2:
            document.getElementById("frame_content").src = 'notice_index.html';
            break;
        case 14:
            document.getElementById("frame_content").src = 'notice_index_eng.html';
            break;
        case 3:
            document.getElementById("frame_content").src = 'question.html ';
            break;
        case 16:
            document.getElementById("frame_content").src = 'question_eng.html ';
            break;
        case 4:
            document.getElementById("frame_content").src = 'law.html';
            break;
        case 15:
            document.getElementById("frame_content").src = 'law_eng.html';
            break;
        case 5:
            document.getElementById("frame_content").src = 'video.html';
            break;
        case 13:
            document.getElementById("frame_content").src = 'video_eng.html';
            break;
        case 6:
            document.getElementById("frame_content").src = 'download.html';
            break;
        case 12:
            document.getElementById("frame_content").src = 'download_eng.html';
            break;
        case 7:
            document.getElementById("frame_content").src = 'index_eng.html';
            break;
        case 8:
            document.getElementById("frame_content").src = 'index.html';
            break;
        case 201:
            document.getElementById("frame_content").src = 'notice_201.html';
            break;
        case 2011:
            document.getElementById("frame_content").src = 'notice_201_eng.html';
            break;
        case 202:
            document.getElementById("frame_content").src = 'notice_202.html';
            break;
        case 2021:
            document.getElementById("frame_content").src = 'notice_202_eng.html';
            break;
        case 203:
            document.getElementById("frame_content").src = 'notice_203.html';
            break;
        case 2031:
            document.getElementById("frame_content").src = 'notice_203_eng.html';
            break;
        case 204:
            document.getElementById("frame_content").src = 'notice_204.html';
            break;
        case 2041:
            document.getElementById("frame_content").src = 'notice_204_eng.html';
            break;
        case 401:
            document.getElementById("frame_content").src = 'law_401.html';
            break;
        case 4011:
            document.getElementById("frame_content").src = 'law_401_eng.html';
            break;
        case 402:
            document.getElementById("frame_content").src = 'law_402.html';
            break;
        case 4021:
            document.getElementById("frame_content").src = 'law_402_eng.html';
            break;
        case 403:
            document.getElementById("frame_content").src = 'law_403.html';
            break;
        case 4031:
            document.getElementById("frame_content").src = 'law_403_eng.html';
            break;
        case 404:
            document.getElementById("frame_content").src = 'law_404.html';
            break;
        case 4041:
            document.getElementById("frame_content").src = 'law_404_eng.html';
            break;
        case 405:
            document.getElementById("frame_content").src = 'law_405.html';
            break;
        case 4051:
            document.getElementById("frame_content").src = 'law_405_eng.html';
            break;
        case 406:
            document.getElementById("frame_content").src = 'law_406.html';
            break;
        case 4061:
            document.getElementById("frame_content").src = 'law_406_eng.html';
            break;
        case 407:
            document.getElementById("frame_content").src = 'law_407.html';
            break;
        case 4071:
            document.getElementById("frame_content").src = 'law_407_eng.html';
            break;
        case 408:
            document.getElementById("frame_content").src = 'law_408.html';
            break;
        case 4081:
            document.getElementById("frame_content").src = 'law_408_eng.html';
            break;
        case 409:
            document.getElementById("frame_content").src = 'law_409.html';
            break;
        case 4091:
            document.getElementById("frame_content").src = 'law_409_eng.html';
            break;
        case 501:
            document.getElementById("frame_content").src = 'video_501.html';
            break;
        case 5011:
            document.getElementById("frame_content").src = 'video_501_eng.html';
            break;
        case 502:
            document.getElementById("frame_content").src = 'video_502.html';
            break;
        case 5021:
            document.getElementById("frame_content").src = 'video_502_eng.html';
            break;
        case 503:
            document.getElementById("frame_content").src = 'video_503.html';
            break;
        case 5031:
            document.getElementById("frame_content").src = 'video_503_eng.html';
            break;
        case 504:
            document.getElementById("frame_content").src = 'video_504.html';
            break;
        case 5041:
            document.getElementById("frame_content").src = 'video_504_eng.html';
            break;
        case 7:
            document.getElementById("frame_content").src = 'form_student.html';
            break;
        case 8:
            document.getElementById("frame_content").src = 'form_landlord.html';
            break;
        case 9:
            document.getElementById("frame_content").src = 'contract.html';
            break;
        case 10:
            document.getElementById("frame_content").src = 'contract_eng.html';
            break;
        case 17:
            document.getElementById("frame_content").src = 'communities.html';
            break;
        case 18:
            document.getElementById("frame_content").src = 'communities_eng.html';
            break;
    }
}
function goPay(option) {
    document.location.href = "question_.main.html";
}
function changeOption(option) {
    document.location.href = "index.html?option=" + option;
}
function changeOptionEng(option) {
    document.location.href = "index_eng.html?option=" + option;
}


