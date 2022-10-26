package com.Portfolio.Portfolio_Back.service;

import com.Portfolio.Portfolio_Back.model.Formacion;
import com.Portfolio.Portfolio_Back.repository.FormacionRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FormacionService implements IFormacionService {
    
    @Autowired
    public FormacionRepository formacionRepo;


    @Override
    public List<Formacion> verFormacion() {
        return  formacionRepo.findAll();
    }

    @Override
    public void crearFormacion(Formacion per) {
        formacionRepo.save(per);
    }

    @Override
    public void borrarFormacion(Long id) {
         formacionRepo.deleteById(id);
    }

    @Override
    public Formacion buscarFormacion(Long id) {
        return formacionRepo.findById(id).orElse(null);
    }
    
}
