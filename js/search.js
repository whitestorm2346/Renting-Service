/*

===========================================================

            SEARCH BAR FUNCTIONS IMPLEMENTATION

===========================================================

 */

const pages = [
    'index_main.html',
    'safe.html',
    'notice_index.html',
    'law.html',
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
    'contract.html',
    'school_area_info.html',
    'rental_safety.html',
    'rental_info.html',
];

const page_tag = {
    'index_main.html': "主頁公告",
    'safe.html': "租屋安全總覽",
    'notice_index.html': "租屋注意事項",
    'law.html': "相關法律問題",
    'download.html': "表單下載",
    'notice_201.html': "租屋建議事項",
    'notice_202.html': "退租還屋注意事項",
    'notice_203.html': "租屋教戰守則",
    'notice_204.html': "常見租屋糾紛",
    'law_401.html': "存證信函",
    'law_402.html': "辦理房屋租賃契約公證",
    'law_403.html': "選擇簽訂對象",
    'law_404.html': "租賃法律關係概說",
    'law_405.html': "租屋糾紛解決",
    'law_406.html': "租屋相關法律條文",
    'law_407.html': "租約內容注意事項",
    'law_408.html': "租約之履行",
    'law_409.html': "租約相關法律",
    'contract.html': "租屋懶人包",
    'school_area_info.html': "賃居生活資訊",
    'rental_safety.html': "租屋安全",
    'rental_info.html': "租屋資訊",
}

const search_input = document.getElementById("searchInput");
const search_btn = document.getElementById("searchBtn");

search_btn.addEventListener("click", function () {
    if(search_input.value === "") {
        console.error("Empty string in search input bar");
    }
    else {
        // console.log(search_input.value);
        searchContent(search_input.value);
        search_input.value = "";
    }
});

search_input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") { // 檢查是否按下 Enter 鍵
        event.preventDefault();  // 防止預設行為（如表單提交）

        if(search_input.value === "") {
            console.error("Empty string in search input bar");
        }
        else {
            // console.log(search_input.value);
            searchContent(search_input.value);
            search_input.value = "";
        }
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
                // console.log(page);
            }
        } catch (error) {
            console.error(`無法讀取 ${page}`, error);
        }
    }

    const search_popup = document.getElementById("searchPopup");

    if(results.length === 0){ 
        console.log("查無相關訊息");

        search_popup.classList.add("search-results-no-result");
        search_popup.classList.remove("search-results-popup")
        search_popup.innerHTML = `
            <div class="title">搜尋<span>失敗</span></div>
            <div class="content">
                <p>查無與搜尋關鍵字相符之頁面內容</p>
            </div>
            <button id="popup-close-btn" class="close">關閉</button>
        `

        document.getElementById("popup-close-btn").addEventListener("click", function () {
            search_popup.classList.add("search-results-popup")
            search_popup.classList.remove("search-results-no-result")
            search_popup.innerHTML = ""
        });
    }
    else {
        console.log(results);

        innerUl = ""

        for(const page of results) {
            innerUl += `<li class="link"><a href="">${page_tag[page]}</a></li>`
        }

        search_popup.classList.add("search-results-show-results");
        search_popup.classList.remove("search-results-popup")
        search_popup.innerHTML = `
            <div class="title">相關頁面<span>鏈結</span></div>
            <div class="content">
                <ul class="links">
                    ${innerUl}
                </ul>
            </div>
            <button id="popup-close-btn" class="close">關閉</button>
        `

        document.getElementById("popup-close-btn").addEventListener("click", function () {
            search_popup.classList.add("search-results-popup")
            search_popup.classList.remove("search-results-show-results")
            search_popup.innerHTML = ""
        });
    }
}