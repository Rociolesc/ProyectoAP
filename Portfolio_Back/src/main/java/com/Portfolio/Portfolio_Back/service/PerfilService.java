package com.Portfolio.Portfolio_Back.service;

import com.Portfolio.Portfolio_Back.model.Perfil;
import com.Portfolio.Portfolio_Back.repository.PerfilRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PerfilService implements IPerfilService {
    
    @Autowired
    public PerfilRepository perRepo;

    @Override
    public void crearPerfil(Perfil per) {
        perRepo.save(per);
    }

    @Override
    public Perfil buscarPerfil(Long id) {
        return perRepo.findById(id).orElse(null);
    }

    @Override
    public List<Perfil> verPerfil() {
        return  perRepo.findAll();
    }
    
}
