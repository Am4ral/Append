package com.append.backend.resources;

import com.append.backend.dto.ReserveDTO;
import com.append.backend.services.ReserveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

import static java.lang.Long.parseLong;

@RestController
@RequestMapping(value = "/reserves")

public class ReserveResource {

    @Autowired
    private ReserveService service;

    @GetMapping
    public ResponseEntity<List<ReserveDTO>> findAll(){
        List<ReserveDTO> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<ReserveDTO> findById(@PathVariable Long id){
        ReserveDTO dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }

    @PostMapping(value = "/find")
    public ResponseEntity<ReserveDTO> findByRenterHouse(@RequestBody ReserveDTO dto){
         dto = service.findByRenterHouse(dto.getRenter(), dto.getHouse());
        return ResponseEntity.ok().body(dto);
    }

    @PostMapping
    public ResponseEntity<ReserveDTO> add(@RequestBody ReserveDTO dto){
        dto = service.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.status(HttpStatus.CREATED).body(dto);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<ReserveDTO> update(@PathVariable Long id, @RequestBody ReserveDTO dto){
        dto = service.update(dto, id);
        return ResponseEntity.ok().body(dto);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<ReserveDTO> delete(@PathVariable Long id){
        service.delete(id);
        return ResponseEntity.noContent().build();
    }


}
