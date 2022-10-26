
package com.Portfolio.Portfolio_Back.repository;

import com.Portfolio.Portfolio_Back.model.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginRespository extends JpaRepository <Login, Long>{
    
}
