package com.service;

import com.pojo.AuditLogging;
import com.pojo.BookInfo;

public interface AuditLogService {

    public String SelectAuditLog(AuditLogging info);

    public boolean UpdateAuditLog(AuditLogging info);

    public boolean DeleteAuditLog(AuditLogging info);

    public int InsertAuditLog(BookInfo info);

}
