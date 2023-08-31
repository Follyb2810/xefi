import NextLink from 'next/link';
import type { NextPage } from "next";
import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react';
import IMG from '../components/images/logo-a4.png';

const Home: NextPage = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      p={[4, 8]}
      w="100%"
      alignItems="center"
      justifyContent="space-between"
      borderWidth={2}
      borderColor="gray.200"
      borderRadius="50px"
      bg="brand.150"
      boxShadow="md"
      mt={20}
    >
      <Box textAlign={'center'} >
        <Heading color="brand.700" fontSize={{ base: '2xl',sm: "4xl", md: '6xl' }} mb={[1,16]}>
          Unlock the Future of Possibilities with NFTs and Crypto
        </Heading>
        <Button as={NextLink} href="/buy" mt={3}>
          Explore NFTs
        </Button>
      </Box>
      <Box mt={[4, 0]} ml={[0, 4]}>
        <Image
          src="/m.png"
          alt="hello"
          width={{ base: '100%', md: 'auto' }}
          height={{ base: 'auto', md: '400px' }}
          maxW="600px"
        />
      </Box>
    </Flex>
  );
};

export default Home;
