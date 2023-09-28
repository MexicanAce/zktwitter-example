
import React from "react";
import { Flex, VStack, Text } from "@chakra-ui/react";
import DecentralizedTwitterGetAllTweetsComponent from "./decentralizedtwitter/getalltweets";
import DecentralizedTwitterTweetsComponent from "./decentralizedtwitter/tweets";
import DecentralizedTwitterWriteTweetComponent from "./decentralizedtwitter/writetweet";


const DecentralizedtwitterComponent = () => {
  return (
    <VStack w="75%" h="100%" padding={4} ml="15px" mb="20px" spacing={4}>
      <Flex direction="column" mb="10px" w="100%">
        <Text fontSize="2xl" color="#eee" fontWeight="bold">
          Read Functions
        </Text>
        <Flex wrap="wrap" justify="flex-start" alignItems="start" mt="8px" gap={4}>
		{/* READ FUNCITONS */}
          <DecentralizedTwitterGetAllTweetsComponent/>
          <DecentralizedTwitterTweetsComponent/>
        </Flex>
      </Flex>
      <Flex direction="column" mb="10px" w="100%">
        <Text fontSize="2xl" color="#eee" fontWeight="bold">
          Write Functions
        </Text>
        <Flex wrap="wrap" justify="flex-start" alignItems="start" mt="8px" gap={4}>
		{/* WRITE FUNCTIONS */}
          <DecentralizedTwitterWriteTweetComponent/>
        </Flex>
      </Flex>
    </VStack>
  );
};

export default DecentralizedtwitterComponent;
