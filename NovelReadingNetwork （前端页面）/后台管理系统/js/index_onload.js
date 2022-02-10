function index_load() {
    setInterval("systemTime.innerHTML=new Date().toLocaleString()+' 星期'+'日一二三四五六'.charAt(new Date().getDay());", 1000);
    AdministratorNameLoad();
    NovelCount();
    UserCount();
    NovelClassCount();
    UnAuditNovelCount();
    UnAuditChapterCount()
}


function AdministratorNameLoad() {
    $.ajax({
        url: "http://localhost:8888/NRN/Administrator/Select",
        type: "post",
        data: JSON.stringify({ "id": $.cookie("AdminID") }),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (data) {
            $(".AdminNickname").text(data.data[0].anickname);
        }
    });
}


function NovelCount() {
    $.ajax({
        url: "http://localhost:8888/NRN/Novel/Select",
        type: "post",
        data: JSON.stringify({ "id":"","isDelete": "0" }),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.code == 1 || data.code == 3) {
                $('.uploadNovelCount').text(data.count);
            } else {
                $('.uploadNovelCount').text("接口异常");
            }
        }

    });
}



function UserCount() {
    $.ajax({
        url: "http://localhost:8888/NRN/User/Select",
        type: "post",
        data: JSON.stringify({}),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.code == 1 || data.code == 3) {
                $('.UserCount').text(data.count);
            } else {
                $('.UserCount').text("接口异常");
            }
        }

    });
}



function NovelClassCount() {
    $.ajax({
        url: "http://localhost:8888/NRN/Type/Select",
        type: "post",
        data: JSON.stringify({"id":""}),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.code == 1 || data.code == 3) {
                $('.NovelClassCount').text(data.count);
            } else {
                $('.NovelClassCount').text("接口异常");
            }
        }

    });
}


function UnAuditNovelCount() {
    $.ajax({
        url: "http://localhost:8888/NRN/Novel/Select",
        type: "post",
        data: JSON.stringify({ "id":"","isverify": { "opinion": "null", "type": "1" } }),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.code == 1 || data.code == 3) {
                $('.UnAuditNovelCount').text(data.count);
            } else {
                $('.UnAuditNovelCount').text("接口异常");
            }
        }

    });
}



function UnAuditChapterCount() {
    $.ajax({
        url: "http://localhost:8888/NRN/Chapter/Select",
        type: "post",
        data: JSON.stringify({
            "isverify": { "auditor": { "id": $.cookie("AdminID") }, "opinion": "null" }
        }),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.code == 1 || data.code == 3) {
                $('.UnAuditChapterCount').text(data.count);
            } else {
                $('.UnAuditChapterCount').text("接口异常");
            }
        }

    });
}