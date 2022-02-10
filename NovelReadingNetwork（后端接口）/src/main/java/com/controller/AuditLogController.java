package com.controller;

import com.pojo.AuditLogInfo;
import com.pojo.Result;
import com.pojo.ResultInfo;
import com.service.AuditLogService;
import com.util.ControllerUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/AuditLog")
@CrossOrigin
public class AuditLogController {

    @Autowired
    private AuditLogService auditLogService;


    @RequestMapping("/Insert")
    public ResultInfo Insert(@RequestBody AuditLogInfo info){
        return ControllerUtil.returnResult(auditLogService.Insert(info));
    }


    @RequestMapping("/Select")
    public Result Select(@RequestBody AuditLogInfo info) {
        List<AuditLogInfo> result = new ArrayList<>();
        try{
            result = auditLogService.Select(info);
            return ControllerUtil.returnResult(result,true);
        }catch (Exception e){
            return ControllerUtil.returnResult(result,false);
        }
    }


    @RequestMapping("/Update")
    public ResultInfo Update(@RequestBody AuditLogInfo info){
        return ControllerUtil.returnResult(auditLogService.Update(info));
    }

}
