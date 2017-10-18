package com.nepc.asset.manager.service.impl;

import com.nepc.asset.manager.dto.InvestmentStructureDto;
import com.nepc.asset.manager.entity.InvestmentStructure;
import com.nepc.asset.manager.entity.Mix;
import com.nepc.asset.manager.repository.InvestmentStructureRepository;
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

	private InvestmentStructureRepository investmentStructureRepository;

	private ModelMapper modelMapper;

	/**
	 * Creates a new object.
	 *
	 * @param investmentStructureRepository Entity Repository
	 * @param modelMapper                   Entity 2 DTO mapper
	 */
	@Autowired
	public InvestmentStructureServiceImpl(InvestmentStructureRepository investmentStructureRepository,
			ModelMapper modelMapper)
	{
		this.investmentStructureRepository = investmentStructureRepository;
		this.modelMapper = modelMapper;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public InvestmentStructureDto getById(BigInteger id)
	{
		InvestmentStructure investmentStructure = investmentStructureRepository.getOne(id);

		return getInvestmentStructureDto(investmentStructure);
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public InvestmentStructureDto softDelete(BigInteger id, String modifiedBy)
	{
		// Disable the Investment Structure
		InvestmentStructure investmentStructure = investmentStructureRepository.getOne(id);
		investmentStructure.disable(modifiedBy);

		// Disable every Investment Structure Component
		investmentStructure.getInvestmentStructureComponents().forEach(investmentStructureComponent -> {
			investmentStructureComponent.disable(modifiedBy);

			// Disable every Investment Structure Mix Component
			investmentStructureComponent.getInvestmentStructureMixComponents()
					.forEach(investmentStructureMixComponent -> {
						investmentStructureMixComponent.disable(modifiedBy);

						// Disable the Mix
						Mix mix = investmentStructureMixComponent.getMix();
						mix.disable(modifiedBy);

						// Disable every Mix Summary Fact
						mix.getMixSummaryFacts().forEach(mixSummaryFact -> mixSummaryFact.disable(modifiedBy));

						// Disable every Mix Detail Fact
						investmentStructureMixComponent.getMixDetailFacts()
								.forEach(mixDetailFact -> mixDetailFact.disable(modifiedBy));
					});
		});

		investmentStructure = investmentStructureRepository.saveAndFlush(investmentStructure);

		return getInvestmentStructureDto(investmentStructure);
	}

	private InvestmentStructureDto getInvestmentStructureDto(InvestmentStructure investmentStructure)
	{
		InvestmentStructureDto result = null;
		if (investmentStructure != null)
		{
			result = modelMapper.map(investmentStructure, InvestmentStructureDto.class);
		}
		return result;
	}

}
