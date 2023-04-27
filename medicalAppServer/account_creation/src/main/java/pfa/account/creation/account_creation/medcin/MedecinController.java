package pfa.account.creation.account_creation.medcin;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@Controller
@RestController
@RequestMapping("/api/v1/medcin")
public class MedecinController {
    private MedecinService medcinService;

    @Autowired
    public MedecinController(MedecinService medcinService) {
        this.medcinService = medcinService;
    }

    @GetMapping
    public List<Medecin> getAllMedcin(){
        return medcinService.getAllMedcin();
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
