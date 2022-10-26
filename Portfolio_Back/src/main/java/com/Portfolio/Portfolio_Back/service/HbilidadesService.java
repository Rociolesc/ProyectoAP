package com.Portfolio.Portfolio_Back.service;

import com.Portfolio.Portfolio_Back.model.Habilidades;
import com.Portfolio.Portfolio_Back.repository.HabilidadesRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HbilidadesService implements IHabilidadesService {
    
    @Autowired
    public HabilidadesRepository habilidadRepo;

    @Override
    public List<Habilidades> verHabilidad() {
         return  habilidadRepo.findAll();
    }

    @Override
    public void crearHabilidad(Habilidades per) {
        habilidadRepo.save(per);
    }

    @Override
    public void borrarHabilidad(Long id) {
        habilidadRepo.deleteById(id);
    }

    @Override
    public Habilidades buscarHabilidad(Long id) {
        return habilidadRepo.findById(id).orElse(null);
    }
    
}
