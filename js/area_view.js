const area_title = document.getElementById('area-title')
const area_description = document.getElementById('area-description')

const polygons = document.querySelectorAll('polygon')

polygons.forEach(polygon => {
    polygon.addEventListener('mouseover', function(){
        const name = this.getAttribute('data-name')
        area_title.innerHTML = `${name}`
        area_description.innerHTML = `${getAreaDescription(name)}`
    })

    polygon.addEventListener('mouseout', function(){
    })
})

const getAreaDescription = (name) => {
    des = ""

    if(name == "英專路"){
        des = "校門正下方石階附近及街上，為淡水主要商業街道，生活機能方便、街道熱鬧，舊式建築型態為多。"
    }
    else if(name == "水源街一段"){
        des = "在學府路山下部分及英專路山下部份之間。"
    }
    else if(name == "學府路(山下)"){
        des = "山下部份：門牌號碼為150 號前，100 巷至136 巷為主，為學生主要租賃區。"
    }
    else if(name == "水源街二段(圖側)"){
        des = "以淡水外環道路淡金公路( 俗稱登輝大道) 為界，◆ 198 號之前，俗稱「圖側」( 靠近圖書館大樓之側門)，主要道路不寬，學生機車停放較多，會車不易，需多注意往來車輛。"
    }
    else if(name == "水源街二段(後山)"){
        des = "以淡水外環道路淡金公路( 俗稱登輝大道) 為界，◆ 198 號之後，俗稱「後山」，地處偏僻，入夜女同學宜結伴同行。"
    }
    else if(name == "水源街二段(黃帝神宮)"){
        des = "※ 水源街177 巷俗稱「黃帝神宮區」。"
    }
    else if(name == "北新路"){
        des = "區內以新建的高樓大廈最多，房屋結構、門禁管理、消防安全等較為完善，賃居品質較有保障。"
    }
    else if(name == "大忠街"){
        des = "區內大樓與公寓參半，租屋時應多加考慮房屋結構、門禁管理與消防安全，以保障賃居安全。"
    }
    else if(name == "學府路(大田寮)"){
        des = "大田寮：理學院及大操場後方部份，主要道路不寬，於上下課尖峰時間，交通流量繁忙。"
    }

    return des
}