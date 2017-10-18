package com.nepc.asset.manager.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.math.BigDecimal;
import java.math.BigInteger;

@Entity
@Table(name = "SCENARIO_RETURN_ASSUMPTION")
@EqualsAndHashCode(callSuper = false)
@ToString
public class ScenarioReturnAssumption extends BaseEntity
{
	@Setter
	@Getter
	@Column(name = "Scenario_Return_PK", nullable = false)
	@Id
	private BigInteger id;

	@Setter
	@Getter
	@Column(name = "scenario_return_value", nullable = false, precision = 7, scale = 4)
	private BigDecimal scenarioReturnValue;

	@Setter
	@Getter
	@Column(name = "Period_Num", nullable = false)
	private int PeriodNum;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "Assumption_PK")
	private Assumption assumption;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "ASSUMPTION_TYPE_PK")
	private AssumptionType assumptionType;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "Scenario_ID_PK")
	private Scenario scenario;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "Version_PK")
	private Version version;
}
