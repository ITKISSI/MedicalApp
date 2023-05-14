package pfa.account.creation.account_creation.service.impl;

import pfa.account.creation.account_creation.payload.medecin.MedecinCreateDTO;
import pfa.account.creation.account_creation.payload.MedecinResponse;
import pfa.account.creation.account_creation.payload.medecin.MedecinDTO;

import java.util.List;

public interface MedecinService {
     MedecinResponse getAllMedcin(int pageNumber, int pageSize);
     MedecinDTO createMedecin(MedecinCreateDTO medecinCreateDTO,long cabinetId);
     void deleteMedecinById(Long id);
     MedecinDTO getMedecinById(Long id);
     List<MedecinDTO> searchMedecin(String term);
     MedecinDTO updateMedecin(MedecinCreateDTO medecinCreateDTO,long medecinId);

     List<MedecinDTO> getMedecinByCabinetId(long cabinetId);
}
