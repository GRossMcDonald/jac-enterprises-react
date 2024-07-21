package com.wcci.jacenterprises.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Jac {
    @Id
    @GeneratedValue
    private Long id;

    private String topic;

    private String text;

    public Jac() {

    }

    public Jac(String topic, String text) {
        this.topic = topic;
        this.text = text;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}