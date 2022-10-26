
package com.Portfolio.Portfolio_Back.repository;

import com.Portfolio.Portfolio_Back.model.Habilidades;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HabilidadesRepository extends JpaRepository <Habilidades, Long> {
    
}
