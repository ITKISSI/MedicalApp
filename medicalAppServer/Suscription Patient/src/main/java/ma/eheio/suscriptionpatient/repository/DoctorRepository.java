package ma.eheio.suscriptionpatient.repository;

import jakarta.transaction.Transactional;
import ma.eheio.suscriptionpatient.model.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor,Long> {


    Optional<Doctor> findUserByLogin(String login);
    @Transactional
    @Modifying
    @Query("UPDATE Doctor a " +
            "SET a.enabled = TRUE WHERE a.login = ?1")
    int enableAppUser(String email);

}
