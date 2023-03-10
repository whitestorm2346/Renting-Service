/**
 * Created by amyjim9907 on 2016/10/10.
 */
var optionCount = 0;
$(function(){
    var url = window.location;
    var urlAux = url.toString().split("=");
    var option = urlAux[1];
    optionCount = option;
    changeFrameURL(optionCount);
});

function changeFrameURL(option){
    if (option==null){
        document.getElementById("frame_question").src = 'question_main.html';
    }
    switch (parseInt(option)){
        case -1:
            document.getElementById("frame_question").src = 'question_main.html';
            break;
        case 300:
            document.getElementById("frame_question").src = 'question_rent.html';
            break;
        case 301:
            document.getElementById("frame_question").src = 'question_assign.html';
            break;
        case 302:
            document.getElementById("frame_question").src = 'question_fix.html';
            break;
        case 303:
            document.getElementById("frame_question").src = 'question_privacy.html';
            break;
        case 304:
            document.getElementById("frame_question").src = 'question_law.html';
            break;
        case 305:
            document.getElementById("frame_question").src = 'question_pay.html';
            break;
    }
}
function changeOption2(option) {
    document.location.href="question.html?option="+option;
}
function show(obj,id){
    var o=document.getElementById(id);
    if(o.style.display=='none'){
        o.style.display='';
    }
    else{
        o.style.display='none';
    }
}

function SetCwinHeight(){
    var iframeid=document.getElementById("frame_question"); //iframe id
    if (document.getElementById){
        if (iframeid && !window.opera) {
            if (iframeid.contentDocument && iframeid.contentDocument.body.offsetHeight) {
                iframeid.height = iframeid.contentDocument.body.offsetHeight;
            }
            else if(iframeid.Document && iframeid.Document.body.scrollHeight) {
                iframeid.height = iframeid.Document.body.scrollHeight;
            }
        }
    }
};