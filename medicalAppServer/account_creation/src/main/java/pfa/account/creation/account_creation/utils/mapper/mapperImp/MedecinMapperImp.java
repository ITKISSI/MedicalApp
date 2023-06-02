package pfa.account.creation.account_creation.utils.mapper.mapperImp;

import org.springframework.stereotype.Component;
import pfa.account.creation.account_creation.entity.Cabinet;
import pfa.account.creation.account_creation.entity.Medecin;
import pfa.account.creation.account_creation.payload.medecin.MedecinCreateDTO;
import pfa.account.creation.account_creation.payload.medecin.MedecinDTO;
import pfa.account.creation.account_creation.utils.mapper.MedecinMapperAble;

@Component
public class MedecinMapperImp implements MedecinMapperAble {
    @Override
    public Medecin mapToEntity(MedecinCreateDTO medecinCreateDTO) {
        Medecin medecin = new Medecin();
        medecin.setFirstName(medecinCreateDTO.getFirstName());
        medecin.setLastName(medecinCreateDTO.getLastName());
        medecin.setAge(medecinCreateDTO.getAge());
        medecin.setAdress(medecinCreateDTO.getAdress());
        medecin.setCin(medecinCreateDTO.getCin());
        medecin.setPassword(medecinCreateDTO.getPassword());
        medecin.setLogin(medecinCreateDTO.getLogin());
        medecin.setInp(medecinCreateDTO.getInp());
        medecin.setSpecialite(medecinCreateDTO.getSpecialite());
        medecin.setImagePath(medecinCreateDTO.getImageFile().toString());
        /*
           Cabinet cabinet = new Cabinet();
        cabinet.setId(medecinCreateDTO.getCabinetId());
        medecin.setCabinet(cabinet);
         */
        // Set the cabinet using the provided cabinetId

        return medecin;
    }

    @Override
    public MedecinDTO mapToDtoWithOutLoginAndPassword(Medecin medecin,String workingCabinet) {
        MedecinDTO medecinDTO = new MedecinDTO();
        medecinDTO.setId(medecin.getId());
        medecinDTO.setFirstName(medecin.getFirstName());
        medecinDTO.setLastName(medecin.getLastName());
        medecinDTO.setAge(medecin.getAge());
        medecinDTO.setAdress(medecin.getAdress());
        medecinDTO.setCin(medecin.getCin());
        medecinDTO.setInp(medecin.getInp());
        medecinDTO.setSpecialite(medecin.getSpecialite());
        medecinDTO.setCabinetId(medecin.getCabinet().getId());
        medecinDTO.setImagePath(medecin.getImagePath());
        medecinDTO.setWorkingCabinet(workingCabinet);

        return medecinDTO;
    }
}
