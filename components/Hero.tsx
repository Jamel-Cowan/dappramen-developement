import React from "react";
import { Container, Box, Heading, Text, Flex, Button, Image, Stack } from "@chakra-ui/react";
import NextLink from 'next/link';




export const Hero = ( ) => {

  return (
        <Container as={"section"} maxW={"1600px"} position="relative" overflow="hidden" bg="rgba(255, 255, 255, 0)">
        <video 
          src='/images/videoBg.mp4' 
          autoPlay 
          loop 
          muted 
          style={{
            position: "absolute",
            width: "100%",
            left: 0,
            top: 0,
            height: "100%",
            objectFit: "cover",
            zIndex: -1
          }}
        />
        
            <Flex  alignItems={"center"} justifyContent={"center"} bg="rgba(255, 255, 255, 0)" pt={"250px"}>
                <Box
                    bg="rgba(255, 255, 255, 0)"
                    textAlign="center"
                    padding="0 1rem"
                    margin="0 auto"
                    maxW="1200px"
                    >
                        
                    <Heading

                        as="h1"
                        textColor="linear(to-r, #CB3928, #ffffff)"
                        size="2xl"
                        fontWeight="bold"
                        letterSpacing="tight"
                        padding="1rem"
                        pt={"100px"}
                    >
                    Unlock Lifetime Web3 Dapps
                    </Heading>
                    <Text fontSize={["2xl", "2xl", "3xl"]} padding="1rem" bg="rgba(255, 255, 255, 0)">
                        Tired of subscriptions? Buy software that is yours forever!
                    </Text>

                    <Button as={NextLink} href='/buy' mt={"50px"} mb={"50px"} bg={"primary"} textColor={"white"}>
                        Shop Lifetime Dapps
                    </Button>
                    
                </Box>
            </Flex>
            
            <Flex alignItems={"center"} justifyContent={"center"} >
                
                <Box 
                    padding="0 1rem"
                    margin="0 auto"
                    maxW={"350px"}
                    height={"470px"}
                    borderRadius={"12px"} 
                    textColor={"white"} 
                    >
                       
                    <Flex
                    bg="rgba(255, 255, 255, 0)"
                    >
                        
                    <Image
                        m={"auto"}
                        padding={"0 1rem"}
                        alt={'qr code'}
                        src="/images/qrcode.png"
                        objectFit={'cover'}
                        bg="rgba(255, 255, 255, 0)"
                        alignContent={"left"}
                        justifyContent={"left"}
                        />
                    </Flex>
                    <Box alignContent={"left"} alignItems={"left"}>
                    <Text 
                        fontSize="xl" 
                        padding="1rem"
                        fontWeight={"bold"}
                        bg="rgba(255, 255, 255, 0)"
                    >
                        Scan the QR code
                    </Text>
                    <Heading
                        as="h1"
                        size="xl"
                        fontWeight="bold"
                        letterSpacing="tight"
                        padding="1rem"
                        bg="rgba(255, 255, 255, 0)"
                        
                    >
                         Download our App
                    </Heading>
                    </Box>
                </Box>
                
            </Flex>
        </Container>
    )
}
        