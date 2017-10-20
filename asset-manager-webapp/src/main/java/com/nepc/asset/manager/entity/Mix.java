package com.nepc.asset.manager.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "MIX")
@EqualsAndHashCode(callSuper = false)
@ToString
public class Mix extends BaseEntity
{
	@Setter
	@Getter
	@Column(name = "MIX_PK", nullable = false)
	@Id
	private BigInteger id;

	@Setter
	@Getter
	@Column(name = "MIX_Name", length = 10)
	private String mixName;

	@Setter
	@Getter
	@Column(name = "Information_As_Of_Date")
	private Date informationAsOfDate;

	@Setter
	@Getter
	@Column(name = "Session_ID")
	private Integer sessionId;

	@Setter
	@Getter
	@Column(name = "Funded_Status", length = 10)
	private String fundedStatus;

	@Setter
	@Getter
	@Column(name = "Mix_Description", length = 250, nullable = false)
	private String mixDescription;

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "mix")
	private List<InvestmentStructureMixComponent> investmentStructureMixComponents;

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "mix")
	private List<MixSummaryFact> mixSummaryFacts;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "Mix_Type_PK")
	@NotFound(action = NotFoundAction.IGNORE)
	private MixType mixType;
}
