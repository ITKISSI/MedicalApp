package ma.ehei.ratingservice.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

import java.util.Set;


@Entity
@Table(name="doctors")
public class Doctor extends User{

    @Column(unique = true)
    private String inp;
    private String specialty;

    public Doctor(Long id, String firstName, String lastName, int age, String adress, String cin, String login, String password, String phone, Boolean looked, Boolean enabled, Set<Role> authorities, String inp, String specialty) {
        super(id, firstName, lastName, age, adress, cin, login, password,phone, looked, enabled, authorities);
        this.inp = inp;
        this.specialty = specialty;
    }

    public Doctor() {

    }


}
