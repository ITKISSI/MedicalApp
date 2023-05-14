package ma.eheio.suscriptionrdvpatient.dto;

import lombok.Data;

@Data
public class RegistrationDTO {

    private String firstname;
    private String lastname;
    private String login;
    private String password;

    public  RegistrationDTO(){
        super();
    }

    public RegistrationDTO(String firstname,String lastname,String login,String password) {
        super();
        this.firstname=firstname;
        this.lastname=lastname;
        this.login = login;
        this.password = password;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }



    public String getEmail() {
        return login;
    }

    public void setEmail(String email) {
        this.login = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    public String toString(){
        return "user's login="+this.login+" Password="+this.password;
    }

}
