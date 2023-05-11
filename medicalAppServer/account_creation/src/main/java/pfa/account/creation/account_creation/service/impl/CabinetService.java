package pfa.account.creation.account_creation.service.impl;

import pfa.account.creation.account_creation.entity.Cabinet;
import pfa.account.creation.account_creation.payload.CabinetResponse;

import java.util.Optional;

public interface CabinetService {
     CabinetResponse getAllCabinet(int pageNumber, int pageSize);
     Cabinet upSertCabinet(Cabinet cabinet);
     Optional<Cabinet> getCabinetById(Long id);
     Boolean deleteCabinetById(Long id);

}
