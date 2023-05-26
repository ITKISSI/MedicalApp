package ma.ehei.ratingservice.repository;

import ma.ehei.ratingservice.model.Rating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RatingRepository extends JpaRepository<Rating, Long> {

    Optional<Rating> findRatingByDoctorId(Long doctorId);
    /*Rating findRatingByDoctorId(Long doctorId);*/
}
