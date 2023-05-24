package ma.eheio.authenticationservice.dto;


import ma.eheio.authenticationservice.model.User;

public class LoginResponseDTO {

    private String jwt;
    private User user;

    public LoginResponseDTO()
    {
        super();
    }

    public LoginResponseDTO(String jwt,User user) {
        this.user=user;
        this.jwt = jwt;
    }


    public String getJwt() {
        return jwt;
    }

    public void setJwt(String jwt) {
        this.jwt = jwt;
    }


    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
