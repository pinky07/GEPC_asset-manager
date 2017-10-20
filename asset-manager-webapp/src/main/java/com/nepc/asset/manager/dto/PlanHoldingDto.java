package com.nepc.asset.manager.dto;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import java.math.BigInteger;
import java.util.Date;

public class PlanHoldingDto
{
	@Setter
	@Getter
	private BigInteger id;

	@Setter
	@Getter
	private int investableVehiclePK;

	@Setter
	@Getter
	private int investableVehicleUnitsNumber;

	@Setter
	@Getter
	@Column(name = "Virtual_Ind", columnDefinition = "char(1)", nullable = false)
	private char virtualInd;

	@Setter
	@Getter
	private char ifCollectManagerApprovedInd;

	@Setter
	@Getter
	private String ifCollectReasonNotApproved;

	@Setter
	@Getter
	private Date dateOriginallyFunded;

	@Setter
	@Getter
	private Date fullRedemptionDecisionByClientDate;

	@Setter
	@Getter
	private Date fullRedemptionCompleteDate;

	@Setter
	@Getter
	private char includeInDiscretionaryReportingInd;

	@Setter
	@Getter
	private char planHoldingSpecificAcctsInd;

	@Setter
	@Getter
	private String PlanHoldingReportingName;

	@Setter
	@Getter
	private String ifDataRequested;

	@Setter
	@Getter
	private char onBoardedHoldingInd;

	@Setter
	@Getter
	private String ifPlanHoldingName;
}
