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
import java.util.Date;

@Entity
@Table(name = "MIX")
@EqualsAndHashCode(callSuper=false)
@ToString
public class Mix extends BaseEntity
{
	@Setter
	@Getter
	@Column(name = "MIX_PK", nullable = false)
	@Id
	private BigInteger id;

	@Setter
	@Getter
	@Column(name = "MIX_Name",length = 10)
	private String mixName;

	@Setter
	@Getter
	@Column(name = "Information_As_Of_Date")
	private Date informationAsOfDate;

	@Setter
	@Getter
	@Column(name = "Session_ID", nullable = false)
	private int sessionId;


	@Setter
	@Getter
	@Column(name = "Funded_Status",length = 10)
	private String fundedStatus;

	@Setter
	@Getter
	@Column(name = "Mix_Description",length = 250, nullable = false)
	private String mixDescription;
}
