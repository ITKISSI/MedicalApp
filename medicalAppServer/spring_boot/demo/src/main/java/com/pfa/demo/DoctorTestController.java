package com.pfa.demo;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/doctors")
@CrossOrigin("http://localhost:3000")
public class DoctorTestController {
        private List<Doctor> doctorList=new ArrayList<>(List.of(
                new Doctor(1,"Abdelhamid Tahri","Dentiste, Orthodontiste, Implantologiste","+212509614415","Oujda"),
                new Doctor(2,"Karima Bentahar","Cardiologue pédiatrique","+212620111415","Casablanca"),
                new Doctor(3," Yasmine Slimani","Médecin esthétique, Dermatologue","+212683111415","Rabat"),
                new Doctor(4,"Najib Boutaleb","Neurologue"," +212698345415","Rabat")
                ));
    @GetMapping()
    public List<Doctor> getDoctorList(){
        return doctorList;
    }

    @GetMapping(path = "{doctor_id}")
    public ResponseEntity<Doctor> getDoctor(@PathVariable("doctor_id") Long id) {
        Optional<Doctor> optionalDoctor = doctorList.stream()
                .filter(doctor -> Long.valueOf(doctor.getId()).equals(id))
                .findFirst();
        if (optionalDoctor.isPresent()) {
            return ResponseEntity.ok(optionalDoctor.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping(path = "{doctor_id}")
    public ResponseEntity<String> deleteDoctor(@PathVariable("doctor_id") Long id) {
        Doctor doctorToRemove = null;
        for (Doctor doctor : doctorList) {
            if (doctor.getId()==id) {
                doctorToRemove = doctor;
                break;
            }
        }
        if (doctorToRemove == null) {
            return ResponseEntity.notFound().build();
        }
        doctorList.remove(doctorToRemove);
        return ResponseEntity.ok("Doctor with ID " + id + " deleted successfully");
    }



    @PostMapping
    public ResponseEntity<String> createDoctor(@RequestBody Doctor doctor) {
        // Check that the required fields are not null or empty
        if (doctor.getName() == null || doctor.getName().isEmpty()) {
            return ResponseEntity.badRequest().body("Doctor name cannot be empty");
        }
        if (doctor.getPhoneNumber() == null || doctor.getPhoneNumber().isEmpty()) {
            return ResponseEntity.badRequest().body("Doctor phone number cannot be empty");
        }
        if (doctor.getSpecialite() == null || doctor.getSpecialite().isEmpty()) {
            return ResponseEntity.badRequest().body("Doctor specialty cannot be empty");
        }

        // Add the new doctor to the list
        doctorList.add(doctor);

        // Return a success response
        return ResponseEntity.ok("Doctor created successfully");
    }






}

class Doctor{
    private int id;
    private String name;
    private String specialite;
    private String phoneNumber;
    private String city;

    public Doctor(int id, String name, String description, String phoneNumber, String city) {
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

    public void setId(int id) {
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

    @Override
    public String toString() {
        return "Doctor{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", specialite='" + specialite + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", city='" + city + '\'' +
                '}';
    }
}
