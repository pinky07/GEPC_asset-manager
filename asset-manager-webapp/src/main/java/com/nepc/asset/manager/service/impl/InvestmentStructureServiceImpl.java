package com.nepc.asset.manager.service.impl;

import com.nepc.asset.manager.dao.InvestmentStructureDao;
import com.nepc.asset.manager.dto.InvestmentStructureDto;
import com.nepc.asset.manager.entity.InvestmentStructure;
import com.nepc.asset.manager.service.InvestmentStructureService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigInteger;

@Service(value = "investmentStructureService")
@Transactional(propagation = Propagation.REQUIRED)
public class InvestmentStructureServiceImpl implements InvestmentStructureService
{
	@Autowired
	private InvestmentStructureDao investmentStructureDao;

	@Autowired
	private ModelMapper modelMapper;

	private static final char DISABLE_VALUE = '0';

	private static final char ENABLE_VALUE = '1';

	@Override
	public InvestmentStructureDto getById(BigInteger id)
	{
		InvestmentStructure investmentStructure = investmentStructureDao.getTreeByInvestmentStructureId(id);

		return getInvestmentStructureDto(investmentStructure);
	}

	@Override
	public InvestmentStructureDto disableTree(BigInteger id)
	{
		InvestmentStructure investmentStructure = investmentStructureDao.getTreeByInvestmentStructureId(id);
		investmentStructure.setActiveInd(DISABLE_VALUE);

		investmentStructure.getInvestmentStructureComponents().forEach(investmentStructureComponent -> {
			investmentStructureComponent.setActiveInd(DISABLE_VALUE);

			investmentStructureComponent.getInvestmentStructureMixComponents()
					.forEach(investmentStructureMixComponent -> {

						investmentStructureMixComponent.setActiveInd(DISABLE_VALUE);
						investmentStructureMixComponent.getMix().setActiveInd(DISABLE_VALUE);

						investmentStructureMixComponent.getMixDetailFacts().forEach(mixDetailFact -> {
							mixDetailFact.setActiveInd(DISABLE_VALUE);
						});

						investmentStructureMixComponent.getMix().getMixSummaryFacts().forEach(mixSummaryFact -> {
							mixSummaryFact.setActiveInd(DISABLE_VALUE);
						});

					});
		});

		InvestmentStructure response = investmentStructureDao.save(investmentStructure);

		return getInvestmentStructureDto(response);
	}

	private InvestmentStructureDto getInvestmentStructureDto(InvestmentStructure investmentStructure)
	{
		if (investmentStructure != null)
		{
			InvestmentStructureDto investmentStructureDto = modelMapper
					.map(investmentStructure, InvestmentStructureDto.class);

			return investmentStructureDto;
		}

		return null;
	}

}
