import { Avatar, Box, Button, Flex, Heading, Link, Text, useColorMode } from "@chakra-ui/react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import NextLink from 'next/link';

export const Navbar = () => {
    const address = useAddress();
    const { toggleColorMode } = useColorMode();
    const bgColor = { light: "gray.200", dark: "gray.700" };
    const color = { light: "black", dark: "white" };

    
    return (
        <Box maxW={"1200px"} m={"auto"} py={"10px"} px={"40px"}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Link as={NextLink} href='/'>
                    <Heading>Dapp Ramen</Heading>
                </Link>
                <Flex direction={"row"}>
                <Link as={NextLink} href='/buy' mx={2.5}>
                    <Text>BUY</Text>
                </Link>
                <Link as={NextLink} href='/sell' mx={2.5}>
                    <Text>SELL</Text>
                </Link>
                </Flex>
                <Flex direction={"row"} alignItems={"center"}>
                    
                    <Button onClick={toggleColorMode}>Dark Mode</Button>
                    
                </Flex>
                <Flex direction={"row"} alignItems={"center"}>
                    /* create an embedded wallet button */

                    </Flex>
                    
                <Flex dir={"row"} alignItems={"center"}>
                    <ConnectWallet/>
                    {address && (
                        <Link as={NextLink} href={`/profile/${address}`}>
                            <Avatar src='https://bit.ly/broken-link' ml={"20px"}/>
                        </Link>
                    )}
                </Flex>
            </Flex>
        </Box>
    )
}