package com.Portfolio.Portfolio_Back.service;

import com.Portfolio.Portfolio_Back.model.Proyecto;
import java.util.List;


public interface IProyectoService {
    
     public List<Proyecto> verProyecto();
    
    public void crearProyecto (Proyecto per);
    
    public void borrarProyecto (Long id);
    
    public Proyecto buscarProyecto (Long id);
}
