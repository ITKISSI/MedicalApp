package ma.eheio.authenticationservice.service;

import ma.eheio.authenticationservice.dto.LoginResponseDTO;
import ma.eheio.authenticationservice.model.User;
import ma.eheio.authenticationservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {


    @Autowired
    private AuthenticationManager manager;
    @Autowired
    private TokenService tokenService;
    @Autowired
    private UserRepository userRepository;


    public LoginResponseDTO login(String login, String password){


        if(userRepository.findUserByLogin(login).isEmpty())
        {
            return new LoginResponseDTO("",null);
        }
        else{
            User user =userRepository.findUserByLogin(login).get();
            if(!user.isEnabled()){
                return new LoginResponseDTO("",user);
            }
            try{
                Authentication auth = manager.authenticate(new UsernamePasswordAuthenticationToken(login,password));
                String token = tokenService.generateJwt(auth);

                return  new LoginResponseDTO(token,user);

            }catch(AuthenticationException e){
                return new LoginResponseDTO("",null);
            }
        }

    }

    public int enableUser(String login)
    {
        userRepository.enableAppUser(login);
        return 1;
    }



}
