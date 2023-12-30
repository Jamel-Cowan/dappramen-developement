import { Container, Box, Heading, Text  } from "@chakra-ui/react"
import { purple } from "react-native-ios-kit-types/dist/styles/colors"





export const Hero = () => {

  return (
        <Container maxW={"1600px"}
        bgGradient="linear(to-r, #000000, #000000)"
        padding="0 1rem"
        margin="0 auto"
        >
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
                <Text fontSize="3xl" padding="1rem">
                a marketplace for those building the future of the internet
                </Text>
            </Box>
            <Box
            bgGradient="linear(to-r, #CB3928, #CB3928)"
            padding="0 1rem"
            margin="0 auto"
            maxW="600px"
            height={"300px"}
            >
                <img src="" alt="ramen" />
            </Box>
            <Box
            bgGradient="linear(to-r, #CB3928, #CB3928)"
            padding="0 1rem"
            margin="0 auto"
            maxW="600px"
            height={"300px"}
            >
                <img src="" alt="ramen" />
            </Box>
        </Container>
    )
}
        