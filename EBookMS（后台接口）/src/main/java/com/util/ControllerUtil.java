package com.util;

import com.pojo.Result;
import com.pojo.ResultCode;
import com.pojo.ResultInfo;

import java.util.List;

public class ControllerUtil {

    public static ResultInfo returnResult(boolean result){
        if (result){  return new ResultInfo(ResultCode.SUCCESS,true); }
        return new ResultInfo(ResultCode.FAIL,false);
    }



    public static Result returnResult(List<?> result){
        if (result != null && result.size() > 0){
            return new Result(ResultCode.SELECT_SUCCESS, result);
        }else{
            return new Result(ResultCode.FAIL, result);
        }
    }

}
