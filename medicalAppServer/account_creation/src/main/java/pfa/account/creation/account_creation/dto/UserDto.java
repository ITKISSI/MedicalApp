package pfa.account.creation.account_creation.dto;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor

@AllArgsConstructor

public class UserDto {
    private Long id;
    private String firstName;
    private String lastName;
    private int age;
    private String adress;
    private String cin;
}
