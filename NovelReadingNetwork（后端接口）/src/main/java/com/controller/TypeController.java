package com.controller;


import com.pojo.Result;
import com.pojo.ResultInfo;
import com.pojo.TypeInfo;
import com.service.TypeService;
import com.util.ControllerUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/Type")
@CrossOrigin
public class TypeController {

    @Autowired
    private TypeService typeService;

    @RequestMapping("/Delete")
    public ResultInfo Delete(@RequestBody TypeInfo info){
        return ControllerUtil.returnResult(typeService.Delete(info));
    }

    @RequestMapping("/Insert")
    public ResultInfo Insert(@RequestBody TypeInfo info){
        return ControllerUtil.returnResult(typeService.Insert(info));
    }


    @RequestMapping("/Select")
    public Result Select(@RequestBody TypeInfo info) {
        List<TypeInfo> result = new ArrayList<>();
        try{
            result = typeService.Select(info);
            return ControllerUtil.returnResult(result,true);
        }catch (Exception e){
            return ControllerUtil.returnResult(result,false);
        }
    }


    @RequestMapping("/Update")
    public ResultInfo Update(@RequestBody TypeInfo info){
        return ControllerUtil.returnResult(typeService.Update(info));
    }

}
