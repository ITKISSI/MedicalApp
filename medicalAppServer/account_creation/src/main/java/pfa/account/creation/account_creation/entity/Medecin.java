package pfa.account.creation.account_creation.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;
import pfa.account.creation.account_creation.entity.Cabinet;
import pfa.account.creation.account_creation.entity.User;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Medecin extends User {
    private int inp;
    private String specialite;
    @ManyToOne
    @JsonBackReference
    private Cabinet cabinet;}