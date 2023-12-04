package com.append.backend.resources;

import com.append.backend.config.TokenConfig;
import com.append.backend.dto.AuthenticationDTO;
import com.append.backend.dto.LoginResponseDTO;
import com.append.backend.dto.RegistrationDTO;
import com.append.backend.dto.UserDTO;
import com.append.backend.entities.Role;
import com.append.backend.entities.User;
import com.append.backend.repositories.UserRepository;
import jakarta.validation.Valid;
import org.antlr.v4.runtime.Token;
import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("auth")
public class AuthenticationResource {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository repository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private TokenConfig tokenConfig;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody @Valid AuthenticationDTO dto){
        var usernamePassword = new UsernamePasswordAuthenticationToken(dto.email(), dto.password());
        var auth = authenticationManager.authenticate(usernamePassword);

        var token = tokenConfig.generateToken((User)auth.getPrincipal());

        return ResponseEntity.ok(new LoginResponseDTO(token, ((User) auth.getPrincipal())));
    }

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody @Valid RegistrationDTO dto){
        if(repository.findByEmail(dto.email()) != null){
         return ResponseEntity.badRequest().build();
        }
        String encryptedPassword = passwordEncoder.encode(dto.password());
        User user = new User(dto.name(), dto.email(), encryptedPassword, dto.roles());

        repository.save(user);

        return ResponseEntity.status(HttpStatus.CREATED).body(dto);
    }
}
