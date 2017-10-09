package com.nepc.asset.manager.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Service(value = "treeService")
@Transactional(propagation = Propagation.REQUIRED)
public class TreeServiceImpl
{
}
