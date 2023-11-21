package com.append.backend.services.exceptions;

import java.io.Serial;

public class DataBaseException extends RuntimeException{
    @Serial
    private static final long serialVersionUID = 1L;

    public DataBaseException(String m){
        super(m);
    }
}
