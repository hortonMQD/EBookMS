package com.controller;


import com.pojo.ClassInfo;
import com.pojo.Result;
import com.pojo.ResultCode;
import com.pojo.ResultInfo;
import com.service.ClassService;
import com.util.ControllerUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/Class")
@CrossOrigin
public class ClassController {

    @Autowired
    private ClassService classService;



    @RequestMapping("/Select")
    public Result SelectUser(@RequestBody ClassInfo info) {
        List<ClassInfo> result = classService.SelectClass(info);
        return ControllerUtil.returnResult(result);
    }


    @RequestMapping("/Insert")
    public ResultInfo InsertClass(@RequestBody ClassInfo info){
        return ControllerUtil.returnResult(classService.InsertClass(info));
    }


    @RequestMapping("/Update")
    public ResultInfo UpdateClass(@RequestBody ClassInfo info){
        return ControllerUtil.returnResult(classService.UpdataClass(info));
    }


    @RequestMapping("/Delete")
    public ResultInfo DeleteClass(@RequestBody ClassInfo info){
        return ControllerUtil.returnResult(classService.DeleteClass(info));
    }


}
