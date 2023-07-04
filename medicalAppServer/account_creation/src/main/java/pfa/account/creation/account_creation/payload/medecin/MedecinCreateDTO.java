package pfa.account.creation.account_creation.payload.medecin;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MedecinCreateDTO extends UserDTO {
    private String password;
    private String login;
    private int inp;
    private String specialite;
    private Long cabinetId;

}