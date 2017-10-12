package com.nepc.asset.manager.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigDecimal;
import java.math.BigInteger;

@Entity
@Table(name = "MIX_INVESTMENT_STRUCTURE_COMPONENT")
@EqualsAndHashCode(callSuper=false)
@ToString
public class MixInvestmentStructureComponent extends BaseEntity
{
	@Setter
	@Getter
	@Column(name = "INVESTMENT_STRUCTURE_COMPONENT_MIX_PK", nullable = false)
	@Id
	private BigInteger id;

	@Setter
	@Getter
	@Column(name = "Allocation_Percent", nullable = false,precision = 7,scale = 4)
	private BigDecimal allocationPercent;

	@Setter
	@Getter
	@Column(name = "Overwrite_Allocation_Ind",columnDefinition = "char(1)",nullable = false)
	private char overwriteAllocationInd;
}
