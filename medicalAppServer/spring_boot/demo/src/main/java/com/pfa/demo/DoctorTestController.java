package com.pfa.demo;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DoctorTestController {

    private List<Doctor> doctorList=List.of(
            new Doctor(1,"John Doe","+1 555-555-5555","New York City"),
            new Doctor(2,"Jane Smith","+44 123-456-7890","London"),
            new Doctor(3," Bob Johnson","+61 02-1234-5678","Sydney"),
            new Doctor(4,"Sarah Lee"," +86 010-1234-5678","Beijing")
            );
    @GetMapping("/doctors")
    public List<Doctor> getDoctorList(){
        return doctorList;
    }


}

class Doctor{
    private long id;
    private String name;
    private String phoneNumber;
    private String city;

    public long getId() {
        return id;
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

    public Doctor(long id, String name, String phoneNumber, String city) {
        this.id = id;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.city = city;
    }
}
