package com.nepc.asset.manager.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Size;
import java.math.BigInteger;

public class AssetAllocationModelingBenchMarkDto
{
	@Setter
	@Getter
	private BigInteger id;

	@Setter
	@Getter
	@Size(max = 160)
	private String aambName;

	@Setter
	@Getter
	private char derivedInd;

	@Setter
	@Getter
	private char customAssetInd;

	@Setter
	@Getter
	private char sensitivityInd;

	@Setter
	@Getter
	private char adminAssetInd;

	@Setter
	@Getter
	private String aambDescription;
}
