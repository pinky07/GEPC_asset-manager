package com.nepc.asset.manager.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Date;
import java.util.List;

public class InvestmentStructureComponentDto
{
	@Setter
	@Getter
	@NotNull
	private BigInteger id;

	@Setter
	@Getter
	@Size(max = 100)
	private String investmentStructureComponentAlias;

	@Setter
	@Getter
	@Size(max = 40)
	private String ifShortName;

	@Setter
	@Getter
	private Date performanceEndDate;

	@Setter
	@Getter
	private Date informationAsOfDate;

	@Setter
	@Getter
	@Size(max = 15)
	private String colorAssignment;

	@Setter
	@Getter
	private Integer expenseRatio;

	@Setter
	@Getter
	private BigDecimal actualMV;

	@Setter
	@Getter
	private Integer costBasis;

	@Setter
	@Getter
	private Integer displayOrder;

	@Setter
	@Getter
	private char overwriteBenchmarkInd;

	@Setter
	@Getter
	private String crmInvProductLink;

	@Setter
	@Getter
	@Size(max = 50)
	private String policyWeight;

	@Setter
	@Getter
	@Size(max = 160)
	private String shortDescription;

	@Setter
	@Getter
	private List<InvestmentStructureMixComponentDto> investmentStructureMixComponents;
}
