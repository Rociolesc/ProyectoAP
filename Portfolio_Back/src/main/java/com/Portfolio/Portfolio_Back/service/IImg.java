
package com.Portfolio.Portfolio_Back.service;

import com.Portfolio.Portfolio_Back.model.Imagen;
import java.nio.file.Path;
import java.util.List;
import java.util.stream.Stream;
import org.springframework.core.io.Resource;

public interface IImg {
     public List<Imagen> verImagen();
    
    public void crearImagen (Imagen per);
    
    public void borrarImagen (Long id);
    
    public Imagen buscarImagen (Long id);
    public Resource load(String filename);
    public Stream<Path> loadAll();
}
