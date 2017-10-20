package com.nepc.asset.manager.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name = "TAX_RATE")
@EqualsAndHashCode(callSuper = false)
@ToString
public class TaxRate extends BaseEntity
{
	@Setter
	@Getter
	@Column(name = "Tax_Rate_PK", nullable = false, length = 18)
	@Id
	private String taxRatePK;

	@Setter
	@Getter
	@Column(name = "Income_Tax", precision = 7, scale = 4)
	private BigDecimal incomeTax;

	@Setter
	@Getter
	@Column(name = "Dividend_Tax", precision = 7, scale = 4)
	private BigDecimal dividendTax;

	@Setter
	@Getter
	@Column(name = "Short_Term_Capital_Gains_Tax", precision = 7, scale = 4)
	private BigDecimal shortTermCapitalGainsTax;

	@Setter
	@Getter
	@Column(name = "Long_Term_Capital_Gains_Tax", precision = 7, scale = 4)
	private BigDecimal longTermCapitalGainsTax;

	@Setter
	@Getter
	@Column(name = "Display_to_User_Ind_Y_N", nullable = false, columnDefinition = "char(1)")
	private Date displayToUserIndYN;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "Tax_Jurisdiction_PK")
	private TaxJurisdiction taxJurisdiction;
}
