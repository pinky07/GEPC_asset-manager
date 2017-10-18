package com.nepc.asset.manager.entity;

import com.nepc.asset.manager.configuration.Constants;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.MappedSuperclass;
import java.io.Serializable;
import java.util.Date;

@MappedSuperclass
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@EqualsAndHashCode
public abstract class BaseEntity implements Serializable
{
	@Setter
	@Getter
	@Column(name = "Active_Ind", nullable = false)
	private char activeInd;

	@Setter
	@Getter
	@Column(name = "Active_Ind_TS", nullable = false)
	private Date activeIndTS;

	//TODO figure out how to map a Timestamp
	/*@Setter
	@Getter
	@Column(name="Created_TS", nullable = false)
	private BinaryType createdTS;*/

	@Setter
	@Getter
	@Column(name = "Modified_By", nullable = false)
	private String modifiedBy;

	@Setter
	@Getter
	@Column(name = "Modified_TS", nullable = false)
	private Date modifiedTS;

	@Setter
	@Getter
	@Column(name = "Archived_TS")
	private Date archivedTS;

	@Override
	public abstract String toString();

	public void disable(String modifiedBy)
	{
		this.setActiveInd(Constants.DISABLED_VALUE);
		this.setActiveIndTS(new Date());
		this.setModifiedBy(modifiedBy);
		this.setModifiedTS(new Date());
	}
}
