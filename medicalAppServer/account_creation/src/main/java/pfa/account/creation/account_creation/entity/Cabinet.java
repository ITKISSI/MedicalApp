package pfa.account.creation.account_creation.entity;


import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.ArrayList;
import java.util.List;
    @Entity(name = "Cabinet")
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public class Cabinet {
        @Id
        @GeneratedValue(strategy = GenerationType.SEQUENCE)
        @Column(name = "cabinet_id")
        private Long id;
        private String denomination;
        private String adresse;
        private int telephone;
        private double longitude;
        private double latitude;
        @OneToMany(mappedBy = "cabinet",cascade = CascadeType.ALL,orphanRemoval = true)
        private List<Medecin> medecins = new ArrayList<>();
    }
