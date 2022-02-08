package com.dao;

import com.pojo.EmployeeIDMax;

import java.util.List;

public interface EmployeeIDMaxDao {

    public List<EmployeeIDMax> SelectEmployeeIDMax(EmployeeIDMax info);

    public int UpdateEmployeeIDMax(EmployeeIDMax info);

    public int DeleteEmployeeIDMax(EmployeeIDMax info);

    public int InsertEmployeeIDMax(EmployeeIDMax info);

}
