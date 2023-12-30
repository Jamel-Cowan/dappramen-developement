import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";


// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
// extend theme 

const activeChain = "mumbai";

const colors = {

};

const theme = extendTheme({

}); 


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}> 
      <ChakraProvider theme={theme}>
        <Navbar/>
        <Hero/>
      <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
