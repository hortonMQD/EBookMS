package com.controller;


import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.pojo.Result;
import com.pojo.ResultInfo;
import com.pojo.UserInfo;
import com.service.UserService;
import com.util.ControllerUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpSession;
import java.io.File;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/User")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/Insert")
    public ResultInfo Insert(@RequestBody UserInfo info){
        return ControllerUtil.returnResult(userService.Insert(info));
    }


    @RequestMapping("/Select")
    public Result Select(@RequestBody UserInfo info) {
        List<UserInfo> result = new ArrayList<>();
        try{
            result = userService.Select(info);
            return ControllerUtil.returnResult(result,true);
        }catch (Exception e){
            return ControllerUtil.returnResult(result,false);
        }
    }


    @RequestMapping("/Update")
    public ResultInfo Update(@RequestParam("imageFile") MultipartFile imageFile, UserInfo info, HttpSession session){
        try{

            if(!imageFile.isEmpty()){
                String ImagePath = session.getServletContext().getRealPath("/image/HeadPortrait");
                File SaveImagePath = new File(ImagePath);
                if(!SaveImagePath.exists()){
                    SaveImagePath.mkdirs();
                }
                File ImageSaveFile = new File(ImagePath,imageFile.getOriginalFilename());
                imageFile.transferTo(ImageSaveFile);
                info.setUHeadPortrait("http://localhost:8888/NRN/image/HeadPortrait/"+imageFile.getOriginalFilename());
            }
            return ControllerUtil.returnResult(userService.Update(info));
        }catch(Exception e){
            return ControllerUtil.returnResult(false);
        }
    }


    @RequestMapping("/UpdatePassword")
    public ResultInfo UpdatePassword(@RequestBody String JSONString){
        return ControllerUtil.returnResult(ControllerUtil.updatePassword(JSONString,userService));
    }


    @RequestMapping("/Delete")
    public ResultInfo Delete(@RequestBody UserInfo info){
        return ControllerUtil.returnResult(userService.Delete(info));
    }


    @RequestMapping("/Login")
    public ResultInfo LoginEmployee(@RequestBody UserInfo info){
        return ControllerUtil.returnResult(userService.login(info));
    }


}
