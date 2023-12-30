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
                    <Button className="mode-switcher"><a className="sun mode-switch" href="/">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJASURBVHgBvVa7UsJAFL0J0db8gbTaiJ2d/oE446tc/wC/APgC8QuIle8BvkBLO7ChprTEmoF4TmajuCQbFme8M5lddu+es3uflMRRTk9VbWursjccDt5czvniKJ4nh/zEUZyJVpUFopMTVbEdiGN5xTew6WRheKYCzNLHtPnwEDVkBYEPGxjquMzu42P0faHSvBIc/AFH0w8NjJ+uDk9JZjNpPD1F9/N7gakMhebxseJ0w9yrVlW4tiZlzicTGXW70dhQifGSGjCuzbOeLCHn56oMgDY+2j78QZUIhE0QjoowCongNwVTXumfEY4M8BsviasgOsAXzmZe7fm5fbMyEV8Ce/cBNsLNj8yb6/0O9svY37W9zJpHAKhjGGeRUO7uopHvyxFeKPBd24aVS0THg0gxb2w3JZkkJpUKz+TpBaxdaUlhIiJ/LjlPo8v3va4UCF71DhOmEZnkDkMduPucT6fSC6DAvBFNZIYr18IiImCMM5Y3iE0Bfhwg5luYt0wt5sn6ehJdDGl7RMEiuFByJl1LLZNKro+YjDQl/QTbl/P0dI4xzKOMBC4mopRKcqEjqpNFRhLYv4NpyMS1YbkkLF/4inkPzkeSyg7WFHWm0z8m7PzNmVM049xyYlq85GLlEsSQx7BpOrSoqOrqLVktJsggoVJS6s09DZzb9BjmMOsVMBbIfvUj3fhudT+xOjdL2L/Sfra9Xemxv+UqF7Vy7Ldw43qBjhVjKTk7Uy8AehFH+bd/QYGjflIgWbvEUb4AnoQpbeQjzEgAAAAASUVORK5CYII=" alt=""></a>
                        <a className="moon mode-switch" href="/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJeSURBVHgBrVXNddpAEJ7ZFTHxiXRAB3EqiPSwBTIHQwWBDuwKDBU4qQBcAeRgyxLJg3RAB5EriE4+xNJOZpafRwjwnhx/B0lvVvvttzvfzCLswWg0rRyXs0tQ+LNeP72FgsBdwTCMO1qpGwACIqgYyrwgCGZQAGo7EIWTnkIcGKI5IPYkprUmKAi1Tcp7uEbAYaNx5hFRReK+7/+AglgTh+G0KqSANPYbp12JEWGVnwm8AGtihflUSIzJr+AV4Mgjir61WB4rVp2g4SerQURWa1UXx0IxwSdRu20rY+hR3mEYulAQy6OgFqd9tj1YLpfGiJAqdC6gINTdXXwiH1rjeHvQ87yUbTfmHXVscosQK4XWUmytdNcPR0elK3ZKKsktQs7J46Sxz7gIkl0/iOo4jtu88lRBPuVE956e9Nd221sLkfIvl7MTzXblI3VzdhYuHTHK8t8fms3mfJ8CTmBVozOQicvQnL9T7gkVRKxKMUk+VrtXxjxbMq1LH+EAuFckPlcjKu0SmM9MmNrMsyUN5UNU5Pr1s3dcVKkYwTahOJr8MgRzKWP4Dzw8TC6Z8EYWWSwKShS4RTO/CZnLzYvPmIbSWyyx80Z9kfNBzAbwAkjyxDVEJiXK+xKzxNavOfQXqqNeAU6r9PhtJn2migo6kguJ/9XoJ9H3a0OmJ20zJ90PAi85RHp/H7UcrQfSE7LcdM/P6+si++cGWZHzUMKDs5yebzdvD2s7XboAY9uAKw4gyrorpXuJV5MRtTT8DuyBtRTicN99iHAAsoDjOO+NgZONKYnj4KxWqz0emvsHODEeVnIojcYAAAAASUVORK5CYII=" alt=""/></a>
                            </Button>
                </Flex>
                <Flex dir={"row"} alignItems={"center"}>
                    <Button>Login</Button>
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