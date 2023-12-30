
import { NextPage } from "next";
import { Button, Container, Flex, Heading, Stack, } from "@chakra-ui/react";
import NextLink from 'next/link';
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";



const Home: NextPage = () => {
  const address = useAddress();

  return (
        <Container maxW={"1200px"}>
          <backgroundImage src="https://images.unsplash.com/photo-1612835362596-4b6b7b0b2b0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFtZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="ramen" />
      <Flex h={"80vh"} alignItems={"center"} justifyContent={"center"}>
        <Stack spacing={4} align={"center"} >
         <Heading></Heading>
          <Button as={NextLink} href='/buy'>
          Shop Lifetime Dapps
          </Button>
        </Stack>
      </Flex>
    </Container> 
  );
};

export default Home;
