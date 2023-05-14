package pfa.account.creation.account_creation.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pfa.account.creation.account_creation.payload.MedecinResponse;
import pfa.account.creation.account_creation.payload.medecin.MedecinCreateDTO;
import pfa.account.creation.account_creation.payload.medecin.MedecinDTO;
import pfa.account.creation.account_creation.service.MedecinService;


@RestController
@RequestMapping("/api/v1/medcin")
@CrossOrigin(origins = "http://localhost:3000")

public class MedecinController {
    private MedecinService medecinService;

    @Autowired
    public MedecinController(MedecinService medecinService) {
        this.medecinService = medecinService;
    }

    @PostMapping("{cabinetId}/cabinet")
    public ResponseEntity<MedecinDTO> createMedecin(@PathVariable long cabinetId, @RequestBody MedecinCreateDTO medecinCreateDTO) {
        return new ResponseEntity<>(medecinService.createMedecin(medecinCreateDTO, cabinetId), HttpStatus.CREATED);
    }

    @DeleteMapping("/{medecinId}")
    public ResponseEntity<String> deleteMedcin(@PathVariable long medecinId) {
        medecinService.deleteMedecinById(medecinId);
        return new ResponseEntity<>("Medecin with id " + medecinId + " has been deleted", HttpStatus.OK);
    }

    @GetMapping
    public MedecinResponse getAllMedcin(@RequestParam(value = "pageNumber", defaultValue = "0", required = false) int pageNumber, @RequestParam(value = "pageSize", defaultValue = "5", required = false) int pageSize) {
        return medecinService.getAllMedcin(pageNumber, pageSize);
    }

    @GetMapping("/{medecinId}")
    public ResponseEntity<MedecinDTO> getMedecinWithID(@PathVariable long medecinId){
        return new ResponseEntity<>(medecinService.getMedecinById(medecinId),HttpStatus.OK);
    }
    @PutMapping("/{medecinId}")
    public ResponseEntity<MedecinDTO> updateMedecinWithId(@PathVariable long medecinId, @RequestBody MedecinCreateDTO medecinDTO){
        return new ResponseEntity<>(medecinService.updateMedecin(medecinDTO,medecinId),HttpStatus.OK);
    }


}
