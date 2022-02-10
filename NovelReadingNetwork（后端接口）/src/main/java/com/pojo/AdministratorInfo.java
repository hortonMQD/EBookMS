package com.pojo;

import org.springframework.stereotype.Component;

@Component
public class AdministratorInfo extends Info{

    private String ID;
    private String AName;                  //姓名
    private String ANickname;              //昵称
    private String AEmail;                 //邮箱
    private String ATelephone;             //联系电话
    private String APassword;              //密码
    private PersonalRoleInfo ARole;        //账号权限角色
    private String AHeadPortrait;          //头像路径
    private String RoleID;                 //权限编号


    public String getRoleID() {
        return RoleID;
    }

    public void setRoleID(String roleID) {
        RoleID = roleID;
    }

    public String getID() {
        return ID;
    }

    public void setID(String ID) {
        this.ID = ID;
    }

    public String getAName() {
        return AName;
    }

    public void setAName(String AName) {
        this.AName = AName;
    }

    public String getANickname() {
        return ANickname;
    }

    public void setANickname(String ANickname) {
        this.ANickname = ANickname;
    }

    public String getAEmail() {
        return AEmail;
    }

    public void setAEmail(String AEmail) {
        this.AEmail = AEmail;
    }

    public String getATelephone() {
        return ATelephone;
    }

    public void setATelephone(String ATelephone) {
        this.ATelephone = ATelephone;
    }

    public String getAPassword() {
        return APassword;
    }

    public void setAPassword(String APassword) {
        this.APassword = APassword;
    }

    public String getAHeadPortrait() {
        return AHeadPortrait;
    }

    public void setAHeadPortrait(String AHeadPortrait) {
        this.AHeadPortrait = AHeadPortrait;
    }

    public PersonalRoleInfo getARole() {
        return ARole;
    }

    public void setARole(PersonalRoleInfo ARole) {
        this.ARole = ARole;
    }
}
