
package com.Portfolio.Portfolio_Back.model;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ImagenPerfil {
    
    private String name;
    private String url;

    public ImagenPerfil() {
    }

    public ImagenPerfil(String name, String url) {
        this.name = name;
        this.url = url;
    }
    
    
    
}
