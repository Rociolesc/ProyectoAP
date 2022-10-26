package com.Portfolio.Portfolio_Back.service;

import com.Portfolio.Portfolio_Back.model.Habilidades;
import java.util.List;


public interface IHabilidadesService {
    
    public List<Habilidades> verHabilidad();
    
    public void crearHabilidad (Habilidades per);
    
    public void borrarHabilidad (Long id);
    
    public Habilidades buscarHabilidad (Long id);
}
