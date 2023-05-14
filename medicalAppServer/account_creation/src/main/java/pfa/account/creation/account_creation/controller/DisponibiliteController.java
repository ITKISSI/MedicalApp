package pfa.account.creation.account_creation.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pfa.account.creation.account_creation.entity.Disponibilite;
import pfa.account.creation.account_creation.payload.DisponibiliteDTO;
import pfa.account.creation.account_creation.service.DisponibiliteService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/disponibilite")
public class DisponibiliteController {

    private DisponibiliteService disponibiliteService;

    @Autowired
    public DisponibiliteController(DisponibiliteService disponibiliteService) {
        this.disponibiliteService = disponibiliteService;
    }

    @PostMapping("/medecin/{medecinId}")
    public ResponseEntity<DisponibiliteDTO> createDisponibilite(@RequestBody DisponibiliteDTO disponibiliteDTO, @PathVariable long medecinId) {

        return new ResponseEntity<>(disponibiliteService.createDisponibilite(disponibiliteDTO, medecinId), HttpStatus.CREATED);
    }

    @GetMapping("/{disponibiliteId}")
    public ResponseEntity<DisponibiliteDTO> getDisponibiliteById(@PathVariable long disponibiliteId) {
        return new ResponseEntity<>(disponibiliteService.getDisponibilite(disponibiliteId), HttpStatus.OK);
    }

    @PutMapping("/{disponibiliteId}")
    public ResponseEntity<DisponibiliteDTO> updateDisponibilite(@RequestBody DisponibiliteDTO disponibilite, @PathVariable long disponibiliteId) {
        return new ResponseEntity<>(disponibiliteService.updateDisponibilite(disponibilite, disponibiliteId), HttpStatus.OK);
    }
    @DeleteMapping("{disponibiliteId}")
    public ResponseEntity<String> deleteDisponibilite(@PathVariable long disponibiliteId) {
        disponibiliteService.deleteDisponibilite(disponibiliteId);
        return new ResponseEntity<>("Disponibilite with id " + disponibiliteId + " has been deleted", HttpStatus.OK);
    }
    @GetMapping("/medecin/{medecinId}")
    public List<DisponibiliteDTO> getAllMedecinDisponibilities(@PathVariable long medecinId){
        return disponibiliteService.getMedecinDisponibilite(medecinId);
    }

}
