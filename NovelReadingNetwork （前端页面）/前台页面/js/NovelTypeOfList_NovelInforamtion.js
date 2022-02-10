function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
}



function NovelTypeOfList_load() {
    navListLoad()
    // NovelListLoad(getQueryVariable("typeID"))
    NovelListLoad(getQueryVariable("typeID"));
    NovelUpdataListLoad(getQueryVariable("typeID"));
    NovelUpdataChapteListLoad(getQueryVariable("typeID"));
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
                    var dataText = "<li><a href=\"NovelTypeOfList.html?typeID=" + ArrayDataItem.id + "\" target=\"_self\">" + ArrayDataItem.name + "</a></li>";
                    ulItem.append(dataText);
                }
            } else {
                navListLoad();
            }
        }

    });
}





function NovelListLoad(typeID) {
    $.ajax({
        url: "http://localhost:8888/NRN/Novel/Select",
        type: "post",
        data: JSON.stringify({ "id":"","type": { "id": typeID }, "isverify": { "opinion": "not null" }, "limitCount": "6" }),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.code == 1 || data.code == 3) {
                var ArrayData = data.data;
                // var row = $(".container");
                // row.empty();
                // row.append("<div class=\"row coverNovelListBox\"><div class=\"layout layout-col2 layout-col3 coverNovelList\"></div></div>");
                var rowItem = $(".coverNovelList");
                for (var i = 0; i < ArrayData.length, i < 6; i++) {
                    var ArrayDataItem = ArrayData[i];
                    var dataText = "<div class=\"item\"><div class=\"image\"><a href=\"NovelInformation.html?NovelID=" + ArrayDataItem.id + "\">"
                        + "<img src=\"" + ArrayDataItem.coverUrl + "\" onerror=\"src='" + ArrayDataItem.coverUrl + "'\" alt=\"" + ArrayDataItem.name + "\"></a></div>"
                        + "<dl><dt><span>" + ArrayDataItem.author.uname + " </span><a href=\"NovelInformation.html?NovelID=" + ArrayDataItem.id + "\">" + ArrayDataItem.name + "</a></dt>"
                        + "<dd><a href=\"NovelInformation.html?NovelID=" + ArrayDataItem.id + "\" style=\"color:#555;\">" + ArrayDataItem.synopsis + "</a></dd></dl></div>";
                    rowItem.append(dataText);
                }



            } else {
                navListLoad();
            }
        }

    });
}




