package com.controller;


import com.pojo.AuditLogging;
import com.pojo.Result;
import com.pojo.ResultCode;
import com.pojo.ResultInfo;
import com.service.AuditLogService;
import com.util.ControllerUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/AuditLog")
@CrossOrigin
public class AuditLogController {

    @Autowired
    private AuditLogService auditLogService;

    @RequestMapping("/Update")
    public ResultInfo UpdateAuditLog(@RequestBody AuditLogging info){
        return ControllerUtil.returnResult(auditLogService.UpdateAuditLog(info));
    }

}
