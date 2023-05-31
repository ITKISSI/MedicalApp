package ma.eheio.suscriptionrdvpatient.service;


import jakarta.transaction.Transactional;
import ma.eheio.suscriptionrdvpatient.email.EmailSender;
import ma.eheio.suscriptionrdvpatient.emailConfig.EmailValidator;
import ma.eheio.suscriptionrdvpatient.model.Patient;
import ma.eheio.suscriptionrdvpatient.model.Role;
import ma.eheio.suscriptionrdvpatient.repository.PatientRepository;
import ma.eheio.suscriptionrdvpatient.repository.RoleRepository;
import ma.eheio.suscriptionrdvpatient.service.token.ConfirmationToken;
import ma.eheio.suscriptionrdvpatient.service.token.ConfirmationTokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
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
    private EmailValidator emailValidator;
    @Autowired
    private EmailSender emailSender;

    public AuthenticationService() {
    }

    public String registerUser(String firstname,String lastname,String login,String password){

//            if(user){
//                return "User already exist try login in !";
//            }

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


            return token;
    }
    public String getJwtToken(Authentication auth)
    {
        return "";
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
