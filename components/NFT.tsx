import React from "react";
import { NFT } from "@thirdweb-dev/sdk";
import {
  MARKETPLACE_ADDRESS,
  NFT_COLLECTION_ADDRESS,
} from "../const/addresses";
import {
  ThirdwebNftMedia,
  useContract,
  useValidDirectListings,
  useValidEnglishAuctions,
} from "@thirdweb-dev/react";
import { Box, Flex, Heading, Skeleton, Text } from "@chakra-ui/react";

type Props = {
  nft: NFT;
};

export default function NFTComponent({ nft }: Props) {
  const { contract: marketplace, isLoading: loadingMarketplace } = useContract(
    MARKETPLACE_ADDRESS,
    "marketplace-v3"
  );

  const { data: directListing, isLoading: loadingDirectListing } =
    useValidDirectListings(marketplace, {
      tokenContract: NFT_COLLECTION_ADDRESS,
      tokenId: nft.metadata.id,
    });

  //Add for auction section
  const { data: auctionListing, isLoading: loadingAuction } =
    useValidEnglishAuctions(marketplace, {
      tokenContract: NFT_COLLECTION_ADDRESS,
      tokenId: nft.metadata.id,
    });

  return (
    <Flex
      direction={"column"}
      justifyContent={"center"}
      borderRadius={"6px"}
      borderColor={"lightgray"}
      borderWidth={1}
    >
      <Box
        borderRadius={"4px"}
        overflow={"hidden"}
        height={"200px"}
        width={"100%"}
        maxWidth={"280px"} /* Limit the image width to 280px */
        mx="auto" /* Center the image */
      >
        <ThirdwebNftMedia metadata={nft.metadata} height={"100%"} width={"100%"} />
      </Box>
      <Text fontSize={"small"} color="brand.700" px={2}>
        Token ID #{nft.metadata.id}
      </Text>
      <Text fontWeight={"bold"} color="brand.700" px={2}>
        {nft.metadata.name}
      </Text>

      <Box>
        {loadingMarketplace || loadingDirectListing || loadingAuction ? (
          <Skeleton></Skeleton>
        ) : directListing && directListing[0] ? (
          <Box px={2}>
            <Flex direction={"column"}>
              <Text fontSize={"small"} color="brand.700">
                Price
              </Text>
              <Text fontSize={"small"} color="brand.700">{`${directListing[0]?.currencyValuePerToken.displayValue} ${directListing[0]?.currencyValuePerToken.symbol}`}</Text>
            </Flex>
          </Box>
        ) : auctionListing && auctionListing[0] ? (
          <Box px={2}>
            <Flex direction={"column"}>
              <Text fontSize={"small"} color="brand.700">
                Minimum Bid
              </Text>
              <Text fontSize={"small"} color="brand.700">{`${auctionListing[0]?.minimumBidCurrencyValue.displayValue} ${auctionListing[0]?.minimumBidCurrencyValue.symbol}`}</Text>
            </Flex>
          </Box>
        ) : (
          <Box px={2}>
            <Flex direction={"column"}>
              <Text fontSize={"small"} color="brand.700">
                Price
              </Text>
              <Text fontSize={"small"} color="brand.700">Not Listed</Text>
            </Flex>
          </Box>
        )}
      </Box>
    </Flex>
  );
}
i