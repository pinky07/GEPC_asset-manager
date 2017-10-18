package com.nepc.asset.manager.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "MANAGEMENT_STYLE")
@EqualsAndHashCode(callSuper = false)
@ToString
public class ManagementStyle extends BaseEntity
{
	@Setter
	@Getter
	@Id
	@Column(name = "MANAGEMENT_STYLE_PK", nullable = false)
	private int managementStylePK;

	@Setter
	@Getter
	@Column(name = "Management_Style_Name", length = 10, nullable = false)
	private String managementStyleName;

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "managementStyle")
	private List<InvestmentStructureComponent> investmentStructureComponents;
}
