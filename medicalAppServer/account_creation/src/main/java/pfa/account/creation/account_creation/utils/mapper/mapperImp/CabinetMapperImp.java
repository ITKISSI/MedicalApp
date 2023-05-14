package pfa.account.creation.account_creation.utils.mapper.mapperImp;

import org.springframework.stereotype.Component;
import pfa.account.creation.account_creation.entity.Cabinet;
import pfa.account.creation.account_creation.payload.CabinetDTO;
import pfa.account.creation.account_creation.utils.mapper.CabinetMapperAble;

@Component
public class CabinetMapperImp implements CabinetMapperAble {
    public Cabinet mapToEntity(CabinetDTO dto) {
        Cabinet entity = new Cabinet();
        entity.setId(dto.getId());
        entity.setDenomination(dto.getDenomination());
        entity.setAdresse(dto.getAdresse());
        entity.setTelephone(dto.getTelephone());
        entity.setLongitude(dto.getLongitude());
        entity.setLatitude(dto.getLatitude());
        // Mapping of medecins is not included here as it requires additional logic
        return entity;
    }

    public  CabinetDTO mapToDto(Cabinet entity) {
        CabinetDTO dto = new CabinetDTO();
        dto.setId(entity.getId());
        dto.setDenomination(entity.getDenomination());
        dto.setAdresse(entity.getAdresse());
        dto.setTelephone(entity.getTelephone());
        dto.setLongitude(entity.getLongitude());
        dto.setLatitude(entity.getLatitude());
        // Mapping of medecins is not included here as it requires additional logic
        return dto;
    }
}
