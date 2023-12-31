import React from "react";
import { Container, Heading, Text } from "@chakra-ui/react";
import NFTGrid from "../components/NFTGrid";
import { NFT_COLLECTION_ADDRESS } from "../const/addresses";
import { useContract, useNFTs } from "@thirdweb-dev/react";

export default function Buy() {
    const { contract } = useContract(NFT_COLLECTION_ADDRESS);
    const { data, isLoading } = useNFTs(contract);
    return (
        
        <Container maxW={"1600px"} p={5} bg={"brand.black"} pb={"300px"}>
            <Heading textColor={"brand.white"}>Buy NFTs</Heading>
            <Text textColor={"brand.white"}>Browse and buy NFTs from this collection.</Text>
            <NFTGrid 
            isLoading={isLoading}
            data={data}
            emptyText={"No NFTs found"}
        />
        </Container>
    )
}