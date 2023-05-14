package ma.eheio.suscriptionrdvpatient;

import ma.eheio.suscriptionrdvpatient.model.Doctor;
import ma.eheio.suscriptionrdvpatient.model.Patient;
import ma.eheio.suscriptionrdvpatient.model.Role;
import ma.eheio.suscriptionrdvpatient.repository.DoctorRepository;
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
    CommandLineRunner run (RoleRepository roleRepository, PatientRepository patientRepository, DoctorRepository doctorRepository, PasswordEncoder encoder) {
        return args -> {

            if(roleRepository.findByAuthority("ADMIN").isPresent()) return;

            Role adminRole = roleRepository.save(new Role(1,"ADMIN"));
            Role userRole = roleRepository.save(new Role(2,"USER"));
            Set<Role> roles =new HashSet<Role>();
            roles.add(adminRole);
            Set<Role> droles =new HashSet<Role>();
            roles.add(userRole);
            String pwd = encoder.encode("123");

            Patient admin = new Patient(null,"tarik","nejjari",23
                    ,"Oujda","f1212","pattarik12@gmail.com",pwd,"+2128989",false,false,roles,"f111f");


            Doctor doctor=new Doctor(null, "aziz", "kissi", 25,
                    "italie", "f65000", "kissi122@gmail.com", pwd,"+2126000",false,false,droles,"inp12","neurologue");



                patientRepository.save(admin);
                doctorRepository.save(doctor);
        };
    }

}
