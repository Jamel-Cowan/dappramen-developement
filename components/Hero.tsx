import React from "react";
import { Container, Box, Heading, Text, Flex, Button, Image } from "@chakra-ui/react";
import NextLink from 'next/link';




export const Hero = ( ) => {

  return (
        <Container as={"section"} maxW={"1600px"}
            bg={"brand.black"}
            padding="0 1rem"
            margin="0 auto"
            pt={"10px"}
            
        >   
            <Flex  alignItems={"center"} justifyContent={"center"}>
                <Box
                    bgGradient="linear(to-r, #ffffff, #CB3928)"
                    bgClip="text"
                    textAlign="center"
                    padding="0 1rem"
                    margin="0 auto"
                    maxW="1200px"
                    >
                    <Heading
                        as="h1"
                        size="2xl"
                        fontWeight="bold"
                        letterSpacing="tight"
                        padding="1rem"
                    >
                    Unlock Lifetime Web3 Dapps
                    </Heading>
                    <Text fontSize={["2xl", "2xl", "3xl"]} padding="1rem">
                        Tired of subscriptions? Buy software that is yours forever!
                    </Text>

                    <Button as={NextLink} href='/buy' mt={"50px"} mb={"50px"} bg={"primary"} >
                        Shop Lifetime Dapps
                    </Button>
                </Box>
            </Flex>
            
            <Flex alignItems={"center"} justifyContent={"center"}>
                
                <Box 
                    bgGradient="linear(to-b, #000000, #202020)" 
                    padding="0 1rem"
                    margin="0 auto"
                    maxW={"350px"}
                    height={"470px"}
                    borderRadius={"12px"} 
                    textColor={"white"} 
                    >
                    <Flex>
                    <Image
                        m={"auto"}
                        padding={"0 1rem"}
                        alt={'qr code'}
                        src="/images/qrcode.png"
                        objectFit={'cover'}
                        />
                    </Flex>
                    <Text 
                        fontSize="xl" 
                        padding="1rem"
                        fontWeight={"bold"}
                    >
                        Scan the QR code
                    </Text>
                    <Heading
                        as="h1"
                        size="xl"
                        fontWeight="bold"
                        letterSpacing="tight"
                        padding="1rem"
                    >
                         Download our App
                    </Heading>
                </Box>
                
                <Box
                    padding={"0 1rem"}
                    margin={"0 auto"}
                    maxW={"1000px"}
                    height={"400px"}
                    
                    >
                     <Flex>
                        <Image
                            padding={"0 1rem"}
                            pb={"500px"}
                            mt={"-200px"}
                            alt={'feature image'}
                            src="/images/hero.png"
                            objectFit={'cover'}
                            
                            />
                    </Flex>
                </Box>
            </Flex>
        </Container>
    )
}
        