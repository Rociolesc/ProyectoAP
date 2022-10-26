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
public class Perfil {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;    
    @Basic
    private String nombre;

    
    private String apellido;    
    private String titulo;
    private String descripcion;
    private String img;

    public Perfil() {
    }
public Perfil(Long id, String nombre, String apellido, String titulo, String descripcion, String img) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.img = img;
    }

}
