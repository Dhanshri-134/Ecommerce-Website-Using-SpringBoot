package com.project.eccom.service;

<<<<<<< HEAD

=======
>>>>>>> a29fbf2af32365587a00f8a9621b31e159795cc9
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.eccom.dao.ProductDao;
import com.project.eccom.entity.Product;



@Service
public class ProductService {

    @Autowired
<<<<<<< HEAD
    private ProductDao ProductDao;

    public Product addNewProduct(Product product) {
        return ProductDao.save(product);

    }
}
=======
    private ProductDao productDao;

    public Product addNewProduct(Product product) {
        return productDao.save(product);
        public List<Product> getAllProducts() { return (List<Product>)productDao.findAll();}
    public void deleteProductDetails(Integer productId){
        productDao.deleteById(productId);
    }
    }
}
>>>>>>> a29fbf2af32365587a00f8a9621b31e159795cc9
