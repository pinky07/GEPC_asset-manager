package com.nepc.asset.manager.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.*;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.List;

@Entity
@Table(name = "INVESTMENT_STRUCTURE")
@EqualsAndHashCode(callSuper=false)
@ToString
public class InvestmentStructure extends BaseEntity
{
	@Setter
	@Getter
	@Id
	@Column(name = "INVESTMENT_STRUCTURE_PK", nullable = false)
	private BigInteger id;

	@Setter
	@Getter
	@Column(name = "INVESTMENT_STRUCTURE_Name", length = 160,nullable = false)
	private String investmentStructureName;

	@Setter
	@Getter
	@Column(name = "Duration_Of_Liability")
	private int durationOfLiability;

	@Setter
	@Getter
	@Column(name = "Plan_Funded_Amount",precision = 12,scale = 2)
	private BigDecimal planFundedAmount;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "PLAN_PK")
	@NotFound(action= NotFoundAction.IGNORE)
	private Plan plan;

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "investmentStructure")
	private List<InvestmentStructureComponent> investmentStructureComponents;
}
