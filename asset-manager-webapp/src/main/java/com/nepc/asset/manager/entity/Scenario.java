package com.nepc.asset.manager.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigInteger;

@Entity
@Table(name = "SCENARIO")
@EqualsAndHashCode(callSuper=false)
@ToString
public class Scenario extends BaseEntity
{
	@Setter
	@Getter
	@Column(name = "Scenario_ID_PK", nullable = false)
	@Id
	private BigInteger id;

	@Setter
	@Getter
	@Column(name = "Scenario_Name", nullable = false,length = 50)
	private String scenarioName;

	@Setter
	@Getter
	@Column(name = "Scenario_Desc", length = 250)
	private String scenarioDesc;
}
