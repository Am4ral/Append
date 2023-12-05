package com.append.backend.services;

import com.append.backend.dto.ReserveDTO;
import com.append.backend.dto.ReserveDTO;
import com.append.backend.entities.House;
import com.append.backend.entities.Reserve;
import com.append.backend.entities.Reserve;
import com.append.backend.entities.User;
import com.append.backend.repositories.HouseRepository;
import com.append.backend.repositories.ReserveRepository;
import com.append.backend.repositories.ReserveRepository;
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
public class ReserveService {

    @Autowired
    private ReserveRepository reserveRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private HouseRepository houseRepository;

    @Transactional(readOnly = true)
    public List<ReserveDTO> findAll(){
        List<Reserve> list = reserveRepository.findAll();
        //Pegamos a nossa lista de users, convertemos elas para um stream de ReserveDTO
        //e depois convertemos ela novamente para uma lista, de ReserveDTO desta vez
        return  list.stream().map(x -> new ReserveDTO(x)).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public ReserveDTO findById(Long id){
        Optional<Reserve> obj = reserveRepository.findById(id);
        Reserve entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity Not Found"));
        return new ReserveDTO(entity);
    }
    @Transactional
    public ReserveDTO insert(ReserveDTO dto) {
        Reserve entity = new Reserve();
        copyDtoEntity(dto, entity);
        entity = reserveRepository.save(entity);
        return new ReserveDTO(entity);

    }

    @Transactional
    public ReserveDTO update(ReserveDTO dto, Long id){
        try {
            Reserve entity = reserveRepository.getOne(id);
            copyDtoEntity(dto, entity);
            entity = reserveRepository.save(entity);
            return new ReserveDTO(entity);
        }
        catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException("Id " + id + "was not found!");
        }
    }

    public void delete(Long id) {
        try{
            reserveRepository.deleteById(id);
        }
        catch (EmptyResultDataAccessException e){
            throw new ResourceNotFoundException("Id " + id + "was not found!");
        }
        catch (DataIntegrityViolationException e){
            throw new DataBaseException("Integrity violation!");
        }
    }

    private void copyDtoEntity(ReserveDTO dto, Reserve entity){
        User renter =  userRepository.getReferenceById(dto.getRenter());
        entity.setRenter(renter);

        House house = houseRepository.getReferenceById(dto.getHouse());
        entity.setHouse(house);

        User owner =  house.getOwner();
        entity.setOwner(owner);
    }
}
