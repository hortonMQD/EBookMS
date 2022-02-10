package com.controller;

import com.pojo.PersonalRoleInfo;
import com.pojo.Result;
import com.pojo.ResultInfo;
import com.service.PersonalRoleService;
import com.util.ControllerUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/PersonalRole")
@CrossOrigin
public class PersonalRoleController {

    @Autowired
    private PersonalRoleService personalRoleService;

    @RequestMapping("/Delete")
    public ResultInfo Delete(@RequestBody PersonalRoleInfo info){
        return ControllerUtil.returnResult(personalRoleService.Delete(info));
    }

    @RequestMapping("/Insert")
    public ResultInfo Insert(@RequestBody PersonalRoleInfo info){
        return ControllerUtil.returnResult(personalRoleService.Insert(info));
    }


    @RequestMapping("/Select")
    public Result Select(@RequestBody PersonalRoleInfo info) {
        List<PersonalRoleInfo> result = new ArrayList<>();
        try{
            result = personalRoleService.Select(info);
            return ControllerUtil.returnResult(result,true);
        }catch (Exception e){
            return ControllerUtil.returnResult(result,false);
        }
    }


    @RequestMapping("/Update")
    public ResultInfo Update(@RequestBody PersonalRoleInfo info){
        return ControllerUtil.returnResult(personalRoleService.Update(info));
    }

}
