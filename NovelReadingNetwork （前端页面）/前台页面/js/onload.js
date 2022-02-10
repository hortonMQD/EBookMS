function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
}


function isEmpty() {
    var $inputArray = $("input[type='password']");
    var result = 0;
    $inputArray.each(function () {
        if ($(this).val() == "") { result++; }
    });
    return result;
}


function loadAref() {
    if ($.cookie("UserID") != "null" && $.cookie("UserID") != undefined) {
        $.ajax({
            url: "http://localhost:8888/NRN/User/Select",
            type: "post",
            data: JSON.stringify({ "id": $.cookie("UserID") }),
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (data) {
                $(".UserName").text(data.data[0].uname);
                $(".uemail").text(data.data[0].uemail);
            }

        });
    } else {
        var address = "index.html";
        window.location.href = address;
        alert("尚未登录，请登录");
    }

}


function loadUserPersonalCenter(id) {
    $.ajax({
        url: "http://localhost:8888/NRN/User/Select",
        type: "post",
        data: JSON.stringify({ "id": id }),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (data) {
            var info = data.data[0];
            $('input[name="ID"]').val(id);
            $("#imageFile").attr("src", info.uheadPortrait);
            $('input[name="UName"]').val(info.uname);
            $('input[name="UEmail"]').val(info.uemail);
        }

    });
}


function UserCenterBookListLoad(id) {
    layui.use('table', function () {
        var table = layui.table;
        table.render({
            elem: '#BookDataTable',
            url: 'http://localhost:8888/NRN/Novel/Select'
            , where: { "id": "", "author": { "id": id } },
            method: 'post',
            contentType: 'application/json;charset=utf-8',
            response: {
                statusName: 'code' //规定数据状态的字段名称，默认：code
                , statusCode: 3 //规定成功的状态码，默认：0
                , msgName: 'message', //规定状态信息的字段名称，默认：msg
                countName: 'count' //规定数据总数的字段名称，默认：count
                , dataName: 'data' //规定数据列表的字段名称，默认：data
            },
            cols: [
                [ //表头
                    { field: 'id', title: 'ID' }
                    , { field: 'rank', title: '序号', align: 'center', width: 80, templet: '#rank' }
                    , { field: 'coverUrl', title: '封 面', align: 'center', width: 150, templet: '#cover' }
                    , { field: 'name', title: '书 名', align: 'center', width: 300 }
                    , { field: 'state', title: '连载状况', align: 'center', width: 100, templet: '#isEnd' }
                    , { field: 'type', title: '类 型', align: 'center', width: 100, templet: '<div>{{d.type.name}}</div>' }
                    , { field: 'time', title: '上传时间', align: 'center', width: 200, sort: true }
                    , { field: 'novelRecentUpdatesTime', title: '最后更新时间', align: 'center', width: 200, sort: true }
                    , { file: "isverifyResult", title: '审核结果', align: 'center', width: 100, templet: '<div>{{d.isverify.result}}</div>' }
                    , { fixed: 'right', width: 80, title: '操 作', align: 'center', toolbar: '#bar' }
                ]
            ],
            done: function () {
                $("[data-field='id']").css('display', 'none');
            }
        });


        //监听工具条
        table.on('tool(BookDataTable)', function (obj) {
            var data = obj.data;
            if (obj.event === 'detail') {
                x_admin_show('小说详情', "Reception_Novel-Information.html?NovelID=" + data.id + "&Type=1");
            }
        });


    });
}


function loadReceptionNovel_Infomation(NovelID) {
    $.ajax({
        url: "http://localhost:8888/NRN/Novel/Select",
        type: "post",
        data: JSON.stringify({ "id": NovelID }),
        // data: JSON.stringify({ "id": "01" }),

        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (data) {
            $("input[name='ID']").val(data.data[0].id);
            $("#imageFile").attr("src", data.data[0].coverUrl);
            $("input[name='state']").val(data.data[0].state);
            $("input[name='name']").val(data.data[0].name);
            $("input[name='NovelRecentUpdatesTime']").val(data.data[0].novelRecentUpdatesTime);
            $("input[name='NovelType']").val(data.data[0].type.name);
            $("textarea[name='synopsis']").val(data.data[0].synopsis);
            $(".chapterInsertBtn").attr("onclick", "x_admin_show('更新章节','Reception_ChapterInsert.html?NovelID=" + data.data[0].id + "')")
            if (data.data[0].isverify.result == '通过') {
                $("input[name='AuditAuditor']").val(data.data[0].isverify.auditor.aname);
                $("input[name='AuditResult']").val(data.data[0].isverify.result);
                $("textarea[name='AuditOpinion']").val(data.data[0].isverify.opinion);
            } else {
                $(".AuditInformationBox").empty();
            }
        }

    });
}


