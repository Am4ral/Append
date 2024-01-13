package com.append.backend.repositories;

import com.append.backend.entities.User;
import com.append.backend.tests.Factory;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.dao.EmptyResultDataAccessException;

import java.util.Optional;

@DataJpaTest
public class UserRepositoryTests {

    @Autowired
    private UserRepository repository;

    private long exintingId;
    private long nonExintingId;
    private long countTotalUsers;

    @BeforeEach
    void setUp() throws Exception {
        exintingId = 1L;
        nonExintingId = 100L;
        countTotalUsers = 25L;
    }

    @Test
    public void findByIdShouldReturnOptionalObjectWhenIdExists() {
        Optional<User> result = repository.findById(exintingId);
        Assertions.assertTrue(result.isPresent());
    }

    @Test
    public void findByIdShouldReturnEmptyOptionalObjectWhenIdNotExists() {
        Optional<User> result = repository.findById(nonExintingId);
        Assertions.assertFalse(result.isPresent());
    }

    @Test
    public void deleteShouldDeleteObjectWhenIdExists() {

        repository.deleteById(exintingId);
        Optional<User> result = repository.findById(exintingId);

        Assertions.assertFalse(result.isPresent());
    }

}