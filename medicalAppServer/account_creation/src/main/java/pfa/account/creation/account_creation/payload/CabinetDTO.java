package pfa.account.creation.account_creation.payload;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CabinetDTO {
    private Long id;
    private String denomination;
    private String adresse;
    private int telephone;
    private double longitude;
    private double latitude;

    private List<MultipartFile> imageFiles; // Field to hold multiple image files

}
