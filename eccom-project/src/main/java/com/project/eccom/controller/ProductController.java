package com.project.eccom.controller;

import com.project.eccom.entity.ImageModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import com.project.eccom.entity.Product;
import com.project.eccom.service.ProductService;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashSet;
import java.util.Set;

@RestController
public class ProductController {

    @Autowired
    private ProductService productService;


    @PostMapping(value = {"/addNewProduct"}, consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public Product addNewProduct(@RequestPart("product") Product product, @RequestPart("imageFile") MultipartFile[] file) {
        try{
            Set<ImageModel> images = uploadImage(file);
            product.setProductImages(images);
            return productService.addNewProduct(
                    product
            );
        }catch (Exception e){
            System.out.println(e.getMessage());
            return null;
        }
//        return productService.addNewProduct(product);
    }

    public Set<ImageModel> uploadImage(MultipartFile[] multipartFiles) throws IOException {
        Set<ImageModel> imageModels = new HashSet<>();

        for(MultipartFile file : multipartFiles) {
             ImageModel imageModel = new ImageModel(
                     file.getOriginalFilename(),
                     file.getContentType(),
                     file.getBytes()
             );
             imageModels.add(imageModel);
        }
        return imageModels;

    }
}
