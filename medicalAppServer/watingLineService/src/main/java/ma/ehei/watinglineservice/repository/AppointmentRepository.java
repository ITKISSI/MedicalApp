package ma.ehei.watinglineservice.repository;

import ma.ehei.watinglineservice.model.Appointment;
import ma.ehei.watinglineservice.model.AppointmentStatus;
import ma.ehei.watinglineservice.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment,Long> {

    List<Appointment> findByStatusAndAndAppointmentTimeBetween(AppointmentStatus status, LocalDateTime start, LocalDateTime end);

    Appointment findAppointmentByPatient(Patient patient);
}
