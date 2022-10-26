
package com.Portfolio.Portfolio_Back.service;

import com.Portfolio.Portfolio_Back.model.Habilidades;
import com.Portfolio.Portfolio_Back.model.Imagen;
import com.Portfolio.Portfolio_Back.repository.ImagenRepository;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.stream.Stream;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;

@Service
public class ImagenService implements IImg {
            Path root = Paths.get("src//main//resources//images");

     @Autowired
    public ImagenRepository ImgRepo;

    @Override
    public List<Imagen> verImagen() {
       return  ImgRepo.findAll();
    }

    @Override
    public void crearImagen(Imagen per) {
        ImgRepo.save(per);
    }

    @Override
    public void borrarImagen(Long id) {
        ImgRepo.deleteById(id);
    }

    @Override
    public Imagen buscarImagen(Long id) {
        return ImgRepo.findById(id).orElse(null);
    }

    @Override
    public Resource load(String filename) {
         
        try {
            Path file = root.resolve(filename);
            Resource resource =  new UrlResource(file.toUri());
         if(resource.exists() || resource.isReadable()){
            return  resource;
        }
        else{
            throw new RuntimeException("No se puede leer el archivo");
        }   
            
        } catch (MalformedURLException ex) {
            throw new RuntimeException("Error: "+ ex.getMessage());
        }
    }

    @Override
    public Stream<Path> loadAll() {
       try {
            return Files.walk(this.root, 1).filter(path -> path.equals(this.root)).map(this.root::relativize);
            } catch (IOException ex) {
            throw new RuntimeException("No se puede cargar los archivos");
        }
    }

    
}
