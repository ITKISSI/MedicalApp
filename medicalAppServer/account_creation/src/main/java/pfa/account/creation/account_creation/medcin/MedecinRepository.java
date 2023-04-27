package pfa.account.creation.account_creation.medcin;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface MedecinRepository extends JpaRepository<Medecin,Long> {



}
