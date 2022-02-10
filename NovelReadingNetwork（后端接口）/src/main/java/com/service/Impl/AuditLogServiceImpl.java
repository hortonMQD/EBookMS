package com.service.Impl;

import com.dao.AdministratorDao;
import com.dao.AuditLogDao;
import com.pojo.AuditLogInfo;
import com.service.AuditLogService;
import com.util.ServiceUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("auditLogService")
@Transactional(rollbackFor = Exception.class)
public class AuditLogServiceImpl implements AuditLogService {

    @Autowired
    private AuditLogDao auditLogDao;

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public Boolean Insert(AuditLogInfo info) {
        return ServiceUtil.Insert(auditLogDao,info);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public List<AuditLogInfo> Select(AuditLogInfo info) {
        return auditLogDao.Select(info);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean Update(AuditLogInfo info) {
        return ServiceUtil.Update(auditLogDao,info);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean Delete(AuditLogInfo info) {
        return ServiceUtil.Delete(auditLogDao,info);
    }
}
