package pfa.account.creation.account_creation.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pfa.account.creation.account_creation.payload.CabinetDTO;
import pfa.account.creation.account_creation.payload.CabinetResponse;
import pfa.account.creation.account_creation.payload.medecin.MedecinDTO;
import pfa.account.creation.account_creation.service.impl.CabinetService;
import pfa.account.creation.account_creation.service.impl.CabinetServiceImp;
import pfa.account.creation.account_creation.service.impl.MedecinService;
import pfa.account.creation.account_creation.utils.AppConstants;

import java.util.List;


@RestController
@RequestMapping("/api/v1/cabinet")
@CrossOrigin(origins = "http://localhost:3000")

public class CabinetController {
    private CabinetService cabinetService;
    private MedecinService medecinService;
    @Autowired
    public CabinetController(CabinetService cabinetService, MedecinService medecinService) {
        this.cabinetService = cabinetService;
        this.medecinService = medecinService;
    }
    @PostMapping
    public ResponseEntity<CabinetDTO> createCabinet(@RequestBody CabinetDTO cabinetDTO) {
        return new ResponseEntity<>(cabinetService.createCabinet(cabinetDTO), HttpStatus.CREATED);
    }

    @GetMapping
    public CabinetResponse getAllCabinet(@RequestParam(defaultValue = AppConstants.PAGE_NUMBER, required = false) int pageNumber, @RequestParam(defaultValue = AppConstants.PAGE_SIZE, required = false) int pageSize) {
        return cabinetService.getAllCabinet(pageNumber, pageSize);
    }
    @GetMapping("/{id}")
    public ResponseEntity<CabinetDTO> getCabinetById(@PathVariable long id) {
        return new ResponseEntity<>(cabinetService.getCabinetById(id), HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCabineyById(@PathVariable long id) {
        cabinetService.deleteCabinetById(id);
        return new ResponseEntity<>("Cabinet with " + id + " deleted", HttpStatus.OK);
    }
    @PutMapping("/{id}")
    public ResponseEntity<CabinetDTO> updateCabinet(@PathVariable long id , @RequestBody CabinetDTO cabinetDTO){
        return new ResponseEntity<>(cabinetService.updateCabinet(cabinetDTO,id),HttpStatus.OK);
    }
    @GetMapping("/{cabinetId}/medecin")
    public List<MedecinDTO> getMedecinInCabinet(@PathVariable long cabinetId){
        return medecinService.getMedecinByCabinetId(cabinetId);
    }
}