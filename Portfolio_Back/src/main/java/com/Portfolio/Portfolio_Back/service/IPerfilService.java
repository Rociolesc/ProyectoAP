package com.Portfolio.Portfolio_Back.service;

import com.Portfolio.Portfolio_Back.model.Perfil;
import java.util.List;

public interface IPerfilService {
    
    public List<Perfil> verPerfil();
    
    public void crearPerfil (Perfil per);
    
    public Perfil buscarPerfil (Long id);
}
