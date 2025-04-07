package com.project.eccom.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import com.project.eccom.dao.ProductDao;
import com.project.eccom.entity.Product;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductDao productDao;

    // Add a new product to the database
    public Product addNewProduct(Product product) {
        try {
            return productDao.save(product);
        } catch (Exception e) {
            throw new RuntimeException("Error while saving product", e);
        }
    }
    public List<Product> getAllProducts(int pageNumber,String searchKey, int size) {
        Pageable pageable = PageRequest.of(pageNumber,size:12);
       
        if(searchKey.equals("")){
        	return(List<Product>)productDao.findAll(pageable);
        }else{
        	return (List<Product>)productDao.findByProductNameContainingIgnoreOrProductDescriptionContainingIgnore(searchKey, searchKey, pageable);
        }
    }

    // Returns a Page<Product> for pagination
   
    // Get product by ID
    public Product getProductDetailsById(Integer productId) {
        return productDao.findById(productId).orElseThrow(() -> new RuntimeException("Product not found with ID: " + productId));
    }

    // Delete product by ID
    public void deleteProductDetails(Integer productId) {
        productDao.deleteById(productId);
    }
    
    public List<Product> getProductDetails(boolean isSingleProductCheckout, Integer productId) {
        if (isSingleProductCheckout) {
            // Return only one product in a list
            Product product = productDao.findById(productId).orElseThrow(() -> new RuntimeException("Product not found with ID: " + productId));
            List<Product> singleProductList = new ArrayList<>();
            singleProductList.add(product);
            return singleProductList;
        } else {
            // Return all products if it's not a single product checkout
            return productDao.findAll();  // Returns all products
        }
    }
}