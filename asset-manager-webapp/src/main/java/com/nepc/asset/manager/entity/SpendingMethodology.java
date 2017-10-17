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
@Table(name = "SPENDING_METHODOLOGY")
@EqualsAndHashCode(callSuper = false)
@ToString
public class SpendingMethodology extends BaseEntity
{
	@Setter
	@Getter
	@Id
	@Column(name = "SPENDING_METHODOLOGY_PK",  nullable = false)
	private BigInteger id;

	@Setter
	@Getter
	@Size(max = 10)
	@Column(name = "Spending_Methodology_Name",  length = 10, nullable = false)
	private String spendingMethodologyName;

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "spendingMethodology")
	private List<MixDetailFact> mixDetailFacts;
}
