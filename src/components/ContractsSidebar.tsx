import React, { useEffect } from "react";
import { Flex, VStack, Text, Spacer } from "@chakra-ui/react";
import BlockchainTheme from "../BlockchainTheme";
import AnimatedGradientButton from "./AnimatedGradientButton";
import atlasConfig from "../../atlas.config";
import { useStore } from "../store";

const ContractContent = () => {
  const blockchainTheme = React.useContext(BlockchainTheme);
  const contracts = atlasConfig.partialWagmiConfig.contracts as any[];
  const selectedContract = useStore((state) => state.selectedContract);
  const setSelectedContract = useStore((state) => state.setSelectedContract);

  useEffect(() => {
    if (!selectedContract) setSelectedContract(contracts[0]);
    console.log("selectedContract", selectedContract);
  }, []);

  return (
    <VStack
      spacing={4}
      w="25%"
      minW={"440px"}
      padding={5}
      borderRight="2px solid #444"
    >
      <Text
        fontWeight="bold"
        alignSelf={"flex-start"}
        ml="12px"
        fontSize={"2xl"}
        color="#eee"
      >
        Deployed Contracts
      </Text>
      {contracts.map((contract) => (
        <AnimatedGradientButton
          style={{ padding: "20px", marginBottom: "-5px" }}
          onClick={() => setSelectedContract(contract)}
          key={contract.name}
          leftColor={
            selectedContract === contract ? blockchainTheme.colors.left : "#222"
          }
          rightColor={
            selectedContract === contract
              ? blockchainTheme.colors.right
              : "#222"
          }
        >
          <VStack align="start" spacing={1}>
            <Text fontWeight="bold" fontSize={"20px"} mb="5px" color="#fff">
              {contract.name}.sol
            </Text>
            <Text fontSize="sm" color="#eee" mb="5px">
              {Object.values(contract.address)[0] as React.ReactNode}
            </Text>
            <Text fontSize="xs" color="#aaa">
              {Object.keys(contract.address)
                .map((id) => `${atlasConfig.chainIdToNetworkName[id]} #${id}`)
                .join(", ")}
            </Text>
          </VStack>
        </AnimatedGradientButton>
      ))}
      <Spacer />
      <Flex
        as="a"
        px="14px"
        py="8px"
        borderRadius={"12px"}
        href="https://atlaszk.com"
        target="_blank"
        rel="noopener noreferrer"
        align="center"
        justify="center"
        cursor="pointer"
        _hover={{ bg: "#222" }}
      >
        <Text fontSize="12px" color="#aaa">
          Powered by{" "}
          <Text as="span" color="#eee">
            Atlas
          </Text>
        </Text>
      </Flex>
    </VStack>
  );
};

export default ContractContent;
