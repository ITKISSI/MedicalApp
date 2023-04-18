package ma.eheio.suscriptionrdvpatient.service;


import ma.eheio.suscriptionrdvpatient.model.Patient;

import java.util.List;
import java.util.Optional;


public interface PatientService {

    public Patient savePatient(Patient patient);

    public List<Patient> getPatients();
    public void deletePatient(int id);

    public Optional<Patient> findPatientById(int id);
}
