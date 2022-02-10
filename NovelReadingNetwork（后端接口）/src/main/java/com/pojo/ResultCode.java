package com.pojo;

public enum ResultCode{

    SUCCESS(1,"成功"),FAIL(2,"失败"),SELECT_SUCCESS(3,"查询成功"),SELECT_FAIL(4,"查询失败");

    private int code;
    private String message;

    ResultCode(int code,String message){
        this.code = code;
        this.message = message;
    }

    public int code() {
        return this.code;
    }

    public String message(){
        return this.message;
    }


}
