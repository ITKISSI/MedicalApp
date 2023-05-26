package ma.ehei.ratingservice.service;

import ma.ehei.ratingservice.model.Doctor;
import ma.ehei.ratingservice.model.User;
import ma.ehei.ratingservice.repository.DoctorRepository;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorService {

    private final DoctorRepository doctorRepository;

    public DoctorService(DoctorRepository doctorRepository) {
        this.doctorRepository = doctorRepository;
    }

    public Doctor getDoctorById(Long id) {
        return doctorRepository.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException("Doctor not found with id: " + id));
    }

    public List<Doctor> getAllDoctors() {
        return doctorRepository.findAll();
    }
}
