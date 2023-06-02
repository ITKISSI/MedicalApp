package pfa.account.creation.account_creation;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import pfa.account.creation.account_creation.entity.Cabinet;
import pfa.account.creation.account_creation.payload.CabinetDTO;
import pfa.account.creation.account_creation.payload.CabinetResponse;
import pfa.account.creation.account_creation.repository.CabinetRepository;
import pfa.account.creation.account_creation.service.serviceImp.CabinetServiceImp;
import pfa.account.creation.account_creation.utils.mapper.CabinetMapperAble;

import java.util.Arrays;
import java.util.List;

import java.time.LocalTime;
import java.util.Arrays;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.times;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)

public class CabinetServiceImpTest {


    @Mock
    private CabinetRepository cabinetRepository;

    @Mock
    private CabinetMapperAble cabinetMapperAble;

    @InjectMocks
    private CabinetServiceImp cabinetService;

    private CabinetDTO cabinetDTO;
    private Cabinet cabinet;

    @BeforeEach
    void setUp() {
        // Initialize test data
        cabinetDTO = new CabinetDTO();
        cabinet = new Cabinet();
    }

    @Test
    void getAllCabinet() {
        // Arrange
        Pageable pageable = PageRequest.of(0, 1);
        List<Cabinet> cabinetList = Arrays.asList(cabinet);
        Page<Cabinet> cabinetPage = new PageImpl<>(cabinetList, pageable, 1);
        when(cabinetRepository.findAll(pageable)).thenReturn(cabinetPage);
        when(cabinetMapperAble.mapToDto(cabinet)).thenReturn(cabinetDTO);

        // Act
        CabinetResponse response = cabinetService.getAllCabinet(0, 1);

        // Assert
        assertNotNull(response);
        assertEquals(1, response.getCabinetList().size());
        verify(cabinetRepository, times(1)).findAll(pageable);
    }

    void createCabinet() {
        // Arrange
        when(cabinetMapperAble.mapToEntity(cabinetDTO)).thenReturn(cabinet);
        when(cabinetRepository.save(cabinet)).thenReturn(cabinet);

        // Act
        CabinetDTO response = cabinetService.createCabinet(cabinetDTO);

        // Assert
        assertNotNull(response);
        verify(cabinetRepository, times(1)).save(cabinet);
    }

    @Test
    void getCabinetById() {
        // Arrange
        when(cabinetRepository.findById(1L)).thenReturn(Optional.of(cabinet));
        when(cabinetMapperAble.mapToDto(cabinet)).thenReturn(cabinetDTO);

        // Act
        CabinetDTO response = cabinetService.getCabinetById(1L);

        // Assert
        assertNotNull(response);
        verify(cabinetRepository, times(1)).findById(1L);
    }

    @Test
    void deleteCabinetById() {
        // Arrange
        when(cabinetRepository.findById(1L)).thenReturn(Optional.of(cabinet));

        // Act
        cabinetService.deleteCabinetById(1L);

        // Assert
        verify(cabinetRepository, times(1)).delete(cabinet);
    }

    void updateCabinet() {
        // Arrange
        CabinetDTO updatedCabinetDTO = new CabinetDTO();
        Cabinet updatedCabinet = new Cabinet();
        when(cabinetRepository.findById(1L)).thenReturn(Optional.of(cabinet));
        when(cabinetMapperAble.mapToEntity(updatedCabinetDTO)).thenReturn(updatedCabinet);
        when(cabinetRepository.save(cabinet)).thenReturn(cabinet);

        // Act
        CabinetDTO response = cabinetService.updateCabinet(updatedCabinetDTO, 1L);

        // Assert
        assertNotNull(response);
        verify(cabinetRepository, times(1)).save(cabinet);
    }

    @Test
    void calculateDistanceBetweenCoordinates() {
        // Arrange
        double cabinetLongitude = 0.0;
        double cabinetLatitude = 0.0;
        double userLongitude = 0.0;
        double userLatitude = 0.0;

        // Act
        double distance = cabinetService.calculateDistanceBetweenCoordinates(
                cabinetLongitude, cabinetLatitude, userLongitude, userLatitude);

        // Assert
        assertEquals(0.0, distance);
    }
}
