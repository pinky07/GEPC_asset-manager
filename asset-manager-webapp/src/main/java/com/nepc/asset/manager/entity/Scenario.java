package com.nepc.asset.manager.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.List;

@Entity
@Table(name = "SCENARIO")
@EqualsAndHashCode(callSuper=false)
@ToString
public class Scenario extends BaseEntity
{
	@Setter
	@Getter
	@Column(name = "Scenario_ID_PK", nullable = false)
	@Id
	private BigInteger id;

	@Setter
	@Getter
	@Column(name = "Scenario_Name", nullable = false,length = 50)
	private String scenarioName;

	@Setter
	@Getter
	@Column(name = "Scenario_Desc", length = 250)
	private String scenarioDesc;

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "scenario")
	private List<ScenarioReturnAssumption> scenarioReturnAssumptions;

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "scenario")
	private List<MixDetailFact> mixDetailFacts;
}
