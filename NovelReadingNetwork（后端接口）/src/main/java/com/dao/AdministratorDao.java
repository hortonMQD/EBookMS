package com.dao;

import com.pojo.AdministratorInfo;

import java.util.List;

public interface AdministratorDao  extends DAO{

    public List<AdministratorInfo> Select(AdministratorInfo info);

    public int Update(AdministratorInfo info);

    public int Insert(AdministratorInfo info);

    public int Delete(AdministratorInfo info);

}
