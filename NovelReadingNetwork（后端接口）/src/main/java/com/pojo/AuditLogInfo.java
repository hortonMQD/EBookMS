package com.pojo;

import com.util.BasicUtil;
import org.springframework.stereotype.Component;

@Component
public class AuditLogInfo extends Info{

    private String ID;
    private String type;                  //审核类型  1：小说审核  2：章节审核
    private String result;                //审核结果  通过：1，不通过：0
    private String opinion;               //审核意见
    private AdministratorInfo auditor;    //审核管理员
    private String time;                  //审核时间

    public AuditLogInfo(){
        setID(BasicUtil.getID());
    }

    public String getID() {
        return ID;
    }

    public void setID(String ID) {
        this.ID = ID;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getOpinion() {
        return opinion;
    }

    public void setOpinion(String opinion) {
        this.opinion = opinion;
    }

    public AdministratorInfo getAuditor() {
        return auditor;
    }

    public void setAuditor(AdministratorInfo auditor) {
        this.auditor = auditor;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }
}
