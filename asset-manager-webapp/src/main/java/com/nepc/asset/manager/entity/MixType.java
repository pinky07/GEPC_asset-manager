package com.nepc.asset.manager.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.List;

@Entity
@Table(name = "MIX_TYPE")
@EqualsAndHashCode(callSuper = false)
@ToString
public class MixType extends BaseEntity
{
	@Setter
	@Getter
	@Column(name = "Mix_Type_PK", nullable = false)
	@Id
	private BigInteger id;

	@Setter
	@Getter
	@Column(name = "Mix_Type_Name", nullable = false, length = 10)
	private String mixTypeName;

	@Setter
	@Getter
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "mixType")
	private List<Mix> mixes;
}
