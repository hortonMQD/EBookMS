package com.service;

import com.pojo.EmployeeInfo;

import java.util.List;

public interface EmployeeService {

    public List<EmployeeInfo> SelectEmployee(EmployeeInfo info);

    public boolean UpdateEmployee(EmployeeInfo info);

    public Boolean InsertEmployee(EmployeeInfo info);

    public boolean DeleteEmployee(EmployeeInfo info);

    public boolean login(EmployeeInfo info);

    public boolean UpdateEmployeePassword(String newPass,String oldPass,String ID);

}
