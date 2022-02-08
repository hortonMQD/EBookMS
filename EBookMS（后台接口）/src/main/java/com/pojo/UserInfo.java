package com.pojo;


import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UserInfo {
    private String ID;
    private String userID;
    private String email;
    private String password;
    private String isOnline;
    private String loginTime;
    private String isDelete;

    private List<BookInfo> bookInfoList;


    public List<BookInfo> getBookInfoList() {
        return bookInfoList;
    }

    public void setBookInfoList(List<BookInfo> bookInfoList) {
        this.bookInfoList = bookInfoList;
    }

    public String getIsDelete() {
        return isDelete;
    }

    public void setIsDelete(String isDelete) {
        this.isDelete = isDelete;
    }

    public String getID() {
        return ID;
    }

    public void setID(String ID) {
        this.ID = ID;
    }

    public String getUserID() {
        return userID;
    }

    public void setUserID(String userID) {
        this.userID = userID;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }


    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getIsOnline() {
        return isOnline;
    }

    public void setIsOnline(String isOnline) {
        this.isOnline = isOnline;
    }

    public String getLoginTime() {
        return loginTime;
    }

    public void setLoginTime(String loginTime) {
        this.loginTime = loginTime;
    }

}
