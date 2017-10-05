package com.asset.manager.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigInteger;
import java.util.Date;

@MappedSuperclass
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@EqualsAndHashCode
public abstract class BaseEntity implements Serializable, DateModifiable
{
	@Setter
	@Getter
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private BigInteger id;

	@Setter
	@Getter
	@JsonIgnore
	@Version
	private Integer version;

	@Setter
	@Getter
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="create_date", nullable = false, updatable = false)
	private Date createDate;

	@Setter
	@Getter
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="update_date", nullable = false)
	private Date updateDate;

	@Setter
	@Getter
	@Column(name="modified_by", nullable = false)
	private String modifiedBy;

	@Override
	public abstract String toString();
}
