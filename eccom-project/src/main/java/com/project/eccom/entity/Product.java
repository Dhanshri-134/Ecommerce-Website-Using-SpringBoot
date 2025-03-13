package com.project.eccom.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Product {


    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer productId;
    private String productName;
    private String productDescription;
    private Double productDiscountedPrice;
    private Double productActualPrice;

    public Integer getProductId() {
        return productId;

    }

    public  void setProductId(Integer productId){
        this.productId = productId;
    }

    public String getProductName() {
        return productName;

    }
    public String setProductName() {
        return this.productName;
    }

    public void setproductName(String productName) {
        this.productName = productName;
    }
    public String getProductDescription() {
        return productDescription;

    }
    public void setProductDescription(String productDescription){
        this.productDescription = productDescription;
    }
}