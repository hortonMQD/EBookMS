package com.util;

import com.dao.DAO;
import com.pojo.AuditLogInfo;
import com.pojo.Info;
import com.service.AuditLogService;
import org.springframework.transaction.interceptor.TransactionAspectSupport;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpSession;
import java.io.File;

public class ServiceUtil {

    public static boolean Delete(DAO dao, Info info){
        try{
            int result = dao.Delete(info);
            return BasicUtil.isTrue(result);
        }catch (Exception e){
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            return false;
        }
    }


    public static boolean Update(DAO dao,Info info){
        try{
            int result = dao.Update(info);
            return BasicUtil.isTrue(result);
        }catch (Exception e){
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            return false;
        }
    }



    public static boolean Insert(DAO dao,Info info){
        try{
            int result = dao.Insert(info);
            return BasicUtil.isTrue(result);
        }catch (Exception e){
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            return false;
        }
    }


    public static boolean InsertNovel_Chapter(DAO dao, Info info, AuditLogInfo auditLogInfo, String InsertType, AuditLogService auditLogService){
        try {
            auditLogInfo.setType(InsertType);
            if (auditLogService.Insert(auditLogInfo)) {
                info.setID(auditLogInfo.getID());
                info.setIsverify(auditLogInfo);
                return BasicUtil.isTrue(dao.Insert(info));
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
