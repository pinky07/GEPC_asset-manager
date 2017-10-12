package com.nepc.asset.manager.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.List;

@Entity
@Table(name = "ASSUMPTION_TYPE")
@EqualsAndHashCode(callSuper=false)
@ToString
public class AssumptionType extends BaseEntity
{
	@Setter
	@Getter
	@Id
	@Column(name = "ASSUMPTION_TYPE_PK", nullable = false)
	private BigInteger id;

	@Setter
	@Getter
	@Column(name = "Assumption_Type_Name", length = 160,nullable = false)
	private String assumptionTypeName;

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "assumption")
	private List<ScenarioReturnAssumption> scenarioReturnAssumptions;
}
