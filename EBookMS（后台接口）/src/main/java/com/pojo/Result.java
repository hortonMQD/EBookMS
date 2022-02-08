package com.pojo;

import java.io.Serializable;
import java.util.List;

public class Result implements Serializable {

    private int code;
    private String message;
    private int count;
    private List<?> data;

    public Result(ResultCode resultCode,List<?> data){
        this.code = resultCode.code();
        this.message = resultCode.message();
        this.data = data;
        this.count = data.size();
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public List<?> getData() {
        return data;
    }

    public void setData(List<?> data) {
        this.data = data;
    }
}
