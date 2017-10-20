package com.nepc.asset.manager.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.List;

@Entity
@Table(name = "LDI_CATEGORY")
@EqualsAndHashCode(callSuper = false)
@ToString
public class LdiCategory extends BaseEntity
{
	@Setter
	@Getter
	@Id
	@Column(name = "LDI_Category_PK", nullable = false)
	private BigInteger id;

	@Setter
	@Getter
	@Column(name = "LDI_Category_Name", length = 160, nullable = false)
	private String ldiCategoryName;

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "ldiCategory")
	private List<AssetAllocationModelingBenchMark> assetAllocationModelingBenchMarks;

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "ldiCategory")
	private List<InvestmentStructureComponent> investmentStructureComponents;
}
