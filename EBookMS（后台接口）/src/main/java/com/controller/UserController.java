package com.controller;


import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.pojo.Result;
import com.pojo.ResultCode;
import com.pojo.ResultInfo;
import com.pojo.UserInfo;
import com.service.UserService;
import com.util.ControllerUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/User")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/Insert")
    public ResultInfo InsertUser(@RequestBody UserInfo info){
        return ControllerUtil.returnResult(userService.InsertUser(info));
    }


    @RequestMapping("/Select")
    public Result SelectUser(@RequestBody UserInfo info) {
        List<UserInfo> result = userService.SelectUser(info);
        return ControllerUtil.returnResult(result);
    }


    @RequestMapping("/Update")
    public ResultInfo UpdateUser(@RequestBody UserInfo info){
        return ControllerUtil.returnResult(userService.UpdateUser(info));
    }


    @RequestMapping("/UpdatePassword")
    public ResultInfo UpdateEmployeePassword(@RequestBody String JSONString){
        JSONObject jsonObject = JSON.parseObject(JSONString);
        String newPassword = jsonObject.getString("newPassword");
        String oldPassword = jsonObject.getString("oldPassword");
        String employeeID = jsonObject.getString("userID");
        return ControllerUtil.returnResult(userService.UpdateUserPassword(newPassword, oldPassword, employeeID));
    }


    @RequestMapping("/Delete")
    public ResultInfo DeleteUser(@RequestBody UserInfo info){
        return ControllerUtil.returnResult(userService.DeleteUser(info));
    }


    @RequestMapping("/Login")
    public ResultInfo LoginEmployee(@RequestBody UserInfo info){
        return ControllerUtil.returnResult(userService.login(info));
    }


}
