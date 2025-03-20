package com.project.eccom.entity;

<<<<<<< HEAD
import javax.persistence.*;
import java.util.Set;
=======
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
>>>>>>> a29fbf2af32365587a00f8a9621b31e159795cc9

@Entity
public class Product {


    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer productId;
    private String productName;
    private String productDescription;
    private Double productDiscountedPrice;
    private Double productActualPrice;

<<<<<<< HEAD
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "product_images",
            joinColumns = {
                @JoinColumn(name = "product_id")
                }, inverseJoinColumns = {
                        @JoinColumn(name = "image_id")
                }
        )
    private Set<ImageModel> productImages;

    public Set<ImageModel> getProductImages() {
        return productImages;
    }

    public void setProductImages(Set<ImageModel> productImages) {
        this.productImages = productImages;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

=======
>>>>>>> a29fbf2af32365587a00f8a9621b31e159795cc9
    public Integer getProductId() {
        return productId;

    }

    public  void setProductId(Integer productId){
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
<<<<<<< HEAD
    }

    public Double getProductDiscountedPrice() {
        return productDiscountedPrice;
    }

    public void setProductDiscountedPrice(Double productDiscountedPrice) {
        this.productDiscountedPrice = productDiscountedPrice;
    }

    public Double getProductActualPrice() {
        return productActualPrice;
    }

    public void setProductActualPrice(Double productActualPrice) {
        this.productActualPrice = productActualPrice;
    }
}
=======

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
>>>>>>> a29fbf2af32365587a00f8a9621b31e159795cc9
