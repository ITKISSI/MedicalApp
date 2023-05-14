package pfa.account.creation.account_creation.utils.mapper;

import pfa.account.creation.account_creation.entity.Cabinet;
import pfa.account.creation.account_creation.payload.CabinetDTO;

public interface CabinetMapperAble {
    Cabinet mapToEntity(CabinetDTO dto);
    CabinetDTO mapToDto(Cabinet entity);
}
