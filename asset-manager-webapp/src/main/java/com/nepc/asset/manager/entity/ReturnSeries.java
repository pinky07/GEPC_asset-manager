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
@Table(name = "RETURN_SERIES")
@EqualsAndHashCode(callSuper = false)
@ToString
public class ReturnSeries extends BaseEntity
{
	@Setter
	@Getter
	@Id
	@Column(name = "RETURN_SERIES_PK", nullable = false)
	private BigInteger id;

	@Setter
	@Getter
	@Column(name = "Return_Series_Name", length = 250, nullable = false)
	private String returnSeriesName;
}
