package com.nepc.asset.manager.dto;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.List;

public class InvestmentStructureDto extends BaseDto
{
	@Getter
	@Setter
	private BigInteger id;

	@Getter
	@Setter
	private String investmentStructureName;

	@Getter
	@Setter
	private int durationOfLiability;

	@Getter
	@Setter
	private BigDecimal planFundedAmount;

	@Setter
	@Getter
	private List<InvestmentStructureComponentDto> investmentStructureComponentsDto;
}
