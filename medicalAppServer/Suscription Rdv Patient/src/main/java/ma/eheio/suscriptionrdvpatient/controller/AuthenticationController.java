package ma.eheio.suscriptionrdvpatient.controller;


import ma.eheio.suscriptionrdvpatient.dto.LoginResponseDTO;
import ma.eheio.suscriptionrdvpatient.dto.RegistrationDTO;
import ma.eheio.suscriptionrdvpatient.model.Patient;
import ma.eheio.suscriptionrdvpatient.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping("/register")
    public Patient registerUser(@RequestBody RegistrationDTO body){
        return authenticationService.registerUser(body.getEmail(),body.getPassword());
    }

    @PostMapping("/login")
    public LoginResponseDTO loginUser(@RequestBody Patient body){
        return authenticationService.loginUser(body.getEmail(),body.getPassword());
    }


}
