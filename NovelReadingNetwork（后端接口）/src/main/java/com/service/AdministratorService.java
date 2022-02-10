package com.service;

import com.pojo.AdministratorInfo;

import java.util.List;

public interface AdministratorService extends Service{

    public boolean login(AdministratorInfo info);

    public Boolean Insert(AdministratorInfo info);

    public List<AdministratorInfo> Select(AdministratorInfo info);

    public boolean Update(AdministratorInfo info);

    public boolean Delete(AdministratorInfo info);

    public boolean UpdatePassword(String newPass, String oldPass, String ID);

}
