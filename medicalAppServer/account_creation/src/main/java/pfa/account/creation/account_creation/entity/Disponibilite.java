package pfa.account.creation.account_creation.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.cglib.core.Local;

import java.time.DayOfWeek;
import java.time.LocalTime;


@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class Disponibilite {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;
    private String jour;
    private LocalTime startTime;
    private LocalTime endTime;
    @ManyToOne
    @JoinColumn(name = "medecin_id",nullable = false) // to provide forienkey
    private Medecin medecin;

}
