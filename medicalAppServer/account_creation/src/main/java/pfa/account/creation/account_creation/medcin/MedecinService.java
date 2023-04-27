package pfa.account.creation.account_creation.medcin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class MedecinService {
    private MedecinRepository medecinRepository;


    @Autowired
    public MedecinService(MedecinRepository medecinRepository) {
        this.medecinRepository = medecinRepository;
    }
    public List<Medecin> getAllMedcin(){
      return medecinRepository.findAll();
    }
    public Medecin upSertMedcin(Medecin medecin) {
        return medecinRepository.save(medecin);
    }
    public Boolean deleteMedecinById(Long id){
        Optional<Medecin> medecinOptional=medecinRepository.findById(id);
        if (medecinOptional.isPresent()){
            medecinRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public Optional<Medecin> getMedecinById(Long id) {
        return medecinRepository.findById(id);
    }


}
