package com.controller;


import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.pojo.AdministratorInfo;
import com.pojo.PersonalRoleInfo;
import com.pojo.Result;
import com.pojo.ResultInfo;
import com.service.AdministratorService;
import com.util.ControllerUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpSession;
import java.io.File;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/Administrator")
@CrossOrigin
public class AdministratorController {

    @Autowired
    private AdministratorService administratorService;

    @Autowired
    private PersonalRoleInfo roleInfo;

    @RequestMapping("/Insert")
    public ResultInfo Insert(@RequestBody AdministratorInfo info){
        return ControllerUtil.returnResult(administratorService.Insert(info));
    }


    @RequestMapping("/Select")
    public Result Select(@RequestBody AdministratorInfo info) {
        List<AdministratorInfo> result = new ArrayList<>();
        try{
            result = administratorService.Select(info);
            return ControllerUtil.returnResult(result,true);
        }catch (Exception e){
            return ControllerUtil.returnResult(result,false);
        }
    }


    @RequestMapping("/Update")
    public ResultInfo Update(@RequestParam("imageFile") MultipartFile imageFile, AdministratorInfo info, HttpSession session){
        try{

            if(!imageFile.isEmpty()){
                String ImagePath = session.getServletContext().getRealPath("/image/HeadPortrait");
                File SaveImagePath = new File(ImagePath);
                if(!SaveImagePath.exists()){
                    SaveImagePath.mkdirs();
                }
                File ImageSaveFile = new File(ImagePath,imageFile.getOriginalFilename());
                imageFile.transferTo(ImageSaveFile);
                info.setAHeadPortrait("http://localhost:8888/NRN/image/HeadPortrait/"+imageFile.getOriginalFilename());
            }

            if(info.getRoleID() != null){ roleInfo.setID(info.getRoleID());info.setARole(roleInfo); }
            return ControllerUtil.returnResult(administratorService.Update(info));
        }catch(Exception e){
            return ControllerUtil.returnResult(false);
        }
    }


    @RequestMapping("/UpdatePassword")
    public ResultInfo UpdatePassword(@RequestBody String JSONString){
        System.out.println(JSONString);
        return ControllerUtil.returnResult(ControllerUtil.updatePassword(JSONString,administratorService));
    }


    @RequestMapping("/Delete")
    public ResultInfo Delete(@RequestBody AdministratorInfo info){
        return ControllerUtil.returnResult(administratorService.Delete(info));
    }


    @RequestMapping("/Login")
    public ResultInfo LoginEmployee(@RequestBody AdministratorInfo info){
        return ControllerUtil.returnResult(administratorService.login(info));
    }

}