function NovelUpdataChapteListLoad(typeID) {
    $.ajax({
        url: "http://localhost:8888/NRN/Novel/SelectUpdateNovelChapter",
        type: "post",
        data: JSON.stringify({ "id":"","type": { "id": typeID } }),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.code == 1 || data.code == 3) {
                var ArrayData = data.data;
                var ulBox = $('.newUploadNovel');
                // ulBox.empty();
                ulBox.append("<h2 class=\"layout-tit\">" + ArrayData[0].type.name + "最近更新小说列表</h2>");
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



function NovelUpdataListLoad(typeID) {
    $.ajax({
        url: "http://localhost:8888/NRN/Novel/Select",
        type: "post",
        data: JSON.stringify({ "id":"","novelUploadTime": "1", "isverify": { "opinion": "not null" }, "limitCount": "50", "type": { "id": typeID } }),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.code == 1 || data.code == 3) {
                var ArrayData = data.data;
                // var rowItem = $(".container");
                // rowItem.append("<div class=\"row\"><div class=\"layout layout2 layout-col1 newNovelChapter fr\"></div><div class=\"layout layout2 layout-col2 newUploadNovel fl\"></div></div>")
                var ulBox = $('.newNovelChapter');
                // ulBox.empty();
                ulBox.append("<h2 class=\"layout-tit\">" + ArrayData[0].type.name + "最新入库小说</h2>");
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




function NovelInformation_load() {
    navListLoad();
    NovelInformation(getQueryVariable("NovelID"));
    NovelUploadNewChapterList(getQueryVariable("NovelID"));
    NovelChapterList(getQueryVariable("NovelID"))
}






function NovelInformation(NovelID) {
    $.ajax({
        url: "http://localhost:8888/NRN/Novel/Select",
        type: "post",
        data: JSON.stringify({ "id": NovelID, "isverify": { "opinion": "not null" } }),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.code == 1 || data.code == 3) {
                var NovelData = data.data[0];
                if (NovelData.state == "0") { NovelData.state = "连载中" } else { NovelData.state = "已完结" }
                var rowBox = $('.row-detail');

                var NovelDetailText = "<div class=\"layout layout-col1\"><h2 class=\"layout-tit\"><a href=\"../index.html\">终点小说网</a> > " + NovelData.name + "</h2><div class=\"detail-box\">"
                    + "<div class=\"imgbox\"><img alt=\"" + NovelData.name + "\" src=\"" + NovelData.coverUrl + "\" /><i class=\"flag flag-over xs-hidden\"></i></div>"

                    + "<div class=\"info\"><div class=\"top\"><h1>" + NovelData.name + "</h1><div class=\"fix\">"
                    + "<p>作者：" + NovelData.author.uname + "</p><p>类别：" + NovelData.type.name + "</p><p>状态：" + NovelData.state + "</p><p>最后更新：" + NovelData.novelRecentUpdatesTime + " </p></div></div>"
                    + "<div class=\"desc xs-hidden\">" + NovelData.synopsis + "</div></div></div></div>"
                rowBox.append(NovelDetailText);
            }
        }

    });
}



function NovelUploadNewChapterList(NovelID) {
    $.ajax({
        url: "http://localhost:8888/NRN/Chapter/SelectChapterList",
        type: "post",
        data: JSON.stringify({ "novel": { "id": NovelID }, "isverify": { "result": "通过" }, "chapterTimeASC_DESC": "2", "isDelete": "0" }),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.code == 1 || data.code == 3) {
                if (data.count > 0) {
                    var ArrayData = data.data;
                    $('.uploadNewChapterTitle').html("《" + ArrayData[0].novel.name + "》最新章节");
                    $('.ChapterTitle').html("《" + ArrayData[0].novel.name + "》正文");
                    var ulList = $(".uploadNewChapterList");
                    // var length = ArrayData.length;
                    for (var i = 0; i < ArrayData.length; i++) {
                        var ArrayDataItem = ArrayData[i];
                        var dataText = "<li><a href=\"Chapter-Information.html?ChapterID=" + ArrayDataItem.id + "\">"+ ArrayDataItem.name + "</a></li>";
                        // if(i == 0  && i + 1 <= length - 1){
                        //     var dataText = "<li><a href=\"Chapter-Information.html?ChapterID=" + ArrayDataItem.id + "&PreviousChapterID=0&NextChapterID=" + ArrayData[i + 1].id + "\">"
                        //             + ArrayDataItem.name + "</a></li>";
                        // }else if (i != 0 && i + 1 <= length - 1) {
                        //     var dataText = "<li><a href=\"Chapter-Information.html?ChapterID=" + ArrayDataItem.id + "&PreviousChapterID=" + ArrayData[i - 1].id +
                        //             "&NextChapterID=" + ArrayData[i + 1].id + "\">" + ArrayDataItem.name + "</a></li>";
                        // }else if(i != 0 && i+1 > length - 1){
                        //     var dataText = "<li><a href=\"Chapter-Information.html?ChapterID=" + ArrayDataItem.id + "&PreviousChapterID=" + ArrayData[i - 1].id + "&NextChapterID=0\">"
                        //              + ArrayDataItem.name + "</a></li>";
                        // }
                        ulList.append(dataText);
                    }
                } else {
                    var row_sectionBox = $('.row-section');
                    row_sectionBox.empty();
                    row_sectionBox.append("<h2 class=\"layout-tit\">当前小说没有更新章节</h2>");
                }
            }
        }

    });
}


function NovelChapterList(NovelID) {
    $.ajax({
        url: "http://localhost:8888/NRN/Chapter/SelectChapterList",
        type: "post",
        data: JSON.stringify({ "novel": { "id": NovelID }, "isverify": { "result": "通过" }, "chapterTimeASC_DESC": "1" }),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.code == 1 || data.code == 3) {
                if (data.count > 0) {
                    var ArrayData = data.data;
                    $('.uploadNewChapterTitle').html("《" + ArrayData[0].novel.name + "》最新章节");
                    $('.ChapterTitle').html("《" + ArrayData[0].novel.name + "》正文");
                    var ulList = $(".ChapterList");
                    // var length = ArrayData.length;
                    for (var i = 0; i < ArrayData.length; i++) {
                        var ArrayDataItem = ArrayData[i];
                        var dataText = "<li><a href=\"Chapter-Information.html?ChapterID=" + ArrayDataItem.id + "\">"+ ArrayDataItem.name + "</a></li>";
                        // if(i == 0  && i + 1 <= length - 1){
                        //     var dataText = "<li><a href=\"Chapter-Information.html?ChapterID=" + ArrayDataItem.id + "&PreviousChapterID=0&NextChapterID=" + ArrayData[i + 1].id + "\">"
                        //             + ArrayDataItem.name + "</a></li>";
                        // }else if (i != 0 && i + 1 <= length - 1) {
                        //     var dataText = "<li><a href=\"Chapter-Information.html?ChapterID=" + ArrayDataItem.id + "&PreviousChapterID=" + ArrayData[i - 1].id +
                        //             "&NextChapterID=" + ArrayData[i + 1].id + "\">" + ArrayDataItem.name + "</a></li>";
                        // }else if(i != 0 && i+1 > length - 1){
                        //     var dataText = "<li><a href=\"Chapter-Information.html?ChapterID=" + ArrayDataItem.id + "&PreviousChapterID=" + ArrayData[i - 1].id + "&NextChapterID=0\">"
                        //              + ArrayDataItem.name + "</a></li>";
                        // }
                        ulList.append(dataText);
                    }
                } else {
                    var row_sectionBox = $('.row-section');
                    row_sectionBox.empty();
                    row_sectionBox.append("<h2 class=\"layout-tit\">当前小说没有更新章节</h2>");
                }
            }
        }

    });
}



