package com.Portfolio.Portfolio_Back.repository;

import com.Portfolio.Portfolio_Back.model.Perfil;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PerfilRepository extends JpaRepository <Perfil, Long> {
    
}
