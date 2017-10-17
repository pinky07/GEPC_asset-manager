package com.nepc.asset.manager.dao;

import com.nepc.asset.manager.entity.InvestmentStructure;

import java.math.BigInteger;

public interface InvestmentStructureDao
{
	InvestmentStructure getById(BigInteger id);

	InvestmentStructure save(InvestmentStructure investmentStructure);

	InvestmentStructure getTreeByInvestmentStructureId(BigInteger id);
}
