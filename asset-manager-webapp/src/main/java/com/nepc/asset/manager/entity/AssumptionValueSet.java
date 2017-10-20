package com.nepc.asset.manager.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.math.BigDecimal;
import java.math.BigInteger;

@Entity
@Table(name = "ASSUMPTION_VALUE_SET")
@EqualsAndHashCode(callSuper = false)
@ToString
public class AssumptionValueSet extends BaseEntity
{
	@Setter
	@Getter
	@Column(name = "Assumption_Value_Set_PK", nullable = false)
	@Id
	private BigInteger id;

	@Setter
	@Getter
	@Column(name = "arithmetic_expected_returns_30_year_assumptions", nullable = false, precision = 7, scale = 4)
	private BigDecimal arithmeticExpectedRreturns30YearAssumptions;

	@Setter
	@Getter
	@Column(name = "arithmetic_expected_returns_5_7_year_assumptions", nullable = false, precision = 7, scale = 4)
	private BigDecimal arithmeticExpectedReturns5_7YearAssumptions;

	@Setter
	@Getter
	@Column(name = "geometric_expected_returns_30_year_assumptions", precision = 7, scale = 4, nullable = false)
	private BigDecimal geometricExpectedReturns30YearAssumptions;

	@Setter
	@Getter
	@Column(name = "expected_std_dev_30_year_assumptions", nullable = false, precision = 7, scale = 4)
	private BigDecimal expectedStdDev30YearAssumptions;

	@Setter
	@Getter
	@Column(name = "geometric_expected_returns_5_7_year_assumptions", nullable = false, precision = 7, scale = 4)
	private BigDecimal geometricExpectedReturns5_7YearAssumptions;

	@Setter
	@Getter
	@Column(name = "expected_std_dev_5_7_year_assumptions", nullable = false, precision = 7, scale = 4)
	private BigDecimal expectedStdDev5_7YearAssumptions;

	@Setter
	@Getter
	@Column(name = "assumption_value_yield", precision = 7, scale = 4, nullable = false)
	private BigDecimal assumptionvalueyield;

	@Setter
	@Getter
	@Column(name = "OAS", columnDefinition = "float(53)")
	private double oas;

	@Setter
	@Getter
	@Column(name = "Standard_Deviation", nullable = false, precision = 7, scale = 4)
	private BigDecimal standardDeviation;

	@Setter
	@Getter
	@Column(name = "Duration_Period", columnDefinition = "float(53)")
	private double durationPeriod;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "Assumption_PK")
	private Assumption assumption;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "Version_PK")
	private Version version;
}
