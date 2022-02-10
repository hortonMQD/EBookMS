package com.service;

import com.pojo.AuditLogInfo;

import java.util.List;

public interface AuditLogService {

    public Boolean Insert(AuditLogInfo info);

    public List<AuditLogInfo> Select(AuditLogInfo info);

    public boolean Update(AuditLogInfo info);

    public boolean Delete(AuditLogInfo info);

}
