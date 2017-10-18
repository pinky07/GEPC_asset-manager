package com.nepc.asset.manager.utility;

import com.nepc.asset.manager.configuration.Constants;
import com.nepc.asset.manager.entity.BaseEntity;

import java.util.Date;

/**
 * Entity utils
 *
 * @author Rubén Jiménez
 */
public class EntityUtils
{
	/**
	 * Disables an entity by changing its Active Indicator.
	 *
	 * @param entity     Entity to disable
	 * @param modifiedBy Who is modifying this entity
	 */
	public static void disable(BaseEntity entity, String modifiedBy)
	{
		if (entity.getActiveInd() == Constants.ENABLED_VALUE)
		{
			Date date = new Date();
			entity.setActiveInd(Constants.DISABLED_VALUE);
			entity.setActiveIndTS(date);
			entity.setModifiedBy(modifiedBy);
			entity.setModifiedTS(date);
		}
	}
}
