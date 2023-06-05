package ma.eheio.suscriptionpatient.model;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;

import java.util.Set;

@Entity
@Table(name="patients")
@AllArgsConstructor
public class Patient extends User {
    @Column(unique = true)
    private String immatriculation;


    @ManyToMany
    @JoinTable(
            name = "patient_doctors",
            joinColumns = @JoinColumn(name = "patient_id"),
            inverseJoinColumns = @JoinColumn(name = "doctor_id"))
    private Set<Doctor> doctors;


    public Patient(){

    }

    public Patient(Long id, String firstName, String lastName, int age, String adress, String cin, String login, String password,String phone, Boolean looked, Boolean enabled, Set<Role> authorities, String immatriculation) {
        super(id, firstName, lastName, age, adress, cin, login, password,phone, looked, enabled, authorities);
        this.immatriculation = immatriculation;
    }


    public String getImmatriculation() {
        return immatriculation;
    }

    public void setImmatriculation(String immatriculation) {
        this.immatriculation = immatriculation;
    }



    public Set<Doctor> getDoctors() {
        return doctors;
    }

    public void setDoctors(Set<Doctor> doctors) {
        this.doctors = doctors;
    }
}
