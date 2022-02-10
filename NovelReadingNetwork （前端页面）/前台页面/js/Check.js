function checkEmail()
{
    var check = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
    var message = document.getElementsByClassName("userEmail")[0].value;
    if (check.test(message) && message != "")
    {
        document.getElementsByClassName("email_error")[0].style.display = "none";
        document.getElementsByClassName("email_error")[0].style.visibility = "hidden";
        console.log("邮箱不为空且符合格式");
    } else {
        document.getElementsByClassName("email_error")[0].style.display = "inline";
        document.getElementsByClassName("email_error")[0].style.visibility = "visible";
        console.log("邮箱为空或不符合格式");
    }
}

function checkUserName()
{
    var message = document.getElementsByClassName("userName")[0].value;
    if (message != "") {
        document.getElementsByClassName("name_error")[0].style.display = "none";
        document.getElementsByClassName("name_error")[0].style.visibility = "hidden";
        console.log("用户名不为空");
    } else {
        document.getElementsByClassName("name_error")[0].style.display = "inline";
        document.getElementsByClassName("name_error")[0].style.visibility = "visible";
        console.log("用户名为空");
        
    }
}

function checkOldPwd() {
    var message = document.getElementsByClassName("oldPwd")[0].value;
    if (message != "") {
        document.getElementsByClassName("oldPwd_error")[0].style.display = "none";
        document.getElementsByClassName("oldPwd_error")[0].style.visibility = "hidden";
        console.log("原密码不为空");
    } else {
        document.getElementsByClassName("oldPwd_error")[0].style.display = "inline";
        document.getElementsByClassName("oldPwd_error")[0].style.visibility = "visible";
        console.log("原密码为空");
    }
}

function checkPwd()
{
    var message = document.getElementsByClassName("Pwd")[0].value;
    if (message != "") {
        document.getElementsByClassName("Pwd_error")[0].style.display = "none";
        document.getElementsByClassName("Pwd_error")[0].style.visibility = "hidden";
        console.log("新密码不为空");
        checkPwdIsEqual();
    } else {
        document.getElementsByClassName("Pwd_error")[0].style.display = "inline";
        document.getElementsByClassName("Pwd_error")[0].style.visibility = "visible";
        console.log("新密码为空");
    }
}

function checkPwdIsEqual()
{
    var pwd = document.getElementsByClassName("Pwd")[0].value;
    var repeatPwd = document.getElementsByClassName("RepeatPwd")[0].value;
    if (pwd == repeatPwd && repeatPwd == "") {
        document.getElementsByClassName("RepeatPwd_error")[0].style.display = "none";
        document.getElementsByClassName("RepeatPwd_error")[0].style.visibility = "hidden";
        console.log("两次密码输入不一致");
    } else {
        document.getElementsByClassName("RepeatPwd_error")[0].style.display = "inline";
        document.getElementsByClassName("RepeatPwd_error")[0].style.visibility = "visible";
        console.log("两次密码输入一致");
    }

}

function checkNovelName()
{
    var message = document.getElementsByClassName("NovelName")[0].value;
    if (message != "") {
        document.getElementsByClassName("NovelName_error")[0].style.display = "none";
        document.getElementsByClassName("NovelName_error")[0].style.visibility = "hidden";
        console.log("电子书名不为空");
    } else {
        document.getElementsByClassName("NovelName_error")[0].style.display = "inline";
        document.getElementsByClassName("NovelName_error")[0].style.visibility = "visible";
        console.log("电子书名为空");
    }
}

function checkNovelAuthor()
{
    var message = document.getElementsByClassName("NovelAuthor")[0].value;
    if (message != "") {
        document.getElementsByClassName("NovelAuthor_error")[0].style.display = "none";
        document.getElementsByClassName("NovelAuthor_error")[0].style.visibility = "hidden";
        console.log("作者不为空");
    } else {
        document.getElementsByClassName("NovelAuthor_error")[0].style.display = "inline";
        document.getElementsByClassName("NovelAuthor_error")[0].style.visibility = "visible";
        console.log("作者为空");
    }
}

function checkNovelText()
{
    var message = document.getElementsByClassName("NovelText")[0].value;
    if (message != "") {
        document.getElementsByClassName("NovelText_error")[0].style.display = "none";
        document.getElementsByClassName("NovelText_error")[0].style.visibility = "hidden";
        console.log("图书简介不为空");
    } else {
        document.getElementsByClassName("NovelText_error")[0].style.display = "inline";
        document.getElementsByClassName("NovelText_error")[0].style.visibility = "visible";
        console.log("图书简介为空");
    }
}


function checkOpinion()
{
    var message = document.getElementsByClassName("opinion")[0].value;
    if (message != "") {
        document.getElementsByClassName("opinion_error")[0].style.display = "none";
        document.getElementsByClassName("opinion_error")[0].style.visibility = "hidden";
        console.log("审核意见不为空");
    } else {
        document.getElementsByClassName("opinion_error")[0].style.display = "inline";
        document.getElementsByClassName("opinion_error")[0].style.visibility = "visible";
        console.log("审核意见为空");
    }
}



//AdministratorPassword
function UserPasswordCheck() {
    $.ajax({
            url: "http://localhost:8888/NRN/User/Select",
            type: "post",
            data: JSON.stringify({
                    "id": $.cookie("UserID"),
                    "upassword": $('input[name="oldPW"]').val()
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






function UserPasswordRepeatCheck() {
    if ($('input[name="newPW"]').val() != $('input[name="repeatPW"]').val()) { $("#PWRepeaatError").text("两次密码不一致"); }
    else { $("#PWRepeaatError").text(""); }
}




function AdministratorIDCheck() {
    $.ajax({
            url: "http://localhost:8888/NRN/Administrator/Select",
            type: "post",
            data: JSON.stringify({
                    "id": $('input[name="AdminID"]').val()
            }),
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (data) {
                    if (data.count > 0) {
                            $("#AdminIDError").text("当前用户名已被使用");
                    } else { $("#AdminIDError").text("当前用户名可以使用"); }
            }

    });
}