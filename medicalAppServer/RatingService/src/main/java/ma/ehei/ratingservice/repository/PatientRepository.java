package ma.ehei.ratingservice.repository;

import jakarta.transaction.Transactional;
import ma.ehei.ratingservice.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PatientRepository extends JpaRepository<Patient,Long> {


    Optional<Patient> findUserByLogin(String login);
    @Transactional
    @Modifying
    @Query("UPDATE Patient a " +
            "SET a.enabled = TRUE WHERE a.login = ?1")
    int enableAppUser(String email);

}
