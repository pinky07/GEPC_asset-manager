package com.nepc.asset.manager.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.math.BigInteger;
import java.util.List;

@Entity
@Table(name = "ASSET_ALLOCATION_MODELING_BENCHMARK")
@EqualsAndHashCode(callSuper=false)
@ToString
public class AssetAllocationModelingBenchMark extends BaseEntity
{
	@Setter
	@Getter
	@Column(name = "AAMB_PK", nullable = false)
	@Id
	private BigInteger id;

	@Setter
	@Getter
	@Size(max = 160)
	@Column(name = "AAMB_Name", length = 160)
	private String aambName;

	@Setter
	@Getter
	@Column(name = "Derived_Ind", nullable = false)
	private char derivedInd;

	@Setter
	@Getter
	@Column(name = "Custom_Asset_Ind", nullable = false)
	private char customAssetInd;

	@Setter
	@Getter
	@Column(name = "Sensitivity_Ind", nullable = false)
	private char sensitivityInd;

	@Setter
	@Getter
	@Column(name = "Admin_Asset_Ind", nullable = false)
	private char adminAssetInd;

	@Setter
	@Getter
	@Column(name = "AAMB_Description", length = 250)
	private String aambDescription;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "AAMB_Audience_Type_PK")
	private AambAudienceType aambAudienceType;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "AAMB_Curation_TYPE_PK")
	private AambCurationType aambCurationType;

	//TODO this relationship is not working
	/*@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "Assumption_PK", nullable = false)
	private Assumption assumption;*/

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "BETA_GROUP_PK", nullable = false)
	private BetaGroup betaGroup;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "LDI_Category_PK", nullable = false )
	private LdiCategory ldiCategory;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "Goal_Based_Category_PK", nullable = false)
	private GoalBasedCategory goalBasedCategory;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "LIQUIDITY_PK", nullable = false)
	private Liquidity liquidity;

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "assetAllocationModelingBenchMark")
	private List<DerivedBenchMarkComponent> derivedBenchMarkComponents;

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "assetAllocationModelingBenchMark")
	private List<InvestmentStructureComponent> investmentStructureComponents;

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "assetAllocationModelingBenchMark")
	private List<MixDetailFact> mixDetailFacts;
}
