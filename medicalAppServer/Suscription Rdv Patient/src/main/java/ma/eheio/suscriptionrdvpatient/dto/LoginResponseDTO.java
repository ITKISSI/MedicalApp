package ma.eheio.suscriptionrdvpatient.dto;


import ma.eheio.suscriptionrdvpatient.model.Patient;

public class LoginResponseDTO {

    private String jwt;

    public LoginResponseDTO()
    {
        super();
    }

    public LoginResponseDTO( String jwt) {

        this.jwt = jwt;
    }


    public String getJwt() {
        return jwt;
    }

    public void setJwt(String jwt) {
        this.jwt = jwt;
    }
}
