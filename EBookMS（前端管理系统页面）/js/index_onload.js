function index_load() {
    setInterval("systemTime.innerHTML=new Date().toLocaleString()+' 星期'+'日一二三四五六'.charAt(new Date().getDay());",1000);
    employeeNameLoad();
    BookCount();
    UserCount();
    BookClassCount();
    DepartmentCount();
    
}


function employeeNameLoad() {
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
}


function BookCount() {
    $.ajax({
        url: "http://localhost:8080/EBookMS/Book/Select",
        type: "post",
        data: JSON.stringify({ "isDelete": "0", "selectType": "2" }),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.code == 1 || data.code == 3) {
                console.log(data.data.length);
                $('.uploadBookCount').text(data.count);
            } else {
                $('.uploadBookCount').text("接口异常");
            }
        }

    });
}



function UserCount() {
    $.ajax({
        url: "http://localhost:8080/EBookMS/User/Select",
        type: "post",
        data: JSON.stringify({ "isDelete": "0" }),
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



function BookClassCount() {
    $.ajax({
        url: "http://localhost:8080/EBookMS/Class/Select",
        type: "post",
        data: JSON.stringify({ "isClose": "0" }),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.code == 1 || data.code == 3) {
                $('.BookClassCount').text(data.count);
            } else {
                $('.BookClassCount').text("接口异常");
            }
        }

    });
}


function DepartmentCount() {
    $.ajax({
        url: "http://localhost:8080/EBookMS/Department/Select",
        type: "post",
        data: JSON.stringify({ "isClose": "0" }),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.code == 1 || data.code == 3) {
                $('.DepartmentCount').text(data.count);
            } else {
                $('.DepartmentCount').text("接口异常");
            }
        }

    });
}