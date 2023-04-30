package ma.eheio.suscriptionrdvpatient.dto;


import ma.eheio.suscriptionrdvpatient.model.Patient;

public class LoginResponseDTO {

    private Patient user;
    private String jwt;

    public LoginResponseDTO()
    {
        super();
    }

    public LoginResponseDTO(Patient user, String jwt) {
        this.user = user;
        this.jwt = jwt;
    }

    public Patient getUser() {
        return user;
    }

    public void setUser(Patient user) {
        this.user = user;
    }

    public String getJwt() {
        return jwt;
    }

    public void setJwt(String jwt) {
        this.jwt = jwt;
    }
}
