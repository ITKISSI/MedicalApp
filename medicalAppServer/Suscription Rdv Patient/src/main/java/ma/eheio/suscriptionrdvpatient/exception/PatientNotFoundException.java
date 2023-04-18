package ma.eheio.suscriptionrdvpatient.exception;

public class PatientNotFoundException extends RuntimeException{


    public PatientNotFoundException(Integer id)
    {
        super("Could not found a patient with the id "+id);
    }
}
