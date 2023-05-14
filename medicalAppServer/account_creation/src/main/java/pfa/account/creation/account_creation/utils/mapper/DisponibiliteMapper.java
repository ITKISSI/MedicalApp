package pfa.account.creation.account_creation.utils.mapper;

import pfa.account.creation.account_creation.entity.Disponibilite;
import pfa.account.creation.account_creation.payload.DisponibiliteDTO;

public interface DisponibiliteMapper {
    Disponibilite mapToEntity(DisponibiliteDTO disponibiliteDTO);
    DisponibiliteDTO mapToDTO(Disponibilite disponibilite);
}