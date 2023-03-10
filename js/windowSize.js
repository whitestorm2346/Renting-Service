/**
 * Created by amyjim9907 on 2016/12/3.
 */

function reinitIframe(){

    var iframe = document.getElementById("frame_notice");

    try{

        iframe.height =  iframe.contentWindow.document.documentElement.scrollHeight;//此為載入網頁之高度

    }catch (ex){}

}

window.setInterval("reinitIframe()", 200);//設定使其每0.2秒執行一次

