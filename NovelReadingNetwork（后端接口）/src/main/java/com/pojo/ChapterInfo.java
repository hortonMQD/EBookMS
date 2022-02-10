package com.pojo;

import org.springframework.stereotype.Component;

@Component
public class ChapterInfo extends Info{

    private String ID;
    private String name;
    private String content;             //章节内容
    private AuditLogInfo isverify;      //审核结果
    private String time;                //发布时间
    private String isDelete;            //是否删除
    private NovelInfo Novel;            //属于哪部小说
    private String ChapterTimeASC_DESC; //查找类型为ASC或DESC
    private String limitCount;          //查找多少列章节
    private String AuthorID;


    public String getAuthorID() {
        return AuthorID;
    }

    public void setAuthorID(String authorID) {
        AuthorID = authorID;
    }

    private String isverifyResult;

    public String getIsverifyResult() {
        return isverifyResult;
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

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
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

    public String getIsDelete() {
        return isDelete;
    }

    public void setIsDelete(String isDelete) {
        this.isDelete = isDelete;
    }

    public NovelInfo getNovel() {
        return Novel;
    }

    public void setNovel(NovelInfo novel) {
        Novel = novel;
    }


    public String getChapterTimeASC_DESC() {
        return ChapterTimeASC_DESC;
    }

    public void setChapterTimeASC_DESC(String chapterTimeASC_DESC) {
        ChapterTimeASC_DESC = chapterTimeASC_DESC;
    }

    public String getLimitCount() {
        return limitCount;
    }

    public void setLimitCount(String limitCount) {
        this.limitCount = limitCount;
    }
}
