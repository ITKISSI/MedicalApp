package ma.eheio.authenticationservice.dto;

import lombok.Data;

@Data
public class LoginRequestDTO {

    private String email;
    private String password;

    public LoginRequestDTO(){
        super();
    }

    public LoginRequestDTO( String email, String password) {
        super();
        this.email = email;
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


    public String toString(){
        return "user's email="+this.email+" Password="+this.password;
    }

}
