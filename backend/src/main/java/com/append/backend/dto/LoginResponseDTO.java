package com.append.backend.dto;

import com.append.backend.entities.User;

public record LoginResponseDTO(String token, User user){}