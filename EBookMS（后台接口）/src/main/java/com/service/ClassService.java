package com.service;

import com.pojo.ClassInfo;

import java.util.List;

public interface ClassService {

    public List<ClassInfo> SelectClass(ClassInfo info);

    public boolean UpdataClass(ClassInfo info);

    public boolean DeleteClass(ClassInfo info);

    public boolean InsertClass(ClassInfo info);

}
