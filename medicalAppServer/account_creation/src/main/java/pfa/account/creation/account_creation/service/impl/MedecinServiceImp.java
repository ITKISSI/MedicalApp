package pfa.account.creation.account_creation.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import pfa.account.creation.account_creation.entity.Cabinet;
import pfa.account.creation.account_creation.entity.Medecin;
import pfa.account.creation.account_creation.payload.CabinetResponse;
import pfa.account.creation.account_creation.payload.MedecinResponse;
import pfa.account.creation.account_creation.repository.MedecinRepository;

import java.util.List;
import java.util.Optional;


@Service
public class MedecinServiceImp implements MedcinService {
    private MedecinRepository medecinRepository;


    @Autowired
    public MedecinServiceImp(MedecinRepository medecinRepository) {
        this.medecinRepository = medecinRepository;
    }

   @Override
    public MedecinResponse getAllMedcin(int pageNumber,int pageSize){
       Pageable pageable= PageRequest.of(pageNumber,pageSize);

       Page<Medecin> medecins=medecinRepository.findAll(pageable);

       List<Medecin> content=medecins.getContent();

       MedecinResponse medecinResponse=new MedecinResponse();
       medecinResponse.setMedecinList(content);
       medecinResponse.setPageNumber(medecins.getNumber());
       medecinResponse.setPageSize(medecins.getSize());
       medecinResponse.setTottalElements(medecins.getTotalElements());
       medecinResponse.setTotalPages(medecins.getTotalPages());
       medecinResponse.setLast(medecins.isLast());
       return medecinResponse;
    }

    @Override

    public Medecin upSertMedcin(Medecin medecin) {
        return medecinRepository.save(medecin);
    }

    @Override

    public Boolean deleteMedecinById(Long id){
        Optional<Medecin> medecinOptional=medecinRepository.findById(id);
        if (medecinOptional.isPresent()){
            medecinRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public Optional<Medecin> getMedecinById(Long id) {
        return medecinRepository.findById(id);
    }


}