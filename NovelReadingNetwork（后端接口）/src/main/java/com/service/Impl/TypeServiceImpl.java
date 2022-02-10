package com.service.Impl;

import com.dao.TypeDao;
import com.pojo.TypeInfo;
import com.service.TypeService;
import com.util.ServiceUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("typeService")
@Transactional(rollbackFor = Exception.class)
public class TypeServiceImpl implements TypeService {

    @Autowired
    private TypeDao typeDao;

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public Boolean Insert(TypeInfo info) {
        return ServiceUtil.Insert(typeDao,info);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public List<TypeInfo> Select(TypeInfo info) {
        return typeDao.Select(info);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean Update(TypeInfo info) {
        return ServiceUtil.Update(typeDao,info);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean Delete(TypeInfo info) {
        return ServiceUtil.Delete(typeDao,info);
    }
}
