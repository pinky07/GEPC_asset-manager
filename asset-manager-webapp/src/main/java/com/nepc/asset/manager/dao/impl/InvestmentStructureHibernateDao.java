package com.nepc.asset.manager.dao.impl;

import com.nepc.asset.manager.dao.InvestmentStructureDao;
import com.nepc.asset.manager.entity.InvestmentStructure;
import com.nepc.asset.manager.entity.InvestmentStructureComponent;
import com.nepc.asset.manager.hibernate.LazyLoadingUtil;
import org.apache.log4j.Logger;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;
import java.util.List;

@Repository("investmentStructureHibernateDao")
public class InvestmentStructureHibernateDao
		extends BaseHibernateDao<InvestmentStructure> implements InvestmentStructureDao
{
	private final static Logger LOGGER = Logger.getLogger(InvestmentStructureHibernateDao.class);

	public InvestmentStructureHibernateDao()
	{
		super(InvestmentStructure.class);
	}

	public InvestmentStructureHibernateDao(SessionFactory sessionFactory)
	{
		super(InvestmentStructure.class, sessionFactory);
	}

	@Override
	public InvestmentStructure getById(BigInteger id)
	{
		try
		{
			InvestmentStructure investmentStructure = super.get(id);

			return investmentStructure;
		}
		catch (Exception e)
		{
			LOGGER.error("An error has occurred attempting to get the Investment Structure: " + e.getMessage());
		}

		return null;
	}

	@Override
	public InvestmentStructure getTreeByInvestmentStructureId(BigInteger id)
	{
		try
		{
			InvestmentStructure investmentStructure = super.get(id);

			if (investmentStructure != null)
			{
				investmentStructure
						.setInvestmentStructureComponents((List<InvestmentStructureComponent>) LazyLoadingUtil
								.deepHydrate(getCurrentSession(), investmentStructure
										.getInvestmentStructureComponents()));
			}

			return investmentStructure;
		}
		catch (Exception e)
		{
			LOGGER.error(
					"An error has occurred attempting to get the list of investment structure components by investment structure: "
							+ e.getMessage());
		}

		return null;
	}

	@Override
	public InvestmentStructure save(InvestmentStructure investmentStructure)
	{
		try
		{
			return super.save(investmentStructure);
		}
		catch (Exception e)
		{
			LOGGER.error("An error has occurred attempting to save the Investment Structure: " + e.getMessage());
		}

		return null;
	}
}
