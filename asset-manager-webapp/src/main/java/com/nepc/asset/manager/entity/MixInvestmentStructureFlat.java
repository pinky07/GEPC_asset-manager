package com.nepc.asset.manager.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.math.BigInteger;

@Entity
@Table(name = "MIX_INVESTMENT_STRUCTURE_FLAT")
@EqualsAndHashCode(callSuper = false)
@ToString
public class MixInvestmentStructureFlat extends BaseEntity
{
	@Setter
	@Getter
	@Id
	@Column(name = "MIX_INVESTMENT_STRUCTURE_COMPONENT_FLAT_PK",  nullable = false)
	private BigInteger id;

	@Setter
	@Getter
	@Column(name = "Levels_Between_Number",  nullable = false)
	private int levelsBetweenNumber;

	@Setter
	@Getter
	@Column(name = "Allocation_Percent",  nullable = false)
	private double allocationPercent;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "INVESTMENT_STRUCTURE_MIX_COMPONENT_PK")
	private InvestmentStructureMixComponent investmentStructureMixComponent;
}
