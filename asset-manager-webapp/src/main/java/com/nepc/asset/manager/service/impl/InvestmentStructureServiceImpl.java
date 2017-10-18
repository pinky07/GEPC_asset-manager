package com.nepc.asset.manager.service.impl;

import com.nepc.asset.manager.dto.InvestmentStructureDto;
import com.nepc.asset.manager.entity.InvestmentStructure;
import com.nepc.asset.manager.repository.InvestmentStructureComponentRepository;
import com.nepc.asset.manager.repository.InvestmentStructureMixComponentRepository;
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

	private InvestmentStructureComponentRepository investmentStructureComponentRepository;

	private InvestmentStructureMixComponentRepository investmentStructureMixComponentRepository;

	private ModelMapper modelMapper;

	/**
	 * Creates a new object.
	 *
	 * @param investmentStructureRepository             Entity Repository
	 * @param investmentStructureComponentRepository    Entity Repository
	 * @param investmentStructureMixComponentRepository Entity Repository
	 * @param modelMapper                               Entity 2 DTO mapper
	 */
	@Autowired
	public InvestmentStructureServiceImpl(InvestmentStructureRepository investmentStructureRepository,
			InvestmentStructureComponentRepository investmentStructureComponentRepository,
			InvestmentStructureMixComponentRepository investmentStructureMixComponentRepository,
			ModelMapper modelMapper)
	{
		this.investmentStructureRepository = investmentStructureRepository;
		this.investmentStructureComponentRepository = investmentStructureComponentRepository;
		this.investmentStructureMixComponentRepository = investmentStructureMixComponentRepository;
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
		investmentStructure = investmentStructureRepository.saveAndFlush(investmentStructure);

		// Disable every Investment Structure Component
		investmentStructure.getInvestmentStructureComponents().forEach(investmentStructureComponent -> {
			investmentStructureComponent.disable(modifiedBy);
			investmentStructureComponentRepository.saveAndFlush(investmentStructureComponent);

			// Disable every Investment Structure Mix Component
			investmentStructureComponent.getInvestmentStructureMixComponents()
					.forEach(investmentStructureMixComponent -> {
						investmentStructureMixComponent.disable(modifiedBy);
						investmentStructureMixComponentRepository.saveAndFlush(investmentStructureMixComponent);
					});
		});

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
