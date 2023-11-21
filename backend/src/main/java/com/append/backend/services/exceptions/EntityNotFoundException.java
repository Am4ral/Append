package com.append.backend.services.exceptions;

import java.io.Serial;

public class EntityNotFoundException extends RuntimeException{
    @Serial
    private static final long serialVersionUID = 1L;

    public EntityNotFoundException(String m){
        super(m);
    }
}
