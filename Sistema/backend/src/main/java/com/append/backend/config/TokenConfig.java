package com.append.backend.config;

import com.append.backend.entities.User;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Service
public class TokenConfig {
    @Value("${api.security.secret}")
    private String secret;

    public String generateToken(User user){
         try{
             Algorithm algo =  Algorithm.HMAC256(secret);
             String token = JWT.create()
                     .withIssuer("append")
                     .withSubject(user.getEmail())
                     .withExpiresAt(generateExpiration())
                     .sign(algo);
             return token;
         }
         catch (JWTCreationException e){
            throw new RuntimeException("Error while generating token", e);
         }
    }

    public String validateToken(String token){
        try{
            Algorithm algo =  Algorithm.HMAC256(secret);
            return JWT.require(algo)
                    .withIssuer("append")
                    .build()
                    .verify(token)
                    .getSubject();
        }
        catch (JWTVerificationException e){
            //return "";
            throw new RuntimeException("Error while validating token", e);
        }
    }


    private Instant generateExpiration(){
        return LocalDateTime.now().plusHours(2).toInstant(ZoneOffset.of("-03:00"));
    }
}
