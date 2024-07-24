package com.wcci.jacenterprises.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Jac {
    @Id
    @GeneratedValue
    private Long id;

    @Column
    private String title;

    @Column
    private String image;

    @Column(length = 10000)
    private String caption;

    public Jac() {

    }

    public Jac(String title, String image, String caption) {
        this.title = title;
        this.image = image;
        this.caption = caption;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getCaption() {
        return caption;
    }

    public void setCaption(String caption) {
        this.caption = caption;
    }
}