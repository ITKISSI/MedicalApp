package pfa.account.creation.account_creation.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import pfa.account.creation.account_creation.dto.MedecinDto;
import pfa.account.creation.account_creation.entity.Medecin;
import pfa.account.creation.account_creation.payload.MedecinResponse;
import pfa.account.creation.account_creation.service.impl.MedecinServiceImp;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/v1/medcin")
@CrossOrigin(origins = "http://localhost:3000")

public class MedecinController {
    private MedecinServiceImp medcinService;

    @Autowired
    public MedecinController(MedecinServiceImp medcinService) {
        this.medcinService = medcinService;
    }

    @GetMapping
    @PreAuthorize("hasRole('Admin')")

    public MedecinResponse getAllMedcin(@RequestParam(value = "pageNumber",defaultValue = "0",required = false )int pageNumber, @RequestParam(value = "pageSize",defaultValue = "5",required = false) int pageSize){
        return medcinService.getAllMedcin(pageNumber,pageSize);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Medecin>> searchMedecin(@RequestParam("term") String term) {
        List<Medecin> searchResult = medcinService.searchMedecin(term);
        if (!searchResult.isEmpty()) {
            return ResponseEntity.ok(searchResult);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @GetMapping("/{id}")
    public ResponseEntity<Medecin> getMedecinById(@PathVariable Long id) {
        Optional<Medecin> medecinOptional = medcinService.getMedecinById(id);

        if (medecinOptional.isPresent()) {
            Medecin medecin = medecinOptional.get();
            return ResponseEntity.ok(medecin);
        }

        return ResponseEntity.notFound().build();
    }
    @PostMapping
    @PreAuthorize("hasRole('Admin')")

    public Medecin addMedcin(@RequestBody Medecin medecin){
        return medcinService.upSertMedcin(medecin);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMedcin(@PathVariable Long id){
        boolean deleted = medcinService.deleteMedecinById(id);
        if (!deleted){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.noContent().build();
    }
    @PutMapping("/{id}")
    public ResponseEntity<Medecin> updateMedecinById(@PathVariable Long id, @RequestBody Medecin updatedMedecin) {
        Optional<Medecin> medecinOptional = medcinService.getMedecinById(id);
        if (medecinOptional.isPresent()) {
            Medecin medecin = medecinOptional.get();
            // Update the fields of the medecin entity with the values from the updatedMedecin object
            medecin.setFirstName(updatedMedecin.getFirstName());
            medecin.setLastName(updatedMedecin.getLastName());
            medecin.setAge(updatedMedecin.getAge());
            medecin.setAdress(updatedMedecin.getAdress());
            medecin.setCin(updatedMedecin.getCin());
            medecin.setLogin(updatedMedecin.getLogin());
            medecin.setPassword(updatedMedecin.getPassword());
            medecin.setInp(updatedMedecin.getInp());
            medecin.setSpecialite(updatedMedecin.getSpecialite());
            // Save the updated medecin entity to the database
            Medecin savedMedecin = medcinService.upSertMedcin(medecin);
            return ResponseEntity.ok(savedMedecin);
        }
        return ResponseEntity.notFound().build();
    }
}
