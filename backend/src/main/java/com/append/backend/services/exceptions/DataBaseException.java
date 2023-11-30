package com.append.backend.services.exceptions;



public class DataBaseException extends RuntimeException{
    
    private static final long serialVersionUID = 1L;

    public DataBaseException(String m){
        super(m);
    }
}


