package pfa.account.creation.account_creation.utils.mapper.mapperImp;

import org.springframework.stereotype.Component;
import pfa.account.creation.account_creation.entity.Disponibilite;
import pfa.account.creation.account_creation.payload.DisponibiliteDTO;
import pfa.account.creation.account_creation.utils.mapper.DisponibiliteMapper;

@Component
public class DisponibiliteMapperImpl implements DisponibiliteMapper {

    @Override
    public Disponibilite mapToEntity(DisponibiliteDTO disponibiliteDTO) {
        Disponibilite disponibilite = new Disponibilite();
        disponibilite.setId(disponibiliteDTO.getId());
        disponibilite.setJour(disponibiliteDTO.getJour());
        disponibilite.setStartTime(disponibiliteDTO.getStartTime());
        disponibilite.setEndTime(disponibiliteDTO.getEndTime());
        // Note: Assuming medecinId is already set in disponibiliteDTO

        return disponibilite;
    }

    @Override
    public DisponibiliteDTO mapToDTO(Disponibilite disponibilite) {
        DisponibiliteDTO disponibiliteDTO = new DisponibiliteDTO();
        disponibiliteDTO.setId(disponibilite.getId());
        disponibiliteDTO.setJour(disponibilite.getJour());
        disponibiliteDTO.setStartTime(disponibilite.getStartTime());
        disponibiliteDTO.setEndTime(disponibilite.getEndTime());
        return disponibiliteDTO;
    }
}
