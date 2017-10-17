package com.nepc.asset.manager.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.math.BigInteger;

@Entity
@Table(name = "MIX_DETAIL_FACT")
@EqualsAndHashCode(callSuper = false)
@ToString
public class MixDetailFact extends BaseEntity
{
	@Setter
	@Getter
	@Id
	@Column(name = "MIX_DETAIL_FACT_PK",  nullable = false)
	private BigInteger id;

	@Setter
	@Getter
	@Column(name = "Metric_Value_Num",  nullable = false)
	private int metricValueNum;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "INVESTMENT_STRUCTURE_MIX_COMPONENT_PK")
	private InvestmentStructureMixComponent investmentStructureMixComponent;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "Version_PK")
	private Version version;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "METRIC_DIMENSION_PK")
	private MetricDimension metricDimension;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "Scenario_ID_PK")
	private Scenario scenario;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "AAMB_PK")
	private AssetAllocationModelingBenchMark assetAllocationModelingBenchMark;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "ASSET_ALLOCATION_PERIOD_PK")
	private AssetAllocationPeriod assetAllocationPeriod;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "SPENDING_METHODOLOGY_PK")
	private SpendingMethodology spendingMethodology;

}
