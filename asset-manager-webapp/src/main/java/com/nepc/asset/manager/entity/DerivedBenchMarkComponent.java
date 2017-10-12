package com.nepc.asset.manager.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.math.BigDecimal;
import java.math.BigInteger;

@Entity
@Table(name = "DERIVED_BENCHMARK_COMPONENT")
@EqualsAndHashCode(callSuper=false)
@ToString
public class DerivedBenchMarkComponent extends BaseEntity
{
	@Setter
	@Getter
	@Column(name = "Derived_Benchmark_Component_PK", nullable = false)
	@Id
	private BigInteger id;

	@Setter
	@Getter
	@Column(name = "AAMB_Allocation_Percentage", precision = 7, scale = 4)
	private BigDecimal aambAllocationPercentage;

	@Setter
	@Getter
	@Column(name = "Composite_Dependency_Level",nullable = false)
	private int compositeDependencyLevel;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "FK__DERIVED_B__AAMB___6754599E")
	private AssetAllocationModelingBenchMark assetAllocationModelingBenchMark;
}
