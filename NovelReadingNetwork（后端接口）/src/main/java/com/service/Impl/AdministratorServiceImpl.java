package com.service.Impl;

import com.dao.AdministratorDao;
import com.pojo.AdministratorInfo;
import com.service.AdministratorService;
import com.util.BasicUtil;
import com.util.ServiceUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("administratorService")
@Transactional(rollbackFor = Exception.class)
public class AdministratorServiceImpl implements AdministratorService {

    @Autowired
    private AdministratorDao administratorDao;

    @Autowired
    private AdministratorInfo administratorInfo;

    @Override
    public boolean login(AdministratorInfo info) {
        return BasicUtil.isTrue(administratorDao.Select(info).size());
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public Boolean Insert(AdministratorInfo info) {
        return ServiceUtil.Insert(administratorDao,info);
    }

    @Override
    public List<AdministratorInfo> Select(AdministratorInfo info) {
        return administratorDao.Select(info);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean Update(AdministratorInfo info) {
        return ServiceUtil.Update(administratorDao,info);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean Delete(AdministratorInfo info) {
        return ServiceUtil.Delete(administratorDao,info);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean UpdatePassword(String newPass, String oldPass, String ID) {
        administratorInfo.setID(ID);
        administratorInfo.setAPassword(oldPass);
        if(administratorDao.Select(administratorInfo).size() == 1){
            administratorInfo.setAPassword(newPass);
            int result = administratorDao.Update(administratorInfo);
            if(result > 0){ return true; } else { return false; }
        }
        return false;
    }
}
