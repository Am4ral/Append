package com.append.backend.services;

import com.append.backend.dto.HouseDTO;
import com.append.backend.dto.UserDTO;
import com.append.backend.entities.House;
import com.append.backend.entities.User;
import com.append.backend.repositories.HouseRepository;
import com.append.backend.repositories.UserRepository;
import com.append.backend.services.exceptions.DataBaseException;
import com.append.backend.services.exceptions.ResourceNotFoundException;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class HouseService {

    @Autowired
    private HouseRepository houseRepository;

    @Autowired
    private UserRepository userRepository;

    @Transactional(readOnly = true)
    public List<HouseDTO> findAll(){
        List<House> list = houseRepository.findAll();
        //Pegamos a nossa lista de users, convertemos elas para um stream de HouseDTO
        //e depois convertemos ela novamente para uma lista, de HouseDTO desta vez
        return  list.stream().map(x -> new HouseDTO(x)).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public HouseDTO findById(Long id){
        Optional<House> obj = houseRepository.findById(id);
        House entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity Not Found"));
        return new HouseDTO(entity);
    }
    @Transactional
    public HouseDTO insert(HouseDTO dto) {
        House entity = new House();
        copyDtoEntity(dto, entity);
        entity = houseRepository.save(entity);
        return new HouseDTO(entity);

    }

    @Transactional
    public HouseDTO update(HouseDTO dto, Long id){
        try {
            House entity = houseRepository.getReferenceById(id);
            copyDtoEntity(dto, entity);
            entity = houseRepository.save(entity);
            return new HouseDTO(entity);
        }
        catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException("Id " + id + "was not found!");
        }
    }

    public void delete(Long id) {
        try{
            houseRepository.deleteById(id);
        }
        catch (EmptyResultDataAccessException e){
            throw new ResourceNotFoundException("Id " + id + "was not foun!");
        }
        catch (DataIntegrityViolationException e){
            throw new DataBaseException("Integrity violation!");
        }
    }

    private void copyDtoEntity(HouseDTO dto, House entity){
        User owner =  userRepository.getReferenceById(dto.getOwner().getId());
        entity.setOwner(owner);
        entity.setStreet(dto.getStreet());
        entity.setDistrict(dto.getDistrict());
        entity.setNumber(dto.getNumber());
        entity.setInfo(dto.getInfo());
        entity.setPrice(dto.getPrice());
        entity.setImgURL(dto.getImgURL());
    }
}
