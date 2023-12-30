
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
          flexDirection: 'column',
          width: '50%',
          height: '100vh',
        }}>

        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '50%',
          height: '100vh',
          backgroundColor: 'black',
          backgroundImage: 'url(/images/ramen.png)',
          backgroundSize: 'cover',  
          backgroundPosition: 'center',
        }}></div>

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
