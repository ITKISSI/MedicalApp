package ma.eheio.suscriptionrdvpatient.controller;


import ma.eheio.suscriptionrdvpatient.exception.PatientNotFoundException;
import ma.eheio.suscriptionrdvpatient.model.Patient;
import ma.eheio.suscriptionrdvpatient.repository.PatientRepository;
import ma.eheio.suscriptionrdvpatient.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/patient")
@CrossOrigin("http://localhost:3000")
public class PatientController {

    @Autowired
    private PatientService patientService;

    @Autowired
    private PatientRepository patientRepository;

    @PostMapping("/add")
    public String add( @RequestBody Patient Patient){
        patientService.savePatient(Patient);
        return "Patient added successfully";
    }

    @GetMapping("/getAll")
    public List<Patient> getAll()
    {
        return patientService.getPatients();
    }

    @GetMapping("/getPatient/{id}")
    public Patient getPatientById(@PathVariable("id") int id)
    {
        return  patientService.findPatientById(id)
                .orElseThrow(()-> new PatientNotFoundException(id));
    }
    @PutMapping("/edit/{id}")
    public Patient update(@RequestBody Patient patientUpdated,@PathVariable("id") int id)
    {
        return patientService.findPatientById(id)
                        .map( Patient -> {
                            Patient.setFirstname(patientUpdated.getFirstname());
                            Patient.setLastname(patientUpdated.getLastname());
                            Patient.setCin(patientUpdated.getCin());
                            Patient.setAge(patientUpdated.getAge());
                            Patient.setAddress(patientUpdated.getAddress());
                            Patient.setEmail(patientUpdated.getEmail());
                            Patient.setPassword(patientUpdated.getPassword());
                            Patient.setPhone(patientUpdated.getPhone());
                            return patientService.savePatient(Patient);
                        }).orElseThrow(()-> new PatientNotFoundException(id));
    }
    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable("id") int id)
    {
        if(patientService.findPatientById(id).isEmpty())
        {
            throw new PatientNotFoundException(id);
        }
        patientService.deletePatient(id);

        return "Patient with id "+ id +" deleted successfully";
    }

}