package com.nepc.asset.manager.endpoint;

import com.nepc.asset.manager.dto.InvestmentStructureDto;
import com.nepc.asset.manager.service.InvestmentStructureService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	private InvestmentStructureService investmentStructureService;

	@Autowired
	public InvestmentStructureEndpoint(InvestmentStructureService investmentStructureService)
	{
		this.investmentStructureService = investmentStructureService;
	}

	@GetMapping(value = "/{treeId}", produces = "application/json")
	public ResponseEntity<InvestmentStructureDto> getById(@PathVariable("treeId") BigInteger id) throws Exception
	{
		logger.debug("GET /api/v1/trees/{}", id);

		InvestmentStructureDto tree = investmentStructureService.getById(id);
		return tree
				!= null ? new ResponseEntity<>(tree, HttpStatus.OK) : new ResponseEntity<>(tree, HttpStatus.NOT_FOUND);
	}

	@DeleteMapping(value = "/{treeId}", produces = "application/json")
	public ResponseEntity<InvestmentStructureDto> deleteTree(UriComponentsBuilder ucBuilder,
			@PathVariable("treeId") BigInteger id, @RequestParam("modifiedBy") String modifiedBy) throws Exception
	{
		logger.debug("DELETE /api/v1/trees/{}", id);

		InvestmentStructureDto tree = investmentStructureService.softDeleteInvestmentStructure(id, modifiedBy);

		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(ucBuilder.path("/api/v1/trees/{treeId}").buildAndExpand(tree.getId()).toUri());

		return new ResponseEntity<>(headers, HttpStatus.NO_CONTENT);
	}

}
