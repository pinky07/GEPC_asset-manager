package com.nepc.asset.manager.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.math.BigInteger;

@Entity
@Table(name = "MIX_SUMMARY_FACT")
@EqualsAndHashCode(callSuper = false)
@ToString
public class MixSummaryFact extends BaseEntity
{
	@Setter
	@Getter
	@Id
	@Column(name = "MIX_SUMMARY_FACT_PK", nullable = false)
	private BigInteger id;

	@Setter
	@Getter
	@Column(name = "Metric_Value_Num")
	private Integer metricValueNum;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "MIX_PK")
	private Mix mix;

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
}
