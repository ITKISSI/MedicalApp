package ma.eheio.suscriptionpatient.dto;


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
