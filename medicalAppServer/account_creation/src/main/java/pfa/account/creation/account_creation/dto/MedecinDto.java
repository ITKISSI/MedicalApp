package pfa.account.creation.account_creation.dto;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import pfa.account.creation.account_creation.entity.Cabinet;
import pfa.account.creation.account_creation.entity.User;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MedecinDto extends User {
    private int inp;
    private String specialite;
    @ManyToOne
    @JsonBackReference
    private Cabinet cabinet;
}