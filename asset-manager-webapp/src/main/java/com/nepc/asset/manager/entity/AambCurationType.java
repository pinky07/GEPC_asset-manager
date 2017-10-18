package com.nepc.asset.manager.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.List;

@Entity
@Table(name = "AAMB_CURATION_TYPE")
@EqualsAndHashCode(callSuper = false)
@ToString
public class AambCurationType extends BaseEntity
{
	@Setter
	@Getter
	@Id
	@Column(name = "AAMB_Curation_TYPE_PK", nullable = false)
	private BigInteger id;

	@Setter
	@Getter
	@Column(name = "AAMB_Curation_TYPE_Name", length = 160, nullable = false)
	private String aambCurationTypeName;

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "aambAudienceType")
	private List<AssetAllocationModelingBenchMark> assetAllocationModelingBenchMarks;
}
