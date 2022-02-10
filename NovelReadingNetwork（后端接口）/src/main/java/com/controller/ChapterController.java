package com.controller;


import com.pojo.ChapterInfo;
import com.pojo.Result;
import com.pojo.ResultInfo;
import com.service.ChapterService;
import com.util.ControllerUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/Chapter")
@CrossOrigin
public class ChapterController {

    @Autowired
    private ChapterService chapterService;


    @RequestMapping("/Select")
    public Result Select(@RequestBody ChapterInfo info) {
        List<ChapterInfo> result = new ArrayList<>();
        try{
            result = chapterService.Select(info);
            return ControllerUtil.returnResult(result,true);
        }catch (Exception e){
            return ControllerUtil.returnResult(result,false);
        }
    }

    @RequestMapping("/SelectChapterList")
    public Result SelectChapterList(@RequestBody ChapterInfo info) {
        List<ChapterInfo> result = new ArrayList<>();
        try{
            result = chapterService.SelectChapterList(info);
            return ControllerUtil.returnResult(result,true);
        }catch (Exception e){
            return ControllerUtil.returnResult(result,false);
        }
    }


    @RequestMapping("/Update")
    public ResultInfo Update(@RequestBody ChapterInfo info){
        return ControllerUtil.returnResult(chapterService.Update(info));
    }

    @RequestMapping("/Insert")
    public ResultInfo Insert(@RequestBody ChapterInfo info){
        return ControllerUtil.returnResult(chapterService.Insert(info));
    }


}
