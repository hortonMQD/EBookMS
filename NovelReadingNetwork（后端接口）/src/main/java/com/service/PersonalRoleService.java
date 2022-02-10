package com.service;

import com.pojo.PersonalRoleInfo;

import java.util.List;

public interface PersonalRoleService {

    public Boolean Insert(PersonalRoleInfo info);

    public List<PersonalRoleInfo> Select(PersonalRoleInfo info);

    public boolean Update(PersonalRoleInfo info);

    public boolean Delete(PersonalRoleInfo info);


}
