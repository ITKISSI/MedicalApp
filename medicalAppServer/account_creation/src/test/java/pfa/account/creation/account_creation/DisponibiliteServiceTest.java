package pfa.account.creation.account_creation;


import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import pfa.account.creation.account_creation.entity.Disponibilite;
import pfa.account.creation.account_creation.entity.Medecin;
import pfa.account.creation.account_creation.payload.DisponibiliteDTO;
import pfa.account.creation.account_creation.repository.DisponibiliteRepository;
import pfa.account.creation.account_creation.repository.MedecinRepository;
import pfa.account.creation.account_creation.service.serviceImp.DisponibiliteServiceImp;
import pfa.account.creation.account_creation.utils.mapper.DisponibiliteMapper;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalTime;
import java.util.Arrays;
import java.util.Optional;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.times;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class DisponibiliteServiceTest {

    @InjectMocks
    private DisponibiliteServiceImp disponibiliteService;

    @Mock
    private DisponibiliteRepository disponibiliteRepository;

    @Mock
    private DisponibiliteMapper disponibiliteMapper;

    @Mock
    private MedecinRepository medecinRepository;

    @Test
    public void testCreateDisponibilite() {
        // Arrange
        Medecin medecin = new Medecin();
        medecin.setId(1L);

        DisponibiliteDTO disponibiliteDTO = new DisponibiliteDTO();
        disponibiliteDTO.setId(1L);
        disponibiliteDTO.setJour("Monday");
        disponibiliteDTO.setStartTime(LocalTime.of(10,0));
        disponibiliteDTO.setEndTime(LocalTime.of(18,0));

        Disponibilite disponibilite = new Disponibilite();
        disponibilite.setId(1L);
        disponibilite.setJour("Monday");
        disponibilite.setStartTime(LocalTime.of(10,0));
        disponibilite.setEndTime(LocalTime.of(18,0));
        disponibilite.setMedecin(medecin);

        when(medecinRepository.findById(anyLong())).thenReturn(Optional.of(medecin));
        when(disponibiliteMapper.mapToEntity(any())).thenReturn(disponibilite);
        when(disponibiliteRepository.save(any())).thenReturn(disponibilite);
        when(disponibiliteMapper.mapToDTO(any())).thenReturn(disponibiliteDTO);

        // Act
        disponibiliteService.createDisponibilite(Arrays.asList(disponibiliteDTO), 1L);

        // Assert
        verify(medecinRepository, times(1)).findById(anyLong());
        verify(disponibiliteMapper, times(1)).mapToEntity(any());
        verify(disponibiliteRepository, times(1)).save(any());
        verify(disponibiliteMapper, times(1)).mapToDTO(any());
    }

    @Test
    public void testDeleteDisponibilite() {
        // Arrange
        Disponibilite disponibilite = new Disponibilite();
        when(disponibiliteRepository.findById(anyLong())).thenReturn(Optional.of(disponibilite));

        // Act
        disponibiliteService.deleteDisponibilite(1L);

        // Assert
        verify(disponibiliteRepository, times(1)).delete(disponibilite);
    }

    @Test
    public void testGetDisponibilite() {
        // Arrange
        Disponibilite disponibilite = new Disponibilite();
        when(disponibiliteRepository.findById(anyLong())).thenReturn(Optional.of(disponibilite));
        when(disponibiliteMapper.mapToDTO(any())).thenReturn(new DisponibiliteDTO());

        // Act
        disponibiliteService.getDisponibilite(1L);

        // Assert
        verify(disponibiliteRepository, times(1)).findById(1L);
        verify(disponibiliteMapper, times(1)).mapToDTO(disponibilite);
    }


    @Test
    public void testGetMedecinDisponibilite() {
        // Arrange
        Medecin medecin = new Medecin();
        when(medecinRepository.findById(anyLong())).thenReturn(Optional.of(medecin));
        when(disponibiliteRepository.findByMedecinId(anyLong())).thenReturn(Arrays.asList(new Disponibilite()));

        // Act
        disponibiliteService.getMedecinDisponibilite(1L);

        // Assert
        verify(medecinRepository, times(1)).findById(1L);
        verify(disponibiliteRepository, times(1)).findByMedecinId(1L);
    }


    @Test
    public void testUpdateDisponibilite() {
        // Arrange
        DisponibiliteDTO disponibiliteDTO = new DisponibiliteDTO();
        disponibiliteDTO.setJour("Tuesday");
        disponibiliteDTO.setStartTime(LocalTime.of(9,0));
        disponibiliteDTO.setEndTime(LocalTime.of(17,0));

        Disponibilite disponibilite = new Disponibilite();
        when(disponibiliteRepository.findById(anyLong())).thenReturn(Optional.of(disponibilite));
        when(disponibiliteRepository.save(any())).thenReturn(disponibilite);
        when(disponibiliteMapper.mapToDTO(any())).thenReturn(new DisponibiliteDTO());

        // Act
        disponibiliteService.updateDisponibilite(disponibiliteDTO, 1L);

        // Assert
        verify(disponibiliteRepository, times(1)).findById(1L);
        verify(disponibiliteRepository, times(1)).save(disponibilite);
        verify(disponibiliteMapper, times(1)).mapToDTO(disponibilite);
    }


}
