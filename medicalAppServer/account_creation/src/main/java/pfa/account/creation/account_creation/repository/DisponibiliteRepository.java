package pfa.account.creation.account_creation.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pfa.account.creation.account_creation.entity.Disponibilite;

import java.util.List;

public interface DisponibiliteRepository extends JpaRepository<Disponibilite,Long> {

    List<Disponibilite> findByMedecinId(long medecinId);
}
