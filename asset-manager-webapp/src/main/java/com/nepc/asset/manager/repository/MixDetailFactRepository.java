package com.nepc.asset.manager.repository;

import com.nepc.asset.manager.entity.MixDetailFact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;

/**
 * Repository for the {@link MixDetailFact} database table.
 * See class hierarchy for methods already existing.
 *
 * @author Rubén Jiménez
 */
@Repository
public interface MixDetailFactRepository extends JpaRepository<MixDetailFact, BigInteger>
{
}
