function index_load() {
    navListLoad();
    NovelUpdataChapteListLoad();
    NovelUpdataListLoad();
}

function navListLoad() {
    $.ajax({
        url: "http://localhost:8888/NRN/Type/Select",
        type: "post",
        data: JSON.stringify({ "id": "" }),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.code == 1 || data.code == 3) {
                var ArrayData = data.data;
                var ulItem = $('.nav');
                for (var i = 0; i < ArrayData.length; i++) {
                    var ArrayDataItem = ArrayData[i];
                    var dataText = "<li><a href=\"frame/NovelTypeOfList.html?typeID=" + ArrayDataItem.id + "\" target=\"_self\">" + ArrayDataItem.name + "</a></li>";
                    ulItem.append(dataText);
                }
                var rowItem = $(".container");
                // rowItem.empty();
                for (var i = 0; i < ArrayData.length; i++) {
                    var itemText = "<div class=\"row row" + i + "\"><div class=\"layout layout" + i + "\"></div></div>";
                    rowItem.append(itemText);
                    var rowName = "layout" + i;
                    for (var b = 0; b < 3; b++, i++) {
                        $($("." + rowName + "")).append("<div class=\"tp-box tp-box" + b + i + "\"></div>")

                        TypeNovelListSelect(ArrayData[i].id, $(".tp-box" + b + i + ""))
                    }
                }
            } else {
                navListLoad();
            }
        }

    });
}


function TypeNovelListSelect(typeID, ListBox) {
    $.ajax({
        url: "http://localhost:8888/NRN/Novel/Select",
        type: "post",
        data: JSON.stringify({ "id":"","limitCount": "10", "type": { "id": typeID },"isverify":{"result":"通过"} }),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.code == 1 || data.code == 3) {
                TypeNovelListLoad(data.data, ListBox);
            } else {

            }
        }

    });
}




function TypeNovelListLoad(novelList, listBox) {
    listBox.append("<h2><a herf=\"NovelTypeOfList.html?typeID=" + novelList[0].type.id + "\" target=\"_self\">" + novelList[0].type.name + "</a></h2>")
    listBox.append("<div class=\"top\"></div>");
    listBox.find(".top").append("<div class=\"image\"><a href=\"/book/267668/\"><img src=\"" + novelList[0].coverUrl + "\" onerror=\"src='" + novelList[0].coverUrl + "'\" alt=\"" + novelList[0].name + "\" /></a></div>");
    listBox.find(".top").append("<dl><dt><a href=\"frame/NovelInformation.html?NovelID=" + novelList[0].id + "\">" + novelList[0].name + "</a></dt><dd><a href=\"frame/NovelInformation.html?NovelID=" + novelList[0].id + "\"style=\"color: #555\">" + novelList[0].synopsis + "</a></dd></dl>");
    listBox.append("<ul></ul>");
    listBox_ul = listBox.find("ul");
    for (var i = 1; i < novelList.length; i++) {
        var listItem = novelList[i];
        var dataText = "<li><a href=\"frame/NovelInformation.html?NovelID=" + listItem.id + "\" target=\"_self\">" + listItem.name + "</a>/" + listItem.author.uname + "</li>";
        listBox_ul.append(dataText);
    }
}



function NovelUpdataChapteListLoad() {
    $.ajax({
        url: "http://localhost:8888/NRN/Novel/SelectUpdateNovelChapter",
        type: "post",
        data: JSON.stringify({"id":"","limitCount":"20"}),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.code == 1 || data.code == 3) {
                var ArrayData = data.data;
                var ulBox = $('.newUploadNovel');
                ulBox.empty();
                ulBox.append("<h2 class=\"layout-tit\">最近更新小说列表</h2>");
                ulBox.append("<ul class=\"txt-list UpdatanovelChapteList txt-list-row5\"></ul>")
                var ulList = ulBox.find(".UpdatanovelChapteList");
                for (var i = 0; i < ArrayData.length; i++) {

                    var ArrayDataItem = ArrayData[i];
                    var time = ArrayDataItem.novelRecentUpdatesTime;
                    var dataText = "<li><span class=\"s1\">[" + ArrayDataItem.type.name + "]</span><span class=\"s2\"><a href=\"frame/NovelInformation.html?NovelID=" + ArrayDataItem.id + "\">"
                        + ArrayDataItem.name + "</a></span><span class=\"s3\"><a href=\"frame/Chapter-Information.html?ChapterID=" + ArrayDataItem.chapterInfo.id + "\">" + ArrayDataItem.chapterInfo.name + "</a></span>"
                        + "<span class=\"s4\">" + ArrayDataItem.author.uname + "</span><span class=\"s5\">" + time.substring(5, 10) + "</span></li>"
                    ulList.append(dataText);
                }
            }
        }

    });
}



function NovelUpdataListLoad() {
    $.ajax({
        url: "http://localhost:8888/NRN/Novel/Select",
        type: "post",
        data: JSON.stringify({"id":"","novelUploadTime":"1","isverify":{"opinion":"not null"},"limitCount":"20"}),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.code == 1 || data.code == 3) {
                var ArrayData = data.data;
                var rowItem = $(".container");
                rowItem.append("<div class=\"row\"><div class=\"layout layout2 layout-col1 newNovelChapter fr\"></div><div class=\"layout layout2 layout-col2 newUploadNovel fl\"></div></div>")
                var ulBox = $('.newNovelChapter');
                ulBox.empty();
                ulBox.append("<h2 class=\"layout-tit\">最新入库小说</h2>");
                ulBox.append("<ul class=\"txt-list newUploadNovelList txt-list-row3\"></ul>")
                var ulList = ulBox.find(".newUploadNovelList");
                for (var i = 0; i < ArrayData.length; i++) {
                    var ArrayDataItem = ArrayData[i];
                    var dataText = "<li><span class=\"s1\">[" + ArrayDataItem.type.name + "]</span><span class=\"s2\"><a href=\"frame/NovelInformation.html?NovelID=" + ArrayDataItem.id + "\">"
                        + ArrayDataItem.name + "</a></span><span class=\"s5\">" + ArrayDataItem.author.uname + "</span></li>";
                    ulList.append(dataText);
                }
            }
        }

    });
}

