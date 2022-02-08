package com.service.Impl;

import com.dao.EmployeeIDMaxDao;
import com.pojo.EmployeeIDMax;
import com.service.EmployeeIDMaxService;
import com.util.BasicUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import java.util.List;

@Service
public class EmployeeIDMaxServiceImpl implements EmployeeIDMaxService {

    @Autowired
    private EmployeeIDMaxDao employeeIDMaxDao;

    @Override
    public List<EmployeeIDMax> SelectEmployeeIDMax(EmployeeIDMax info) {
        return employeeIDMaxDao.SelectEmployeeIDMax(info);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean UpdateEmployeeIDMax(EmployeeIDMax info) {
        try{
            if(!BasicUtil.isTrue(employeeIDMaxDao.SelectEmployeeIDMax(info).size())){
                employeeIDMaxDao.InsertEmployeeIDMax(info);
            }
            return BasicUtil.isTrue(employeeIDMaxDao.UpdateEmployeeIDMax(info));
        }catch (Exception e){
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            return false;
        }
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean InsertEmployeeIDMax(EmployeeIDMax info) {
        return BasicUtil.isTrue(employeeIDMaxDao.InsertEmployeeIDMax(info));
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean DeleteEmployeeIDMax(EmployeeIDMax info) {
        return BasicUtil.isTrue(employeeIDMaxDao.DeleteEmployeeIDMax(info));
    }
}
