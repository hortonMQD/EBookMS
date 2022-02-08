package com.dao;


import com.pojo.UserInfo;
import java.util.List;


public interface UserDao {

    public List<UserInfo> SelectUser(UserInfo info);

    public int UpdateUser(UserInfo info);

    public int InsertUser(UserInfo info);

    public int DeleteUser(UserInfo info);

}
