package ma.eheio.suscriptionrdvpatient.service;


import jakarta.transaction.Transactional;
import ma.eheio.suscriptionrdvpatient.dto.LoginResponseDTO;
import ma.eheio.suscriptionrdvpatient.model.Patient;
import ma.eheio.suscriptionrdvpatient.model.Role;
import ma.eheio.suscriptionrdvpatient.repository.PatientRepository;
import ma.eheio.suscriptionrdvpatient.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

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
    private AuthenticationManager manager;
    @Autowired
    private TokenService tokenService;

        public Patient registerUser(String firstname,String lastname,String username,String phone,String email,String password){

        String encodedPassword =encoder.encode(password);
        Role userRole = roleRepository.findByAuthority("USER").get();
        Set<Role> roles = new HashSet<>();
        roles.add(userRole);
        Patient patient = new Patient();
        patient.setFirstname(firstname);
        patient.setLastname(lastname);
        patient.setUsername(username);
        patient.setPhone(phone);
        patient.setEmail(email);
        patient.setAuthorities(roles);
        patient.setPassword(encodedPassword);
        return patientRepository.save(patient);
    }

    public LoginResponseDTO loginUser(String username,String password){
        try{
            Authentication auth = manager.authenticate(new UsernamePasswordAuthenticationToken(username,password));
            String token = tokenService.generateJwt(auth);

            return  new LoginResponseDTO(patientRepository.findUserByUsername(username).get(),token);

        }catch(AuthenticationException e){
            return new LoginResponseDTO(null,"");
        }
    }
}
