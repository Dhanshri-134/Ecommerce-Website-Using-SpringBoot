package com.project.eccom.controller;

import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.project.eccom.entity.ImageModel;
import com.project.eccom.entity.Product;
import com.project.eccom.service.ProductService;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.MediaType;
import org.springframework.data.domain.Page;  // Importing Page for pagination

@RestController
public class ProductController {

    @Autowired
    private ProductService productService;

    @PreAuthorize("hasRole('Admin')")
    @PostMapping(value = {"/addNewProduct"}, consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public Product addNewProduct(@RequestPart("product") Product product,
                                 @RequestPart("imageFile") MultipartFile[] file) {
        try {
            Set<ImageModel> images = uploadImage(file);
            product.setProductImages(images);
            return productService.addNewProduct(product);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    public Set<ImageModel> uploadImage(MultipartFile[] multipartFiles) throws IOException {
        Set<ImageModel> imageModels = new HashSet<>();

        for (MultipartFile file : multipartFiles) {
            ImageModel imageModel = new ImageModel(
                    file.getOriginalFilename(),
                    file.getContentType(),
                    file.getBytes()
            );
            imageModels.add(imageModel);
        }

        return imageModels;
    }

    // Updated to return a Page<Product> instead of a List<Product>
    @GetMapping({"/getAllProducts"})
    public List<Product> getAllProducts(@RequestParam(defaultValue = "0") int pageNumber,
    		                           @RequestParam(defaultValue="")String searchKey) {
        List<Product>result= productService.getAllProducts(pageNumber,searchKey);  // Return a Page<Product> object
        System.out.println("Result six=ze is:"+result.size());
        return result;
        }

    @GetMapping({"/getProductDetailsById/{productId}"})
    public Product getProductDetailsById(@PathVariable("productId") Integer productId){
        return productService.getProductDetailsById(productId);
    }

    @PreAuthorize("hasRole('Admin')")
    @DeleteMapping({"/deleteProductDetails/{productId}"})
    public void deleteProductDetails(@PathVariable("productId") Integer productId) {
        productService.deleteProductDetails(productId);
    }
<<<<<<< HEAD
    @PreAuthorize("hasRole('User')")
    @GetMapping({"/getProductDetails/{isSingleProductCheckout}/{productId}"})
    public List<Product> getProductDetails(@PathVariable(name= "isSingleProductCheckout")boolean isSingleProductCheckout,
    		                      @PathVariable(name="productId")Integer productId) {
                                  
   return productService.getProductDetails(isSingleCheckout,productId);
    
    }
  }
=======

    @PreAuthorize("hasRole('Admin')")
    @GetMapping({"/getProductDetails/{isSingleProductCheckout}/{productId}"})
    public List<Product> getProductDetails(@PathVariable(name = "isSingleProductCheckout") boolean isSingleProductCheckout, @PathVariable(name = "productId") Integer productId){
        return productService.getProductDetails(isSingleProductCheckout, productId);
    }
}
>>>>>>> 0fc15ad2b77e54d12989640f3810ac410e689ec3
