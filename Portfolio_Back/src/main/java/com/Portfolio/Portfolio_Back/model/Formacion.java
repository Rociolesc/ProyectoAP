
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
public class Formacion {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Basic
    private String fechaInicio;
    private String fechaFinal;
    private String carrera;

    public Formacion() {
    }

    public Formacion(Long id, String fechaInicio, String fechaFinal, String carrera, String imagen) {
        this.id = id;
        this.fechaInicio = fechaInicio;
        this.fechaFinal = fechaFinal;
        this.carrera = carrera;
    }

}
