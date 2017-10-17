package com.nepc.asset.manager.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.math.BigInteger;

@Entity
@Table(name = "CORRELATION")
@EqualsAndHashCode(callSuper=false)
@ToString
public class Correlation extends BaseEntity
{
	@Setter
	@Getter
	@Column(name = "CORRELATION_PK", nullable = false)
	@Id
	private BigInteger id;

	@Setter
	@Getter
	@Column(name = "Correlation_value", nullable = false)
	private int correlationValue;

	@Setter
	@Getter
	@ManyToOne
	@JoinColumn(name = "Assumption_PK")
	private Assumption assumption;
}
