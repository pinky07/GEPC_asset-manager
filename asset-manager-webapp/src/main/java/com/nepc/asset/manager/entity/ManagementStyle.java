package com.nepc.asset.manager.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "MANAGEMENT_STYLE")
@EqualsAndHashCode(callSuper=false)
@ToString
public class ManagementStyle extends BaseEntity
{
	@Setter
	@Getter
	@Id
	@Column(name = "MANAGEMENT_STYLE_PK",  nullable = false)
	private int managementStylePK;

	@Setter
	@Getter
	@Column(name = "Management_Style_Name", length = 10,nullable = false)
	private String managementStyleName;
}
