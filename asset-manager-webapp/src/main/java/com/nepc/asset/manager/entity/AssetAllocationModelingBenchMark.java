package com.nepc.asset.manager.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
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
	@Column(name = "AAMB_Name", nullable = false)
	private int aambName;

	@Setter
	@Getter
	@Column(name = "Derived_Ind",columnDefinition = "char(1)",nullable = false)
	private char derivedInd;
	//
	@Setter
	@Getter
	@Column(name = "Custom_Asset_Ind",columnDefinition = "char(1)" ,nullable = false)
	private char customAssetInd;

	@Setter
	@Getter
	@Column(name = "Sensitivity_Ind",columnDefinition = "char(1)", nullable = false)
	private char sensitivityInd;

	@Setter
	@Getter
	@Column(name = "Admin_Asset_Ind",columnDefinition = "char(1)",nullable = false)
	private char adminAssetInd;

	@Setter
	@Getter
	@Column(name = "AAMB_Description",length = 250)
	private String aambDescription;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "FK__ASSET_ALL__AAMB___52593CB8")
	private AambAudienceType aambAudienceType;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "FK__ASSET_ALL__AAMB___4BAC3F29")
	private AambCurationType aambCurationType;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "FK__ASSET_ALL__Assum__4D94879B")
	private Assumption assumption;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "FK__ASSET_ALL__BETA___5070F446")
	private BetaGroup betaGroup;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "FK__ASSET_ALL__LDI_C__4F7CD00D")
	private LdiCategory ldiCategory;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "FK__ASSET_ALL__Goal___4E88ABD4")
	private GoalBasedCategory goalBasedCategory;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "FK__ASSET_ALL__LIQUI__4CA06362")
	private Liquidity liquidity;

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "assetAllocationModelingBenchMark")
	private List<DerivedBenchMarkComponent> derivedBenchMarkComponents;


}
