package com.service.Impl;

import com.dao.BookDao;

import com.pojo.AuditLogging;
import com.pojo.BookInfo;

import com.service.AuditLogService;
import com.service.BookService;
import com.util.BasicUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import java.util.List;

@Service
public class BookServiceImpl implements BookService {

    @Autowired
    private BookDao bookDao;

    @Autowired
    private AuditLogService auditLogService;

    @Autowired
    private BookInfo bookInfo;

    @Override
    public List<BookInfo> SelectBook(BookInfo info) {
        return bookDao.SelectBookInfo(info);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean UpdateBook(BookInfo info) {
        try {
            return BasicUtil.isTrue(bookDao.UpdateBookInfo(info));
        } catch (Exception e) {
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            return false;
        }
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean InsertBook(BookInfo info) {
        try {
            int AuditLogResult = auditLogService.InsertAuditLog(bookInfo);
            if (BasicUtil.isTrue(AuditLogResult)) {
                info.setID(bookInfo.getID());
                return BasicUtil.isTrue(bookDao.InsertBookInfo(info));
            } else {
                TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
                return false;
            }

        } catch (Exception e) {
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            return false;
        }
    }


}
