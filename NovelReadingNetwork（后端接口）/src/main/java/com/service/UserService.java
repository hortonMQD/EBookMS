package com.service;


import com.pojo.UserInfo;

import java.util.List;

public interface UserService extends Service{

    public boolean login(UserInfo info);

    public Boolean Insert(UserInfo info);

    public List<UserInfo> Select(UserInfo info);

    public boolean Update(UserInfo info);

    public boolean Delete(UserInfo info);

    public boolean UpdatePassword(String newPass, String oldPass, String ID);

}
