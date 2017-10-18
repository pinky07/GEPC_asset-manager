package com.nepc.asset.manager.repository;

import com.nepc.asset.manager.entity.MixSummaryFact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;

/**
 * Repository for the {@link MixSummaryFact} database table.
 * See class hierarchy for methods already existing.
 *
 * @author Rubén Jiménez
 */
@Repository
public interface MixSummaryFactRepository extends JpaRepository<MixSummaryFact, BigInteger>
{
}
