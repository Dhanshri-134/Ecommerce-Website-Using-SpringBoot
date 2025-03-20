package com.project.eccom.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.eccom.dao.ProductDao;
import com.project.eccom.entity.Product;



@Service
public class ProductService {

    @Autowired
    private ProductDao productDao;

    public Product addNewProduct(Product product) {
        return productDao.save(product);
        public List <Product> getAllProducts() { 
            return (List<Product>)productDao.findAll();
        }
        public void deleteProductDetails(Integer productId){
            productDao.deleteById(productId);
        }
    }
}
