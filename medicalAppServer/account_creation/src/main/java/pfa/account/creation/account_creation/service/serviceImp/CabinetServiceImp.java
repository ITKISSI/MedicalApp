package pfa.account.creation.account_creation.service.serviceImp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import pfa.account.creation.account_creation.entity.Cabinet;
import pfa.account.creation.account_creation.exception.ResourceNotFoundException;
import pfa.account.creation.account_creation.payload.CabinetDTO;
import pfa.account.creation.account_creation.payload.CabinetResponse;
import pfa.account.creation.account_creation.repository.CabinetRepository;
import pfa.account.creation.account_creation.service.CabinetService;
import pfa.account.creation.account_creation.utils.mapper.CabinetMapperAble;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CabinetServiceImp implements CabinetService {

    private CabinetRepository cabinetRepository;
    private CabinetMapperAble cabinetMapperAble;

    @Autowired
    public CabinetServiceImp(CabinetRepository cabinetRepository, CabinetMapperAble cabinetMapperAble) {
        this.cabinetRepository = cabinetRepository;
        this.cabinetMapperAble = cabinetMapperAble;
    }

    @Override
    public CabinetResponse getAllCabinet(int pageNumber, int pageSize) {
        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        Page<Cabinet> cabinets = cabinetRepository.findAll(pageable);
        List<CabinetDTO> content = cabinets.getContent().stream().map((item) -> cabinetMapperAble.mapToDto(item)).collect(Collectors.toList());
        CabinetResponse cabinetResponse = new CabinetResponse();
        cabinetResponse.setCabinetList(content);
        cabinetResponse.setPageNumber(cabinets.getNumber());
        cabinetResponse.setPageSize(cabinets.getSize());
        cabinetResponse.setTottalElements(cabinets.getTotalElements());
        cabinetResponse.setTotalPages(cabinets.getTotalPages());
        cabinetResponse.setLast(cabinets.isLast());
        return cabinetResponse;
    }

    @Override
    public CabinetDTO createCabinet(CabinetDTO cabinetDTO) {
        Cabinet cabinet = cabinetMapperAble.mapToEntity(cabinetDTO);
        Cabinet savedCabinet = cabinetRepository.save(cabinet);
        return cabinetMapperAble.mapToDto(savedCabinet);
    }

    @Override
    public CabinetDTO getCabinetById(Long id) {
        Cabinet cabinet = cabinetRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Cabinet", "id", id));
        return cabinetMapperAble.mapToDto(cabinet);
    }
    @Override
    public void deleteCabinetById(Long id) {
        Cabinet cabinet = cabinetRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Cabinet", "id", id));
        cabinetRepository.delete(cabinet);
    }

    @Override
    public CabinetDTO updateCabinet(CabinetDTO cabinetDTO, long cabinetId) {
        Cabinet newCabinet = cabinetRepository.findById(cabinetId).orElseThrow(() -> new ResourceNotFoundException("Cabinet", "id", cabinetId));
        Cabinet comingCabinet=cabinetMapperAble.mapToEntity(cabinetDTO);
        newCabinet.setDenomination(comingCabinet.getDenomination());
        newCabinet.setAdresse(comingCabinet.getAdresse());
        newCabinet.setTelephone(comingCabinet.getTelephone());
        newCabinet.setLongitude(comingCabinet.getLongitude());
        newCabinet.setLatitude(comingCabinet.getLatitude());
        cabinetRepository.save(newCabinet);
        return cabinetMapperAble.mapToDto(newCabinet);
    }

}
