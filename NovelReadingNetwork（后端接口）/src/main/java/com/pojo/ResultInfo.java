package com.pojo;


import java.io.Serializable;

public class ResultInfo implements Serializable {

    private int code;
    private String message;
    private Object data;

    public ResultInfo(ResultCode resultCode,Object data){
        this.code = resultCode.code();
        this.message = resultCode.message();
        this.data = data;
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

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }
}
