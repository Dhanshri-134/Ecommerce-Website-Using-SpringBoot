package com.project.eccom.dao;


import com.project.eccom.entity.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ProductDao  extends CrudRepository<Product,Integer>{

}