function loadChapterListDateTable(NovelID) {
    layui.use('table', function () {
        var table = layui.table;
        table.render({
            elem: '#ChapterDataTable',
            url: 'http://localhost:8888/NRN/Chapter/SelectChapterList',
            where: { "novel": { "id": NovelID }, "chapterTimeASC_DESC": "2" },
            // where: { "novel": { "id": "01" }, "chapterTimeASC_DESC": "2" },
            method: 'post',
            contentType: 'application/json;charset=utf-8',
            response: {
                statusName: 'code' //规定数据状态的字段名称，默认：code
                , statusCode: 3 //规定成功的状态码，默认：0
                , msgName: 'message', //规定状态信息的字段名称，默认：msg
                countName: 'count' //规定数据总数的字段名称，默认：count
                , dataName: 'data' //规定数据列表的字段名称，默认：data
            },
            cols: [
                [ //表头
                    { field: 'id', title: 'ID' },
                    { field: 'NovelID', title: 'NovelID', templet: '<div>{{d.novel.id}}</div>' }
                    , { field: 'rank', title: '序号', align: 'center', width: 80, templet: '#rank' }
                    , { field: 'name', title: '章节名称', align: 'center', width: 300 }
                    , { field: 'time', title: '上传时间', align: 'center', width: 200, sort: true }
                    , { file: "isverifyResult", title: '审核结果', align: 'center', width: 100, templet: '<div>{{d.isverify.result}}</div>' }
                    , { file: "isverifyOpinion", title: '审核意见', align: 'center', width: 300, templet: '<div>{{d.isverify.opinion}}</div>' }
                    , { file: "isverifyTime", title: '审核时间', align: 'center', width: 200, templet: '<div>{{d.isverify.time}}</div>' }
                    , { fixed: 'right', width: 150, title: '操 作', align: 'center', toolbar: '#bar' }
                ]
            ],
            done: function () {
                $("[data-field='id']").css('display', 'none');
                $("[data-field='NovelID']").css('display', 'none');

            }
        });


        //监听工具条
        table.on('tool(ChapterDataTable)', function (obj) {
            var data = obj.data;
            if (obj.event === 'ChapterDetail') {
                x_admin_show('章节详情', "Reception_Chapter-Information.html?ChapterID=" + data.id);
            }
        });


    });
}




function loadNovelList() {
    if (getQueryVariable("Type") == "1") {
        loadUnNovelListDateTable({ "id": "", "author": { "id": $.cookie("UserID") }, "isverify": { "opinion": "null" } });
    } else {
        loadNovelListDateTable({ "id": "", "author": { "id": $.cookie("UserID") }, "isverify": { "opinion": "not null" } });
    }
}



function loadNovelListDateTable(jsonString) {
    layui.use('table', function () {
        var table = layui.table;
        table.render({
            elem: '#NovelDataTable',
            url: 'http://localhost:8888/NRN/Novel/Select',
            where: jsonString,
            method: 'post',
            contentType: 'application/json;charset=utf-8',
            response: {
                statusName: 'code' //规定数据状态的字段名称，默认：code
                , statusCode: 3 //规定成功的状态码，默认：0
                , msgName: 'message', //规定状态信息的字段名称，默认：msg
                countName: 'count' //规定数据总数的字段名称，默认：count
                , dataName: 'data' //规定数据列表的字段名称，默认：data
            },
            cols: [
                [ //表头
                    { field: 'id', title: 'ID' }
                    , { field: 'rank', title: '序 号', align: 'center', width: 80, templet: '#rank' }
                    , { field: 'cover', title: '封 面', align: 'center', width: 150, templet: '#cover' }
                    , { field: 'name', title: '书 名', align: 'center', width: 200 }
                    , { field: 'state', title: '连载状况', align: 'center', width: 100, templet: '#isEnd' }
                    , { field: 'type', title: '类 型', align: 'center', width: 100, templet: '<div>{{d.type.name}}</div>' }
                    , { field: 'time', title: '上传时间', align: 'center', width: 200, sort: true }
                    , { file: "isverifyResult", title: '审核结果', align: 'center', width: 100, templet: '<div>{{d.isverify.result}}</div>' }
                    , { file: "isverifyTime", title: '审核时间', align: 'center', width: 200, templet: '<div>{{d.isverify.time}}</div>' }
                    , { fixed: 'right', width: 80, title: '操 作', align: 'center', toolbar: '#bar' }
                ]
            ],
            done: function () {
                $("[data-field='id']").css('display', 'none');
            }
        });


        //监听工具条
        table.on('tool(NovelDataTable)', function (obj) {
            var data = obj.data;
            if (obj.event === 'detail') {
                x_admin_show('查看详情', "Reception_Novel-Information.html?NovelID=" + data.id);
            }
        });


    });
}


