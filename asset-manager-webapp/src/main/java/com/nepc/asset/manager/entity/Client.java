package com.nepc.asset.manager.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "CLIENT")
@EqualsAndHashCode(callSuper = false)
@ToString
public class Client extends BaseEntity
{
	@Setter
	@Getter
	@Id
	@NotNull
	@Column(name = "CLIENT_PK")
	private BigInteger id;

	@Setter
	@Getter
	@Size(max = 160)
	@NotNull
	@Column(name = "Preferred_Name_Short")
	private String preferredNameShort;

	@Setter
	@Getter
	@Size(max = 250)
	@Column(name = "Preferred_Name_Long")
	private String preferredNameLong;

	@Setter
	@Getter
	@Size(max = 160)
	@Column(name = "Legal_Client_Name")
	private String legalClientName;

	@Setter
	@Getter
	@Column(name = "Client_Revenue_Amt", precision = 12, scale = 2)
	private BigDecimal clientRevenueAmt;

	@Setter
	@Getter
	@Column(name = "Dedicated_Investment_Team_Ind", columnDefinition = "char(1)")
	private char dedicatedInvestmentTeamInd;

	@Setter
	@Getter
	@Column(name = "Estimated_Manageable_Assets_Amount", precision = 12, scale = 2)
	private BigDecimal estimatedManageableAssetsAmount;

	@Setter
	@Getter
	@Size(max = 10)
	@Column(name = "Stock_Exchange_Ticker")
	private String stockExchangeTicker;

	@Setter
	@Getter
	@Size(max = 10)
	@Column(name = "Growth_Category")
	private String growthCategory;

	@Setter
	@Getter
	@Column(name = "Hire_Date")
	private Date hireDate;

	@Setter
	@Getter
	@Column(name = "Relationship_End_Date")
	private Date relationshipEndDate;

	@Setter
	@Getter
	@Column(name = "NEPC_Client_NickName")
	private String nepcClientNickName;

	@Setter
	@Getter
	@Column(name = "Client_Revenue_As_Of_Date")
	private Date clientRevenueAsOfDate;

	@Setter
	@Getter
	@Size(max = 10)
	@Column(name = "General_Phone", length = 12, nullable = false)
	private String generalPhone;

	@Setter
	@Getter
	@Column(name = "General_Fax", length = 12, nullable = false)
	private String generalFax;

	@Setter
	@Getter
	@Column(name = "Website", length = 250, nullable = false)
	private String website;

	@Setter
	@Getter
	@Column(name = "Client_NEPC_CODE", length = 160, nullable = false)
	private String clientNepcCODE;

	@Setter
	@Getter
	@Column(name = "Legal_Name_Source", length = 160, nullable = false)
	private String legalNameSource;

	@Setter
	@Getter
	@Column(name = "Estimated_Manageable_Assets_Amounts_As_Of_Date")
	private Date estimatedManageableAssetsAmountsAsOfDate;

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "client")
	private List<Plan> plans;
}
