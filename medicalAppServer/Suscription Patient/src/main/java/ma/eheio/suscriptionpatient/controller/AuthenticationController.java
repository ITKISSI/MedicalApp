package ma.eheio.suscriptionpatient.controller;


import jakarta.servlet.http.HttpServletResponse;
import ma.eheio.suscriptionpatient.dto.RegistrationDTO;
import ma.eheio.suscriptionpatient.service.AuthenticationService;
import ma.eheio.suscriptionpatient.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/auth")
@CrossOrigin("http://localhost:3000")
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;

    @Autowired
    private PatientService patientService;

    @PostMapping("/register")
    public Boolean registerUser(@RequestBody RegistrationDTO body){
        return authenticationService.registerUser(body.getFirstname(), body.getLastname(), body.getEmail(),body.getPassword());
    }

    @GetMapping(path = "/confirmedEmail")
    public String confirmedEmail() {
        return "/confirmedEmail";
    }
    @GetMapping(path = "/confirm")
    public void confirm(@RequestParam("token") String token, HttpServletResponse response) throws IOException {
        String host="http://localhost:3000";

        authenticationService.confirmToken(token);
        response.setStatus(HttpStatus.MOVED_PERMANENTLY.value());
        response.setHeader("Location",host+"/confirmedEmail");
    }

    @PostMapping("/data")
    public ResponseEntity<String> receiveData(@RequestBody String data){
        return ResponseEntity.ok(data);
    }








}
