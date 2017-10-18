package com.nepc.asset.manager.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "INVESTMENT_STRUCTURE_COMPONENT_TYPE")
@EqualsAndHashCode(callSuper = false)
@ToString
public class InvestmentStructureComponentType extends BaseEntity
{
	@Setter
	@Getter
	@Id
	@Column(name = "INVESTMENT_STRUCTURE_COMPONENT_TYPE_PK", nullable = false)
	private char id;

	@Setter
	@Getter
	@Column(name = "INVESTMENT_STRUCTURE_COMPONENT_Type_Name", length = 160, nullable = false)
	private String InvestmentStructureComponentTypeName;

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "investmentStructureComponentType")
	private List<InvestmentStructureComponent> investmentStructureComponents;
}
