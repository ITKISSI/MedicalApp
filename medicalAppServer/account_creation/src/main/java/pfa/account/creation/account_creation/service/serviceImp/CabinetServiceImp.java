package pfa.account.creation.account_creation.service.serviceImp;

import org.apache.tomcat.util.http.fileupload.FileUploadException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import pfa.account.creation.account_creation.entity.Cabinet;
import pfa.account.creation.account_creation.entity.CabinetImages;
import pfa.account.creation.account_creation.exception.ResourceNotFoundException;
import pfa.account.creation.account_creation.payload.CabinetDTO;
import pfa.account.creation.account_creation.payload.CabinetResponse;
import pfa.account.creation.account_creation.repository.CabinetRepository;
import pfa.account.creation.account_creation.service.CabinetService;
import pfa.account.creation.account_creation.utils.mapper.CabinetMapperAble;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;
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

        // Upload each image and save the path in the database
        for (MultipartFile imageFile : cabinetDTO.getImageFiles()) {
            String imagePath = uploadImage(imageFile);

            // Create a new CabinetImages object
            CabinetImages cabinetImages = new CabinetImages();
            cabinetImages.setCabinet(cabinet); // Set the Cabinet
            cabinetImages.setAlt("Optional alt text"); // Set an optional alt text

            // Set the image path
            cabinetImages.setImagePath(imagePath);

            // Add the CabinetImages object to the Cabinet
            cabinet.getCabinetImages().add(cabinetImages);
        }

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
        Cabinet comingCabinet = cabinetMapperAble.mapToEntity(cabinetDTO);
        newCabinet.setDenomination(comingCabinet.getDenomination());
        newCabinet.setAdresse(comingCabinet.getAdresse());
        newCabinet.setTelephone(comingCabinet.getTelephone());
        newCabinet.setLongitude(comingCabinet.getLongitude());
        newCabinet.setLatitude(comingCabinet.getLatitude());
        cabinetRepository.save(newCabinet);
        return cabinetMapperAble.mapToDto(newCabinet);
    }

    @Override
    public double calculateDistanceBetweenCoordinates(double cabinetLongitude, double cabinetLatitude, double userLongitude, double userLatitude) {
        // Convert coordinates to radians
        double lon1Rad = Math.toRadians(cabinetLongitude);
        double lat1Rad = Math.toRadians(cabinetLatitude);
        double lon2Rad = Math.toRadians(userLongitude);
        double lat2Rad = Math.toRadians(userLatitude);

        // Earth radius in kilometers
        double earthRadius = 6371;

        // Calculate the differences in coordinates
        double lonDiff = lon2Rad - lon1Rad;
        double latDiff = lat2Rad - lat1Rad;

        // Haversine formula
        double a = Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
                Math.cos(lat1Rad) * Math.cos(lat2Rad) *
                        Math.sin(lonDiff / 2) * Math.sin(lonDiff / 2);
        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        // Calculate the distance
        double distance = earthRadius * c;

        return distance;
    }
    private String uploadImage(MultipartFile imageFile) {
        try {
            // Generate a unique file name or use the original file name
            String fileName = UUID.randomUUID().toString() + "-" + imageFile.getOriginalFilename();

            // Specify the directory where you want to store the uploaded images
            String uploadDir = System.getProperty("user.dir") + "/uploads/cabinet";

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

}
