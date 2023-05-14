package ma.eheio.suscriptionrdvpatient.repository;

import ma.eheio.suscriptionrdvpatient.model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment,Integer> {

}
