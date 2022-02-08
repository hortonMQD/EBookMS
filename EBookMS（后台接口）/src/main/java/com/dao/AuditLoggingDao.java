package com.dao;

import com.pojo.AuditLogging;
import com.pojo.BookInfo;

import java.util.List;

public interface AuditLoggingDao {

    public List<AuditLogging> SelectAuditLogging(AuditLogging info);

    public int UpdateAuditLogging(AuditLogging info);

    public int InsertAuditLogging(BookInfo info);

    public int DeleteAuditLogging(AuditLogging info);

}
