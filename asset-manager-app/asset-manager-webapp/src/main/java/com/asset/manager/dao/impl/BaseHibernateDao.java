package com.asset.manager.dao.impl;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public abstract class BaseHibernateDao<E>
{
	private final Class<E> entityClass;

	@Autowired
	private SessionFactory sessionFactory;

	/**
	 * Constructor with the entity class to use for generic methods.
	 *
	 * @param entityClass
	 *            The class to use for generic methods.
	 */
	public BaseHibernateDao(Class<E> entityClass)
	{
		this.entityClass = entityClass;
	}

	/**
	 * Constructor with the entity class to use for generic methods and the {@link SessionFactory} to use for
	 * persistence requests.
	 *
	 * @param entityClass
	 *            The class to use for generic methods.
	 * @param sessionFactory
	 *            The SessionFactory to use for getting a {@link Session}.
	 */
	public BaseHibernateDao(Class<E> entityClass, SessionFactory sessionFactory)
	{
		this.entityClass = entityClass;
		this.sessionFactory = sessionFactory;
	}

	protected SessionFactory getSessionFactory()
	{
		return sessionFactory;
	}

	/**
	 * Returns the current {@link Session} from {@link #getSessionFactory}.
	 *
	 * @return The current Session.
	 */
	public Session getCurrentSession()
	{
		return getSessionFactory().getCurrentSession();
	}

	/**
	 * Returns the current entity class of the DAO.
	 *
	 * @return The entity class.
	 */
	public Class<E> getEntityClass()
	{
		return entityClass;
	}

	/**
	 * Calculate the first result position for paged queries.
	 *
	 * @param page
	 *            The page to retrieve results for.
	 * @param pageSize
	 *            The size of results per page.
	 * @return The index of the first result to return from the paged query.
	 */
	protected int calculateFirstResult(int page, int pageSize)
	{
		page = page - 1;
		int firstResult = page * pageSize;

		return firstResult;
	}

	/**
	 * Returns a list of objects from the Criteria provided.
	 *
	 * @param criteria
	 *            The {@link Criteria} to return a {@link List} of results for.
	 * @return A List of results from the Criteria.
	 * @see org.hibernate.Criteria#list
	 */
	@SuppressWarnings("unchecked")
	protected List<E> list(Criteria criteria)
	{
		return (ArrayList<E>) criteria.list();
	}

	/**
	 *
	 * @param query
	 *            The {@link Query} to return a {@link List} of results for.
	 * @return A list of results from the Query.
	 * @see org.hibernate.Query#list
	 */
	@SuppressWarnings("unchecked")
	protected List<E> list(Query query)
	{
		return (ArrayList<E>) query.list();
	}

	/**
	 *
	 * @param criteria
	 *            The {@link Criteria} to return a unique result for.
	 * @return The unique result.
	 * @see org.hibernate.Criteria#uniqueResult
	 */
	@SuppressWarnings("unchecked")
	protected E uniqueResult(Criteria criteria)
	{
		return (E) criteria.uniqueResult();
	}

	/**
	 *
	 * @param query
	 *            The {@link Query} to return a unique result for.
	 * @return The unique result.
	 * @see org.hibernate.Query#uniqueResult
	 */
	@SuppressWarnings("unchecked")
	protected E uniqueResult(Query query)
	{
		return (E) query.uniqueResult();
	}

	/**
	 * Retrieves an entity by id.
	 *
	 * @param id
	 *            The id of the entity to retrieve.
	 * @return The entity, null if not found.
	 */
	protected E get(Serializable id)
	{
		return (E) getCurrentSession().get(entityClass, id);
	}

	/**
	 * Saves or updates the specified entity to persistence.
	 *
	 * @param domainObject
	 *            The object to save or changeLoungeFromBooking.
	 * @return The updated object.
	 */
	public E save(E domainObject)
	{
		getCurrentSession().saveOrUpdate(domainObject);
		getCurrentSession().flush();
		return domainObject;
	}

	/**
	 * Deletes the current object from persistence.
	 *
	 * @param domainObject
	 */
	public void delete(E domainObject)
	{
		getCurrentSession().delete(domainObject);
		getCurrentSession().flush();
	}

}
