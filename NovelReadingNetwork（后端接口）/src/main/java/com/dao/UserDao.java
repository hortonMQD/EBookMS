package com.dao;


import com.pojo.UserInfo;

import java.util.List;


public interface UserDao extends DAO{

    public List<UserInfo> Select(UserInfo info);

    public int Update(UserInfo info);

    public int Insert(UserInfo info);

    public int Delete(UserInfo info);

}
