package ma.eheio.suscriptionrdvpatient.dto;

import lombok.Data;

@Data
public class RegistrationDTO {

    private String email;
    private String password;

    public  RegistrationDTO(){
        super();
    }

    public RegistrationDTO(String username, String password) {
        super();
        this.email = username;
        this.password = password;
    }

    public String toString(){
        return "user's Username="+this.email+" Password="+this.password;
    }

}
