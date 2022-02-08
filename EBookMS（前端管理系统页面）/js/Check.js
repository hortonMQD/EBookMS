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

function checkBookName()
{
    var message = document.getElementsByClassName("bookName")[0].value;
    if (message != "") {
        document.getElementsByClassName("bookName_error")[0].style.display = "none";
        document.getElementsByClassName("bookName_error")[0].style.visibility = "hidden";
        console.log("电子书名不为空");
    } else {
        document.getElementsByClassName("bookName_error")[0].style.display = "inline";
        document.getElementsByClassName("bookName_error")[0].style.visibility = "visible";
        console.log("电子书名为空");
    }
}

function checkBookAuthor()
{
    var message = document.getElementsByClassName("bookAuthor")[0].value;
    if (message != "") {
        document.getElementsByClassName("bookAuthor_error")[0].style.display = "none";
        document.getElementsByClassName("bookAuthor_error")[0].style.visibility = "hidden";
        console.log("作者不为空");
    } else {
        document.getElementsByClassName("bookAuthor_error")[0].style.display = "inline";
        document.getElementsByClassName("bookAuthor_error")[0].style.visibility = "visible";
        console.log("作者为空");
    }
}

function checkBookText()
{
    var message = document.getElementsByClassName("bookText")[0].value;
    if (message != "") {
        document.getElementsByClassName("bookText_error")[0].style.display = "none";
        document.getElementsByClassName("bookText_error")[0].style.visibility = "hidden";
        console.log("图书简介不为空");
    } else {
        document.getElementsByClassName("bookText_error")[0].style.display = "inline";
        document.getElementsByClassName("bookText_error")[0].style.visibility = "visible";
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