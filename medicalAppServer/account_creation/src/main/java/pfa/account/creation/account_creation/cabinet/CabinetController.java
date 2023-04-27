package pfa.account.creation.account_creation.cabinet;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pfa.account.creation.account_creation.medcin.Medecin;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/cabinet")
public class CabinetController {
    private CabinetService cabinetService;


    @Autowired
    public CabinetController(CabinetService cabinetService) {
        this.cabinetService = cabinetService;
    }
    @GetMapping()
    public List<Cabinet> getAllCabinet(){
        return cabinetService.getAllCabinet();
    }
    @PostMapping
    public Cabinet addCabinet(@RequestBody Cabinet cabinet){
       return cabinetService.upSertCabinet(cabinet);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Cabinet> getCabinetById(@PathVariable Long id) {
        Optional<Cabinet> cabinetOptional = cabinetService.getCabinetById(id);

        if (cabinetOptional.isPresent()) {
            Cabinet medecin = cabinetOptional.get();
            return ResponseEntity.ok(medecin);
        }

        return ResponseEntity.notFound().build();
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMedcin(@PathVariable Long id){
        boolean deleted = cabinetService.deleteCabinetById(id);
        if (!deleted){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.noContent().build();
    }
    @PutMapping("/{id}")
    public ResponseEntity<Cabinet> updateMedecinById(@PathVariable Long id, @RequestBody Cabinet updatedCabinet) {
        Optional<Cabinet> cabinetOptional = cabinetService.getCabinetById(id);
        if (cabinetOptional.isPresent()) {
            Cabinet cabinet = cabinetOptional.get();
            // Update the fields of the medecin entity with the values from the updatedMedecin object
            cabinet.setDenomination(updatedCabinet.getDenomination());
            cabinet.setAdresse(updatedCabinet.getAdresse());
            cabinet.setTelephone(updatedCabinet.getTelephone());
            cabinet.setLongitude(updatedCabinet.getLongitude());
            cabinet.setLatitude(updatedCabinet.getLatitude());
            cabinet.setMedecins(updatedCabinet.getMedecins());
            // Save the updated medecin entity to the database
            Cabinet savedCabinet = cabinetService.upSertCabinet(cabinet);
            return ResponseEntity.ok(savedCabinet);
        }
        return ResponseEntity.notFound().build();
    }
}
