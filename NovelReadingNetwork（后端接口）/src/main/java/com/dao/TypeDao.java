package com.dao;

import com.pojo.TypeInfo;

import java.util.List;

public interface TypeDao  extends DAO{

    public List<TypeInfo> Select(TypeInfo info);

    public int Update(TypeInfo info);

    public int Insert(TypeInfo info);

    public int Delete(TypeInfo info);

}
