package pfa.account.creation.account_creation.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import pfa.account.creation.account_creation.entity.Cabinet;

import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CabinetResponse {
    private List<Cabinet> cabinetList;
    private int pageNumber;
    private int pageSize;
    private long tottalElements;
    private int totalPages;
    private boolean last;


}
