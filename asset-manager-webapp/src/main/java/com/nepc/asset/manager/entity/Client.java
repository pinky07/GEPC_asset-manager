package com.nepc.asset.manager.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "CLIENT")
@EqualsAndHashCode(callSuper=false)
@ToString
public class Client extends BaseEntity
{
	@Setter
	@Getter
	@Id
	@Column(name = "CLIENT_PK", nullable = false)
	private BigInteger id;

	@Setter
	@Getter
	@Column(name = "Preferred_Name_Short",nullable = false,length = 160)
	private String  preferredNameShort;

	@Setter
	@Getter
	@Column(name = "Preferred_Name_Long",length = 250)
	private String preferredNameLong;

	@Setter
	@Getter
	@Column(name = "Legal_Client_Name",length = 160)
	private String  legalClientName;

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
	@Column(name = "Estimated_Manageable_Assets_Amount",precision = 12, scale = 2)
	private BigDecimal  stimatedManageableAssetsAmount;

	@Setter
	@Getter
	@Column(name = "Stock_Exchange_Ticker",length = 10)
	private String stockExchangeTicker;

	@Setter
	@Getter
	@Column(name = "Growth_Category",length = 10)
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
	@Column(name = "NEPC_Client_NickName",columnDefinition = "char(10)")
	private char nepcClientNickName;

	@Setter
	@Getter
	@Column(name = "Client_Revenue_As_Of_Date")
	private Date clientRevenueAsOfDate;

	@Setter
	@Getter
	@Column(name = "General_Phone", columnDefinition = "char(12)",nullable = false)
	private char generalPhone;

	@Setter
	@Getter
	@Column(name = "General_Fax",columnDefinition = "char(12)",nullable = false)
	private char generalFax;

	@Setter
	@Getter
	@Column(name = "Website", length = 250,nullable = false)
	private String website;

	@Setter
	@Getter
	@Column(name = "Client_NEPC_CODE",length = 160,nullable = false)
	private String clientNepcCODE;

	@Setter
	@Getter
	@Column(name = "Legal_Name_Source",length = 160,nullable = false)
	private String legalNameSource;

	@Setter
	@Getter
	@Column(name = "Estimated_Manageable_Assets_Amounts_As_Of_Date")
	private Date estimatedManageableAssetsAmountsAsOfDate;

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "plan")
	private List<Plan> plans;
}
