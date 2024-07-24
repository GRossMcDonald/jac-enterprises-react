package com.wcci.jacenterprises.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wcci.jacenterprises.entity.Joke;
import com.wcci.jacenterprises.service.JokeService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/jokes")
public class JokeController {

    @Autowired
    private JokeService jokeService;

    @GetMapping
    public ResponseEntity<List<Joke>> findAllJokes() {
        List<Joke> jokes = jokeService.getAllJokes();
        return ResponseEntity.ok(jokes);
    }

    @PostMapping 
    public ResponseEntity<Joke> saveJoke(@RequestBody Joke joke) {
        Joke saveJoke = jokeService.saveJoke(joke);
        return new ResponseEntity<> (saveJoke, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Joke> findJokeById(@PathVariable Long id) {
        Joke joke = jokeService.getJokeById(id);
        if (joke == null) return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        return ResponseEntity.ok(joke);
    }
    
}
