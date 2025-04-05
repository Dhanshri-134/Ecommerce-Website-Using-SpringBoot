package com.project.eccom.dao;

import org.springframework.data.domain.Pageable;  // Import this
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.project.eccom.entity.Product;
import java.util.List;  // Import this

@Repository
public interface ProductDao extends CrudRepository<Product, Integer> {
    public List<Product> findAll(Pageable pageable);  // The method signature
}
