package com.pojo;

import org.springframework.stereotype.Component;

@Component
public class UserInfo extends Info{

    private String ID;
    private String UName;            //用户名
    private String UEmail;           //邮箱
    private String UPassword;        //密码
    private String UHeadPortrait;    //头像路径




    public String getID() {
        return ID;
    }

    public void setID(String ID) {
        this.ID = ID;
    }

    public String getUName() {
        return UName;
    }

    public void setUName(String UName) {
        this.UName = UName;
    }

    public String getUEmail() {
        return UEmail;
    }

    public void setUEmail(String UEmail) {
        this.UEmail = UEmail;
    }

    public String getUPassword() {
        return UPassword;
    }

    public void setUPassword(String UPassword) {
        this.UPassword = UPassword;
    }

    public String getUHeadPortrait() {
        return UHeadPortrait;
    }

    public void setUHeadPortrait(String UHeadPortrait) {
        this.UHeadPortrait = UHeadPortrait;
    }
}
