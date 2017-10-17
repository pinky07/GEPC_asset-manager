package com.nepc.asset.manager.service;

import com.nepc.asset.manager.dto.InvestmentStructureDto;

import java.math.BigInteger;

public interface InvestmentStructureService
{
	InvestmentStructureDto getById(BigInteger id);

	InvestmentStructureDto disableTree(BigInteger id);
}
