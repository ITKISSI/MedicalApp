package pfa.account.creation.account_creation.medcin;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.lang.NonNull;
import pfa.account.creation.account_creation.cabinet.Cabinet;
import pfa.account.creation.account_creation.user.User;
import javax.validation.constraints.NotNull;

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