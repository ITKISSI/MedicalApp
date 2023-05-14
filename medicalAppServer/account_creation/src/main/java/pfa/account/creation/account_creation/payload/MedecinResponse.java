package pfa.account.creation.account_creation.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import pfa.account.creation.account_creation.entity.Cabinet;
import pfa.account.creation.account_creation.entity.Medecin;
import pfa.account.creation.account_creation.payload.medecin.MedecinDTO;

import java.util.List;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MedecinResponse {
    private List<MedecinDTO> medecinList;
    private int pageNumber;
    private int pageSize;
    private long tottalElements;
    private int totalPages;
    private boolean last;
}
