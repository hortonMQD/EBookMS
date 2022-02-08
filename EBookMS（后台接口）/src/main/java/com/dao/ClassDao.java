package com.dao;

import com.pojo.ClassInfo;

import java.util.List;


public interface ClassDao {

    public List<ClassInfo> SelectClass(ClassInfo info);

    public int UpdateClass(ClassInfo info);

    public int InsertClass(ClassInfo info);

    public int DeleteClass(ClassInfo info);


}
