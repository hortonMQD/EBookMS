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
        if ($.cookie("ID") != "null" && $.cookie("ID") != undefined) {
                $.ajax({
                        url: "http://localhost:8080/EBookMS/Employee/Select",
                        type: "post",
                        data: JSON.stringify({ "id": $.cookie("ID") }),
                        contentType: "application/json;charset=utf-8",
                        dataType: "json",
                        success: function (data) {
                                $(".EmployeeName").text(data.data[0].name);
                        }

                });
        } else {
                var address = "login.html";
                window.location.href = address;
                alert("尚未登录，请登录");
        }

}

//修改完成
function downlineLoad() {
        $.ajax({
                url: "http://localhost:8080/EBookMS/Employee/Update",
                type: "post",
                data: JSON.stringify({ "id": $.cookie("ID"), "isOnline": "0" }),
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                success: function (data) {
                        if (data.code == 4 && data.code == 2) {
                                alert("退出失败，请重试")
                        } else {
                                $.cookie("ID", null);
                                var address = "login.html";
                                window.location.href = address;

                        }
                }
        });
}




//EmployeePersonalCenter
//修改完成
function loadEmployeePersonalCenter() {
        $.ajax({
                url: "http://localhost:8080/EBookMS/Employee/Select",
                type: "post",
                data: JSON.stringify({ "id": $.cookie("ID") }),
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                success: function (data) {
                        var info = data.data[0];
                        if (info.isOnline == "1") { info.isOnline = "在线" } else { info.isOnline = "离线" }
                        if (info.isTrue == "1") { info.isTrue = "在岗" } else { info.isTrue = "离职" }

                        $('input[name="isOnline"]').val(info.isOnline);
                        $('input[name="loginTime"]').val(info.loginTime);
                        $('input[name="ID"]').val(info.employeeID);
                        $('input[name="name"]').val(info.name);
                        $('input[name="email"]').val(info.email);
                        $('input[name="telephone"]').val(info.telephone);
                        $('input[name="department"]').val(info.department);
                        $('input[name="isTrue"]').val(info.isTrue);

                }

        });
}


//修改半完成
function EmployeePersonalCenterSubmit() {
        $.ajax({
                url: "http://localhost:8080/EBookMS/Employee/Update",
                type: "post",
                data: JSON.stringify({
                        "id": $.cookie("ID"),
                        "name": $('input[name="name"]').val(),
                        "email": $('input[name="email"]').val(),
                        "telephone": $('input[name="telephone"]').val()
                }),
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                success: function (data) {
                        if (data.code == 1 || data.code == 3) {
                                alert("修改成功");
                                parent.loadAref();
                                parent.loadEmployeePersonalCenter();
                        } else {
                                alert("修改失败，请重试")
                        }
                }

        });
}



