function split_array(arr, len) {
    var a_len = arr.length;
    var result = [];
    for (var i = 0; i < a_len; i += len) {
        result.push(arr.slice(i, i + len));
    } return result;
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
}



function ClassUlLoad(ItemName) {
    $.ajax({
        url: "http://localhost:8080/EBookMS/Class/Select",
        type: "post",
        data: JSON.stringify({ "isClose": "0" }),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.code == 1 || data.code == 3) {
                //ItemName = "." +ItemName
                var ulItem = $(ItemName);
                var ArrayData = data.data;
                for (var i = 0; i < ArrayData.length; i++) {
                    var ArrayDataItem = ArrayData[i];
                    //var dataText = "<li><a href=\"ClassificationOfBooks.html?classID=" + ArrayDataItem.id + "\" target=\"_self\">" + ArrayDataItem.name + "</a></li>";
                    var dataText = "<li><a href=\"ClassificationOfBooks.html?classID=" + ArrayDataItem.id + "\" target=\"_self\">" + ArrayDataItem.name + "</a></li>";
                    ulItem.append(dataText);

                }
            }
        }

    });
}


function bottom_box_list_box_NewestUlLoad(jsonString) {
    $.ajax({
        url: "http://localhost:8080/EBookMS/Book/Select",
        type: "post",
        data: jsonString,
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.code != null) {
                var ulItem = $('.bottom-box_list-box_NewestUl');
                var ArrayData = data.data;
                for (var i = 0; i < data.count && i < 10; i++) {
                    var ArrayDataItem = ArrayData[i];
                    var dataText = "<li><u><em>?????????" + ArrayDataItem.author + "</em><a href=\"BookInformation.html?bookID=" + ArrayDataItem.id + "&classID=" + ArrayDataItem.classNumber + "\">" + ArrayDataItem.name + "</a></u></li>";
                    ulItem.append(dataText);
                }

            }
        }

    });
}


//Reception_index
function title_box_list_box_recommendLoad() {
    $.ajax({
        url: "http://localhost:8080/EBookMS/Book/Select",
        type: "post",
        data: JSON.stringify({ "selectType": "1", "isDelete": "0", "opinion": { "result": "1" } }),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.code != null) {
                var ulItem = $('.title-box_list-box_recommend');
                var ArrayData = data.data;
                for (var i = 0; i < data.count && i < 10; i++) {
                    var ArrayDataItem = ArrayData[i];
                    var dataText = "<li><u><em>?????????" + ArrayDataItem.author + "</em><a href=\"BookInformation.html?bookID=" + ArrayDataItem.id + "&classID=" + ArrayDataItem.classNumber + "\">" + ArrayDataItem.name + "</a></u></li>";
                    ulItem.append(dataText);
                }

            }
        }

    });
}

function top_box_list_box_NewestUlLoad() {
    $.ajax({
        url: "http://localhost:8080/EBookMS/Book/Select",
        type: "post",
        data: JSON.stringify({ "selectType": "2", "isDelete": "0", "opinion": { "result": "1" } }),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.code != null) {
                var ulItem = $('.top-box_list-box_NewestUl');
                var ArrayData = data.data;
                for (var i = 0; i < data.count && i < 10; i++) {
                    var ArrayDataItem = ArrayData[i];
                    var dataText = "<li><u><em>" + ArrayDataItem.uploadTime + "</em><span>?????????" + ArrayDataItem.author + "</span><a href=\"ClassificationOfBooks.html?classID=" + ArrayDataItem.classNumber + "\">[" + ArrayDataItem.classID + "]</a><a href=\"BookInformation.html?bookID=" + ArrayDataItem.id + "&classID=" + ArrayDataItem.classNumber + "\">" + ArrayDataItem.name + "</a></u></li>";
                    ulItem.append(dataText);
                }

            }
        }

    });
}


function right_box_bottom_boxLoad() {
    $.ajax({
        url: "http://localhost:8080/EBookMS/Class/Select",
        type: "post",
        data: JSON.stringify({ "isClose": "0" }),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.code == 1 || data.code == 3) {
                BookListBox_load(data.data);
            }
        }
    });
}


function BookListBox_load(ClassArray) {

    var sunClassArray = split_array(ClassArray, 2);


    for (var i = 0; i < sunClassArray.length; i++) {
        $(".right-box_bottom-box").append("<div class=\"listBox-box listBox-box_" + i + "\"></div>");


        var grandsunClassArray = sunClassArray[i];
        for (var n = 0; n < grandsunClassArray.length; n++) {
            $(".listBox-box_" + i + "").append("<div class=\"ClassList-box listBox-box_ClassList-box_" + n + i + "\"></div>");
            var ulName = "listBox-box_ClassList-box_" + n + i + "_list-box_ul";
            $(".listBox-box_ClassList-box_" + n + i + "").append("<div class=\"title-box\"><h1>" + grandsunClassArray[n].name + "</h1><a href=\"ClassificationOfBooks.html?classID=" + grandsunClassArray[n].id + "\">??????>></a></div><div class=\"list-box\"><ul id=\"" + ulName + "\"></ul>");
            UlLiBookDataLoad(grandsunClassArray[n].id, ulName);
        }
    }

}


