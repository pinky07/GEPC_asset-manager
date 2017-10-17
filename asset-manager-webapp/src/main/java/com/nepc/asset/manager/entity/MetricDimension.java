package com.nepc.asset.manager.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.List;

@Entity
@Table(name = "METRIC_DIMENSION")
@EqualsAndHashCode(callSuper = false)
@ToString
public class MetricDimension extends BaseEntity
{
	@Setter
	@Getter
	@Id
	@Column(name = "METRIC_DIMENSION_PK",  nullable = false)
	private BigInteger id;

	@Setter
	@Getter
	@Column(name = "Metric_Name",  nullable = false)
	private String metricName;

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "metricDimension")
	private List<MixDetailFact> mixDetailFacts;

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "metricDimension")
	private List<MixSummaryFact> mixSummaryFacts;
}
