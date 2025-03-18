package com.project.eccom.controller;
import java.io.IOException;

import org.apache.tomcat.util.http.parser.MediaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.project.eccom.entity.ImageModel;
import com.project.eccom.entity.Product;
import com.project.eccom.service.ProductService;

@RestController
public class ProductController {

    @Autowired
    private ProductService productService;
    @PreMapping(value={"/addNewProduct"},consumes= {MediaType.MULTIPART_FORM_DATA_VALUE})
     public product addNewProduct(@RequestPart("product")Product product,
     @RequestPart("imageFile")MultipartFile file){
        try{
            Set<ImageModel> images =uploadImage(file);
            product.setProductImages(images);
            return productService.addNewProduct(product);
   }  catch (Exception e){
    System.out.printLn(e.getMessage());
    return null;
   }
     }
     public Set<ImageModel> uploadImage(MultipartFile multipartFiles)throws IOException{
        Set<ImageModel> imageModels = new HashSet<>();
        
        for (MultipartFile file: multipartFiles){
            ImageModel imageModel = new ImageModel(
                file.getOriginalFilename(),
                file.getContentType(),
                file.getBytes()
            );
            imageModels.add(imageModel);
        }

        return imageModels;
     }
     @GetMapping({"/getAllProducts"})
     prblic List<Product> getAllProducts(){
        return productService.getAllProducts();
     }
    <!-- @PostMapping({"/addNewProduct"})
    public Product addNewProduct(@RequestBody Product product){
        return productService.addNewProduct(product);
    }-->
    @DeleteMapping({"/deleteProductDetails/{productId}"})
    public void  deleteProductDetails(@pathVariable ("productId")Integer productId){
        productService.deleteProductDetails(productId);
    }
}