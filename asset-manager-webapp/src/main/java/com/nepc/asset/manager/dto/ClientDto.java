package com.nepc.asset.manager.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.math.BigDecimal;
import java.util.Date;

public class ClientDto
{
	@Setter
	@Getter
	@NotNull
	private BigDecimal id;

	@Setter
	@Getter
	@Size(max = 160)
	@NotNull
	private String preferredNameShort;

	@Setter
	@Getter
	@Size(max = 250)
	private String preferredNameLong;

	@Setter
	@Getter
	@Size(max = 160)
	private String legalClientName;

	@Setter
	@Getter
	private BigDecimal clientRevenueAmt;

	@Setter
	@Getter
	private char dedicatedInvestmentTeamInd;

	@Setter
	@Getter
	private BigDecimal estimatedManageableAssetsAmount;

	@Setter
	@Getter
	@Size(max = 10)
	private String stockExchangeTicker;

	@Setter
	@Getter
	@Size(max = 10)
	private String growthCategory;

	@Setter
	@Getter
	private Date hireDate;

	@Setter
	@Getter
	private Date relationshipEndDate;

	@Setter
	@Getter
	private String nepcClientNickName;

	@Setter
	@Getter
	private Date clientRevenueAsOfDate;

	@Setter
	@Getter
	@Size(max = 10)
	private String generalPhone;

	@Setter
	@Getter
	private String generalFax;

	@Setter
	@Getter
	private String website;

	@Setter
	@Getter
	private String clientNepcCODE;

	@Setter
	@Getter
	private String legalNameSource;

	@Setter
	@Getter
	private Date estimatedManageableAssetsAmountsAsOfDate;

}
