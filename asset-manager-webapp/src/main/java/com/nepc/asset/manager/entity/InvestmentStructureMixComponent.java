package com.nepc.asset.manager.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.List;

@Entity
@Table(name = "INVESTMENT_STRUCTURE_MIX_COMPONENT")
@EqualsAndHashCode(callSuper = false)
@ToString
public class InvestmentStructureMixComponent extends BaseEntity
{
	@Setter
	@Getter
	@Column(name = "INVESTMENT_STRUCTURE_MIX_COMPONENT_PK", nullable = false)
	@Id
	private BigInteger id;

	@Setter
	@Getter
	@NotNull
	@Column(name = "Allocation_Percent", nullable = false, precision = 7, scale = 4)
	private BigDecimal allocationPercent;

	@Setter
	@Getter
	@Column(name = "Overwrite_Allocation_Ind", nullable = false)
	private char overwriteAllocationInd;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "MIX_PK")
	private Mix mix;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "INVESTMENT_STRUCTURE_COMPONENT_PK")
	private InvestmentStructureComponent investmentStructureComponent;

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "investmentStructureMixComponent")
	private List<MixDetailFact> mixDetailFacts;

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "investmentStructureMixComponent")
	private List<MixInvestmentStructureFlat> mixInvestmentStructureFlats;
}
