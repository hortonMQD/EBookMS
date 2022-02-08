package com.dao;

import com.pojo.EmployeeInfo;

import java.util.List;

public interface EmployeeDao {

    public List<EmployeeInfo> SelectEmployee(EmployeeInfo info);

    public int UpdateEmployee(EmployeeInfo info);

    public int DeleteEmployee(EmployeeInfo info);

    public int InsertEmployee(EmployeeInfo info);

}
