import { Flex, Text, Image, Spacer } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import React, { useState, useEffect } from "react";
import BlockchainTheme from "../BlockchainTheme";

const Navbar = () => {
  const blockchainTheme = React.useContext(BlockchainTheme);
  return (
    <Flex w="100%" h="70px" p="15px" justify={"cetner"} align={"center"} borderBottom="2px solid" borderColor={blockchainTheme.colors.terciary}>
      <Image h={"85%"} src={blockchainTheme.images.src} objectFit="cover" />
      <Spacer />
      <ConnectButton />
    </Flex>
  );
};

export default Navbar;
