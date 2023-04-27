package pfa.account.creation.account_creation.user;

import jakarta.persistence.*;
import lombok.*;
import pfa.account.creation.account_creation.medcin.Medecin;

import java.util.List;


@Entity
@Getter
@Setter
@NoArgsConstructor

@AllArgsConstructor
@Table(name = "_user")

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "user_id")
    private Long id;
    private String firstName;
    private String lastName;
    private int age;
    private String adress;
    private String cin;
    private String login;
    private String password;

}
