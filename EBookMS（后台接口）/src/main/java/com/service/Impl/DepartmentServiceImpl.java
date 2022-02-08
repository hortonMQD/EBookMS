package com.service.Impl;

import com.alibaba.fastjson.JSON;
import com.dao.DepartmentDao;
import com.pojo.DepartmentInfo;
import com.service.DepartmentService;
import com.util.BasicUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import java.util.List;

@Transactional(rollbackFor = Exception.class)
@Service("departmentService")
public class DepartmentServiceImpl implements DepartmentService {

    @Autowired
    private DepartmentDao departmentDao;

    @Override
    public List<DepartmentInfo> SelectDepartment(DepartmentInfo info) {
        return departmentDao.SelectDepartment(info);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean UpdataDepartment(DepartmentInfo info) {
        try{
            int result = departmentDao.UpdateDepartment(info);
            return BasicUtil.isTrue(result);
        }catch (Exception e){
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            return false;
        }

    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean DeleteDepartment(DepartmentInfo info) {
        try{
            int result = departmentDao.DeleteDepartment(info);
            return BasicUtil.isTrue(result);
        }catch (Exception e){
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            return false;
        }

    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean InsertDepartment(DepartmentInfo info) {
        try{
            int result = departmentDao.InsertDepartment(info);
            return BasicUtil.isTrue(result);
        }catch (Exception e){
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            return false;
        }

    }
}
