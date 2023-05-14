package ma.eheio.suscriptionrdvpatient.controller;


import ma.eheio.suscriptionrdvpatient.model.Appointment;
import ma.eheio.suscriptionrdvpatient.repository.PatientRepository;
import ma.eheio.suscriptionrdvpatient.service.AppointmentService;
import ma.eheio.suscriptionrdvpatient.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/patient")
@CrossOrigin("http://localhost:3000")
public class PatientController {

    @Autowired
    private PatientService patientService;

    @Autowired
    private AppointmentService appointmentService;

    @GetMapping("/home")
    public String userPage()
    {
        return "User access level";
    }

    @PostMapping(value="/appointment",consumes = {"application/json"})
    public Appointment add(@RequestBody Appointment appointment){
        return appointmentService.add(appointment);
    }

    //// CRUD patient
    /*
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
    */
}
