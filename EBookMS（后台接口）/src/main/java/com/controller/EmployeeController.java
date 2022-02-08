package com.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.pojo.EmployeeInfo;
import com.pojo.Result;
import com.pojo.ResultCode;
import com.pojo.ResultInfo;
import com.service.EmployeeService;
import com.util.ControllerUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Employee")
@CrossOrigin
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;


    @RequestMapping("/Login")
    public ResultInfo LoginEmployee(@RequestBody EmployeeInfo info){
        return ControllerUtil.returnResult(employeeService.login(info));
    }


    @RequestMapping("/Select")
    public Result SelectEmployee(@RequestBody EmployeeInfo info){
        List<EmployeeInfo> result = employeeService.SelectEmployee(info);
        return ControllerUtil.returnResult(result);
    }


    @RequestMapping("/Insert")
    public ResultInfo InsertEmployee(@RequestBody EmployeeInfo info){
        return ControllerUtil.returnResult(employeeService.InsertEmployee(info));
    }


    @RequestMapping("/UpdatePassword")
    public ResultInfo UpdateEmployeePassword(@RequestBody String JSONString){
        JSONObject jsonObject = JSON.parseObject(JSONString);
        String newPassword = jsonObject.getString("newPassword");
        String oldPassword = jsonObject.getString("oldPassword");
        String employeeID = jsonObject.getString("employeeID");
        return ControllerUtil.returnResult(employeeService.UpdateEmployeePassword(newPassword, oldPassword, employeeID));
    }


    @RequestMapping("/Update")
    public ResultInfo UpdateEmployee(@RequestBody EmployeeInfo info){
        return ControllerUtil.returnResult(employeeService.UpdateEmployee(info));
    }


    @RequestMapping("/Delete")
    public ResultInfo DeleteEmployee(@RequestBody EmployeeInfo info){
        return ControllerUtil.returnResult(employeeService.DeleteEmployee(info));
    }



}
