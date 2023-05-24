package pfa.account.creation.account_creation.service.serviceImp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pfa.account.creation.account_creation.entity.Cabinet;
import pfa.account.creation.account_creation.entity.Disponibilite;
import pfa.account.creation.account_creation.entity.Medecin;
import pfa.account.creation.account_creation.exception.ResourceNotFoundException;
import pfa.account.creation.account_creation.payload.DisponibiliteDTO;
import pfa.account.creation.account_creation.repository.DisponibiliteRepository;
import pfa.account.creation.account_creation.repository.MedecinRepository;
import pfa.account.creation.account_creation.service.DisponibiliteService;
import pfa.account.creation.account_creation.utils.mapper.DisponibiliteMapper;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class DisponibiliteServiceImp implements DisponibiliteService {

    private DisponibiliteRepository disponibiliteRepository;
    private DisponibiliteMapper disponibiliteMapper;
    private MedecinRepository medecinRepository;

    @Autowired
    public DisponibiliteServiceImp(DisponibiliteRepository disponibiliteRepository, DisponibiliteMapper disponibiliteMapper, MedecinRepository medecinRepository) {
        this.disponibiliteRepository = disponibiliteRepository;
        this.disponibiliteMapper = disponibiliteMapper;
        this.medecinRepository = medecinRepository;
    }

    @Override
    public List<DisponibiliteDTO> createDisponibilite(List<DisponibiliteDTO> disponibiliteDTO, long medecinId) {
        Medecin medecin = medecinRepository.findById(medecinId).orElseThrow(() -> new ResourceNotFoundException("Medecin", "id", medecinId));

        List<Disponibilite> disponibiliteList = disponibiliteDTO.stream().map((item) -> disponibiliteMapper.mapToEntity(item)).collect(Collectors.toList());

        disponibiliteList.forEach((item) -> item.setMedecin(medecin));
        disponibiliteList.forEach((disponibilite -> disponibiliteRepository.save(disponibilite)));

        return disponibiliteList.stream().map((item) -> disponibiliteMapper.mapToDTO(item)).collect(Collectors.toList());
    }

    @Override
    public void deleteDisponibilite(long disponibiliteId) {
        Disponibilite disponibilite = disponibiliteRepository.findById(disponibiliteId).orElseThrow(() -> new ResourceNotFoundException("Disponibilite", "id", disponibiliteId));
        disponibiliteRepository.delete(disponibilite);
    }

    @Override
    public DisponibiliteDTO getDisponibilite(long disponibiliteId) {
        Disponibilite disponibilite = disponibiliteRepository.findById(disponibiliteId).orElseThrow(() -> new ResourceNotFoundException("Disponibilite", "id", disponibiliteId));
        return disponibiliteMapper.mapToDTO(disponibilite);
    }

    @Override
    public List<DisponibiliteDTO> getMedecinDisponibilite(long medecinId) {
        Medecin medecin = medecinRepository.findById(medecinId).orElseThrow(() -> new ResourceNotFoundException("Medecin", "id", medecinId));
        List<Disponibilite> disponibiliteList = disponibiliteRepository.findByMedecinId(medecinId);
        return disponibiliteList.stream().map((item) -> disponibiliteMapper.mapToDTO(item)).collect(Collectors.toList());
    }

    @Override
    public DisponibiliteDTO updateDisponibilite(DisponibiliteDTO disponibiliteDTO, long disponibiliteId) {
        Disponibilite disponibilite = disponibiliteRepository.findById(disponibiliteId)
                .orElseThrow(() -> new ResourceNotFoundException("Disponibilite", "id", disponibiliteId));
        disponibilite.setJour(disponibiliteDTO.getJour());
        disponibilite.setStartTime(disponibiliteDTO.getStartTime());
        disponibilite.setEndTime(disponibiliteDTO.getEndTime());

        Disponibilite savedDisponibilite = disponibiliteRepository.save(disponibilite);

        return disponibiliteMapper.mapToDTO(savedDisponibilite);
    }

}
