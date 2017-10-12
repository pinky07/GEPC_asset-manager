package com.nepc.asset.manager;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.nepc.asset.manager")
public class AssetManagerApplication
{

	public static void main(String[] args) {
		SpringApplication.run(AssetManagerApplication.class, args);
	}
}
