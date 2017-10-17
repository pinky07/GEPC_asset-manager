package com.nepc.asset.manager.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.List;

@Entity
@Table(name = "TAX_JURISDICTION")
@EqualsAndHashCode(callSuper=false)
@ToString
public class TaxJurisdiction extends BaseEntity
{
	@Setter
	@Getter
	@Id
	@Column(name = "Tax_Jurisdiction_PK", nullable = false)
	private BigInteger id;

	@Setter
	@Getter
	@Column(name = "Tax_Jurisdiction_Name", length = 160,nullable = false)
	private String  taxJurisdictionName;

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "taxJurisdiction")
	private List<TaxRate> taxRates;
}
