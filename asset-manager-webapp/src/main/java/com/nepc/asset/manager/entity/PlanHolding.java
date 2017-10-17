package com.nepc.asset.manager.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.math.BigInteger;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "PLAN_HOLDING")
@EqualsAndHashCode(callSuper=false)
@ToString
public class PlanHolding extends BaseEntity
{
	@Setter
	@Getter
	@Id
	@NotNull
	@Size(max = 50)
	@Column(name = "PLAN_HOLDING_PK", nullable = false, length = 50)
	private String id;

	@Setter
	@Getter
	@Column(name = "INVESTABLE_VEHICLE_PK")
	private int investableVehiclePK;

	@Setter
	@Getter
	@Column(name = "Investable_Vehicle_Units_Number")
	private int investableVehicleUnitsNumber;

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
	@Column(name = "IF_Plan_Holding_Name", length = 40)
	private String ifPlanHoldingName;

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "planHolding")
	private List<InvestmentStructureComponent> investmentStructureComponents;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "PLAN_PK")
	private Plan plan;
}
