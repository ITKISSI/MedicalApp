package ma.eheio.suscriptionpatient.service;


import jakarta.transaction.Transactional;
import ma.eheio.suscriptionpatient.email.EmailSender;
import ma.eheio.suscriptionpatient.emailConfig.EmailValidator;
import ma.eheio.suscriptionpatient.model.Patient;
import ma.eheio.suscriptionpatient.model.Role;
import ma.eheio.suscriptionpatient.repository.PatientRepository;
import ma.eheio.suscriptionpatient.repository.RoleRepository;
import ma.eheio.suscriptionpatient.repository.UserRepository;
import ma.eheio.suscriptionpatient.service.token.ConfirmationToken;
import ma.eheio.suscriptionpatient.service.token.ConfirmationTokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Service
@Transactional
public class AuthenticationService {

    @Autowired
    private PatientRepository patientRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private PasswordEncoder encoder;
    @Autowired
    private ConfirmationTokenService confirmationTokenService;
    @Autowired
    private PatientService patientService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private EmailValidator emailValidator;
    @Autowired
    private EmailSender emailSender;

    public AuthenticationService() {
    }

    public Boolean registerUser(String firstname,String lastname,String login,String password){

            if(userRepository.findUserByLogin(login).isPresent()){
                return false;
            }

            boolean isEmailValid=emailValidator.test(login);
            if(!isEmailValid)
            {
                throw new IllegalStateException("Email Not valid");
            }
            String encodedPassword =encoder.encode(password);
            Role userRole = roleRepository.findByAuthority("USER").get();
            Set<Role> roles = new HashSet<>();
            roles.add(userRole);
            Patient patient = new Patient();
            patient.setFirstName(firstname);
            patient.setLastName(lastname);
            patient.setLogin(login);
            patient.setAuthorities(roles);
            patient.setPassword(encodedPassword);
            patientRepository.save(patient);

            String token = UUID.randomUUID().toString();
            ConfirmationToken confirmationToken=new ConfirmationToken(
                    token,
                    LocalDateTime.now(),
                    LocalDateTime.now().plusMinutes(15),
                    patient
            );
            confirmationTokenService.saveConfirmationToken(confirmationToken);

            String link= "localhost:8081/auth/confirm?token="+token;

            emailSender.send(login,
                    "<html><body><p>Please click the link below to confirm your account:</p><p><a href=\"http://localhost:8081/auth/confirm?token="+token+"\">Confirm Account</a></p></body></html>"
            );


            return true;
    }


    @Transactional
    public String confirmToken(String token) {
        ConfirmationToken confirmationToken = confirmationTokenService
                .getToken(token)
                .orElseThrow(() ->
                        new IllegalStateException("token not found"));

        if (confirmationToken.getConfirmedAt() != null) {
            throw new IllegalStateException("email already confirmed");
        }

        LocalDateTime expiredAt = confirmationToken.getExpiresAt();

        if (expiredAt.isBefore(LocalDateTime.now())) {
            throw new IllegalStateException("token expired");
        }
        confirmationTokenService.setConfirmedAt(token);
        patientService.enableAppUser(
                confirmationToken.getAppUser().getLogin());

        return "/confirmedEmail";
    }

}
