package com.nepc.asset.manager.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigInteger;

@Entity
@Table(name = "INVESTMENT_STRUCTURE_COMPONENT_TYPE_PK")
@EqualsAndHashCode(callSuper=false)
@ToString
public class InvestmentStructureComponentType extends BaseEntity
{
	@Setter
	@Getter
	@Id
	@Column(name = "INVESTMENT_STRUCTURE_COMPONENT_TYPE_PK",  nullable = false)
	private BigInteger id;

	@Setter
	@Getter
	@Column(name = "INVESTMENT_STRUCTURE_COMPONENT_Type_Name", length = 160,nullable = false)
	private String InvestmentStructureComponentTypeName;
}
