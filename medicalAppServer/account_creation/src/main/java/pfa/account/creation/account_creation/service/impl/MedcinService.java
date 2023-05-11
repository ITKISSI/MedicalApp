package pfa.account.creation.account_creation.service.impl;

import pfa.account.creation.account_creation.entity.Medecin;
import pfa.account.creation.account_creation.payload.MedecinResponse;

import java.util.List;
import java.util.Optional;

public interface MedcinService {
     MedecinResponse getAllMedcin(int pageNumber, int pageSize);

     Medecin upSertMedcin(Medecin medecin);

     Boolean deleteMedecinById(Long id);

     Optional<Medecin> getMedecinById(Long id);

     List<Medecin> searchMedecin(String term);
}
