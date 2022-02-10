package com.pojo;

import com.util.BasicUtil;
import org.springframework.stereotype.Component;

@Component
public class TypeInfo extends Info{


    private String ID;
    private String name;          //类型名称
    private String time;          //创建时间


    public TypeInfo(){
        ID = BasicUtil.getID();
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

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }
}
