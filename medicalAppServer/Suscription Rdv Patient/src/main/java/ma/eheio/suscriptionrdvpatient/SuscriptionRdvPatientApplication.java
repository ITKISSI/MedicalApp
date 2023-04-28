package ma.eheio.suscriptionrdvpatient;

import ma.eheio.suscriptionrdvpatient.model.Patient;
import ma.eheio.suscriptionrdvpatient.model.Role;
import ma.eheio.suscriptionrdvpatient.repository.PatientRepository;
import ma.eheio.suscriptionrdvpatient.repository.RoleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class SuscriptionRdvPatientApplication {

    public static void main(String[] args) {
        SpringApplication.run(SuscriptionRdvPatientApplication.class, args);

    }

    @Bean
    CommandLineRunner run (RoleRepository roleRepository, PatientRepository patientRepository, PasswordEncoder encoder) {
        return args -> {

            if(roleRepository.findByAuthority("ADMIN").isPresent()) return;

            Role adminRole = roleRepository.save(new Role(1,"ADMIN"));
            Set<Role> roles =new HashSet<Role>();
            roles.add(adminRole);
            String pwd = encoder.encode("123");
            Patient admin = new Patient(null,"tarik","nejjari",
                    49,null,"tarik",pwd,null,null,roles);

            patientRepository.save(admin);
        };
    }

}
