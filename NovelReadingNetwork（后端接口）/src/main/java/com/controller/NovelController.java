package com.controller;

import com.pojo.NovelInfo;
import com.pojo.Result;
import com.pojo.ResultInfo;
import com.service.NovelService;
import com.util.ControllerUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpSession;
import java.io.File;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/Novel")
@CrossOrigin
public class NovelController {

    @Autowired
    private NovelService novelService;


    @RequestMapping("/Select")
    public Result Select(@RequestBody NovelInfo info) {
        List<NovelInfo> result = new ArrayList<>();
        try{
            result = novelService.Select(info);
            return ControllerUtil.returnResult(result,true);
        }catch (Exception e){
            return ControllerUtil.returnResult(result,false);
        }
    }

    @RequestMapping("/ReviewsTheNovel")
    public Result ReviewsTheNovel(@RequestBody NovelInfo info) {
        List<NovelInfo> result = new ArrayList<>();
        try{
            result = novelService.Select(info);
            return ControllerUtil.returnResult(result,true);
        }catch (Exception e){
            return ControllerUtil.returnResult(result,false);
        }
    }


    @RequestMapping("/SelectUpdateNovelChapter")
    public Result SelectUpdateNovelChapter(@RequestBody NovelInfo info) {
        List<NovelInfo> result = new ArrayList<>();
        try{
            result = novelService.SelectUpdateNovelChapter(info);
            return ControllerUtil.returnResult(result,true);
        }catch (Exception e){
            return ControllerUtil.returnResult(result,false);
        }
    }

    @RequestMapping("/Update")
    public ResultInfo Update(@RequestParam("imageFile")MultipartFile imageFile, NovelInfo info, HttpSession session) throws Exception{
        try{
            String ImagePath = session.getServletContext().getRealPath("image/cover");
            File SaveImagePath = new File(ImagePath);
            if(!SaveImagePath.exists()){
                SaveImagePath.mkdirs();
            }
            File ImageSaveFile = new File(ImagePath,imageFile.getOriginalFilename());
            imageFile.transferTo(ImageSaveFile);
            info.setCoverUrl("http://localhost:8888/NRN/image/cover/"+imageFile.getOriginalFilename());
            return ControllerUtil.returnResult(novelService.Update(info));
        }catch(Exception e){
            return ControllerUtil.returnResult(false);
        }
    }


    @RequestMapping("/Insert")
    public ResultInfo Insert(@RequestParam("imageFile")MultipartFile imageFile, NovelInfo info, HttpSession session) throws Exception{
        try{
            String ImagePath = session.getServletContext().getRealPath("/image/cover");
            File SaveImagePath = new File(ImagePath);
            if(!SaveImagePath.exists()){
                SaveImagePath.mkdirs();
            }
            File ImageSaveFile = new File(ImagePath,imageFile.getOriginalFilename());
            imageFile.transferTo(ImageSaveFile);
            //info.setImage(imageFile.getOriginalFilename());    //获取文件名称
            info.setCoverUrl("http://localhost:8888/NRN/image/cover/"+imageFile.getOriginalFilename());
            return ControllerUtil.returnResult(novelService.Insert(info));
        }catch(Exception e){
            return ControllerUtil.returnResult(false);
        }
    }


}
