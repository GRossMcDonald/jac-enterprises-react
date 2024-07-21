package com.wcci.jacenterprises.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wcci.jacenterprises.entity.Jac;
import com.wcci.jacenterprises.repository.JacRepository;

@RestController
@RequestMapping ("/api/topics")
public class JacController {

    @Autowired
    private JacRepository jacRepository;

    @GetMapping
    public List<Jac> getAllFacts() {
        return (List<Jac>) jacRepository.findAll();
    }

    @PostMapping
    public void saveFact(@RequestBody Jac fact) {
        jacRepository.save(fact);
    }
}
