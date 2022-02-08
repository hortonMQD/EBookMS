package com.service.Impl;

import com.dao.EmployeeDao;
import com.pojo.EmployeeIDMax;
import com.pojo.EmployeeInfo;
import com.service.EmployeeIDMaxService;
import com.service.EmployeeService;
import com.util.BasicUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import java.util.List;


@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeDao employeeDao;

    @Autowired
    private EmployeeInfo employeeInfo;

    @Override
    public List<EmployeeInfo> SelectEmployee(EmployeeInfo info) {
        return employeeDao.SelectEmployee(info);
    }

    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public boolean UpdateEmployee(EmployeeInfo info) {
        return BasicUtil.isTrue(employeeDao.UpdateEmployee(info));
    }

    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public Boolean InsertEmployee(EmployeeInfo info) {
        try{
            return BasicUtil.isTrue(employeeDao.InsertEmployee(info));
        }catch (Exception e){
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            return false;
        }
    }


    @Transactional(propagation = Propagation.REQUIRED)
    @Override
    public boolean DeleteEmployee(EmployeeInfo info) {
        try{
            return BasicUtil.isTrue(employeeDao.DeleteEmployee(info));
        }catch (Exception e){
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            return false;
        }
    }

    @Override
    public boolean login(EmployeeInfo info) {
        return BasicUtil.isTrue(employeeDao.SelectEmployee(info).size());
    }

    @Override
    public boolean UpdateEmployeePassword(String newPass, String oldPass, String ID) {
        employeeInfo.setID(ID);
        employeeInfo.setPassword(oldPass);
        if(employeeDao.SelectEmployee(employeeInfo).size() == 1){
            employeeInfo.setPassword(newPass);
            return BasicUtil.isTrue(employeeDao.UpdateEmployee(employeeInfo));
        }
        return false;
    }
}
