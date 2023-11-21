package com.append.backend.services;

import com.append.backend.dto.UserDTO;
import com.append.backend.repositories.UserRepository;
import com.append.backend.entities.User;
import com.append.backend.services.exceptions.DataBaseException;
import com.append.backend.services.exceptions.ResourceNotFoundException;
import jakarta.persistence.EntityNotFoundException;
import jakarta.persistence.GenerationType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
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
        User entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity Not Found"));
        return new UserDTO(entity);
    }
    @Transactional
    public UserDTO insert(UserDTO dto) {
        User entity = new User();
        entity.setName(dto.getName());
        entity = repository.save(entity);
        return new UserDTO(entity);

    }
    @Transactional
    public UserDTO update(UserDTO dto, Long id){
        try {
            User entity = repository.getReferenceById(id);
            entity.setName(dto.getName());
            entity = repository.save(entity);
            return new UserDTO(entity);
        }
        catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException("Id " + id + "was not foun!");
        }
    }


    public void delete(Long id) {
        try{
            repository.deleteById(id);
        }
        catch (EmptyResultDataAccessException e){
            throw new ResourceNotFoundException("Id " + id + "was not foun!");
        }
        catch (DataIntegrityViolationException e){
            throw new DataBaseException("Integrity violation!");
        }
    }
}
