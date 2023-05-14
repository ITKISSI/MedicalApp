package pfa.account.creation.account_creation.service;

import pfa.account.creation.account_creation.entity.Disponibilite;
import pfa.account.creation.account_creation.payload.DisponibiliteDTO;

import java.util.List;

public interface DisponibiliteService {

    DisponibiliteDTO createDisponibilite(DisponibiliteDTO disponibilite ,long medecinId);

    void deleteDisponibilite(long disponibiliteId);

    DisponibiliteDTO getDisponibilite(long disponibiliteId);

    List<DisponibiliteDTO> getMedecinDisponibilite(long medecinId);

    DisponibiliteDTO updateDisponibilite(DisponibiliteDTO disponibilite, long disponibiliteId);

}
