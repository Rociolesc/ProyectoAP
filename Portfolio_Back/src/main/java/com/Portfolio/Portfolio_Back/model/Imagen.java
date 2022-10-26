
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
public class Imagen {

   
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;    
    @Basic
    private String Img;    
    private String namImg;  

    public Imagen() {
    }
 public Imagen(int id, String Img, String namImg) {
        this.id = id;
        this.Img = Img;
        this.namImg = namImg;
    }
    
}
