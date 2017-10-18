package com.nepc.asset.manager.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.List;

@Entity
@Table(name = "BETA_GROUP")
@EqualsAndHashCode(callSuper = false)
@ToString
public class BetaGroup extends BaseEntity
{
	@Setter
	@Getter
	@Column(name = "BETA_GROUP_PK", nullable = false)
	@Id
	private BigInteger id;

	@Setter
	@Getter
	@Column(name = "Beta_Group_Name", length = 160, nullable = false)
	private String betaGroupName;

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "betaGroup")
	private List<AssetAllocationModelingBenchMark> assetAllocationModelingBenchMarks;

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "betaGroup")
	private List<InvestmentStructureComponent> investmentStructureComponents;
}