//EmployeePassword
//修改完成
function EmployeePasswordCheck() {
        $.ajax({
                url: "http://localhost:8080/EBookMS/Employee/Select",
                type: "post",
                data: JSON.stringify({
                        "id": $.cookie("ID"),
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
function EmployeePasswordRepeatCheck() {
        if ($('input[name="newPW"]').val() != $('input[name="repeatPW"]').val()) { $("#PWRepeaatError").text("两次密码不一致"); }
        else { $("#PWRepeaatError").text(""); }
}


//修改完成
function EmployeePasswordSubmit() {
        if ($("#PWRepeaatError").text().length == 0 && $("#passwordError").text().length == 0) {
                $.ajax({
                        url: "http://localhost:8080/EBookMS/Employee/Update",
                        type: "post",
                        data: JSON.stringify({
                                "id": $.cookie("ID"),
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






//EmployeeList
//修改完成
function EmployeeListLoad() {
        $.ajax({
                url: "http://localhost:8080/EBookMS/Employee/Select",
                type: "post",
                data: JSON.stringify({}),
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                success: function (data) {
                        if (data.code != null) {
                                EmployeeDataLoad(data.data);
                        }
                }

        });
}

//修改完成
function EmployeeListDepartmentSelectLoad() {
        $.ajax({
                url: "http://localhost:8080/EBookMS/Department/Select",
                type: "post",
                data: JSON.stringify({"isClose":"0"}),
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                success: function (data) {
                        if (data.code == 1 || data.code == 3) {
                                var selectType = $('.department');
                                var ArrayData = data.data;
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
function EmployeeDataLoad(data) {
        var table = $(".MainContent_rightContent_dataTable tbody");
        table.html("");
        if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                        var ArrayData = data[i];
                        if (ArrayData.isTrue == "0") { ArrayData.isTrue = "离职"; } else { ArrayData.isTrue = "在岗"; }
                        if (ArrayData.isOnline == "0") { ArrayData.isOnline = "离线"; } else { ArrayData.isOnline = "在线"; }
                        var tableData = "<tr><td>" + (i + 1) + "</td><td>" + ArrayData.employeeID + "</td><td>" +
                                ArrayData.name + "</td><td>" + ArrayData.email + "</td><td>" + ArrayData.telephone + "</td><td>" +
                                ArrayData.department + "</td><td>" + ArrayData.isTrue + "</td><td>" + ArrayData.isOnline + "</td><td>" +
                                ArrayData.loginTime + "</td>"
                                + "<td class=\"td-manage\"><a title=\"查看详情\" onclick=\"x_admin_show('查看详情','Employee-Information.html?infoID=" + ArrayData.id + "')\" href=\"javascript:;\"><i class=\"layui-icon\"></i></a></td></tr>";
                        table.append(tableData);
                }
        }

}

//修改完成
function SelcetEmployeeSubmit() {
        var isTrue = $('input[name="isTrue"]').is(':checked');
        var isOnline = $('input[name="isOnline"]').is(':checked');
        var selectType = $('.search_class').val();
        var selectText = $('input[name="selectText"]').val();
        var Department = $('.department').val();
        var jsonString;
        if (isOnline) { isOnline = "1"; } else { isOnline = "" }
        if (isTrue) { isTrue = "1"; } else { isTrue = "" }

        if (selectType == "01") {
                jsonString = "{\"isTrue\":\"" + isTrue + "\",\"isOnline\":\"" + isOnline + "\",\"employeeID\":\"" + selectText + "\",\"department\":\"" + Department + "\"}";
        } else if (selectType == "02") {
                jsonString = "{\"isTrue\":\"" + isTrue + "\",\"isOnline\":\"" + isOnline + "\",\"name\":\"" + selectText + "\",\"department\":\"" + Department + "\"}";
        } else {
                jsonString = "{\"isTrue\":\"" + isTrue + "\",\"isOnline\":\"" + isOnline + "\",\"department\":\"" + Department + "\"}";
        }

        console.log(jsonString);

        $.ajax({
                url: "http://localhost:8080/EBookMS/Employee/Select",
                type: "post",
                data: jsonString,
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                success: function (data) {
                        if (data.code != null) {
                                EmployeeDataLoad(data.data);
                        }
                }

        });

}


function EmployeeList_InformationInsertSubmit(){
        var employeeID = ''+new Date().getFullYear()+$('.department').val();
        console.log(employeeID);
        $.ajax({
                url: "http://localhost:8080/EBookMS/Employee/Insert",
                type: "post",
                data: JSON.stringify({
                        "employeeID":employeeID,
                        "name": $('input[name="name"]').val(),
                        "email": $('input[name="email"]').val(),
                        "telephone": $('input[name="telephone"]').val(),
                        "password":$('input[name="password"]').val(),
                        "department": $('.department').val()
                }),
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                success: function (data) {
                        if (data.code == 1 || data.code == 3) {
                                alert('添加成功');
                                parent.EmployeeListLoad();
                        } else {
                                alert('添加失败，请重试');
                        }
                }

        });
}



//Employee-Information
//修改完成
function EmployeeInformationUpdataLoad() {
        $.ajax({
                url: "http://localhost:8080/EBookMS/Employee/Select",
                type: "post",
                data: JSON.stringify({ "id": getQueryVariable("infoID") }),
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                success: function (data) {
                        var info = data.data[0];


                        if (info.isTrue == "0") { $('input[name="isTrue"]').prop("checked", true); }
                        if (info.isDelete == "0") { $('input[name="isDelete"]').prop("checked", true); }
                        if (info.isOnline == "1") { info.isOnline = "在线"; } else { info.isOnline = "离线"; }

                        $('input[name="isOnline"]').val(info.isOnline);
                        $('input[name="loginTime"]').val(info.loginTime);

                        $('input[name="ID"]').val(info.employeeID);
                        $('input[name="name"]').val(info.name);
                        $('input[name="email"]').val(info.email);
                        $('input[name="telephone"]').val(info.telephone);
                        $(".department option:contains('" + info.department + "')").attr("selected", true);


                }

        });
}

//修改半完成
function EmployeeInformationUpdataSubmit() {
        var isTrue = $('input[name="isTrue"]').is(':checked');
        if (isTrue) { isTrue = "1"; } else { isTrue = "0" }
        var isDelete = $('input[name="isDelete"]').is(':checked');
        if (isDelete) { isDelete = "1"; } else { isDelete = "0" }

        $.ajax({
                url: "http://localhost:8080/EBookMS/Employee/Update",
                type: "post",
                data: JSON.stringify({
                        "id": getQueryVariable("infoID"),
                        "name": $('input[name="name"]').val(),
                        "email": $('input[name="email"]').val(),
                        "telephone": $('input[name="telephone"]').val(),
                        "department": $('.department').val(),
                        "isTrue": isTrue, "isDelete": isDelete
                }),
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                success: function (data) {
                        if (data.code == 1 || data.code == 3) {
                                alert('修改成功');
                                parent.EmployeeListLoad();
                        } else {
                                alert('修改失败，请重试');
                        }
                }

        });
}




//EmployeeInsert（未完成）
function EmployeeInsertSubmit() {
}



//UserList
//修改完成
function UserListLoad() {
        $.ajax({
                url: "http://localhost:8080/EBookMS/User/Select",
                type: "post",
                data: JSON.stringify({}),
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                success: function (data) {
                        if (data.code != null) {
                                UserListDataLoad(data.data);
                        }
                }

        });
}

//修改完成
function UserListDataLoad(data) {
        var table = $(".MainContent_rightContent_dataTable tbody");
        table.html("");
        if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                        var ArrayData = data[i];
                        if (ArrayData.isOnline == "1") { ArrayData.isOnline = "在线"; } else (ArrayData.isOnline = "离线");

                        var tableData = "<tr><td>" + (i + 1) + "</td><td>" + ArrayData.userID + "</td><td>" + ArrayData.email + "</td><td>" + ArrayData.isOnline +
                                "</td><td>" + ArrayData.loginTime + "</td>" +
                                "<td class=\"td-manage\"><a title=\"查看详情\" onclick=\"x_admin_show('查看详情','UserList-Information.html?ID=" + $.cookie("ID") + "&userID=" + ArrayData.id + "')\" href=\"javascript:;\"><i class=\"layui-icon\"></i></a></td>" +
                                "</tr>";
                        table.append(tableData);
                }

        }
}

//修改完成
function UserListSelectSubmit() {
        var isOnline = $('input[name="isOnline"]').is(':checked');
        var selectText = $('input[name="selectText"]').val();
        if (isOnline) { isOnline = "1"; } else { isOnline = "" }

        var jsonString = "{\"isOnline\":\"" + isOnline + "\",\"userID\":\"" + selectText + "\"}";



        $.ajax({
                url: "http://localhost:8080/EBookMS/User/Select",
                type: "post",
                data: jsonString,
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                success: function (data) {
                        if (data.code != null) {
                                UserListDataLoad(data.data);
                        }
                }

        });
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
                                , { fixed: 'right', width: 80, title: '操 作', align: 'center', toolbar: '#bar' }
                        ]]
                });


                //监听工具条
                table.on('tool(BookDataTable)', function (obj) {
                        var data = obj.data;
                        if (obj.event === 'detail') {
                                x_admin_show('查看详情', "Book-Information.html?BookID=" + data.id);
                        }
                });


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
                jsonString = {"isEnd":isEnd,"opinion":{ "opinion":isOpinion,"result":opinionResult },"name":selectText,"selectType":"2"};
        } else if (selectType == "02") {
                jsonString = {"isEnd":isEnd,"opinion":{ "opinion":isOpinion,"result":opinionResult },"author":selectText,"selectType":"2"};
        } else {
                jsonString = {"isEnd":isEnd,"opinion":{ "opinion":isOpinion,"result":opinionResult },"selectType":"2"};
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
                        $('input[name="uploadUser"]').val(info.uploadUser);
                        $('input[name="uploadTime"]').val(info.uploadTime);
                        $('textarea[name="text"]').val(info.text);

                        $("#fileButton").attr("onclick", "FileButtonClick(\"http://localhost:8080/EBookMS/upload/" + info.file + "\")");
                        $("#imageFile").attr("src", "http://localhost:8080/EBookMS/image/" + info.image);
                        $("#imageFile").attr("style", "width: 180px;height: 200px;");


                        AuditBookInformationLoad(info.opinion.id);
                }

        });
}

//修改完成
function FileButtonClick(url) {
        window.open(url);
}




//AuditBookInformation
//修改完成
function AuditBookInformationLoad(ID) {
        $("#AuditBook_btn").attr("onclick", "AuditBookInfomationSubmit(" + ID + ")");
}

//修改完成
function AuditBookInfomationSubmit(ID) {
        $.ajax({
                url: "http://localhost:8080/EBookMS/AuditLog/Update",
                type: "post",
                data: JSON.stringify({ "id": ID, "result": $('.resultAudit').val(), "opinion": $('#opinionAudit').val(), "auditor": $.cookie("ID") }),
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                success: function (data) {
                        if (data.code == 1 || data.code == 3) {
                                parent.UnAuditBookListLoad();
                                alert("审核成功");
                        } else if (data.code == 2 || data.code == 4) {
                                alert("审核失败，请重试");
                        }
                }

        });
}






//UnAuditBookList
//修改完成
function UnAuditBookListLoad() {
        layui.use('table', function () {
                var table = layui.table;
                table.render({
                        elem: '#UnBookDataTable'
                        , url: 'http://localhost:8080/EBookMS/Book/Select'
                        , where: { "selectType": "2", "opinion": { "opinion": "null" }, "isDelete": "0" }
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
                                , { fixed: 'right', width: 80, title: '操 作', align: 'center', toolbar: '#bar' }
                        ]]
                });

                //监听工具条
                table.on('tool(UnBookDataTable)', function (obj) {
                        var data = obj.data;
                        if (obj.event === 'audit') {
                                x_admin_show('审核图书', "unAuditBookList-Information.html?BookID=" + data.id);
                        }
                });


        });
}


//修改完成
function UnAuditBookListSelectSubmit() {
        var selectType = $('.search_class').val();
        var selectText = $('input[name="selectText"]').val();
        var isEnd = $('.isEnd').val();

        var jsonString;

        if (selectType == "01") {
                jsonString = {"isEnd":isEnd,"name":selectText,"selectType":2,"opinion":{"opinion":"null"}};
        } else if (selectType == "02") {
                jsonString = {"isEnd":isEnd,"author":selectText,"selectType":2,"opinion":{"opinion":"null"}};
        } else {
                jsonString = {"isEnd":isEnd,"selectType":2,"opinion":{"opinion":"null"}};
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



//DepartmentList
//修改完成
function DepartmentListLoad() {
        layui.use('table', function () {
                var table = layui.table;
                table.render({
                        elem: '#DepartmentDataTable'
                        , url: 'http://localhost:8080/EBookMS/Department/Select'
                        , where: { "id":"" }
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
                                , { field: 'name', title: '部门名称', align: 'center', width: 200,templet:"#nameInput"}
                                , { field: 'isClose', title: '开启状态', align: 'center', width: 100, templet: '#isCloseSwitch' }
                                , { fixed: 'right', width: 80, title: '操 作', align: 'center', toolbar: '#bar' }
                        ]]
                });

                //监听工具条
                table.on('tool(DepartmentDataTable)', function (obj) {
                        var data = obj.data;
                        if (obj.event === 'update') {
                                DepartmentListUpadateSubmit(data.id);
                        }
                });


        });
}


//修改完成
function DepartmentListUpadateSubmit(ID) {
        var isClose = $('input[name="isClose"]').is(':checked');
        if (isClose) { isClose = "1"; } else { isClose = "0" }
        $.ajax({
                url: "http://localhost:8080/EBookMS/Department/Update",
                type: "post",
                data: JSON.stringify({ "id": ID, "isClose": isClose, "name": $('input[name="departmentName"]').val() }),
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                success: function (data) {
                        if (data.code == 1 || data.code == 3) {
                                alert("修改成功");
                        } else if (data.code == 2 || data.code == 4) {
                                alert("修改失败，请重试");
                        }
                }

        });
}


//Department-Insert
//修改完成
function DepartmentInsert_Submit() {
        $.ajax({
                url: "http://localhost:8080/EBookMS/Department/Insert",
                type: "post",
                data: JSON.stringify({ "isClose": "0", "name": $('input[name="departmentName"]').val() }),
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                success: function (data) {
                        if (data.code == 1 || data.code == 3) {
                                parent.DepartmentListLoad();
                                alert("添加成功");
                        } else if (data.code == 2 || data.code == 4) {
                                alert("添加失败，请重试");
                        }
                }

        });
}




