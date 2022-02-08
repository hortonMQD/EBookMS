package com.service;


import com.pojo.UserInfo;

import java.util.List;

public interface UserService {

    public boolean login(UserInfo info);

    public Boolean InsertUser(UserInfo info);

    public List<UserInfo> SelectUser(UserInfo info);

    public boolean UpdateUser(UserInfo info);

    public boolean DeleteUser(UserInfo info);

    public boolean UpdateUserPassword(String newPass,String oldPass,String ID);

}
