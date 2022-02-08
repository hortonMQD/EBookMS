package com.pojo;

import org.springframework.stereotype.Component;

@Component
public class EmployeeIDMax {

    private String EmployeeIdPrefix;
    private String EmployeeIdSuffix;

    public String getEmployeeIdPrefix() {
        return EmployeeIdPrefix;
    }

    public void setEmployeeIdPrefix(String employeeIdPrefix) {
        EmployeeIdPrefix = employeeIdPrefix;
    }

    public String getEmployeeIdSuffix() {
        return EmployeeIdSuffix;
    }

    public void setEmployeeIdSuffix(String employeeIdSuffix) {
        EmployeeIdSuffix = employeeIdSuffix;
    }
}
