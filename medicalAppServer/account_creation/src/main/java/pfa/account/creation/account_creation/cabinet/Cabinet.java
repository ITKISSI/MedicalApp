package pfa.account.creation.account_creation.cabinet;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import pfa.account.creation.account_creation.medcin.Medecin;

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
        @OneToMany(mappedBy = "cabinet", cascade = CascadeType.ALL)
        @JsonManagedReference
        private List<Medecin> medecins = new ArrayList<>();
    }
