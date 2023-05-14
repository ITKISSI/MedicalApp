package pfa.account.creation.account_creation.service;

import pfa.account.creation.account_creation.entity.Cabinet;
import pfa.account.creation.account_creation.payload.CabinetDTO;
import pfa.account.creation.account_creation.payload.CabinetResponse;

import java.util.Optional;

public interface CabinetService {
     CabinetResponse getAllCabinet(int pageNumber, int pageSize);
     CabinetDTO createCabinet(CabinetDTO cabinetDTO);
     CabinetDTO getCabinetById(Long id);
     void deleteCabinetById(Long id);
     CabinetDTO updateCabinet(CabinetDTO cabinetDTO,long cabinetId);

}
