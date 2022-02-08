package com.controller;

import com.alibaba.fastjson.JSON;
import com.pojo.BookInfo;
import com.pojo.Result;
import com.pojo.ResultInfo;
import com.service.BookService;
import com.util.ControllerUtil;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.util.List;


@RestController
@RequestMapping("/Book")
@CrossOrigin
public class BookController {

    @Autowired
    private BookService bookService;
    private final String string = "/Update";


    @RequestMapping("/Insert")
    public ResultInfo InsertBook(@RequestParam("imageFile")MultipartFile imageFile,@RequestParam("txtFile")MultipartFile txtFile, BookInfo info, HttpSession session) throws Exception{
        try{


            String TxtPath = session.getServletContext().getRealPath("/upload");
            File SaveFilePath = new File(TxtPath);
            if(!SaveFilePath.exists()){
                SaveFilePath.mkdirs();
            }
            File TxtSaveFile = new File(TxtPath,txtFile.getOriginalFilename());
            txtFile.transferTo(TxtSaveFile);
            String ImagePath = session.getServletContext().getRealPath("/image");
            File SaveImagePath = new File(ImagePath);
            if(!SaveImagePath.exists()){
                SaveImagePath.mkdirs();
            }
            File ImageSaveFile = new File(ImagePath,imageFile.getOriginalFilename());
            imageFile.transferTo(ImageSaveFile);


            info.setFileURL("http://localhost:8080/EBookMS/upload"+txtFile.getOriginalFilename());
            info.setFile(txtFile.getOriginalFilename());
            info.setImage(imageFile.getOriginalFilename());
            info.setImageURL("http://localhost:8080/EBookMS/image/"+imageFile.getOriginalFilename());


            return ControllerUtil.returnResult(bookService.InsertBook(info));
        }catch(Exception e){
            return ControllerUtil.returnResult(false);
        }
    }


    @RequestMapping("Update")
    public ResultInfo UpdateBook(@RequestBody BookInfo info){
        return ControllerUtil.returnResult(bookService.UpdateBook(info));
    }







    @RequestMapping("/Select")
    public Result SelectBook(@RequestBody BookInfo info) {
        List<BookInfo> result = bookService.SelectBook(info);
        return ControllerUtil.returnResult(result);
    }


}
