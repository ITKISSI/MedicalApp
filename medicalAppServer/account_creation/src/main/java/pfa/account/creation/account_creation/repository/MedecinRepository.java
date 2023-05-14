package pfa.account.creation.account_creation.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pfa.account.creation.account_creation.entity.Medecin;

import java.util.List;


@Repository
public interface MedecinRepository extends JpaRepository<Medecin,Long> {
    List<Medecin> findByCabinetId(long id);
}
