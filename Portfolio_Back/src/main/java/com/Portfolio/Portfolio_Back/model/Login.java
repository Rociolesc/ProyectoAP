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
public class Login {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Basic
    private String useName;
    private String password;

    public Login() {
    }

    public Login(Long id, String useName, String password) {
        this.id = id;
        this.useName = useName;
        this.password = password;
    }
    
}
