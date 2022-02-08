package com.service;

import com.pojo.DepartmentInfo;

import java.util.List;

public interface DepartmentService {

    public List<DepartmentInfo> SelectDepartment(DepartmentInfo info);

    public boolean UpdataDepartment(DepartmentInfo info);

    public boolean DeleteDepartment(DepartmentInfo info);

    public boolean InsertDepartment(DepartmentInfo info);

}
