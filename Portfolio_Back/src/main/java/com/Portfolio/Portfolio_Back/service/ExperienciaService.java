package com.Portfolio.Portfolio_Back.service;

import com.Portfolio.Portfolio_Back.model.Experiencia;
import com.Portfolio.Portfolio_Back.repository.ExperienciaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExperienciaService implements IExperienciaService {
    
    @Autowired
    public ExperienciaRepository expoRepo;

    @Override
    public List<Experiencia> verExperiencia() {
        return expoRepo.findAll();
    }

    @Override
    public void crearExperiencia(Experiencia per) {
         expoRepo.save(per);
    }

    @Override
    public void borrarExperiencia(Long id) {
        expoRepo.deleteById(id);
    }

    @Override
    public Experiencia buscarExperiencia(Long id) {
        return expoRepo.findById(id).orElse(null);
    }
    
}
