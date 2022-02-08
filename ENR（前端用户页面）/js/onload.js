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
        if ($.cookie("userID") != "null" && $.cookie("userID") != undefined) {
                $.ajax({
                        url: "http://localhost:8080/EBookMS/User/Select",
                        type: "post",
                        data: JSON.stringify({ "id": $.cookie("userID") }),
                        contentType: "application/json;charset=utf-8",
                        dataType: "json",
                        success: function (data) {
                                $(".UserName").text(data.data[0].userID);
                        }

                });
        } else {
                var address = "login.html";
                window.location.href = address;
                alert("暂未登录");
        }
}

//修改完成
function downlineLoad() {
        $.ajax({
                url: "http://localhost:8080/EBookMS/User/Update",
                type: "post",
                data: JSON.stringify({ "id": $.cookie("userID"), "isOnline": "0" }),
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                success: function (data) {
                        if (data.code == 4 && data.code == 2) {
                                alert("退出失败，请重试")
                        } else {
                                $.cookie("userID", null);
                                var address = "login.html";
                                window.location.href = address;

                        }
                }
        });
}




//UserPersonalCenter
//修改完成
function loadUserPersonalCenter() {
        $.ajax({
                url: "http://localhost:8080/EBookMS/User/Select",
                type: "post",
                data: JSON.stringify({ "id": $.cookie("userID") }),
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                success: function (data) {
                        var info = data.data[0];
                        if (info.isOnline == "1") { info.isOnline = "在线" } else { info.isOnline = "离线" }

                        $('input[name="isOnline"]').val(info.isOnline);
                        $('input[name="loginTime"]').val(info.loginTime);
                        $('input[name="userID"]').val(info.userID);
                        $('input[name="email"]').val(info.email);
                }

        });
}

//修改完成
function UserPersonalCenterSubmit() {
        $.ajax({
                url: "http://localhost:8080/EBookMS/User/Update",
                type: "post",
                data: JSON.stringify({
                        "id": $.cookie("userID"),
                        "userID": $('input[name="userID"]').val(),
                        "email": $('input[name="email"]').val()
                }),
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                success: function (data) {
                        if (data.code == 1 || data.code == 3) {
                                alert("修改成功");
                                parent.loadUserPersonalCenter();
                        } else {
                                alert("修改失败，请重试")
                        }

                }

        });
}



//UserPassword
//修改完成
function PasswordCheck() {
        $.ajax({
                url: "http://localhost:8080/EBookMS/User/Select",
                type: "post",
                data: JSON.stringify({
                        "id": $.cookie("userID"),
                        "password": $('input[name="oldPW"]').val()
                }),
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                success: function (data) {
                        if (data.data.length != 1) {
                                $("#passwordError").text("请输入正确密码");
                        } else { $("#passwordError").text(""); }
                }

        });
}

//修改完成
function PasswordRepeatCheck() {
        if ($('input[name="newPW"]').val() != $('input[name="repeatPW"]').val()) { $("#PWRepeaatError").text("两次密码不一致"); }
        else { $("#PWRepeaatError").text(""); }
}

//修改完成
function UserPasswordSubmit() {
        if ($("#PWRepeaatError").text().length == 0 && $("#passwordError").text().length == 0) {
                $.ajax({
                        url: "http://localhost:8080/EBookMS/User/Update",
                        type: "post",
                        data: JSON.stringify({
                                "id": $.cookie("userID"),
                                "password": $('input[name="repeatPW"]').val()
                        }),
                        contentType: "application/json;charset=utf-8",
                        dataType: "json",
                        success: function (data) {
                                if (data.code == 1 || data.code == 3) {
                                        alert("操作成功");
                                        $('input[name="oldPW"]').text("");
                                        $('input[name="newPW"]').text("");
                                        $('input[name="repeatPW"]').text("");
                                } else {
                                        alert("操作失败，请重试");
                                        $('input[name="oldPW"]').text("");
                                        $('input[name="newPW"]').text("");
                                        $('input[name="repeatPW"]').text("");
                                }
                        }

                });
        } else {
                alert("密码不一致，请重试");
        }

}





