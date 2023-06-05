package ma.eheio.suscriptionpatient.service;


import ma.eheio.suscriptionpatient.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class PatientService implements UserDetailsService {
    private final static String USER_NOT_FOUND_MSG="User with email %s does not exist";

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private PatientRepository patientRepository ;



    @Override
    public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {

        return (UserDetails)patientRepository.findUserByLogin(login).orElseThrow(()-> new UsernameNotFoundException(String.format(USER_NOT_FOUND_MSG,login)));
    }
    public int enableAppUser(String email) {
        return patientRepository.enableAppUser(email);
    }


}
