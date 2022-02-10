package com.util;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;

import java.util.UUID;

public class BasicUtil {

    public static boolean isTrue(int result){
        if (result > 0){ return true; }
        return false;
    }

    public static String getID() {
        //生成唯一id
        String id= UUID.randomUUID().toString();
        //替换uuid中的"-"
        id=id.replace("-", "");
        return id;
    }





}
