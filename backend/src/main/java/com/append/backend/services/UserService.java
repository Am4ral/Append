package com.append.backend.services;

import com.append.backend.dto.UserDTO;
import com.append.backend.repositories.UserRepository;
import com.append.backend.entities.User;
import com.append.backend.services.exceptions.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    @Transactional(readOnly = true)
    public List<UserDTO> findAll(){
        List<User> list = repository.findAll();
        //Pegamos a nossa lista de users, convertemos elas para um stream de UserDTO
        //e depois convertemos ela novamente para uma lista, de UserDTO desta vez
        return  list.stream().map(x -> new UserDTO(x)).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public UserDTO findById(Long id){
        Optional<User> obj = repository.findById(id);
        User entity = obj.orElseThrow(() -> new EntityNotFoundException("Entity Not Found"));
        return new UserDTO(entity);
    }
}