function loadUnNovelListDateTable(jsonString) {
    layui.use('table', function () {
        var table = layui.table;
        table.render({
            elem: '#NovelDataTable',
            url: 'http://localhost:8888/NRN/Novel/Select',
            where: jsonString,
            method: 'post',
            contentType: 'application/json;charset=utf-8',
            response: {
                statusName: 'code' //规定数据状态的字段名称，默认：code
                , statusCode: 3 //规定成功的状态码，默认：0
                , msgName: 'message', //规定状态信息的字段名称，默认：msg
                countName: 'count' //规定数据总数的字段名称，默认：count
                , dataName: 'data' //规定数据列表的字段名称，默认：data
            },
            cols: [
                [ //表头
                    { field: 'id', title: 'ID' }
                    , { field: 'rank', title: '序 号', align: 'center', width: 80, templet: '#rank' }
                    , { field: 'cover', title: '封 面', align: 'center', width: 150, templet: '#cover' }
                    , { field: 'name', title: '书 名', align: 'center', width: 300 }
                    , { field: 'state', title: '连载状况', align: 'center', width: 100, templet: '#isEnd' }
                    , { field: 'type', title: '类 型', align: 'center', width: 100, templet: '<div>{{d.type.name}}</div>' }
                    , { field: 'time', title: '上传时间', align: 'center', width: 200, sort: true }
                    , { fixed: 'right', width: 80, title: '操 作', align: 'center', toolbar: '#bar' }
                ]
            ],
            done: function () {
                $("[data-field='id']").css('display', 'none');
            }
        });






        //监听工具条
        table.on('tool(NovelDataTable)', function (obj) {
            var data = obj.data;
            if (obj.event === 'detail') {
                x_admin_show('小说详情', "Reception_Novel-Information.html?NovelID=" + data.id + "&Type=2");
            }
        });


    });
}


function LoadChapterInfomation() {
    $.ajax({
        url: "http://localhost:8888/NRN/Chapter/Select",
        type: "post",
        data: JSON.stringify({ "id": getQueryVariable("ChapterID") }),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.code == 1 || data.code == 3) {
                var info = data.data[0];
                $('ul[class="dataList"]').empty();
                $('ul[class="dataList"]').append("<li>作者：" + info.novel.author.uname + "</li>");
                $('ul[class="dataList"]').append("<li>上传时间：" + info.time + "</li>");
                $('ul[class="dataList"]').append("<li>所属小说：" + info.novel.name + "</li>");
                $('ul[class="dataList"]').append("<li>小说类型：" + info.novel.type.name + "</li>");
                $('pre[class="ChapterContentText"]').text(info.content);
                $('h1[class="ChapterNameTitle"]').text(info.name);
                if (info.isverify.result == "未审核") {
                    $(".Content-Box_Bottom").remove();

                } else {
                    $('input[name="AuditID"]').val(info.isverify.id);
                    $("input[name='AuditAuditor']").val(info.isverify.auditor.aname);
                    $("input[name='AuditResult']").val(info.isverify.result);
                    $("textarea[name='AuditOpinion']").val(info.isverify.opinion);
                }


            } else {
                alert("加载失败，请关闭重试")
            }



        }

    });
}



