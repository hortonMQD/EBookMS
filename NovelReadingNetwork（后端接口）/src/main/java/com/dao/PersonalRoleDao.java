package com.dao;

import com.pojo.PersonalRoleInfo;

import java.util.List;

public interface PersonalRoleDao extends DAO{

    public List<PersonalRoleInfo> Select(PersonalRoleInfo info);

    public int Update(PersonalRoleInfo info);

    public int Insert(PersonalRoleInfo info);

    public int Delete(PersonalRoleInfo info);

}
