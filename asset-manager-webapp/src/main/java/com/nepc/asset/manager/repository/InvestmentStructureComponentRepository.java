package com.nepc.asset.manager.repository;

import com.nepc.asset.manager.entity.InvestmentStructure;
import com.nepc.asset.manager.entity.InvestmentStructureComponent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;

/**
 * Repository for the {@link InvestmentStructure} database table.
 * See class hierarchy for methods already existing.
 *
 * @author Rubén Jiménez
 */
@Repository
public interface InvestmentStructureComponentRepository  extends JpaRepository<InvestmentStructureComponent, BigInteger>
{
}
