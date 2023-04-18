package ma.eheio.suscriptionrdvpatient.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class PatientNotFoundAdvice {

    @ResponseBody
    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(PatientNotFoundException.class)
    public Map<String,String> exceptionHandler(PatientNotFoundException exception)
    {
        Map<String,String> errorMap = new HashMap<>();
        errorMap.put("errorMessage",exception.getMessage());

        return errorMap;
    }

}
