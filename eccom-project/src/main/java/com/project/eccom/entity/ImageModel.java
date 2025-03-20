package com.project.eccom.entity;

import javax.persistence.*;

@Entity
@Table(name = "image_model")
<<<<<<< HEAD

public class ImageModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String type;
=======
public class ImageModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO) // Removed extra semicolon
    private Long id;

    private String name;
    private String type;

>>>>>>> a29fbf2af32365587a00f8a9621b31e159795cc9
    @Column(length = 50000000)
    private byte[] picByte;

    public ImageModel() {
<<<<<<< HEAD

    }

    public ImageModel(String name, String type, byte[] picByte) {
        this.name = name;
        this.type = type;
=======
    }

    public ImageModel(String type, String name, byte[] picByte) {
        this.type = type;
        this.name = name;
>>>>>>> a29fbf2af32365587a00f8a9621b31e159795cc9
        this.picByte = picByte;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public byte[] getPicByte() {
        return picByte;
    }

    public void setPicByte(byte[] picByte) {
        this.picByte = picByte;
    }
}
