package com.nepc.asset.manager.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.math.BigInteger;

public class InvestmentStructureMixComponentDto
{
	@Setter
	@Getter
	private BigInteger id;

	@Setter
	@Getter
	@NotNull
	private BigDecimal allocationPercent;

	@Setter
	@Getter
	private char overwriteAllocationInd;

	@Setter
	@Getter
	private String shortDescription;

	@Setter
	@Getter
	private MixDto mix;
}
