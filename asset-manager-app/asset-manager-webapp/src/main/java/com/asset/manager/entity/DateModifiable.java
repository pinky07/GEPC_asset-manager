package com.asset.manager.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.Date;

/**
 * Interface for JavaBean domain objects that use createDate and updateDate
 * fields, can be used to allow for auto setting and updating these values
 * on save or changeLoungeFromBooking at the DAO level.
 *
 * @author minormadrigal
 * @version $Id: $
 */
public interface DateModifiable
{
	void setCreateDate(Date date);

	@JsonIgnore
	Date getCreateDate();

	void setUpdateDate(Date date);

	@JsonIgnore Date getUpdateDate();
}
