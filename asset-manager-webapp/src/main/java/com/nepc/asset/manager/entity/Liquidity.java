package com.nepc.asset.manager.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.List;

@Entity
@Table(name = "LIQUIDITY")
@EqualsAndHashCode(callSuper = false)
@ToString
public class Liquidity
{
	@Setter
	@Getter
	@Id
	@Column(name = "LIQUIDITY_PK", unique = true, nullable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private BigInteger id;

	@Setter
	@Getter
	@Column(name = "Liquidity_Name", length = 250)
	private String liquidityName;

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "liquidity")
	private List<AssetAllocationModelingBenchMark> assetAllocationModelingBenchMarks;

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "liquidity")
	private List<InvestmentStructureComponent> investmentStructureComponents;
}
