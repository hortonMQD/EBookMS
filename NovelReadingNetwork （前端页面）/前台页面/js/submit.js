//修改完成
function AdministratorPasswordSubmit() {
        if ($("#PWRepeaatError").text().length == 0 && $("#passwordError").text().length == 0) {
                $.ajax({
                        url: "http://localhost:8888/NRN/User/UpdatePassword",
                        type: "post",
                        data: JSON.stringify({
                                "id": $.cookie("UserID"),
                                "oldPass": $('input[name="oldPW"]').val(),
                                "newPass": $('input[name="repeatPW"]').val()
                        }),
                        contentType: "application/json;charset=utf-8",
                        dataType: "json",
                        success: function (data) {
                                if (data.code == 1 || data.code == 3) {
                                        alert("操作成功");
                                        $('input[name="oldPW"]').text("");
                                        $('input[name="newPW"]').text("");
                                        $('input[name="repeatPW"]').text("");
                                        $.cookie("UserID", null, { path: '/' });
                                        var address = "../login.html";
                                        parent.window.location.href = address;
                                } else {
                                        alert("操作失败，请重试");
                                        // $('input[name="oldPW"]').text("");
                                        // $('input[name="newPW"]').text("");
                                        // $('input[name="repeatPW"]').text("");
                                }
                        }

                });
        } else {
                alert("密码输入错误，请重试");
        }

}



function AdminInsertSubmit() {
        var jsonString = JSON.stringify({
                "id": $('input[name="AdminID"]').val(),
                "aname": $('input[name="adminName"]').val(),
                "aemail": $('input[name="adminEmail"]').val(),
                "atelephone": $('input[name="adminPhone"]').val(),
                "arole": { "id": $('.adminLimit').val() },
                "aheadPortrait": "http://localhost:8888/NRN/image/HeadPortrait/moren_HeadPortrait.jpeg"
        })
        console.log(jsonString)
        if ($("#AdminIDError").text() == "当前用户名可以使用") {
                $.ajax({
                        url: "http://localhost:8888/NRN/Administrator/Insert",
                        type: "post",
                        data: jsonString,
                        contentType: "application/json;charset=utf-8",
                        dataType: "json",
                        success: function (data) {
                                if (data.code == 1 || data.code == 3) {
                                        alert('添加成功');
                                        //parent.AdministratorListLoad();
                                } else {
                                        alert('添加失败，请重试');
                                }
                        }

                });
        }

}

function TypeInsertSubmit() {
        var jsonString = JSON.stringify({
                "name": $('input[name="typeName"]').val()
        })
        $.ajax({
                url: "http://localhost:8888/NRN/Type/Insert",
                type: "post",
                data: jsonString,
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                success: function (data) {
                        if (data.code == 1 || data.code == 3) {
                                alert('添加成功');
                                parent.loadTypeListDateTable();
                                x_admin_close()
                        } else {
                                alert('添加失败，请重试');
                        }
                }

        });

}



function NovelAuditSubmit(){
        var jsonString = JSON.stringify({
                "auditor": {"id":$.cookie("AdminID")},
                "opinion": $('textarea[name="AuditOpinion"]').val(),
                "result": $('select[name="AuditResult"]').val(),
                "id":$('input[name="AuditID"]').val()
        })
        $.ajax({
                url: "http://localhost:8888/NRN/AuditLog/Update",
                type: "post",
                data: jsonString,
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                success: function (data) {
                        if (data.code == 1 || data.code == 3) {
                                alert('审核成功');

                                parent.loadUnNovelListDateTable(JSON.stringify({ "id":"","isverify": { "opinion": "null" } }));
                                x_admin_close()
                        } else {
                                alert('操作失败，请重试');
                        }
                }

        });
}



function ChapterAuditSubmit(){
        var jsonString = JSON.stringify({
                "auditor": {"id":$.cookie("AdminID")},
                "opinion": $('textarea[name="AuditOpinion"]').val(),
                "result": $('select[name="AuditResult"]').val(),
                "id":$('input[name="AuditID"]').val()
        })
        $.ajax({
                url: "http://localhost:8888/NRN/AuditLog/Update",
                type: "post",
                data: jsonString,
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                success: function (data) {
                        if (data.code == 1 || data.code == 3) {
                                alert('审核成功');
                                if(getQueryVariable("NovelTab") != "1"){

                                }else{
                                        parent.loadNovel_ChapterDataTable();
                                }
                                
                                
                                x_admin_close()
                        } else {
                                alert('操作失败，请重试');
                        }
                }

        });
}