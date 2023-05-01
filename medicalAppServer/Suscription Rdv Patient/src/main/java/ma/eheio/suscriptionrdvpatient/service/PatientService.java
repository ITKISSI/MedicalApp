package ma.eheio.suscriptionrdvpatient.service;


import ma.eheio.suscriptionrdvpatient.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class PatientService implements UserDetailsService {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private PatientRepository patientRepository ;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        return (UserDetails)patientRepository.findUserByUsername(username).orElseThrow(()-> new UsernameNotFoundException("Not found"));

    }
}
