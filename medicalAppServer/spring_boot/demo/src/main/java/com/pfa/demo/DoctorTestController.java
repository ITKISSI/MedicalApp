package com.pfa.demo;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/doctors")
@CrossOrigin("http://localhost:3000")
public class DoctorTestController {

    private List<Doctor> doctorList=List.of(
            new Doctor(1,"Abdelhamid Tahri","Dentiste, Orthodontiste, Implantologiste","+212509614415","Oujda"),
            new Doctor(2,"Karima Bentahar","Cardiologue pédiatrique","+212620111415","Casablanca"),
            new Doctor(3," Yasmine Slimani","Médecin esthétique, Dermatologue","+212683111415","Rabat"),
            new Doctor(4,"Najib Boutaleb","Neurologue"," +212698345415","Rabat")
            );
    @GetMapping("/doctors")
    public List<Doctor> getDoctorList(){
        return doctorList;
    }


}

class Doctor{
    private long id;
    private String name;
    private String specialite;
    private String phoneNumber;
    private String city;

    public Doctor(long id, String name, String description, String phoneNumber, String city) {
        this.id = id;
        this.name = name;
        this.specialite = description;
        this.phoneNumber = phoneNumber;
        this.city = city;
    }

    public long getId() {
        return id;
    }

    public String getSpecialite() {
        return specialite;
    }

    public void setSpecialite(String specialite) {
        this.specialite = specialite;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }


}
