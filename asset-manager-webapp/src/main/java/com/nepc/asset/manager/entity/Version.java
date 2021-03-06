package com.nepc.asset.manager.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "VERSION")
@EqualsAndHashCode(callSuper = false)
@ToString
public class Version extends BaseEntity
{
	@Setter
	@Getter
	@Id
	@Column(name = "Version_PK", unique = true, nullable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private BigInteger id;

	@Setter
	@Getter
	@Column(name = "Version_Name", length = 160)
	private String versionName;

	@Setter
	@Getter
	@Column(name = "AsOf")
	private Date asOf;

	@Setter
	@Getter
	@Column(name = "Version_Flag", columnDefinition = "char(1)")
	private boolean version_Flag;

	@Setter
	@Getter
	@Column(name = "Taxability_Ind", columnDefinition = "char(1)", nullable = false)
	private char taxability_Ind;

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "version")
	private List<AssumptionValueSet> assumptionValueSets;

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "version")
	private List<ScenarioReturnAssumption> scenarioReturnAssumptions;

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "version")
	private List<MixDetailFact> mixDetailFacts;

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "version")
	private List<MixSummaryFact> mixSummaryFacts;
}
