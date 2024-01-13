package com.append.backend.services;

import com.append.backend.dto.RoleDTO;
import com.append.backend.dto.UserDTO;
import com.append.backend.dto.UserInsertDTO;
import com.append.backend.dto.UserUpdateDTO;
import com.append.backend.entities.House;
import com.append.backend.entities.Reserve;
import com.append.backend.entities.Role;
import com.append.backend.repositories.HouseRepository;
import com.append.backend.repositories.RoleRepository;
import com.append.backend.repositories.UserRepository;
import com.append.backend.entities.User;
import com.append.backend.services.exceptions.DataBaseException;
import com.append.backend.services.exceptions.ResourceNotFoundException;
import jakarta.persistence.EntityNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class UserService implements UserDetailsService{

    private static Logger logger = LoggerFactory.getLogger(UserService.class);

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private ReserveService reserveService;

    @Autowired
    private HouseService houseService;

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

    @Transactional
    public void delete(Long id) {
        try{
//            reserveService.deleteByUser(id);
//            houseService.deleteByUser(id);
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
            Role role = roleRepository.getReferenceById(roleDTO.getId());
            entity.getRoles().add(role);

        }
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(username);
        if(user == null){
            logger.error("User not found: " + username);
            throw new UsernameNotFoundException("Email not found");
        }
        logger.info("User found: " + username);
        return user;
    }
}
