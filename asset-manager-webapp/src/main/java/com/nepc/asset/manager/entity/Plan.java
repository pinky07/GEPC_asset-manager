package com.nepc.asset.manager.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "\"PLAN\"")
@EqualsAndHashCode(callSuper = false)
@ToString
public class Plan extends BaseEntity
{
	@Setter
	@Getter
	@Id
	@Column(name = "PLAN_PK", nullable = false)
	private BigInteger id;

	@Setter
	@Getter
	@Column(name = "NEPC_Plan_Code", length = 160)
	private String nepcPlanCode;

	@Setter
	@Getter
	@Column(name = "Legal_Plan_Name", length = 160, nullable = false)
	private String legalPlanName;

	@Setter
	@Getter
	@Column(name = "Plan_Preferred_Short_Name", length = 10)
	private String planPreferredShortName;

	@Setter
	@Getter
	@Column(name = "Plan_Preferred_Long_Name", length = 250)
	private String planPreferredLongName;

	@Setter
	@Getter
	@Column(name = "NEPC_Plan_NickName", length = 10)
	private String nepcPlanNickName;

	@Setter
	@Getter
	@Column(name = "Plan_Active_Ind", nullable = false, columnDefinition = "char(1)")
	private char planActiveInd;

	@Setter
	@Getter
	@Column(name = "Virtual_Ind", columnDefinition = "char(1)", nullable = false)
	private char virtualInd;

	@Setter
	@Getter
	@Column(name = "Managed_at_Client_Ind", columnDefinition = "char(1)", nullable = false)
	private char managedAtClientInd;

	@Setter
	@Getter
	@Column(name = "Union_Bug_Ind", columnDefinition = "char(1)", nullable = false)
	private char unionBugInd;

	@Setter
	@Getter
	@Column(name = "Taxable_Flag", columnDefinition = "char(1)", nullable = false)
	private char taxableFlag;

	@Setter
	@Getter
	@Column(name = "ERISA_Ind", columnDefinition = "char(1)", nullable = false)
	private char erisaInd;

	@Setter
	@Getter
	@Column(name = "Plan_Frozen_Ind", columnDefinition = "char(1)", nullable = false)
	private char planFrozenInd;

	@Setter
	@Getter
	@Column(name = "Discretionary_Services_Ind", columnDefinition = "char(1)", nullable = false)
	private char discretionaryServicesInd;

	@Setter
	@Getter
	@Column(name = "Asset_Allocation_Ind", columnDefinition = "char(1)", nullable = false)
	private char assetAllocationInd;

	@Setter
	@Getter
	@Column(name = "Captive_Ind", columnDefinition = "char(1)", nullable = false)
	private char captiveInd;

	@Setter
	@Getter
	@Column(name = "Onshore_Ind", columnDefinition = "char(1)", nullable = false)
	private char onshoreInd;

	@Setter
	@Getter
	@Column(name = "Extrinsically_Managed_Assets_Ind", columnDefinition = "char(1)", nullable = false)
	private char extrinsicallyManagedAssetsInd;

	@Setter
	@Getter
	@Column(name = "Actual_Participants_Num")
	private int actualParticipantsNum;

	@Setter
	@Getter
	@Column(name = "Fiscal_Month_Num")
	private int fiscalMonthNum;

	@Setter
	@Getter
	@Column(name = "Total_NEPC_and_Extrinsic_Assets", precision = 12, scale = 2)
	private BigDecimal totalNepcAndExtrinsicAssets;

	@Setter
	@Getter
	@Column(name = "Total_NEPC_and_Extrinsic_Assets_As_Of_Date")
	private Date totalNepcAndExtrinsicAssetsAsOfDate;

	@Setter
	@Getter
	@Size(max = 10)
	@Column(name = "Risk_Profile", length = 10)
	private String riskProfile;

	@Setter
	@Getter
	@Column(name = "Funded_Amount")
	private int fundedAmount;

	@Setter
	@Getter
	@Size(max = 160)
	@Column(name = "Assets_Restriction", nullable = false, length = 160)
	private String assetsRestriction;

	@Setter
	@Getter
	@Column(name = "Type_Of_Insurance_Asset", length = 160, nullable = false)
	private String typeOfInsuranceAsset;

	@Setter
	@Getter
	@Column(name = "Country_of_Domicile", nullable = false, length = 160)
	private String countryOfDomicile;

	@Setter
	@Getter
	@Column(name = "Inception_Date")
	private Date inceptionDate;

	@Setter
	@Getter
	@Column(name = "Frozen_Date")
	private Date frozenDate;

	@Setter
	@Getter
	@Column(name = "Total_NEPC_Managed_Plan_Assets_As_Of_Date")
	private Date totalNepcManagedPlanAssetsAsOfDate;

	@Setter
	@Getter
	@Column(name = "Termination_Date")
	private Date terminationDate;

	@Setter
	@Getter
	@Column(name = "Tax_ID", length = 160)
	private String taxID;

	@Setter
	@Getter
	@Column(name = "IF_Collect_Plan_Authorization_Letter_Ind", nullable = false, columnDefinition = "char(1)")
	private char ifCollectPlanAuthorizationLetterInd;

	@Setter
	@Getter
	@Column(name = "Legal_Name_Source", length = 10)
	private String legalNameSource;

	@Setter
	@Getter
	@Column(name = "Acct_Number_at_Manager", length = 160)
	private String acctNumberAtManager;

	@Setter
	@Getter
	@Column(name = "Qualified_Participants_Num")
	private int qualifiedParticipantsNum;

	@Setter
	@Getter
	@Column(name = "Actual_Participants_Num_As_Of_Date")
	private Date actualParticipantsNumAsOfDate;

	@Setter
	@Getter
	@Column(name = "NEPC_Responsible_Start_Date")
	private Date nepcResponsibleStartDate;

	@Setter
	@Getter
	@Column(name = "AA_Display_Order")
	private int aaDisplayOrder;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "CLIENT_PK")
	private Client client;

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "plan")
	private List<InvestmentStructure> investmentStructures;

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "plan")
	private List<PlanHolding> planHoldings;
}
