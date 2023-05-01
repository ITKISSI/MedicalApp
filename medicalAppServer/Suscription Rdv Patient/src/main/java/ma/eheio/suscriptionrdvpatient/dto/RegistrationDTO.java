package ma.eheio.suscriptionrdvpatient.dto;

import lombok.Data;

@Data
public class RegistrationDTO {

    private String firstname;
    private String lastname;
    private String phone;
    private String email;
    private String password;
    private String username;

    public  RegistrationDTO(){
        super();
    }

    public RegistrationDTO(String firstname,String lastname,String phone,String email, String username,String password) {
        super();
        this.firstname=firstname;
        this.lastname=lastname;
        this.phone=phone;
        this.email = email;
        this.username=username;
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

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
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
