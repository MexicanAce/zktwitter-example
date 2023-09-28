import Script from "next/script";
import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import themes from "../themes";
import BlockchainTheme from "../BlockchainTheme";
import DemoDapp from "../components/DemoDapp";
import atlasConfig from "../../atlas.config";

const Home: React.FC = () => {
  const [blockchain, setBlockchain] = useState(atlasConfig.color_scheme); // default value
  const blockchainTheme = themes[blockchain];

  return (
    <BlockchainTheme.Provider value={blockchainTheme}>
      <DemoDapp />
    </BlockchainTheme.Provider>
  );
};

export default Home;
