package pfa.account.creation.account_creation.utils.mapper;

import pfa.account.creation.account_creation.entity.Medecin;
import pfa.account.creation.account_creation.payload.medecin.MedecinCreateDTO;
import pfa.account.creation.account_creation.payload.medecin.MedecinDTO;

public interface MedecinMapperAble {
    Medecin mapToEntity(MedecinCreateDTO medecinCreateDTO);
    MedecinDTO mapToDtoWithOutLoginAndPassword(Medecin medecin,String workingCabinet);

}
