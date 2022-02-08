package com.pojo;

import org.springframework.stereotype.Component;

@Component
public class AuditLogging {
    private String ID;
    private String result;
    private String opinion;
    private String auditor;

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

    public String getOpinion() {
        return opinion;
    }

    public void setOpinion(String opinion) {
        this.opinion = opinion;
    }

    public String getAuditor() {
        return auditor;
    }

    public void setAuditor(String auditor) {
        this.auditor = auditor;
    }

    @Override
    public String toString() {
        return "AuditLoggin{" +
                "ID='" + ID + '\'' +
                ", result='" + result + '\'' +
                ", opinion='" + opinion + '\'' +
                ", auditor='" + auditor + '\'' +
                '}';
    }
}
