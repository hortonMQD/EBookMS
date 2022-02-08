package com.service.Impl;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.dao.ClassDao;
import com.dao.UserDao;
import com.pojo.ClassInfo;
import com.pojo.UserInfo;
import com.service.ClassService;
import com.util.BasicUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import java.util.List;


@Service("classService")
public class ClassServiceImpl implements ClassService {

    @Autowired
    private ClassDao classDao;


    @Override
    public List<ClassInfo> SelectClass(ClassInfo info) {
        return classDao.SelectClass(info);
    }

    @Transactional(rollbackFor = Exception.class,propagation = Propagation.REQUIRED)
    @Override
    public boolean UpdataClass(ClassInfo info) {
        int result = classDao.UpdateClass(info);
        return BasicUtil.isTrue(result);
    }

    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public boolean DeleteClass(ClassInfo info) {
        try{
            int result = classDao.DeleteClass(info);
            return BasicUtil.isTrue(result);
        }catch (Exception e){
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            return false;
        }
    }

    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public boolean InsertClass(ClassInfo info) {
        try{
            int result = classDao.InsertClass(info);
            return BasicUtil.isTrue(result);
        }catch (Exception e){
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            return false;
        }

    }


}
