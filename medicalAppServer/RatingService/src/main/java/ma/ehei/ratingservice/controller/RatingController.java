package ma.ehei.ratingservice.controller;

import ma.ehei.ratingservice.dto.RatingRequest;
import ma.ehei.ratingservice.model.Rating;
import ma.ehei.ratingservice.service.RatingService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ratings")
@CrossOrigin("http://localhost:3000")
public class RatingController {

    private final RatingService ratingService;

    public RatingController(RatingService ratingService) {
        this.ratingService = ratingService;
    }

    @PostMapping
    public Rating createRating(@RequestBody RatingRequest ratingRequest) {
        return ratingService.createRating(ratingRequest.getDoctorId(),ratingRequest.getPatientId(), ratingRequest.getRatingType());
    }

    @GetMapping("/doctors/{doctorId}")
    public Rating getRatingsByDoctorId(@PathVariable Long doctorId) {
        return ratingService.getRatingsByDoctorId(doctorId);
    }
}
