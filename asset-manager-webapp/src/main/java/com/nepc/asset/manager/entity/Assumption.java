package com.nepc.asset.manager.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.math.BigInteger;
import java.util.List;

@Entity
@Table(name = "ASSUMPTION")
@EqualsAndHashCode(callSuper = false)
@ToString
public class Assumption extends BaseEntity
{
	@Setter
	@Getter
	@Id
	@Column(name = "Assumption_PK", nullable = false)
	private BigInteger id;

	@Setter
	@Getter
	@NotNull
	@Size(max = 160)
	@Column(name = "Assumption_Name", length = 160, nullable = false)
	private String assumptionName;

	/*@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "assumption")
	private List<AssetAllocationModelingBenchMark> assetAllocationModelingBenchMarks;*/

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "assumption")
	private List<AssumptionValueSet> assumptionValueSets;

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "assumption")
	private List<ScenarioReturnAssumption> scenarioReturnAssumptions;

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "assumption")
	private List<Correlation> correlations;
}
