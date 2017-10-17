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
@Table(name = "ASSET_ALLOCATION_PERIOD")
@EqualsAndHashCode(callSuper = false)
@ToString
public class AssetAllocationPeriod extends BaseEntity
{
	@Setter
	@Getter
	@Column(name = "ASSET_ALLOCATION_PERIOD_PK", nullable = false)
	@Id
	private BigInteger id;

	@Setter
	@Getter
	@Size(max = 10)
	@Column(name = "Period_Name", nullable = false, length = 10)
	private String periodName;

	@Setter
	@Getter
	@Column(name = "Period_Number", nullable = false)
	private int periodNumber;

	@Setter
	@Getter
	@Size(max = 10)
	@Column(name = "Period_Type", nullable = false, length = 10)
	private String periodType;

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "assetAllocationPeriod")
	private List<MixDetailFact> mixDetailFacts;
}
