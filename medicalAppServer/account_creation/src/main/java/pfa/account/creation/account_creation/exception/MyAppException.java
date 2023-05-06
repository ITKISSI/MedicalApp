package pfa.account.creation.account_creation.exception;

import org.springframework.http.HttpStatus;

public class MyAppException extends RuntimeException {

    private HttpStatus status;
    private String message;

    public MyAppException(HttpStatus status, String message) {
        this.status = status;
        this.message = message;
    }

    public MyAppException(String message, HttpStatus status, String message1) {
        super(message);
        this.status = status;
        this.message = message1;
    }

    public HttpStatus getStatus() {
        return status;
    }

    @Override
    public String getMessage() {
        return message;
    }
}
