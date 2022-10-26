package com.Portfolio.Portfolio_Back.model;

import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Habilidades {
    
     @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
     @Basic
    private String habilidad;
    private int porcentaje;

    public Habilidades() {
    }

    public Habilidades(Long id, String habilidad, int Porcentaje) {
        this.id = id;
        this.habilidad = habilidad;
        this.porcentaje = Porcentaje;
    }
    
    
}
