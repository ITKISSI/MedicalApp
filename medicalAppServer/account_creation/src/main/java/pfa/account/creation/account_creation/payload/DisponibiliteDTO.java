package pfa.account.creation.account_creation.payload;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.DayOfWeek;
import java.time.LocalTime;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class DisponibiliteDTO {
    private long id;
    private String jour;
    private LocalTime startTime;
    private LocalTime endTime;
}