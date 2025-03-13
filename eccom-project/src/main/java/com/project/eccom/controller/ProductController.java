package com.project.eccom.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.eccom.entity.Product;
import com.project.eccom.service.ProductService;

@RestController
public class ProductController {

    @Autowired
    private ProductService productService;


    @PostMapping({"/addNewProduct"})
    public Product addNewProduct(@RequestBody Product product){
        return productService.addNewProduct(product);
    }
}