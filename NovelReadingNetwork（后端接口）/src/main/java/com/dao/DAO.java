package com.dao;

import com.pojo.Info;

import java.util.List;

public interface DAO {

    List<Info> Select(Info info);

    public int Update(Info info);

    public int Insert(Info info);

    public int Delete(Info info);

}
