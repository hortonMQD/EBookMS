package com.pojo;

import org.springframework.stereotype.Component;

@Component
public class BookInfo{
    private String ID;      //图书表主键，在执行图书插入操作时，该字段作为审核意见表主键使用
    private String image;
    private String imageURL;
    private String file;
    private String fileURL;
    private String name;
    private String author;
    private String text;
    private String downloadCount;
    private String isEnd;
    private String classID;
    private String classNumber;
    private String uploadTime;
    private String uploadUser;
    private AuditLogging opinion;
    private String isDelete;


    /*
    1: 按下载次数降序查询
    2: 按上传时间降序查询
     */
    private String SelectType;


    public String getClassNumber() {
        return classNumber;
    }

    public void setClassNumber(String classNumber) {
        this.classNumber = classNumber;
    }

    public String getSelectType() {
        return SelectType;
    }

    public void setSelectType(String selectType) {
        SelectType = selectType;
    }

    public String getID() {
        return ID;
    }

    public void setID(String ID) {
        this.ID = ID;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public String getFile() {
        return file;
    }

    public void setFile(String file) {
        this.file = file;
    }

    public String getFileURL() {
        return fileURL;
    }

    public void setFileURL(String fileURL) {
        this.fileURL = fileURL;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getDownloadCount() {
        return downloadCount;
    }

    public void setDownloadCount(String downloadCount) {
        this.downloadCount = downloadCount;
    }

    public String getIsEnd() {
        return isEnd;
    }

    public void setIsEnd(String isEnd) {
        this.isEnd = isEnd;
    }

    public String getClassID() {
        return classID;
    }

    public void setClassID(String classID) {
        this.classID = classID;
    }

    public String getUploadTime() {
        return uploadTime;
    }

    public void setUploadTime(String uploadTime) {
        this.uploadTime = uploadTime;
    }

    public String getUploadUser() {
        return uploadUser;
    }

    public void setUploadUser(String uploadUser) {
        this.uploadUser = uploadUser;
    }

    public AuditLogging getOpinion() {
        return opinion;
    }

    public void setOpinion(AuditLogging opinion) {
        this.opinion = opinion;
    }

    public String getIsDelete() {
        return isDelete;
    }

    public void setIsDelete(String isDelete) {
        this.isDelete = isDelete;
    }


    @Override
    public String toString() {
        return "BookInfo{" +
                "ID='" + ID + '\'' +
                ", image='" + image + '\'' +
                ", imageURL='" + imageURL + '\'' +
                ", file='" + file + '\'' +
                ", fileURL='" + fileURL + '\'' +
                ", name='" + name + '\'' +
                ", author='" + author + '\'' +
                ", text='" + text + '\'' +
                ", downloadCount='" + downloadCount + '\'' +
                ", isEnd='" + isEnd + '\'' +
                ", classID='" + classID + '\'' +
                ", uploadTime='" + uploadTime + '\'' +
                ", uploadUser='" + uploadUser + '\'' +
                ", opinion='" + opinion + '\'' +
                ", isDelete='" + isDelete + '\'' +
                '}';
    }
}
