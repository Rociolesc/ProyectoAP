package com.Portfolio.Portfolio_Back.service;

import com.Portfolio.Portfolio_Back.model.Login;
import java.util.List;

public interface ILoginService {
     public List<Login> verLogin();
    
    public void crearLogin (Login per);
        
    public Login buscarLogin (Long id);
    
}
