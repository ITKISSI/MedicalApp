package ma.ehei.watinglineservice.controller;
import ma.ehei.watinglineservice.model.Appointment;
import ma.ehei.watinglineservice.model.AppointmentStatus;
import ma.ehei.watinglineservice.model.Patient;
import ma.ehei.watinglineservice.service.AppointmentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/waiting-line")
public class WaitingLineController {
    private final AppointmentService appointmentService;

    public WaitingLineController(AppointmentService appointmentService) {
        this.appointmentService = appointmentService;
    }
    @GetMapping("/test")
    public String testApi(){
        return "Working";
    }

    @GetMapping("/appointments")
    public ResponseEntity<List<Appointment>> getAppointemntsofday(){
        return new ResponseEntity<List<Appointment>>(appointmentService.getConfirmedAppointmentsForToday(),HttpStatus.FOUND);
    }

    @GetMapping("/position/{id}")
    public ResponseEntity<Integer> getPostion(@PathVariable final int id){
        if(appointmentService.getPatientPosition(id)==0){
            return new ResponseEntity<Integer>(0,HttpStatus.OK);
        }
        return new ResponseEntity<Integer>(appointmentService.getPatientPosition(id),HttpStatus.OK);
    }

    @GetMapping("/status/{id}")
    public AppointmentStatus getAppointmentStatus(@PathVariable final Long id){
        return appointmentService.getPatientAppointmentStatus(id);
    }

}
