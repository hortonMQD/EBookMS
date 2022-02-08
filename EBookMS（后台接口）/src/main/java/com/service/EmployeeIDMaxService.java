package com.service;

import com.pojo.EmployeeIDMax;

import java.util.List;

public interface EmployeeIDMaxService {

    public List<EmployeeIDMax> SelectEmployeeIDMax(EmployeeIDMax info);

    public boolean UpdateEmployeeIDMax(EmployeeIDMax info);

    public boolean InsertEmployeeIDMax(EmployeeIDMax info);

    public boolean DeleteEmployeeIDMax(EmployeeIDMax info);

}
