package ma.eheio.suscriptionrdvpatient.service;


import ma.eheio.suscriptionrdvpatient.model.Patient;
import ma.eheio.suscriptionrdvpatient.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PatientServiceImp implements PatientService {

    @Autowired
    private PatientRepository patientRepository;

    @Override
    public Patient savePatient(Patient patient) {
        return patientRepository.save(patient);
    }

    @Override
    public void deletePatient(int id) {
        patientRepository.deleteById(id);
    }
    @Override
    public List<Patient> getPatients() {
        return patientRepository.findAll();
    }

    @Override
    public Optional<Patient> findPatientById(int id) {
        return patientRepository.findById(id);
    }


}
