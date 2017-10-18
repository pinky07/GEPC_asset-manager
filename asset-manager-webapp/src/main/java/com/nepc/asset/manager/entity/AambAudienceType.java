package com.nepc.asset.manager.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "AAMB_AUDIENCE_TYPE")
@EqualsAndHashCode(callSuper = false)
@ToString
public class AambAudienceType extends BaseEntity
{
	@Setter
	@Getter
	@Id
	@Column(name = "AAMB_Audience_Type_PK", nullable = false)
	private int id;

	@Setter
	@Getter
	@Column(name = "AAMB_Audience_Type_Name", length = 160, nullable = false)
	private String aambAudienceTypeName;

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "aambAudienceType")
	private List<AssetAllocationModelingBenchMark> assetAllocationModelingBenchMarks;

}