function loadNovelInsert_TypeSelect() {
    $.ajax({
        url: "http://localhost:8888/NRN/Type/Select",
        type: "post",
        data: JSON.stringify({ "id": "" }),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.code == 1 || data.code == 3) {
                var TypeList = $('#TypeID');
                var TypeList02 = $(".NovelTypeSelectBox02");
                $(".NovelTypeBox").append("<div class=\"layui-unselect layui-form-select layui-form-selected\"><div class=\"layui-select-title\"><input type=\"text\" placeholder=\"请选择\" readonly=\"\" class=\"layui-input layui-unselect\"><i class=\"layui-edge\"></i></div><dl class=\"layui-anim NovelTypeSelectBox02 layui-anim-upbit\" style=\"\"></dl>");

                var ArrayData = data.data;
                console.log(data.count);
                for (var i = 0; i < ArrayData.length; i++) {
                    var ArrayDataItem = ArrayData[i];
                    var dataText = "<option value=\"" + ArrayDataItem.id + "\">" + ArrayDataItem.name + "</option>";
                    console.log(dataText);
                    if (i = 0) {
                        var dataText = "<dd lay-value=\"" + ArrayDataItem.id + "\" class=\"layui-this\">" + ArrayDataItem.name + "</dd>";
                    }
                    var dataText = "<dd lay-value=\"" + ArrayDataItem.id + "\" class>" + ArrayDataItem.name + "</dd>";

                    TypeList02.append(dataText);
                    TypeList.append(dataText);
                }
            } else {
                alert("加载失败，请刷新重试")
            }
        }

    });
}


function loadAdminListDateTable() {
    layui.use('table', function () {
        var table = layui.table;
        table.render({
            elem: '#AdminDataTable',
            url: 'http://localhost:8888/NRN/Administrator/Select',
            where: {},
            method: 'post',
            contentType: 'application/json;charset=utf-8',
            response: {
                statusName: 'code' //规定数据状态的字段名称，默认：code
                ,
                statusCode: 3 //规定成功的状态码，默认：0
                ,
                msgName: 'message', //规定状态信息的字段名称，默认：msg
                countName: 'count' //规定数据总数的字段名称，默认：count
                ,
                dataName: 'data' //规定数据列表的字段名称，默认：data
            },
            cols: [
                [ //表头
                    { field: 'id', title: 'ID' }
                    , { field: 'rank', title: '序 号', align: 'center', width: 80, templet: '#rank' }
                    , { field: 'aheadPortrait', title: '头 像', align: 'center', width: 150, templet: '#headPortrait' }
                    , { field: 'aname', title: '姓 名', align: 'center', width: 100 }
                    , { field: 'anickname', title: '昵 称', align: 'center', width: 200 }
                    , { field: 'aemail', title: '邮 箱', align: 'center', width: 300 }
                    , { field: 'arole', title: '角 色', align: 'center', width: 100, templet: '<div>{{d.arole.name}}</div>' }
                    , { field: 'atelephone', title: '电话', align: 'center', width: 200 }
                    , { fixed: 'right', width: 80, title: '操 作', align: 'center', toolbar: '#bar' }
                ]
            ],
            done: function () {
                $("[data-field='id']").css('display', 'none');
            }
        });


        //监听工具条
        table.on('tool(AdminDataTable)', function (obj) {
            var data = obj.data;
            if (obj.event === 'detail') {
                x_admin_show('查看详情', "AdminCenter-Information.html?AdminID=" + data.id);
            }
        });


    });
}










function loadNovelInformation() {
    $.ajax({
        url: "http://localhost:8888/NRN/Novel/Select",
        type: "post",
        data: JSON.stringify({ "id": getQueryVariable("NovelID") }),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.code == 1 || data.code == 3) {
                var info = data.data[0];
                $('ul[class="dataList"]').empty();
                $('ul[class="dataList"]').append("<li>作者：" + info.author.uname + "</li>");
                $('ul[class="dataList"]').append("<li>小说类型：" + info.type.name + "</li>");
                $('ul[class="dataList"]').append("<li>发布时间：" + info.time + "</li>");
                $('ul[class="dataList"]').append("<li>连载状态：" + info.state + "</li>");
                $('input[name="AuditID"]').val(info.isverify.id);
                $('p[class="NovleSynopsis"]').text(info.synopsis);
                $('h1[class="NovelNameTitle"]').text(info.name);

                $('img[class="Content-Box_Top_coverImage"]').attr("src", info.coverUrl)


                if (getQueryVariable("Type") == "1") {
                    $('ul[class="AuditDataList"]').empty();
                    $('ul[class="AuditDataList"]').append("<li>审核者：" + info.isverify.auditor.aname + "</li>");
                    $('ul[class="AuditDataList"]').append("<li>审核时间：" + info.isverify.time + "</li>");
                    $('ul[class="AuditDataList"]').append("<li>审核结果：" + info.isverify.result + "</li>");
                    $('textarea[name="AuditOpinion"]').text(info.isverify.opinion)

                }

            } else {
                alert("加载失败，请关闭重试")
            }



        }

    });
    loadNovel_ChapterDataTable()
}


