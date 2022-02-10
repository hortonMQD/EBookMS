package com.service;

import com.pojo.TypeInfo;

import java.util.List;

public interface TypeService {

    public Boolean Insert(TypeInfo info);

    public List<TypeInfo> Select(TypeInfo info);

    public boolean Update(TypeInfo info);

    public boolean Delete(TypeInfo info);

}
