package pfa.account.creation.account_creation.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pfa.account.creation.account_creation.entity.Cabinet;


@Repository
public interface CabinetRepository extends JpaRepository<Cabinet,Long> {



}
