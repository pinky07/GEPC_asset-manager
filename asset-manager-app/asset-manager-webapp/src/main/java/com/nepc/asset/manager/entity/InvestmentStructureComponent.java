package com.nepc.asset.manager.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Date;

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
	@Column(name = "INVESTMENT_STRUCTURE_COMPONENT_Alias", length = 40)
	private String investmentStructureComponentAlias;

	@Setter
	@Getter
	@Column(name = "IF_Short_Name", nullable = false, length = 10)
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
	@Column(name = "Color_Assignment", length = 10)
	private String colorAssignment;

	@Setter
	@Getter
	@Column(name = "Expense_Ratio", nullable = false)
	private int expenseRatio;

	@Setter
	@Getter
	@Column(name = "Actual_MV", columnDefinition = "decimal", precision = 12, scale = 2)
	private BigDecimal actualMV;

	@Setter
	@Getter
	@Column(name = "Cost_Basis", nullable = false)
	private int costBasis;

	@Setter
	@Getter
	@Column(name = "Display_Order")
	private int displayOrder;

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
	@Column(name = "Policy_Weight", columnDefinition = "decimal", precision = 7, scale = 4)
	private BigDecimal policyWeight;

	@Setter
	@Getter
	@Column(name = "Short_Description", length = 160)
	private String shortDescription;
}