function ChapterInformation_load() {
    navListLoad();
    ChapterContentLoad(getQueryVariable("ChapterID"))
}




function ChapterContentLoad(ChapterID) {
    $.ajax({
        url: "http://localhost:8888/NRN/Chapter/Select",
        type: "post",
        data: JSON.stringify({ "id": ChapterID }),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.code == 1 || data.code == 3) {
                var ChapterData = data.data[0];
                var dataBox = $(".layout-col1");
                var PreviousChapterID = getQueryVariable("PreviousChapterID");
                var NextChapterID = getQueryVariable("NextChapterID");
                console.log("PreviousChapterID:" + PreviousChapterID + "    NextChapterID:" + NextChapterID);
                var dataText = "<div class=\"layout-tit xs-hidden\"><a href=\"../index.html\">终点小说网</a> > <a href=\"NovelInformation.html?NovelID=" + ChapterData.novel.id + "\" title=\"" + ChapterData.novel.name + "\">" +
                    ChapterData.novel.name + "</a> &gt; " + ChapterData.name + "</div><div class=\"reader-main\"><h1 class=\"title\">" + ChapterData.name + "</h1>"+
                    "<div class=\"section-opt\" id=\"contentTop\"><a href=\"NovelInformation.html?NovelID=" + ChapterData.novel.id + "\">章节列表</a></div>" +
                        "<div class=\"content\" id = \"content\">" + ChapterData.content + "</div >" +
                        "<div class=\"section-opt\" id=\"contentBottom\"><a href=\"NovelInformation.html?NovelID=" + ChapterData.novel.id + "\">章节列表</a></div>"
                // if (NextChapterID != 0 && PreviousChapterID != 0) {
                //     dataText = dataText + "<div class=\"section-opt\" id=\"contentTop\"><a href=\"Chapter-Information.html?ChapterID=" + PreviousChapterID + "\">上一章</a><span class=\"xs-hidden\">← </span><a href=\"NovelInformation.html?NovelID=" + ChapterData.novel.id + "\">章节列表</a>" +
                //         "<span class=\"xs-hidden\">→</span><a href=\"Chapter-Information.html?ChapterID=" + NextChapterID + "\">下一章</a></div>" +
                //         "<div class=\"content\" id = \"content\">" + ChapterData.content + "</div >" +
                //         "<div class=\"section-opt\" id=\"contentBottom\"><a href=\"Chapter-Information.html?ChapterID=" + PreviousChapterID + "\">上一章</a>" +
                //         "<span class=\"xs-hidden\">← </span><a href=\"NovelInformation.html?NovelID=" + ChapterData.novel.id + "\">章节列表</a><span class=\"xs-hidden\">→</span>" +
                //         "<a href=\"Chapter-Information.html?ChapterID=" + NextChapterID + "\">下一章</a></div>"
                // } else if (PreviousChapterID == 0 && NextChapterID == 0) {
                //     dataText = dataText + "<div class=\"section-opt\" id=\"contentTop\"><a href=\"NovelInformation.html?NovelID=" + ChapterData.novel.id + "\">章节列表</a></div>" +
                //         "<div class=\"content\" id = \"content\">" + ChapterData.content + "</div >" +
                //         "<div class=\"section-opt\" id=\"contentBottom\"><a href=\"NovelInformation.html?NovelID=" + ChapterData.novel.id + "\">章节列表</a></div>"
                // } else if (PreviousChapterID == 0 && NextChapterID != 0) {
                //     dataText = dataText + "<div class=\"section-opt\" id=\"contentTop\"><a href=\"NovelInformation.html?NovelID=" + ChapterData.novel.id + "\">章节列表</a>" +
                //         "<span class=\"xs-hidden\">→</span><a href=\"Chapter-Information.html?ChapterID=" + NextChapterID + "\">下一章</a></div>" +
                //         "<div class=\"content\" id = \"content\">" + ChapterData.content + "</div >" +
                //         "<div class=\"section-opt\" id=\"contentBottom\"><a href=\"NovelInformation.html?NovelID=" + ChapterData.novel.id + "\">章节列表</a><span class=\"xs-hidden\">→</span>" +
                //         "<a href=\"Chapter-Information.html?ChapterID=" + NextChapterID + "\">下一章</a></div>"
                // } else if (NextChapterID == 0 && PreviousChapterID != 0) {
                //     dataText = dataText + "<div class=\"section-opt\" id=\"contentTop\"><a href=\"Chapter-Information.html?ChapterID=" + PreviousChapterID + "\">上一章</a><span class=\"xs-hidden\">← </span><a href=\"NovelInformation.html?NovelID=" + ChapterData.novel.id + "\">章节列表</a></div>" +
                //         "<div class=\"content\" id = \"content\">" + ChapterData.content + "</div><div class=\"section-opt\" id=\"contentBottom\">" +
                //         "<a href=\"Chapter-Information.html?ChapterID=" + PreviousChapterID + "\">上一章</a>" +
                //         "<span class=\"xs-hidden\">← </span><a href=\"NovelInformation.html?NovelID=" + ChapterData.novel.id + "\">章节列表</a></div>"
                // }
                dataBox.append(dataText);
            }
        }

    });
}



