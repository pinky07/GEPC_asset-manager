package com.nepc.asset.manager.repository;

import com.nepc.asset.manager.entity.InvestmentStructureMixComponent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;

/**
 * Repository for the {@link InvestmentStructureMixComponent} database table.
 * See class hierarchy for methods already existing.
 *
 * @author Rubén Jiménez
 */
@Repository
public interface InvestmentStructureMixComponentRepository
		extends JpaRepository<InvestmentStructureMixComponent, BigInteger>
{
}
