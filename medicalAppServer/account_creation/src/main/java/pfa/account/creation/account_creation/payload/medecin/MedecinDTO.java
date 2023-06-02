package pfa.account.creation.account_creation.payload.medecin;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MedecinDTO extends UserDTO {
    private int inp;
    private String specialite;
    private Long cabinetId;
    private String workingCabinet;
    private String imagePath; // New field for image path

}
