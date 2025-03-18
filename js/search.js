/*

===========================================================

            SEARCH BAR FUNCTIONS IMPLEMENTATION

===========================================================

 */

const pages = [
    'index_main.html',
    'safe.html',
    'notice_index.html',
    'question.html ',
    'law.html',
    'video.html',
    'download.html',
    'notice_201.html',
    'notice_202.html',
    'notice_203.html',
    'notice_204.html',
    'law_401.html',
    'law_402.html',
    'law_403.html',
    'law_404.html',
    'law_405.html',
    'law_406.html',
    'law_407.html',
    'law_408.html',
    'law_409.html',
    'video_501.html',
    'video_502.html',
    'video_503.html',
    'video_504.html',
    'form_student.html',
    'form_landlord.html',
    'contract.html',
    'school_area_info.html',
    'rental_safety.html',
    'rental_info.html',
];

const search_btn = document.getElementById("searchBtn").addEventListener("click", function () {
    const search_input = document.getElementById("searchInput");
    
    if(search_input.value === "") {
        console.error("Empty string in search input bar");
    }
    else {
        // console.log(search_input.value);
        searchContent(search_input.value);
        search_input.value = "";
    }
});

async function searchContent(keyword) {
    let results = [];

    for (const page of pages) {
        try {
            const response = await fetch(page);
            const text = await response.text();

            if (text.includes(keyword)) {
                results.push(page);
                console.log(page);
            }
        } catch (error) {
            console.error(`無法讀取 ${page}`, error);
        }
    }

    if(results == []){ // 要處理 async 的問題
        console.log("查無相關訊息");
    }
}