package com.Portfolio.Portfolio_Back.repository;

import com.Portfolio.Portfolio_Back.model.Formacion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FormacionRepository extends JpaRepository <Formacion, Long> {
    
}
