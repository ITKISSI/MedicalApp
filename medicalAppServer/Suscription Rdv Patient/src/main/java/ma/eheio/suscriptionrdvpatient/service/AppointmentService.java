package ma.eheio.suscriptionrdvpatient.service;

import ma.eheio.suscriptionrdvpatient.model.Appointment;
import ma.eheio.suscriptionrdvpatient.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AppointmentService {

    @Autowired
    AppointmentRepository appointmentRepository;

    public Appointment add(Appointment appointment){
        return appointmentRepository.save(appointment);
    }
}
