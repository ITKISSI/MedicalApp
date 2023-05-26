package ma.ehei.ratingservice.service;

import ma.ehei.ratingservice.model.*;
import ma.ehei.ratingservice.repository.DoctorRepository;
import ma.ehei.ratingservice.repository.PatientRepository;
import ma.ehei.ratingservice.repository.RatingRepository;
import ma.ehei.ratingservice.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RatingService {

    private final RatingRepository ratingRepository;
    private final UserRepository userRepository;

    public RatingService(RatingRepository ratingRepository,UserRepository userRepository ) {
        this.ratingRepository = ratingRepository;
        this.userRepository=userRepository;

    }

    public Rating createRating(Long doctorId,Long patientId, RatingType ratingType) {
        Doctor doctor = (Doctor) userRepository.findById(doctorId).get();
        Patient patient =(Patient) userRepository.findById(patientId).get();


        if(!ratingRepository.findRatingByDoctorId(doctorId).isEmpty()){
            Rating rating=ratingRepository.findRatingByDoctorId(doctorId).get();

            if(rating.getPatient().getId()==patientId){
                rating.setRatingType(ratingType);
                return ratingRepository.save(rating);
            }
        }

        Rating rating = new Rating();
        rating.setPatient(patient);
        rating.setDoctor(doctor);
        rating.setRatingType(ratingType);
        return ratingRepository.save(rating);
    }



    public Rating getRatingsByDoctorId(Long doctorId) {
        return ratingRepository.findRatingByDoctorId(doctorId).get();
    }
}
