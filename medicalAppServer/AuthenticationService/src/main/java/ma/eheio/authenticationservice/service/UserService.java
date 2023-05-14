package ma.eheio.authenticationservice.service;


import ma.eheio.authenticationservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository ;


    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        return (UserDetails)userRepository.findUserByLogin(email).get();
    }



}
