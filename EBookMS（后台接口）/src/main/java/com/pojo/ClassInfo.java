package com.pojo;

import org.springframework.stereotype.Component;

@Component
public class ClassInfo {
    private String ID;
    private String name;
    private String isClose;


    public String getIsClose() {
        return isClose;
    }

    public void setIsClose(String isClose) {
        this.isClose = isClose;
    }

    public String getID() {
        return ID;
    }

    public void setID(String ID) {
        this.ID = ID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    @Override
    public String toString() {
        return "ClassInfo{" +
                "ID='" + ID + '\'' +
                ", name='" + name + '\'' +
                ", isClose='" + isClose + '\'' +
                '}';
    }
}
