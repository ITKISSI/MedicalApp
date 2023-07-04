package pfa.account.creation.account_creation.service.serviceImp;

import org.apache.tomcat.util.http.fileupload.FileUploadException;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import pfa.account.creation.account_creation.entity.Cabinet;
import pfa.account.creation.account_creation.entity.Medecin;
import pfa.account.creation.account_creation.exception.ResourceNotFoundException;
import pfa.account.creation.account_creation.payload.MedecinResponse;
import pfa.account.creation.account_creation.payload.medecin.MedecinCreateDTO;
import pfa.account.creation.account_creation.payload.medecin.MedecinDTO;
import pfa.account.creation.account_creation.repository.CabinetRepository;
import pfa.account.creation.account_creation.repository.MedecinRepository;
import pfa.account.creation.account_creation.service.MedecinService;
import pfa.account.creation.account_creation.utils.mapper.MedecinMapperAble;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;


@Service
public class MedecinServiceImp implements MedecinService {
    private MedecinRepository medecinRepository;
    private MedecinMapperAble medecinMapperAble;
    private CabinetRepository cabinetRepository;


    @Autowired
    public MedecinServiceImp(MedecinRepository medecinRepository, MedecinMapperAble medecinMapperAble, CabinetRepository cabinetRepository) {
        this.medecinRepository = medecinRepository;
        this.medecinMapperAble = medecinMapperAble;
        this.cabinetRepository = cabinetRepository;
    }

    @Override
    public MedecinResponse getAllMedcin(int pageNumber, int pageSize) {
        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        Page<Medecin> medecins = medecinRepository.findAll(pageable);
        List<MedecinDTO> content = medecins.getContent().stream()
                .map((item) -> {
                    Cabinet cabinet = cabinetRepository.findById(item.getCabinet().getId())
                            .orElseThrow(() -> new ResourceNotFoundException("Cabinet", "id", item.getCabinet().getId()));
                    return medecinMapperAble.mapToDtoWithOutLoginAndPassword(item, cabinet.getDenomination());
                })
                .collect(Collectors.toList());
        MedecinResponse medecinResponse = new MedecinResponse();
        medecinResponse.setMedecinList(content);
        medecinResponse.setPageNumber(medecins.getNumber());
        medecinResponse.setPageSize(medecins.getSize());
        medecinResponse.setTottalElements(medecins.getTotalElements());
        medecinResponse.setTotalPages(medecins.getTotalPages());
        medecinResponse.setLast(medecins.isLast());
        return medecinResponse;
    }

    @Override
    public MedecinDTO createMedecin(MedecinCreateDTO medecinCreateDTO, long cabinetId) {
        Cabinet cabinet = cabinetRepository.findById(cabinetId)
                .orElseThrow(() -> new ResourceNotFoundException("Cabinet", "id", cabinetId));

        Medecin medecin = medecinMapperAble.mapToEntity(medecinCreateDTO);
        medecin.setCabinet(cabinet);


        Medecin savedMedecin = medecinRepository.save(medecin);
        return medecinMapperAble.mapToDtoWithOutLoginAndPassword(savedMedecin, cabinet.getDenomination());
    }


    @Override
    public void deleteMedecinById(Long id) {
        Medecin medecin = medecinRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Medecin", "id", id));
        medecinRepository.delete(medecin);
    }

    @Override
    public MedecinDTO getMedecinById(Long id) {
        Medecin medecin = medecinRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Medecin", "id", id));
        Cabinet cabinet = cabinetRepository.findById(medecin.getCabinet().getId())
                .orElseThrow(() -> new ResourceNotFoundException("Cabinet", "id", medecin.getCabinet().getId()));


        return medecinMapperAble.mapToDtoWithOutLoginAndPassword(medecin,cabinet.getDenomination());
    }

    @Override
    public List<MedecinDTO> searchMedecin(String term) {
        return null;
    }

    private String uploadImage(MultipartFile imageFile) {
        try {
            // Generate a unique file name or use the original file name
            String fileName = UUID.randomUUID().toString() + "-" + imageFile.getOriginalFilename();

            // Specify the directory where you want to store the uploaded images
            String uploadDir = System.getProperty("user.dir") + "/uploads/";

            // Create the directory if it doesn't exist
            File dir = new File(uploadDir);
            if (!dir.exists()) {
                dir.mkdirs();
            }

            // Save the image file
            String filePath = uploadDir + fileName;
            File dest = new File(filePath);
            imageFile.transferTo(dest);

            return filePath;
        } catch (IOException e) {
            // Handle the exception accordingly
            e.printStackTrace();
            try {
                throw new FileUploadException("Failed to upload image.");
            } catch (FileUploadException ex) {
                throw new RuntimeException(ex);
            }
        }
    }


    @Override
    public MedecinDTO updateMedecin(MedecinCreateDTO medecinCreateDTO, long medecinId) {
        Medecin medecin = medecinRepository.findById(medecinId)
                .orElseThrow(() -> new ResourceNotFoundException("Medecin", "id", medecinId));

        Cabinet cabinet = cabinetRepository.findById(medecinCreateDTO.getCabinetId())
                .orElseThrow(() -> new ResourceNotFoundException("Cabinet", "id", medecinCreateDTO.getCabinetId()));

        medecin.setFirstName(medecinCreateDTO.getFirstName());
        medecin.setLastName(medecinCreateDTO.getLastName());
        medecin.setAge(medecinCreateDTO.getAge());
        medecin.setAdress(medecinCreateDTO.getAdress());
        medecin.setCin(medecinCreateDTO.getCin());
        medecin.setInp(medecinCreateDTO.getInp());
        medecin.setSpecialite(medecinCreateDTO.getSpecialite());
        medecin.setCabinet(cabinet);
        medecinRepository.save(medecin);

        return medecinMapperAble.mapToDtoWithOutLoginAndPassword(medecin, cabinet.getDenomination());
    }


    @Override
    public List<MedecinDTO> getMedecinByCabinetId(long cabinetId) {
        Cabinet cabinet = cabinetRepository.findById(cabinetId).orElseThrow(() -> new ResourceNotFoundException("Cabinet", "id", cabinetId));
        List<Medecin> cabinets = medecinRepository.findByCabinetId(cabinetId);

        return cabinets.stream().map((item) -> medecinMapperAble.mapToDtoWithOutLoginAndPassword(item,cabinet.getDenomination())).collect(Collectors.toList());
    }
}
