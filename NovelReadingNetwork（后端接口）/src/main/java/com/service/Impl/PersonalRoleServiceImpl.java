package com.service.Impl;

import com.dao.PersonalRoleDao;
import com.pojo.PersonalRoleInfo;
import com.service.PersonalRoleService;
import com.util.ServiceUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("personalRoleService")
@Transactional(rollbackFor = Exception.class)
public class PersonalRoleServiceImpl implements PersonalRoleService {

    @Autowired
    private PersonalRoleDao personalRoleDao;



    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public Boolean Insert(PersonalRoleInfo info) {
        return ServiceUtil.Insert(personalRoleDao,info);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public List<PersonalRoleInfo> Select(PersonalRoleInfo info) {
        return personalRoleDao.Select(info);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean Update(PersonalRoleInfo info) {
        return ServiceUtil.Update(personalRoleDao,info);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean Delete(PersonalRoleInfo info) {
        return ServiceUtil.Delete(personalRoleDao,info);
    }
}
