package com.wcci.jacenterprises.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wcci.jacenterprises.entity.Joke;
import com.wcci.jacenterprises.repository.JokeRepository;

@Service
public class JokeService {

    @Autowired
    private JokeRepository jokeRepository;

    public Joke saveJoke(Joke joke) {
        return jokeRepository.save(joke);
    }

    public List<Joke> getAllJokes() {
        return jokeRepository.findAll();
    }

    public Joke getJokeById(Long id) {
        return jokeRepository.findById(id).orElse(null);
    }
}
