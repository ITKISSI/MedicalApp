package ma.eheio.suscriptionrdvpatient.dto;

import lombok.Data;

@Data
public class RegistrationDTO {

    private String email;
    private String password;
    private String username;

    public  RegistrationDTO(){
        super();
    }

    public RegistrationDTO(String email, String username,String password) {
        super();
        this.email = username;
        this.username=username;
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String toString(){
        return "user's Username="+this.email+" Password="+this.password;
    }

}
