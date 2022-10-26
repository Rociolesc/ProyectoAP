package com.Portfolio.Portfolio_Back.service;

import com.Portfolio.Portfolio_Back.model.Proyecto;
import com.Portfolio.Portfolio_Back.repository.ProyectoRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProyectoService implements IProyectoService {
    
    @Autowired
    public ProyectoRepository proyectoRepo;

    @Override
    public List<Proyecto> verProyecto() {
        return  proyectoRepo.findAll();
    }

    @Override
    public void crearProyecto(Proyecto per) {
        proyectoRepo.save(per);
    }

    @Override
    public void borrarProyecto(Long id) {
        proyectoRepo.deleteById(id);
    }

    @Override
    public Proyecto buscarProyecto(Long id) {
        return proyectoRepo.findById(id).orElse(null);
    }
    
}
