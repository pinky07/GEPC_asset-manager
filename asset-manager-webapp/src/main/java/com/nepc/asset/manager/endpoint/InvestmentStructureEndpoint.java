package com.nepc.asset.manager.endpoint;

import com.nepc.asset.manager.dto.InvestmentStructureDto;
import com.nepc.asset.manager.service.InvestmentStructureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.math.BigInteger;

@RestController
@RequestMapping("/api/v1/trees")
public class InvestmentStructureEndpoint
{
	@Autowired
	private InvestmentStructureService investmentStructureService;

	@PatchMapping(
			value = "/{treeId}",
			produces = "application/json")
	public ResponseEntity<InvestmentStructureDto> deleteTree(UriComponentsBuilder ucBuilder,
			@PathVariable("treeId") BigInteger id)
	{
		InvestmentStructureDto tree = investmentStructureService.disableTree(id);
		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(ucBuilder.path("/api/v1/trees/{treeId}").buildAndExpand(tree.getId()).toUri());

		return new ResponseEntity<>(headers, HttpStatus.NO_CONTENT);
	}

	@GetMapping(value = "/{treeId}", produces = "application/json")
	public ResponseEntity<InvestmentStructureDto> getById(@PathVariable("treeId") BigInteger id)
	{
		InvestmentStructureDto tree = investmentStructureService.getById(id);
		return tree
				!= null ? new ResponseEntity<>(tree, HttpStatus.OK) : new ResponseEntity<>(tree, HttpStatus.NOT_FOUND);
	}
}
