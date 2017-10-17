package com.nepc.asset.manager.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Size;
import java.math.BigInteger;
import java.util.Date;

public class MixDto
{
	@Setter
	@Getter
	private BigInteger id;

	@Setter
	@Getter
	@Size(max = 10)
	private String mixName;

	@Setter
	@Getter
	private Date informationAsOfDate;

	@Setter
	@Getter
	private Integer sessionId;

	@Setter
	@Getter
	@Size(max = 10)
	private String fundedStatus;

	@Setter
	@Getter
	private String mixDescription;
}
