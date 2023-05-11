package pfa.account.creation.account_creation.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import pfa.account.creation.account_creation.entity.Cabinet;
import pfa.account.creation.account_creation.payload.CabinetResponse;
import pfa.account.creation.account_creation.repository.CabinetRepository;

import java.util.List;
import java.util.Optional;

@Service
public class CabinetServiceImp implements CabinetService{

    private CabinetRepository cabinetRepository;

    @Autowired
    public CabinetServiceImp(CabinetRepository cabinetRepository) {
        this.cabinetRepository = cabinetRepository;
    }

    @Override
    public CabinetResponse getAllCabinet(int pageNumber,int pageSize){
        Pageable pageable= PageRequest.of(pageNumber,pageSize);

        Page<Cabinet> cabinets=cabinetRepository.findAll(pageable);

        List<Cabinet> content=cabinets.getContent();

        CabinetResponse cabinetResponse=new CabinetResponse();
        cabinetResponse.setCabinetList(content);
        cabinetResponse.setPageNumber(cabinets.getNumber());
        cabinetResponse.setPageSize(cabinets.getSize());
        cabinetResponse.setTottalElements(cabinets.getTotalElements());
        cabinetResponse.setTotalPages(cabinets.getTotalPages());
        cabinetResponse.setLast(cabinets.isLast());

        return  cabinetResponse;
    }
    @Override

    public Cabinet upSertCabinet(Cabinet cabinet) {
        return cabinetRepository.save(cabinet);
    }
    @Override

    public Optional<Cabinet> getCabinetById(Long id) {
        return cabinetRepository.findById(id);
    }
    @Override
    public Boolean deleteCabinetById(Long id){
        Optional<Cabinet> cabinetOptional=cabinetRepository.findById(id);
        if (cabinetOptional.isPresent()){
            cabinetRepository.deleteById(id);
            return true;
        }
        return false;
    }


}
