package com.nepc.asset.manager.service;

import com.nepc.asset.manager.dto.InvestmentStructureDto;
import com.nepc.asset.manager.entity.InvestmentStructure;

import java.math.BigInteger;

/**
 * Performs operations on {@link InvestmentStructure}
 *
 * @author Minor Madrigal
 */
public interface InvestmentStructureService
{
	/**
	 * Returns an {@link InvestmentStructure} by its Id.
	 *
	 * @param id Id to look up
	 * @return DTO representing the entity
	 */
	InvestmentStructureDto getById(BigInteger id) throws Exception;

	/**
	 * Performs a soft delete on the {@link InvestmentStructure} by modifying its Active Indicator field. Has a cascading
	 * effect
	 *
	 * @param id         Id to look up
	 * @param modifiedBy Person who executes the change
	 * @return DTO representing the entity
	 */
	InvestmentStructureDto softDeleteInvestmentStructure(BigInteger id, String modifiedBy) throws Exception;
}
