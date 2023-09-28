import React, { useState } from "react";
import { Button, Flex, Input } from "@chakra-ui/react";
import Navbar from "./Navbar";
import { useStore } from "../store";
import { useDecentralizedTwitterGetAllTweets, useDecentralizedTwitterWriteTweet } from "../generated";


const DemoDapp = () => {
  const selectedContract = useStore((state) => state.selectedContract);
  const [input, setInput] = useState("");

  const { data, isLoading, isError, error, write } = useDecentralizedTwitterWriteTweet({
    //@ts-ignore
    args: [input],
    
  });

  const allTweets = useDecentralizedTwitterGetAllTweets({
    //@ts-ignore
    args: [],
    watch: true,
  });
  
  const sendTweet = () => {
    write();
  };

  const tweets = allTweets.data?.map((tweet) => {
    var tweetTimestamp = new Date(0); // The 0 there is the key, which sets the date to the epoch
    tweetTimestamp.setUTCSeconds(+tweet.timestamp.toString());
    return (
      <Flex color="white" direction="column" minWidth="600px" style={{
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "#999",
        borderRadius: "4px",
        background: "rgba(255,255,255,0.1)",
        padding: "10px",
        marginBottom: "10px",
      }}>
        <Flex direction="column">
          <div style={{fontWeight: "bold"}}>
            @ {tweet.user}
          </div>
          <div>{tweetTimestamp.toLocaleString()}</div>
        </Flex>
        <div style={{marginTop: "8px"}}>{tweet.content}</div>
      </Flex>
    )
  });

  return (
    <Flex w="60%" h="100vh" justify="space-between" align="center" direction="column" minWidth="600px" margin="auto">
      <Navbar />
      <Flex direction="column">
        { tweets }
        <Flex w="100%" h="100%" direction="column">
          <Input value={input} onChange={(e) => setInput(e.target.value)} color="white"/>
          <Button onClick={sendTweet}>Tweet</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DemoDapp;