
import React, { useState, useEffect } from "react";
import { Flex, VStack, Button, Input, Text } from "@chakra-ui/react";
import { BarLoader } from "react-spinners";
import BlockchainTheme from "../../../BlockchainTheme";
import { useDecentralizedTwitterGetAllTweets } from "../../../generated";

const DecentralizedTwitterGetAllTweetsComponent = () => {
  
  /* Use this hook anywhere in your dapp to call this function! */

  const [functionArgs, setFunctionArgs] = useState([]);
  const { data, isLoading, isError, error } = useDecentralizedTwitterGetAllTweets({
    //@ts-ignore
    args: functionArgs,
    watch: true,
  });

  /* Below is the code for the demo function UI */

  const fn = {
    name: "GetAllTweets",
    inputs: [],
    type: "Read",
  };

  const [results, setResults] = useState(null);
  const [errors, setErrors] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const [firstRun, setFirstRun] = useState(true);
  const blockchainTheme = React.useContext(BlockchainTheme);
  const [shouldWrite, setShouldWrite] = useState(false);

  const inputRefs = {};
  fn.inputs?.forEach((input) => {
    inputRefs[input.name] = React.useRef(null);
  });


  const handleFunctionCall = () => {
    if (firstRun) setFirstRun(false);
    const inputs = Object.values(inputRefs).map((input) => (input as any).current?.value);

    for (let input of inputs) {
      if (!input) {
        setErrors("Please fill out all inputs");
        return; // Exit the function
      }
    }

    console.log("inputs", inputs);
    setFunctionArgs(inputs);

    if (fn.type === "Write") {
      setShouldWrite(true);
    }
  };

  useEffect(() => {
    if (shouldWrite) {
      //@ts-ignore, this generated component will never run this
      // unless it's truly a write function, in which case this wont throw an error
      write();
      setShouldWrite(false); // reset after writing
    }
  }, [functionArgs, shouldWrite]);

  useEffect(() => {
    if (!firstRun) {
      if (isError) {
        setErrors(error.message);
      } else {
        setResults(data);
      }
      console.log("data", data);
      console.log("isError", isError);
      console.log("error", error);
    }
  }, [data, isError, error, functionArgs]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Flex direction="column" bg="#222" color="#eee" key={fn.name} w="calc(23% + 10px)" p={4} mt={2} boxShadow="base" borderRadius="10px" align="center">
      <Text fontWeight="bold" marginBottom={2} wordBreak="break-word">
        {fn.name}
      </Text>
      {fn.inputs.map((input: any) => (
        <VStack key={input.name} align="start" w="100%" marginBottom={2} spacing={1}>
          <Text color="#eee" fontSize="sm">{input.name}</Text>
          <Input bg="#333" placeholder={input.type} w="100%" ref={inputRefs[input.name]} />
        </VStack>
      ))}
      <Button _hover={{ bg: blockchainTheme.colors.secondary }} color="#eee" w="100%" bg={blockchainTheme.colors.primary} mt={2} disabled={isLoading} onClick={!isLoading ? handleFunctionCall : undefined}>
        {isLoading ? <BarLoader color="#eee" /> : fn.type}
      </Button>

      {results !== null && results !== undefined ? (
        <Flex borderRadius="md" mt="14px" direction="column" bg="green.900" w="100%" p="10px">
          <Text fontWeight="semibold" fontSize="15px" color="#bbb">
            OUTPUT
          </Text>
          {fn.type === "Write" && (
            <div>
              <Text mb="2px" fontSize="18px" fontWeight="bold">
                {results.hash ? "Success!" : ""}
              </Text>
              <Text mt="2px" fontSize="12px">
                {results.hash ? results.hash : JSON.stringify(results, null, 2)}
              </Text>
            </div>
          )}
          {fn.type === "Read" && (
            <Text fontSize="20px" fontWeight="bold">
              {results.toString()}
            </Text>
          )}
        </Flex>
      ) : (
        errors !== null && (
          <Flex borderRadius={"md"} mt="14px" direction="column" bg="red.900" w="100%" p="10px">
            <Text fontWeight={"semibold"} fontSize="15px" color="red.400">
              ERROR
            </Text>
            {errors.includes("returned no data") ? (
              <Text mt="0px" fontWeight={"bold"} color="red.200">
                The request returned no data. Please double check your wallet, network, and contract.
              </Text>
            ) : (
              <Text color="red.400">{errors}</Text>
            )}
          </Flex>
        )
      )}
    </Flex>
  );
};

export default DecentralizedTwitterGetAllTweetsComponent;