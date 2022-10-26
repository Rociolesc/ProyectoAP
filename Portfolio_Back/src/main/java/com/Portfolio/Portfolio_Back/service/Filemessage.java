
package com.Portfolio.Portfolio_Back.service;

public class Filemessage {
    private String message;
    
    public Filemessage(String message){
    this.message = message;
    }

    public String getMessage(){
    return message;
    }
    public void setMessage(String message){
    this.message = message;
    }
}
