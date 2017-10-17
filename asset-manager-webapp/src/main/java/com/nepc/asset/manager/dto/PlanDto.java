package com.nepc.asset.manager.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.nepc.asset.manager.entity.InvestmentStructure;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Date;
import java.util.List;

@JsonInclude(value = JsonInclude.Include.NON_NULL)
public class PlanDto extends BaseDto
{
	@Setter
	@Getter
	private BigInteger id;

	@Setter
	@Getter
	private String nepcPlanCode;

	@Setter
	@Getter
	private String legalPlanName;

	@Setter
	@Getter
	private String  planPreferredShortName;

	@Setter
	@Getter
	private String planPreferredLongName;

	@Setter
	@Getter
	private String nepcPlanNickName;

	@Setter
	@Getter
	private char planActiveInd;

	@Setter
	@Getter
	private char virtualInd;

	@Setter
	@Getter
	private char managedAtClientInd;

	@Setter
	@Getter
	private char unionBugInd;

	@Setter
	@Getter
	private char taxableFlag;

	@Setter
	@Getter
	private char erisaInd;

	@Setter
	@Getter
	private char planFrozenInd;

	@Setter
	@Getter
	private char discretionaryServicesInd;

	@Setter
	@Getter
	private char assetAllocationInd;

	@Setter
	@Getter
	private char captiveInd;

	@Setter
	@Getter
	private char onshoreInd;

	@Setter
	@Getter
	private char extrinsicallyManagedAssetsInd;

	@Setter
	@Getter
	private int actualParticipantsNum;

	@Setter
	@Getter
	private int fiscalMonthNum;

	@Setter
	@Getter
	private BigDecimal totalNepcAndExtrinsicAssets;

	@Setter
	@Getter
	private Date totalNepcAndExtrinsicAssetsAsOfDate;

	@Setter
	@Getter
	private String riskProfile;

	@Setter
	@Getter
	private int fundedAmount;

	@Setter
	@Getter
	private String assetsRestriction;

	@Setter
	@Getter
	private String typeOfInsuranceAsset;

	@Setter
	@Getter
	private String countryOfDomicile;

	@Setter
	@Getter
	private Date inceptionDate;

	@Setter
	@Getter
	private Date frozenDate;

	@Setter
	@Getter
	private Date totalNepcManagedPlanAssetsAsOfDate;

	@Setter
	@Getter
	private Date terminationDate;

	@Setter
	@Getter
	private String taxID;

	@Setter
	@Getter
	private char ifCollectPlanAuthorizationLetterInd;

	@Setter
	@Getter
	private String legalNameSource;

	@Setter
	@Getter
	private String acctNumberAtManager;

	@Setter
	@Getter
	private int qualifiedParticipantsNum;

	@Setter
	@Getter
	private Date actualParticipantsNumAsOfDate;

	@Setter
	@Getter
	private Date  nepcResponsibleStartDate;

	@Setter
	@Getter
	private int aaDisplayOrder;

	@Setter
	@Getter
	private ClientDto clientDto;

	@Setter
	@Getter
	private List<InvestmentStructureDto> investmentStructuresDto;

	@Setter
	@Getter
	private List<PlanHoldingDto> planHoldingsDto;
}
