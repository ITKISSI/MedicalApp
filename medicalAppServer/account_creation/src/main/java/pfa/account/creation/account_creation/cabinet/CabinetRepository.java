package pfa.account.creation.account_creation.cabinet;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import pfa.account.creation.account_creation.medcin.Medecin;

import java.util.List;


@Repository
public interface CabinetRepository extends JpaRepository<Cabinet,Long> {



}
