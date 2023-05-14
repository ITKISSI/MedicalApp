package ma.eheio.suscriptionrdvpatient.email;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;

@Component
public interface EmailSender {
    void send(String to, String email);
}
