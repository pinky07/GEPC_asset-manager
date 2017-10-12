package com.nepc.asset.manager.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigInteger;
import java.util.Date;

@Entity
@Table(name = "PLAN_HOLDING")
@EqualsAndHashCode(callSuper=false)
@ToString
public class PlanHolding extends BaseEntity
{
	@Setter
	@Getter
	@Id
	@Column(name = "PLAN_HOLDING_PK", nullable = false)
	private BigInteger id;

	@Setter
	@Getter
	@Column(name = "PLAN_PK", nullable = false)
	private int planPK;

	@Setter
	@Getter
	@Column(name = "Investable_Vehicle_Units_Number")
	private int InvestableVehicleUnitsNumber;

	@Setter
	@Getter
	@Column(name = "Virtual_Ind",columnDefinition = "char(1)",nullable = false)
	private char virtualInd;

	@Setter
	@Getter
	@Column(name = "IF_COLLECT_Manager_Approved_Ind",columnDefinition = "char(1)",nullable = false)
	private char ifCollectManagerApprovedInd;

	@Setter
	@Getter
	@Column(name = "IF_COLLECT_Reason_Not_Approved", length = 250)
	private String ifCollectReasonNotApproved;

	@Setter
	@Getter
	@Column(name = "Date_Originally_Funded")
	private Date dateOriginallyFunded;

	@Setter
	@Getter
	@Column(name = "Full_Redemption_Decision_By_Client_Date")
	private Date fullRedemptionDecisionByClientDate;

	@Setter
	@Getter
	@Column(name = "Full_Redemption_Complete_Date")
	private Date fullRedemptionCompleteDate;

	@Setter
	@Getter
	@Column(name = "Include_in_Discretionary_Reporting_Ind", nullable = false,columnDefinition = "char(1)")
	private char includeInDiscretionaryReportingInd;

	@Setter
	@Getter
	@Column(name = "Plan_Holding_Specific_Accts_Ind", columnDefinition = "char(1)",nullable = false)
	private char planHoldingSpecificAcctsInd;

	@Setter
	@Getter
	@Column(name = "Plan_Holding_Reporting_Name", length = 10,nullable = false)
	private String PlanHoldingReportingName;

	@Setter
	@Getter
	@Column(name = "IF_Data_Requested", length = 250)
	private String ifDataRequested;

	@Setter
	@Getter
	@Column(name = "On_boarded_Holding_Ind",nullable = false, columnDefinition = "char(1)")
	private char onBoardedHoldingInd;

	@Setter
	@Getter
	@Column(name = "INVESTABLE_VEHICLE_PK",nullable = false)
	private int InvestableVehiclePK;

	@Setter
	@Getter
	@Column(name = "IF_Plan_Holding_Name", length = 40)
	private String ifPlanHoldingName;
}
