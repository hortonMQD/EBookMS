package com.service.Impl;

import com.alibaba.fastjson.JSON;
import com.dao.AuditLoggingDao;
import com.pojo.AuditLogging;
import com.pojo.BookInfo;
import com.service.AuditLogService;
import com.util.BasicUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

@Service
public class AuditLogServiceImpl implements AuditLogService {

    @Autowired
    private AuditLoggingDao auditLoggingDao;

    @Override
    public String SelectAuditLog(AuditLogging info) {
        return JSON.toJSONString(auditLoggingDao.SelectAuditLogging(info));
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean UpdateAuditLog(AuditLogging info) {
        try{
            int result = auditLoggingDao.UpdateAuditLogging(info);
            return BasicUtil.isTrue(result);
        }catch (Exception e){
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            return false;
        }
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean DeleteAuditLog(AuditLogging info) {
        try{
            int result = auditLoggingDao.DeleteAuditLogging(info);
            return BasicUtil.isTrue(result);
        }catch (Exception e){
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            return false;
        }
    }

    @Override
    public int InsertAuditLog(BookInfo info) {
        return auditLoggingDao.InsertAuditLogging(info);
    }
}