//UserList-Information
//修改完成
function UserList_InformationLoad() {
        $.ajax({
                url: "http://localhost:8080/EBookMS/User/Select",
                type: "post",
                data: JSON.stringify({ "id": getQueryVariable("userID") }),
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                success: function (data) {
                        if (data.code != null) {
                                var info = data.data[0];
                                if (info.isOnline == "1") { info.isOnline = "在线" } else { info.isOnline = "离线" }

                                $('input[name="isOnline"]').val(info.isOnline);
                                $('input[name="loginTime"]').val(info.loginTime);
                                $('input[name="ID"]').val(info.userID);
                                $('input[name="email"]').val(info.email);
                                $('input[name="coinCount"]').val(info.coinCount);
                        }
                }

        });
}



//BookList
//修改完成
function BookListLoad(jsonString) {
        layui.use('table', function () {
                var table = layui.table;
                table.render({
                        elem: '#BookDataTable'
                        , url: 'http://localhost:8080/EBookMS/Book/Select'
                        , where: jsonString
                        , method: 'post'
                        , contentType: 'application/json;charset=utf-8'
                        , response: {
                                statusName: 'code' //规定数据状态的字段名称，默认：code
                                , statusCode: 3 //规定成功的状态码，默认：0
                                , msgName: 'message', //规定状态信息的字段名称，默认：msg
                                countName: 'count' //规定数据总数的字段名称，默认：count
                                , dataName: 'data' //规定数据列表的字段名称，默认：data
                        }
                        , cols: [[ //表头
                                { field: 'id', title: 'ID', hide: true }
                                , { field: 'zizeng', width: 80, title: '序号', fixed: 'left', type: 'numbers' }
                                , { field: 'name', title: '图书名称', align: 'center', width: 200 }
                                , { field: 'author', title: '作 者', align: 'center', width: 200 }
                                , { field: 'isEnd', title: '连载状况', align: 'center', width: 100, templet: '#isEnd' }
                                , { field: 'uploadTime', title: '上传时间', align: 'center', width: 200, sort: true }
                                , { field: 'opinion.result', title: '审核结果', align: 'center', width: 100, templet: '#auditResult' }
                                , { field: 'isDelete', title: '是否删除', align: 'center', width: 100, templet: '#isDelete' }
                                , { fixed: 'right', width: 80, title: '操 作', align: 'center', toolbar: '#bar' }
                        ]]
                });


                //监听工具条
                table.on('tool(BookDataTable)', function (obj) {
                        var data = obj.data;
                        if (obj.event === 'detail') {
                                x_admin_show('查看详情', 'Book-Information.html?BookID=' + data.id);
                        } else if (obj.event === 'update') {
                                BookListUpdateSubmit(data.id);
                        }
                });


        });
}


//修改完成
function BookListUpdateSubmit(ID) {
        var isDelete = $('input[name="isDelete"]').is(':checked')
        if (isDelete) { isDelete = "1"; } else { isDelete = "0"; }
        $.ajax({
                url: "http://localhost:8080/EBookMS/Book/Update",
                type: "post",
                data: JSON.stringify({ "id": ID, "isDelete": isDelete }),
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                success: function (data) {
                        if (data.code == "1" || data.code == "3") {
                                alert("修改成功，请重试");
                                var jsonString = { 'selectType': '2', 'uploadUser': $.cookie("userID") };
                                BookListLoad(jsonString);
                        } else {
                                alert("修改失败，请重试");
                        }
                }

        });
}

