package ma.eheio.suscriptionrdvpatient.repository;

import ma.eheio.suscriptionrdvpatient.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PatientRepository extends JpaRepository<Patient,Integer> {

    Optional<Patient> findUserByUsername(String username);
}
