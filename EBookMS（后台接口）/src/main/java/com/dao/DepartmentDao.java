package com.dao;

import com.pojo.DepartmentInfo;

import java.util.List;

public interface DepartmentDao {

    public List<DepartmentInfo> SelectDepartment(DepartmentInfo info);

    public int UpdateDepartment(DepartmentInfo info);

    public int InsertDepartment(DepartmentInfo info);

    public int DeleteDepartment(DepartmentInfo info);

}