//BookClassSelectLoad
function BookClassSelectLoad() {
        $.ajax({
                url: "http://localhost:8080/EBookMS/Class/Select",
                type: "post",
                data: JSON.stringify({ "isClose": "0" }),
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                success: function (data) {
                        if (data.code == 1 || data.code == 3) {
                                var selectType = $('.bookClass');
                                var ArrayData = data.data;
                                console.log("这里是BookClassSelectLoad()     图书类型数量：" + ArrayData.length);
                                for (var i = 0; i < ArrayData.length; i++) {
                                        var ArrayDataItem = ArrayData[i];
                                        var dataText = "<option value=\"" + ArrayDataItem.id + "\">" + ArrayDataItem.name + "</option>";
                                        selectType.append(dataText);

                                }
                        }
                }

        });
}

//修改完成
function BookListSelectSubmit() {
        var selectType = $('.search_class').val();
        var selectText = $('input[name="selectText"]').val();
        var isEnd = $('.isEnd').val();
        var isOpinion = $('.isOpinion').val();
        var opinionResult = $('.opinionResult').val();
        if (isOpinion == "0") { isOpinion = "null"; } else if (isOpinion == "1") { isOpinion = "not null" }

        var jsonString;

        if (selectType == "01") {
                jsonString = {"isEnd":isEnd,"opinion":{ "opinion":isOpinion,"result":opinionResult },"uploadUser":$.cookie("userID"),"name":selectText,"selectType":"2"};
        } else if (selectType == "02") {
                jsonString = {"isEnd":isEnd,"opinion":{ "opinion":isOpinion,"result":opinionResult },"uploadUser":$.cookie("userID"),"author":selectText,"selectType":"2"};
        } else {
                jsonString = {"isEnd":isEnd,"opinion":{ "opinion":isOpinion,"result":opinionResult },"uploadUser":$.cookie("userID"),"selectType":"2"};
        }

        layui.use('table', function () {
                var table = layui.table;
                table.reload('BookDataTable', {
                        url: 'http://localhost:8080/EBookMS/Book/Select'
                        , where: jsonString
                        , method: 'post'
                        , contentType: 'application/json;charset=utf-8'
                        , response: {
                                statusName: 'code' //规定数据状态的字段名称，默认：code
                                , statusCode: 3 //规定成功的状态码，默认：0
                                , msgName: 'message', //规定状态信息的字段名称，默认：msg
                                countName: 'count' //规定数据总数的字段名称，默认：count
                                , dataName: 'data' //规定数据列表的字段名称，默认：data
                        }
                });
        });


}



//Book-Information
//修改完成
function BookInfomationLoad() {
        $.ajax({
                url: "http://localhost:8080/EBookMS/Book/Select",
                type: "post",
                data: JSON.stringify({ "id": getQueryVariable('BookID'), "selectType": "2" }),
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                success: function (data) {
                        var info = data.data[0];
                        if (info.opinion.result == "1") { info.opinion.result = "通过" } else if (info.opinion.result == "0") { info.opinion.result = "不通过" } else { info.opinion.result = "未审核" }
                        if (info.opinion.opinion == null) { info.opinion.opinion = "未审核" }
                        if (info.isEnd == "0") { info.isEnd = "连载中"; } else { info.isEnd = "已完结"; }

                        $('input[name="name"]').val(info.name);
                        $('input[name="author"]').val(info.author);
                        $('input[name="bookClass"]').val(info.classID);
                        $('input[name="isEnd"]').val(info.isEnd);
                        $('input[name="isOpinion"]').val(info.opinion.result);
                        $('input[name="opinionResult"]').val(info.opinion.opinion);
                        $('input[name="uploadTime"]').val(info.uploadTime);
                        $('textarea[name="text"]').val(info.text);
                        $("#fileButton").attr("onclick", "FileButtonClick(\"http://localhost:8080/EBookMS/upload/" + info.file + "\")");
                        $("#imageFile").attr("src", "http://localhost:8080/EBookMS/image/" + info.image);
                        $("#imageFile").attr("style", "width: 180px;height: 200px;");

                }

        });
}

//修改完成
function FileButtonClick(url) {
        window.open(url);
}
