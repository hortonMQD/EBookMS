package com.service.Impl;


import com.dao.UserDao;
import com.pojo.UserInfo;
import com.service.UserService;
import com.util.BasicUtil;
import com.util.ServiceUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("userService")
@Transactional(rollbackFor = Exception.class)
public class UserServiceImpl implements UserService {


    @Autowired
    private UserDao userDao;

    @Autowired
    private UserInfo Info;


    @Override
    public boolean login(UserInfo Info) {
        int result = userDao.Select(Info).size();
        return BasicUtil.isTrue(result);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public Boolean Insert(UserInfo Info) {
//        try{
//            int result = userDao.Insert(Info);
//            return BasicUtil.isTrue(result);
//        }catch (Exception e){
//            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
//            return false;
//        }
        return ServiceUtil.Insert(userDao,Info);
    }

    @Override
    public List<UserInfo> Select(UserInfo Info) {
        return userDao.Select(Info);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean Update(UserInfo userInfo) {
//        try{
//            int result = userDao.Update(userInfo);
//            return BasicUtil.isTrue(result);
//        }catch (Exception e){
//            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
//            return false;
//        }
        return ServiceUtil.Update(userDao,userInfo);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean Delete(UserInfo userInfo) {
        return ServiceUtil.Delete(userDao,userInfo);
    }

    @Override
    public boolean UpdatePassword(String newPass, String oldPass, String ID) {
        Info.setID(ID);
        Info.setUPassword(oldPass);
        if(userDao.Select(Info).size() == 1){
            Info.setUPassword(newPass);
            int result = userDao.Update(Info);
            if(result > 0){ return true; } else { return false; }
        }
        return false;
    }

}
