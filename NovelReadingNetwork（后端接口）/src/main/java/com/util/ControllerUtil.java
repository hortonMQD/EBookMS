package com.util;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.pojo.Info;
import com.pojo.Result;
import com.pojo.ResultCode;
import com.pojo.ResultInfo;
import com.service.Service;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpSession;
import java.io.File;
import java.util.List;

public class ControllerUtil {

    public static ResultInfo returnResult(boolean result){
        if (result){  return new ResultInfo(ResultCode.SUCCESS,true); }
        return new ResultInfo(ResultCode.FAIL,false);
    }



    public static Result returnResult(List<?> result,boolean Error){
        if (Error){
            return new Result(ResultCode.SELECT_SUCCESS, result);
        }else{
            return new Result(ResultCode.FAIL, result);
        }
    }


    public static Boolean updatePassword(String JSONString, Service service){
        JSONObject jsonObject = JSON.parseObject(JSONString);
        String newPassword = jsonObject.getString("newPass");
        String oldPassword = jsonObject.getString("oldPass");
        String userID = jsonObject.getString("id");
        return service.UpdatePassword(newPassword, oldPassword, userID);
    }



}