function UlLiBookDataLoad(classID, ulName) {
    $.ajax({
        url: "http://localhost:8080/EBookMS/Book/Select",
        type: "post",
        data: JSON.stringify({ "selectType": "2", "classID": classID, "isDelete": "0", "opinion": { "result": "1" } }),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.code != null) {
                if (data.count > 0) {
                    ulName = "#" + ulName;
                    var ulItem = $(ulName);
                    var ArrayData = data.data;
                    for (var i = 0; i < data.count && i < 10; i++) {
                        var ArrayDataItem = ArrayData[i];
                        var dataText = "<li><u><em>" + ArrayDataItem.uploadTime + "</em><span>?????????" + ArrayDataItem.author + "</span><a href=\"ClassificationOfBooks.html?classID=" + ArrayDataItem.classNumber + "\">[" + ArrayDataItem.classID + "]</a><a href=\"BookInformation.html?bookID=" + ArrayDataItem.id + "&classID=" + ArrayDataItem.classNumber + "\">" + ArrayDataItem.name + "</a></u></li>";
                        ulItem.append(dataText);
                    }
                }


            }
        }

    });
}



//ClassificationOfBooks
function right_box_on_TitleLoad() {
    $.ajax({
        url: "http://localhost:8080/EBookMS/Class/Select",
        type: "post",
        data: JSON.stringify({ "id": getQueryVariable("classID") }),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.code == 1 || data.code == 3) {
                $(".right-box_on_title h1").text(data.data[0].name);
                right_box_on_UlLoad(data.data[0].id);
            }
        }

    });
}

function right_box_on_UlLoad(classID) {
    $.ajax({
        url: "http://localhost:8080/EBookMS/Book/Select",
        type: "post",
        data: JSON.stringify({ "classID": classID, "isDelete": "0", "selectType": "2", "opinion": { "result": "1" } }),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.code == 1 || data.code == 3) {
                var ulItem = $(".right-box_on_ul");
                var ArrayData = data.data;
                for (var i = 0; i < data.count; i++) {
                    var ArrayDataItem = ArrayData[i];


                    if (ArrayDataItem.isEnd == "0") { ArrayDataItem.isEnd = "?????????"; } else { ArrayDataItem.isEnd = "?????????"; }
                    var dataText = "<div class=\"s\">?????????"+ArrayDataItem.author+"<br />?????????"+ArrayDataItem.isEnd+"<br />???????????????"+ArrayDataItem.uploadTime+"</div>"+
							"<a href=\"BookInformation.html?bookID="+ArrayDataItem.id+"&classID="+classID+"\"><img src=\""+ArrayDataItem.imageURL+"\">"+ArrayDataItem.name+"</a><div class=\"text\">"+
							"<u>"+ArrayDataItem.text+"</u></div>";
                    
                    
                    
                    ulItem.append(dataText);
                }
            }
        }

    });
}




//BookInformation
function BookInformationLoad(){
    $.ajax({
        url: "http://localhost:8080/EBookMS/Book/Select",
        type: "post",
        data: JSON.stringify({ "id": getQueryVariable("bookID"),"selectType":"2" }),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.code == 1 || data.code == 3) {
                if (data.data[0].isEnd == "0") { data.data[0].isEnd = "?????????"; } else { data.data[0].isEnd = "?????????"; }

                $(".right_top_coverImage").attr("src",data.data[0].imageURL);
                $(".right_top_h1").text(data.data[0].name);
                $(".right_top_ul").append("<li >????????????:<span class=\"downloadCountSpan\">"+data.data[0].downloadCount+"</span></li><li>???????????????txt</li><li>???????????????"+data.data[0].uploadTime+"</li><li>???????????????"+data.data[0].isEnd+"</li><li>?????????"+data.data[0].author+"</li><li>?????????????????????/iPhone/iPad/Kindle/??????</li>");
                $(".middle_Text").append("<p>?????????"+data.data[0].text+"</p><br /><font>?????????????????????"+data.data[0].name+"TXT???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</font><p></p>");
                $(".bottom_downButton").attr("href",data.data[0].fileURL);
                $(".bottom_downButton").attr("download",data.data[0].file);
                $(".bottom_downButton").attr("onclick","BookFileDownloadClick("+data.data[0].id+")");
            }
        }

    });
}


function BookFileDownloadClick(bookID){
    $.ajax({
        url: "http://localhost:8080/EBookMS/Book/Update",
        type: "post",
        data: JSON.stringify({ "id": bookID,"downloadCount":"1" }),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.code == 1 || data.code == 3) {
                var downloadCount = parseInt($(".downloadCountSpan").text());
                downloadCount = downloadCount+1;     
                $(".downloadCountLi").text(downloadCount);
                
            }
        }

    });
}

