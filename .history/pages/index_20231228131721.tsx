
import { NextPage } from "next";
import { Button, Container, Flex, Heading, Stack, } from "@chakra-ui/react";
import NextLink from 'next/link';
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";



const Home: NextPage = () => {
  const address = useAddress();

  return (
    <div>
      {address ? (  
        <ConnectWallet/>
      ) : (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}>
          <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}>

        </div>
        )}
        <Container maxW={"1200px"}>
      <Flex h={"80vh"} alignItems={"center"} justifyContent={"center"}>
        <Stack spacing={4} align={"center"} >
         <Heading></Heading>
          <Button as={NextLink} href='/buy'>
          Shop Lifetime Dapps
          </Button>
        </Stack>
      </Flex>
    </Container>
    </div>
    
  );
};

export default Home;
