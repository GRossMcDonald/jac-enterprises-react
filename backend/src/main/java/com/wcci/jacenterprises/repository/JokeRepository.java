package com.wcci.jacenterprises.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wcci.jacenterprises.entity.Joke;

@Repository
public interface JokeRepository extends JpaRepository<Joke, Long> {

}
