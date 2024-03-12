/**
 * Created by amyjim9907 on 2016/10/10.
 */


let optionCount = 0;

function changeFrameURL(option) {
    const frame = document.getElementById("frame_content")

    switch (parseInt(option)) {
        case -1: frame.src = 'index_main.html'; break;
        case 0: frame.src = 'search.html'; break;
        case 1: frame.src = 'safe.html'; break;
        case 11: frame.src = 'safe_eng.html'; break;
        case 2: frame.src = 'notice_index.html'; break;
        case 14: frame.src = 'notice_index_eng.html'; break;
        case 3: frame.src = 'question.html '; break;
        case 16: frame.src = 'question_eng.html '; break;
        case 4: frame.src = 'law.html'; break;
        case 15: frame.src = 'law_eng.html'; break;
        case 5: frame.src = 'video.html'; break;
        case 13: frame.src = 'video_eng.html'; break;
        case 6: frame.src = 'download.html'; break;
        case 12: frame.src = 'download_eng.html'; break;
        case 7: frame.src = 'index_eng.html'; break;
        case 8: frame.src = 'index.html'; break;
        case 201: frame.src = 'notice_201.html'; break;
        case 2011: frame.src = 'notice_201_eng.html'; break;
        case 202: frame.src = 'notice_202.html'; break;
        case 2021: frame.src = 'notice_202_eng.html'; break;
        case 203: frame.src = 'notice_203.html'; break;
        case 2031: frame.src = 'notice_203_eng.html'; break;
        case 204: frame.src = 'notice_204.html'; break;
        case 2041: frame.src = 'notice_204_eng.html'; break;
        case 401: frame.src = 'law_401.html'; break;
        case 4011: frame.src = 'law_401_eng.html'; break;
        case 402: frame.src = 'law_402.html'; break;
        case 4021: frame.src = 'law_402_eng.html'; break;
        case 403: frame.src = 'law_403.html'; break;
        case 4031: frame.src = 'law_403_eng.html'; break;
        case 404: frame.src = 'law_404.html'; break;
        case 4041: frame.src = 'law_404_eng.html'; break;
        case 405: frame.src = 'law_405.html'; break;
        case 4051: frame.src = 'law_405_eng.html'; break;
        case 406: frame.src = 'law_406.html'; break;
        case 4061: frame.src = 'law_406_eng.html'; break;
        case 407: frame.src = 'law_407.html'; break;
        case 4071: frame.src = 'law_407_eng.html'; break;
        case 408: frame.src = 'law_408.html'; break;
        case 4081: frame.src = 'law_408_eng.html'; break;
        case 409: frame.src = 'law_409.html'; break;
        case 4091: frame.src = 'law_409_eng.html'; break;
        case 501: frame.src = 'video_501.html'; break;
        case 5011: frame.src = 'video_501_eng.html'; break;
        case 502: frame.src = 'video_502.html'; break;
        case 5021: frame.src = 'video_502_eng.html'; break;
        case 503: frame.src = 'video_503.html'; break;
        case 5031: frame.src = 'video_503_eng.html'; break;
        case 504: frame.src = 'video_504.html'; break;
        case 5041: frame.src = 'video_504_eng.html'; break;
        case 7: frame.src = 'form_student.html'; break;
        case 8: frame.src = 'form_landlord.html'; break;
        case 9: frame.src = 'contract.html'; break;
        case 10: frame.src = 'contract_eng.html'; break;
        case 17: frame.src = 'communities.html'; break;
        case 18: frame.src = 'communities_eng.html'; break;
        case 19: frame.src = 'common_pages/fixing.html'; break; // fixing
        case 20: frame.src = 'common_pages/fixing_eng.html'; break; // fixing
        default: frame.src = 'index_main.html'; break;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    var url = window.location;
    var urlAux = url.toString().split("=");
    var option = urlAux[1];
    optionCount = (option == null) ? -1 : option;
    changeFrameURL(optionCount);
});

function goPay(option) {
    document.location.href = "question_.main.html";
}

function changeOption(option) {
    document.location.href = "index.html?option=" + option;
}

function changeOptionEng(option) {
    document.location.href = "index_eng.html?option=" + option;
}


