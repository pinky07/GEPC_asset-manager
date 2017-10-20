package com.nepc.asset.manager.repository;

import com.nepc.asset.manager.entity.Mix;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;

/**
 * Repository for the {@link Mix} database table.
 * See class hierarchy for methods already existing.
 *
 * @author Rubén Jiménez
 */
@Repository
public interface MixRepository extends JpaRepository<Mix, BigInteger>
{
}
