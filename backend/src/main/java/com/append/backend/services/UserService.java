package com.append.backend.services;

import com.append.backend.dto.RoleDTO;
import com.append.backend.dto.UserDTO;
import com.append.backend.dto.UserInsertDTO;
import com.append.backend.dto.UserUpdateDTO;
import com.append.backend.entities.Role;
import com.append.backend.repositories.RoleRepository;
import com.append.backend.repositories.UserRepository;
import com.append.backend.entities.User;
import com.append.backend.services.exceptions.DataBaseException;
import com.append.backend.services.exceptions.ResourceNotFoundException;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Transactional(readOnly = true)
    public List<UserDTO> findAll(){
        List<User> list = userRepository.findAll();
        //Pegamos a nossa lista de users, convertemos elas para um stream de UserDTO
        //e depois convertemos ela novamente para uma lista, de UserDTO desta vez
        return  list.stream().map(x -> new UserDTO(x)).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public UserDTO findById(Long id){
        Optional<User> obj = userRepository.findById(id);
        User entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity Not Found"));
        return new UserDTO(entity);
    }
    @Transactional
    public UserDTO insert(UserInsertDTO dto) {
        User entity = new User();
        copyDtoEntity(dto, entity);
        entity.setPassword(passwordEncoder.encode(dto.getPassword()));
        entity = userRepository.save(entity);
        return new UserDTO(entity);

    }
    @Transactional
    public UserDTO update(UserUpdateDTO dto, Long id){
        try {
            User entity = userRepository.getReferenceById(id);
            copyDtoEntity(dto, entity);
            entity = userRepository.save(entity);
            return new UserDTO(entity);
        }
        catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException("Id " + id + " was not found!");
        }
    }


    public void delete(Long id) {
        try{
            userRepository.deleteById(id);
        }
        catch (EmptyResultDataAccessException e){
            throw new ResourceNotFoundException("Id " + id + " was not found!");
        }
        catch (DataIntegrityViolationException e){
            throw new DataBaseException("Integrity violation!");
        }
    }

    private void copyDtoEntity(UserDTO dto, User entity){
        entity.setName(dto.getName());
        entity.setEmail(dto.getEmail());

        entity.getRoles().clear();
        for(RoleDTO roleDTO : dto.getRoles()){
            Role role = roleRepository.getReferenceById(dto.getId());
            entity.getRoles().add(role);

        }
    }
}
