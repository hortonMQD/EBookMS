package com.pojo;

import com.util.BasicUtil;
import org.springframework.stereotype.Component;

@Component
public class NovelInfo extends Info{

    private String ID;
    private String coverUrl;        //小说封面路径
    private String name;
    private String synopsis;         //小说简介
    private String state;            //连载状态，完结：1  连载中：0
    private AuditLogInfo isverify;   //审核状态
    private String time;             //发布时间
    private TypeInfo type;           //小说类型
    private UserInfo author;         //作者
    private String isDelete;         //作者是否点击删除  1:删除  0：未删除
    private String isverifyResult;
    private String NovelRecentUpdatesTime;
    private String limitCount;
    private ChapterInfo ChapterInfo;
    private String NovelUploadTime;
    private String TypeID;

    private String AuthorID;
    private String NovelRecentUpdatesChapters;

    public String getNovelRecentUpdatesChapters() {
        return NovelRecentUpdatesChapters;
    }

    public void setNovelRecentUpdatesChapters(String novelRecentUpdatesChapters) {
        NovelRecentUpdatesChapters = novelRecentUpdatesChapters;
    }

    public String getAuthorID() {
        return AuthorID;
    }

    public void setAuthorID(String authorID) {
        AuthorID = authorID;
    }

    public String getTypeID() {
        return TypeID;
    }

    public void setTypeID(String typeID) {
        TypeID = typeID;
    }

    public String getIsverifyResult() {

        return isverifyResult;
    }
    public NovelInfo(){
        ID = BasicUtil.getID();
    }
    public void setIsverifyResult(String isverifyResult) {
        this.isverifyResult = isverifyResult;
    }

    public String getID() {
        return ID;
    }

    public void setID(String ID) {
        this.ID = ID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSynopsis() {
        return synopsis;
    }

    public void setSynopsis(String synopsis) {
        this.synopsis = synopsis;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public AuditLogInfo getIsverify() {
        return isverify;
    }

    public void setIsverify(AuditLogInfo isverify) {
        this.isverify = isverify;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public TypeInfo getType() {
        return type;
    }

    public void setType(TypeInfo type) {
        this.type = type;
    }

    public UserInfo getAuthor() {
        return author;
    }

    public void setAuthor(UserInfo author) {
        this.author = author;
    }

    public String getCoverUrl() {
        return coverUrl;
    }

    public void setCoverUrl(String coverUrl) {
        this.coverUrl = coverUrl;
    }

    public String getIsDelete() {
        return isDelete;
    }

    public void setIsDelete(String isDelete) {
        this.isDelete = isDelete;
    }

    public String getNovelRecentUpdatesTime() {
        return NovelRecentUpdatesTime;
    }

    public void setNovelRecentUpdatesTime(String novelRecentUpdatesTime) {
        NovelRecentUpdatesTime = novelRecentUpdatesTime;
    }

    public String getLimitCount() {
        return limitCount;
    }

    public void setLimitCount(String limitCount) {
        this.limitCount = limitCount;
    }


    public com.pojo.ChapterInfo getChapterInfo() {
        return ChapterInfo;
    }

    public void setChapterInfo(com.pojo.ChapterInfo chapterInfo) {
        ChapterInfo = chapterInfo;
    }

    public String getNovelUploadTime() {
        return NovelUploadTime;
    }

    public void setNovelUploadTime(String novelUploadTime) {
        NovelUploadTime = novelUploadTime;
    }
}
