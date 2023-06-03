package pfa.account.creation.account_creation.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;
import pfa.account.creation.account_creation.entity.Cabinet;
import pfa.account.creation.account_creation.entity.User;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Inheritance(strategy = InheritanceType.JOINED)

public class Medecin extends User {
    private int inp;
    private String specialite;

    private String imagePath; // New field for image path

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cabinet_id",nullable = false) // to provide forienkey
    private Cabinet cabinet;
    @OneToMany(mappedBy = "medecin",cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Disponibilite> disponibilites;


}