function loadNovel_ChapterDataTable() {
    layui.use('table', function () {
        var table = layui.table;
        table.render({
            elem: '#ChapterDataTable',
            url: 'http://localhost:8888/NRN/Chapter/Select',
            where: { "novel": { "id": getQueryVariable("NovelID") } },
            method: 'post',
            contentType: 'application/json;charset=utf-8',
            response: {
                statusName: 'code' //规定数据状态的字段名称，默认：code
                , statusCode: 3 //规定成功的状态码，默认：0
                , msgName: 'message', //规定状态信息的字段名称，默认：msg
                countName: 'count' //规定数据总数的字段名称，默认：count
                , dataName: 'data' //规定数据列表的字段名称，默认：data
            },
            cols: [
                [ //表头
                    { field: 'id', title: 'ID' },
                    { field: 'NovelID', title: 'NovelID', templet: '<div>{{d.novel.id}}</div>' }
                    , { field: 'rank', title: '序号', align: 'center', width: 80, templet: '#rank' }
                    , { field: 'name', title: '章节名称', align: 'center', width: 300 }
                    , { field: 'time', title: '上传时间', align: 'center', width: 200, sort: true }
                    , { file: "isverifyResult", title: '审核结果', align: 'center', width: 100, templet: '<div>{{d.isverify.result}}</div>' }
                    , { file: "isverifyTime", title: '审核时间', align: 'center', width: 200, templet: '#isverifyTime' }
                    , { fixed: 'right', width: 150, title: '操 作', align: 'center', toolbar: '#bar' }
                ]
            ],
            done: function () {
                $("[data-field='id']").css('display', 'none');
                $("[data-field='NovelID']").css('display', 'none');

            }
        });


        //监听工具条
        table.on('tool(ChapterDataTable)', function (obj) {
            var data = obj.data;
            if (obj.event === 'Audit' && data.isverify.result != '未审核') {
                x_admin_show('章节审核', "Chapter-Information.html?ChapterID=" + data.id + "&ChapterType=1&NovelTab=1");
            } else {
                x_admin_show('章节审核', "Chapter-Information.html?ChapterID=" + data.id + "&ChapterType=2&NovelTab=1");
            }
        });


    });
}



function loadLitmitListDateTable() {
    layui.use('table', function () {
        var table = layui.table;
        table.render({
            elem: '#LimitDataTable',
            url: 'http://localhost:8888/NRN/PersonalRole/Select',
            where: {},
            method: 'post',
            contentType: 'application/json;charset=utf-8',
            response: {
                statusName: 'code' //规定数据状态的字段名称，默认：code
                , statusCode: 3 //规定成功的状态码，默认：0
                , msgName: 'message', //规定状态信息的字段名称，默认：msg
                countName: 'count' //规定数据总数的字段名称，默认：count
                , dataName: 'data' //规定数据列表的字段名称，默认：data
            },
            cols: [
                [ //表头
                    { field: 'id', title: 'ID' }
                    , { field: 'rank', title: '序 号', align: 'center', width: 80, templet: '#rank' }
                    , { field: 'name', title: '角色名称', align: 'center', width: 150 }
                    , { field: 'chapter', title: '章节管理', align: 'center', width: 150, templet: '#chapter' }
                    , { field: 'novel', title: '小说管理', align: 'center', width: 150, templet: '#novel' }
                    , { field: 'role', title: '权限管理', align: 'center', width: 150, templet: '#role' }
                    , { field: 'type', title: '小说类型管理', align: 'center', width: 150, templet: '#type' }
                    , { field: 'administrator', title: '管理员管理', align: 'center', width: 150, templet: '#administrator' }
                    , { field: 'user', title: '用户管理', align: 'center', width: 150, templet: '#user' }
                ]
            ],
            done: function () {
                // $("#dateCount").text = "共有数据："+data.count+" 条";
                $("[data-field='id']").css('display', 'none');
            }
        });
    });
}




