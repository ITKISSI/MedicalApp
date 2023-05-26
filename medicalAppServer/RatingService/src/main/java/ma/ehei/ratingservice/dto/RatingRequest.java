package ma.ehei.ratingservice.dto;

import lombok.Data;
import ma.ehei.ratingservice.model.RatingType;

@Data
public class RatingRequest {

    private Long doctorId;
    private Long patientId;
    private RatingType ratingType;
}
