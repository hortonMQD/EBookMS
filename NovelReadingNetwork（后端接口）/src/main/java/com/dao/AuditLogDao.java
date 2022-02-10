package com.dao;

import com.pojo.AuditLogInfo;

import java.util.List;

public interface AuditLogDao  extends DAO{

    public List<AuditLogInfo> Select(AuditLogInfo info);

    public int Update(AuditLogInfo info);

    public int Insert(AuditLogInfo info);

    public int Delete(AuditLogInfo info);


}
