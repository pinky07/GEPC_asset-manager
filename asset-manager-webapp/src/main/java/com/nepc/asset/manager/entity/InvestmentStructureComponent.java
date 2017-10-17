package com.nepc.asset.manager.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "INVESTMENT_STRUCTURE_COMPONENT")
@EqualsAndHashCode(callSuper=false)
@ToString
public class InvestmentStructureComponent extends BaseEntity
{
	@Setter
	@Getter
	@Id
	@Column(name = "INVESTMENT_STRUCTURE_COMPONENT_PK", unique = true, nullable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private BigInteger id;

	@Setter
	@Getter
	@Size(max = 100)
	@Column(name = "INVESTMENT_STRUCTURE_COMPONENT_Alias", length = 100)
	private String investmentStructureComponentAlias;

	@Setter
	@Getter
	@Size(max = 40)
	@Column(name = "IF_Short_Name", nullable = false, length = 40)
	private String ifShortName;

	@Setter
	@Getter
	@Column(name = "Performance_End_Date")
	private Date performanceEndDate;

	@Setter
	@Getter
	@Column(name = "Information_As_Of_Date")
	private Date informationAsOfDate;

	@Setter
	@Getter
	@Size(max = 15)
	@Column(name = "Color_Assignment", length = 15)
	private String colorAssignment;

	@Setter
	@Getter
	@Column(name = "Expense_Ratio")
	private Integer expenseRatio;

	@Setter
	@Getter
	@Column(name = "Actual_MV", columnDefinition = "decimal", precision = 12, scale = 2)
	private BigDecimal actualMV;

	@Setter
	@Getter
	@Column(name = "Cost_Basis")
	private Integer costBasis;

	@Setter
	@Getter
	@Column(name = "Display_Order")
	private Integer displayOrder;

	@Setter
	@Getter
	@Column(name = "Overwrite_Benchmark_Ind", nullable = false)
	private char overwriteBenchmarkInd;

	@Setter
	@Getter
	@Column(name = "CRM_InvProduct_Link", length = 250)
	private String crmInvProductLink;

	@Setter
	@Getter
	@Size(max = 50)
	@Column(name = "Policy_Weight", length = 50)
	private String policyWeight;

	@Setter
	@Getter
	@Size(max = 160)
	@Column(name = "Short_Description", length = 160)
	private String shortDescription;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "BETA_GROUP_PK")
	private BetaGroup betaGroup;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "INVESTMENT_STRUCTURE_COMPONENT_TYPE_PK")
	private InvestmentStructureComponentType investmentStructureComponentType;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "LIQUIDITY_PK")
	private Liquidity liquidity;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "LDI_Category_PK")
	private LdiCategory ldiCategory;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "PLAN_HOLDING_PK")
	@NotFound(action= NotFoundAction.IGNORE)
	private PlanHolding planHolding;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "Goal_Based_Category_PK")
	private GoalBasedCategory goalBasedCategory;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "AAMB_PK")
	private AssetAllocationModelingBenchMark assetAllocationModelingBenchMark;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "INVESTMENT_STRUCTURE_PK")
	private InvestmentStructure investmentStructure;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "MANAGEMENT_STYLE_PK")
	private ManagementStyle managementStyle;

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "investmentStructureComponent")
	private List<InvestmentStructureMixComponent> investmentStructureMixComponents;

}