function loadTypeListDateTable() {
    layui.use('table', function () {
        var table = layui.table;
        table.render({
            elem: '#TypeDataTable',
            url: 'http://localhost:8888/NRN/Type/Select',
            where: { "id": "" },
            method: 'post',
            contentType: 'application/json;charset=utf-8',
            response: {
                statusName: 'code' //规定数据状态的字段名称，默认：code
                , statusCode: 3 //规定成功的状态码，默认：0
                , msgName: 'message' //规定状态信息的字段名称，默认：msg
                , countName: 'count' //规定数据总数的字段名称，默认：count
                , dataName: 'data' //规定数据列表的字段名称，默认：data
            },
            cols: [
                [ //表头
                    { field: 'id', title: 'ID' }
                    , { field: 'rank', title: '序 号', align: 'center', width: 80, templet: '#rank' }
                    , { field: 'name', title: '类型名称', align: 'center', width: 150 }
                    , { field: 'time', title: '创建时间', align: 'center', width: 300 }
                    , { fixed: 'right', width: 80, title: '操 作', align: 'center', toolbar: '#bar' }
                ]
            ],
            done: function () {
                // $("#dateCount").text = "共有数据："+data.count+" 条";
                $("[data-field='id']").css('display', 'none');
            }
        });

        //监听工具条
        table.on('tool(TypeDataTable)', function (obj) {
            var data = obj.data;
            if (obj.event === 'delete') {
                $.ajax({
                    url: "http://localhost:8888/NRN/Type/Delete",
                    type: "post",
                    data: JSON.stringify({ "id": data.id }),
                    contentType: "application/json;charset=utf-8",
                    dataType: "json",
                    success: function (data) {
                        if (data.code == 1 || data.code == 3) {
                            alert("操作成功")
                            loadTypeListDateTable();
                        } else {
                            alert("操作失败，请刷新重试")
                        }
                    }

                });
            }
        });
    });
}






function loadChapterList() {
    if (getQueryVariable("Type") == "1") {
        jsonString = { "isverify": { "auditor": { "id": $.cookie("AdminID") }, "opinion": "null" } };
        loadUnChapterListDateTable(jsonString);
    } else {
        jsonString = { "isverify": { "auditor": { "id": $.cookie("AdminID") }, "opinion": "not null" } };
        loadChapterListDateTable(jsonString);
    }

}




function loadUnChapterListDateTable(jsonString) {
    layui.use('table', function () {
        var table = layui.table;
        table.render({
            elem: '#ChapterDataTable',
            url: 'http://localhost:8888/NRN/Chapter/Select',
            where: jsonString,
            method: 'post',
            contentType: 'application/json;charset=utf-8',
            response: {
                statusName: 'code' //规定数据状态的字段名称，默认：code
                , statusCode: 3 //规定成功的状态码，默认：0
                , msgName: 'message', //规定状态信息的字段名称，默认：msg
                countName: 'count' //规定数据总数的字段名称，默认：count
                , dataName: 'data' //规定数据列表的字段名称，默认：data
            },
            cols: [
                [ //表头
                    { field: 'id', title: 'ID' },
                    { field: 'NovelID', title: 'NovelID', templet: '<div>{{d.novel.id}}</div>' }
                    , { field: 'rank', title: '序号', align: 'center', width: 80, templet: '#rank' }
                    , { field: 'name', title: '章节名称', align: 'center', width: 300 }
                    , { field: 'novel', title: '所属小说', align: 'center', width: 200, templet: '<div>{{d.novel.name}}</div>' }
                    , { field: 'author', title: '作  者', align: 'center', width: 200, templet: '<div>{{d.novel.author.uname}}</div>' }
                    , { field: 'time', title: '上传时间', align: 'center', width: 200, sort: true }
                    , { fixed: 'right', width: 80, title: '操 作', align: 'center', toolbar: '#bar' }
                ]
            ],
            done: function () {
                $("[data-field='id']").css('display', 'none');
                $("[data-field='NovelID']").css('display', 'none');

            }
        });


        //监听工具条
        table.on('tool(ChapterDataTable)', function (obj) {
            var data = obj.data;
            if (obj.event === 'NovelDetail') {
                x_admin_show('小说详情', "Novel-Information.html?NovelID=" + data.novel.id + "&Type=1");
            } else if (obj.event === 'Audit') {
                x_admin_show('章节审核', "Chapter-Information.html?ChapterID=" + data.id + "&ChapterType=2");
            }
        });


    });
}




