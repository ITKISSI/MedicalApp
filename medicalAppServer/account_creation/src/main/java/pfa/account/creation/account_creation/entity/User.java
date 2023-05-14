package pfa.account.creation.account_creation.entity;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Getter
@Setter
@NoArgsConstructor

@AllArgsConstructor
@Table(name = "_user")
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
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
