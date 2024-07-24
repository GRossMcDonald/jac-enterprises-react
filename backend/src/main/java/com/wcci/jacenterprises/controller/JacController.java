package com.wcci.jacenterprises.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wcci.jacenterprises.entity.Jac;
import com.wcci.jacenterprises.repository.JacRepository;

@RestController
@RequestMapping("/api/explore")
public class JacController {

    @Autowired
    private JacRepository jacRepository;

    @GetMapping
    public List<Jac> getAllApods() {
        return (List<Jac>) jacRepository.findAll();
    }

    @PostMapping
    public void saveApod(@RequestBody Jac apod) {
        jacRepository.save(apod);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Jac> getApodById(@PathVariable Long id) {
        Jac apod = jacRepository.findById(id).orElse(null);
        if (apod == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        
        return ResponseEntity.ok(apod);
    }

    @GetMapping("/test")
    public String testEndpoint() {
        return "Test successful!";
    }
}
