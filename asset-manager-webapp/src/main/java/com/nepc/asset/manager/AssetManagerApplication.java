package com.nepc.asset.manager;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.orm.jpa.vendor.HibernateJpaSessionFactoryBean;

@Configuration
@EnableAutoConfiguration
@SpringBootApplication
@ComponentScan("com.nepc.asset.manager")
public class AssetManagerApplication
{

	public static void main(String[] args) {
		SpringApplication.run(AssetManagerApplication.class, args);
	}

	@Bean
	public HibernateJpaSessionFactoryBean sessionFactory()
	{
		return new HibernateJpaSessionFactoryBean();
	}
}
