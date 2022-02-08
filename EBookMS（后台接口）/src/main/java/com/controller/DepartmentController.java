package com.controller;

import com.pojo.DepartmentInfo;
import com.pojo.Result;
import com.pojo.ResultCode;
import com.pojo.ResultInfo;
import com.service.DepartmentService;
import com.util.ControllerUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/Department")
@CrossOrigin
public class DepartmentController {

    @Autowired
    private DepartmentService departmentService;

    @RequestMapping("/Select")
    public Result SelectUser(@RequestBody DepartmentInfo info) {
        List<DepartmentInfo> result = departmentService.SelectDepartment(info);
        return ControllerUtil.returnResult(result);
    }


    @RequestMapping("/Insert")
    public ResultInfo InsertClass(@RequestBody DepartmentInfo info){
        return ControllerUtil.returnResult(departmentService.InsertDepartment(info));
    }


    @RequestMapping("/Update")
    public ResultInfo UpdateClass(@RequestBody DepartmentInfo info){
        return ControllerUtil.returnResult(departmentService.UpdataDepartment(info));
    }


    @RequestMapping("/Delete")
    public ResultInfo DeleteClass(@RequestBody DepartmentInfo info){
        return ControllerUtil.returnResult(departmentService.DeleteDepartment(info));
    }

}
