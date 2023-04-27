package pfa.account.creation.account_creation.cabinet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CabinetService {

    private CabinetRepository cabinetRepository;



    @Autowired
    public CabinetService(CabinetRepository cabinetRepository) {
        this.cabinetRepository = cabinetRepository;
    }

    public List<Cabinet> getAllCabinet(){
        return  cabinetRepository.findAll();
    }


    public Cabinet upSertCabinet(Cabinet cabinet) {
        return cabinetRepository.save(cabinet);
    }

    public Optional<Cabinet> getCabinetById(Long id) {
        return cabinetRepository.findById(id);
    }

    public Boolean deleteCabinetById(Long id){
        Optional<Cabinet> cabinetOptional=cabinetRepository.findById(id);
        if (cabinetOptional.isPresent()){
            cabinetRepository.deleteById(id);
            return true;
        }
        return false;
    }

}
