package com.service.Impl;


import com.alibaba.fastjson.JSON;
import com.dao.UserDao;
import com.pojo.UserInfo;
import com.service.UserService;
import com.util.BasicUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import java.util.List;

@Service("userService")
@Transactional(rollbackFor = Exception.class)
public class UserServiceImpl implements UserService {


    @Autowired
    UserDao userDao;

    private UserInfo userInfo;


    @Override
    public boolean login(UserInfo userInfo) {
        int result = userDao.SelectUser(userInfo).size();
        return BasicUtil.isTrue(result);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public Boolean InsertUser(UserInfo userInfo) {
        try{
            int result = userDao.InsertUser(userInfo);
            return BasicUtil.isTrue(result);
        }catch (Exception e){
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            return false;
        }

    }

    @Override
    public List<UserInfo> SelectUser(UserInfo userInfo) {
        return userDao.SelectUser(userInfo);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean UpdateUser(UserInfo userInfo) {
        try{
            int result = userDao.UpdateUser(userInfo);
            return BasicUtil.isTrue(result);
        }catch (Exception e){
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            return false;
        }

    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean DeleteUser(UserInfo userInfo) {
        try{
            int result = userDao.DeleteUser(userInfo);
            return BasicUtil.isTrue(result);
        }catch (Exception e){
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            return false;
        }

    }

    @Override
    public boolean UpdateUserPassword(String newPass, String oldPass, String ID) {
        userInfo.setID(ID);
        userInfo.setPassword(oldPass);
        if(userDao.SelectUser(userInfo).size() == 1){
            userInfo.setPassword(newPass);
            int result = userDao.UpdateUser(userInfo);
            if(result > 0){ return true; } else { return false; }
        }
        return false;
    }

}
