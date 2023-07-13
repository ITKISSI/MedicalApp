package ma.ehei.watinglineservice.service;

import ma.ehei.watinglineservice.model.Appointment;
import ma.ehei.watinglineservice.model.AppointmentStatus;
import ma.ehei.watinglineservice.model.Patient;


import java.time.LocalDateTime;
import java.util.List;

public interface AppointmentService {
    public List<Appointment> getConfirmedAppointmentsForToday();
    public int getPatientPosition(int id);
    public AppointmentStatus getPatientAppointmentStatus(Long id);
}