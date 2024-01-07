
import { NextPage } from "next";
import { Button, Container, Flex, Heading, Stack, Image } from "@chakra-ui/react";
import NextLink from 'next/link';
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { Hero } from "../components/Hero";



const Home: NextPage = () => {
  const address = useAddress();

  return (
        <Container  
        maxW={"1600px"} 
        padding={"0 auto"} 
        bg="rgba(255, 255, 255, 0)"
        >
      <Flex  h={"80vh"} alignItems={"center"} justifyContent={"center"}>
      <Hero/>
      </Flex>
    </Container> 
  );
};

export default Home;
