package com.Portfolio.Portfolio_Back.repository;

import com.Portfolio.Portfolio_Back.model.Experiencia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExperienciaRepository extends JpaRepository <Experiencia, Long> {
    
}
