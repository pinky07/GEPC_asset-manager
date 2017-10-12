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
@Table(name = "MIX_TYPE")
@EqualsAndHashCode(callSuper=false)
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
	@Column(name = "Mix_Type_Name", nullable = false,length = 10)
	private String mixTypeName;
}
