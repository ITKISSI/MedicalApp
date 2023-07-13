package ma.ehei.watinglineservice.service.implementation;

import ma.ehei.watinglineservice.model.Appointment;
import ma.ehei.watinglineservice.model.AppointmentStatus;
import ma.ehei.watinglineservice.model.Patient;
import ma.ehei.watinglineservice.repository.AppointmentRepository;
import ma.ehei.watinglineservice.repository.PatientRepository;
import ma.ehei.watinglineservice.service.AppointmentService;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.sql.SQLOutput;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AppointmentServiceImpl implements AppointmentService {

    private final AppointmentRepository appointmentRepository;
    private final PatientRepository patientRepository;

    public AppointmentServiceImpl(AppointmentRepository appointmentRepository, PatientRepository patientRepository) {
        this.appointmentRepository = appointmentRepository;
        this.patientRepository = patientRepository;
    }
    public List<Appointment> getConfirmedAppointmentsForToday() {
        LocalDateTime todayStart = LocalDateTime.of(LocalDate.now(), LocalTime.MIDNIGHT);
        LocalDateTime todayEnd = LocalDateTime.of(LocalDate.now(), LocalTime.MAX);

        List<Appointment> appointments = appointmentRepository.findByStatusAndAndAppointmentTimeBetween(AppointmentStatus.CONFIRMED, todayStart, todayEnd);
        appointments.sort(Comparator.comparing(Appointment::getAppointmentTime));
        if (appointments!=null){
            return appointments;
        }
        return null;
    }


    public int getPatientPosition(int id){
        int position=0;
        List<Appointment> appointments = getConfirmedAppointmentsForToday();
        if (!appointments.isEmpty()){
        int i=0;
            while(appointments.get(i).getPatientId()!=id){
                position++;
                i++;
            }
        return position+1;
    }
        return 0;
    }

    public AppointmentStatus getPatientAppointmentStatus(Long id){

        return appointmentRepository.findAppointmentByPatient(patientRepository.findById(id).get()).getStatus();
    }

}