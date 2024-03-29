package ma.eheio.authenticationservice.controller;

import ma.eheio.authenticationservice.dto.LoginResponseDTO;
import ma.eheio.authenticationservice.model.User;
import ma.eheio.authenticationservice.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/Authentication")
@CrossOrigin("http://localhost:3000")
public class AuthenticationController {


    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping("/login")
    public LoginResponseDTO login(@RequestBody User body){
        return authenticationService.login(body.getLogin(),body.getPassword());
    }
    @PostMapping("/enableUser")
    public ResponseEntity<String> enableUser(@RequestBody String login){
        authenticationService.enableUser(login);
        return ResponseEntity.ok("Success");
    }





}
