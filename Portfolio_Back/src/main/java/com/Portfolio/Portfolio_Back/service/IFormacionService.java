package com.Portfolio.Portfolio_Back.service;

import com.Portfolio.Portfolio_Back.model.Formacion;
import java.util.List;


public interface IFormacionService {
    
     public List<Formacion> verFormacion();
    
    public void crearFormacion (Formacion per);
    
    public void borrarFormacion (Long id);
    
    public Formacion buscarFormacion (Long id);

}
