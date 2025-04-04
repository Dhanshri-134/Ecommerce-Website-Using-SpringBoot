package com.project.eccom.entity;

import java.util.List;

public class OrderInput {


    private String fullName;
    private String fullAddress;
    private String contactNumber;
    private String  alternateContactNumber;
    private List<OrderProductQuantity> orderProductQuantitylist;
    public String getFullName() {
        return fullName;
    }
    public void setFullName(String fullName) {
        this.fullName = fullName;
    }
    public String getFullAddress() {
        return fullAddress;
    }
    public void setFullAddress(String fullAddress) {
        this.fullAddress = fullAddress;
    }
    public String getContactNumber() {
        return contactNumber;
    }
    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }
    public String getAlternateContactNumber() {
        return alternateContactNumber;
    }
    public void setAlternateContactNumber(String alternateContactNumber) {
        this.alternateContactNumber = alternateContactNumber;
    }
    public List<OrderProductQuantity> getOrderProductQuantitylist() {
        return orderProductQuantitylist;
    }
    public void setOrderProductQuantitylist(List<OrderProductQuantity> orderProductQuantitylist) {
        this.orderProductQuantitylist = orderProductQuantitylist;
    }
    public List<OrderProductQuantity> getOrderProductQuantityList() {
        // TODO Auto-generated method stub
        return null;
    }






}