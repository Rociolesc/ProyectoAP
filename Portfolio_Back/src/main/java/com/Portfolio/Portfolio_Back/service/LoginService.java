package com.Portfolio.Portfolio_Back.service;

import com.Portfolio.Portfolio_Back.model.Login;
import com.Portfolio.Portfolio_Back.repository.LoginRespository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService implements ILoginService {
    
     @Autowired
    public LoginRespository loginRepo;

    @Override
    public List<Login> verLogin() {
        return  loginRepo.findAll();
    }

    @Override
    public void crearLogin(Login per) {
        loginRepo.save(per);
    }

    @Override
    public Login buscarLogin(Long id) {
       return loginRepo.findById(id).orElse(null);
    }
    
}
