package com.nepc.asset.manager.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.List;

@Entity
@Table(name = "GOAL_BASED_CATEGORY")
@EqualsAndHashCode(callSuper=false)
@ToString
public class GoalBasedCategory extends BaseEntity
{
	@Setter
	@Getter
	@Id
	@Column(name = "Goal_Based_Category_PK", nullable = false)
	private BigInteger id;

	@Setter
	@Getter
	@Column(name = "Goal_Based_Category_Name", length = 160,nullable = false)
	private String goalBasedCategoryName;

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "goalBasedCategory")
	private List<AssetAllocationModelingBenchMark> assetAllocationModelingBenchMarks;

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "goalBasedCategory")
	private List<InvestmentStructureComponent> investmentStructureComponents;
}
