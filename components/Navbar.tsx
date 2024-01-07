import { Avatar, Box, Button, Flex, Heading, Link, Text, useColorMode, Image, Input } from "@chakra-ui/react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import NextLink from 'next/link';
import ThemeToggle from "./ThemeToggle";

export const Navbar = () => {
    const address = useAddress();
    const { toggleColorMode } = useColorMode();
    const bgColor = { light: "white", dark: "black.700" };
    const color = { light: "black", dark: "white" };

    
    return (
        <Box maxW={"1600px"} pb={['50px']} pt={'10px'} px={"40px"} bg={"brand.black"} textColor={"white"} boxShadow={"md"}>
            <Flex direction={['column', 'column', 'row']} justifyContent={"space-between"} alignItems={"center"}>
                <Link as={NextLink} href='/'>
                    <Image src="/images/logo.png" alt="Logo" h={"70px"} w={"70px"} />
                </Link>
                <Input type="search" placeholder="Search any Deal" maxW={"400px"}/>

                <Flex direction={['column', 'column', 'row']}>
                <Link as={NextLink} href='/buy' mx={2.5}>
                    <Text>BUY</Text>
                </Link>
                <Link as={NextLink} href='/sell' mx={2.5}>
                    <Text>SELL</Text>
                </Link>
                </Flex>
                <Flex direction={"row"} alignItems={"center"}>
                   <ThemeToggle/>
                    </Flex>
                    <Flex direction={"row"} alignItems={"center"}>
                    <Link as={NextLink} href='/sellondappramen' mx={2.5}>
                    <Text>Sell on Dapp Ramen</Text>
                </Link>
                </Flex>
                    
                <Flex direction={['column', 'column', 'column']} alignItems={"center"}>
                    <ConnectWallet/>
                    {address && (
                        <Link as={NextLink} href={`/profile/${address}`}>
                            <Avatar src='https://images.unsplash.com/photo-1594100889583-a421e2b8265c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ml={"20px"}/>
                        </Link>
                    )}
                </Flex>
            </Flex>
        </Box>
    )
}