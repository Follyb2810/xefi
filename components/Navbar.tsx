import { Avatar, Box, Button, Container, Flex, Heading, Link, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import NextLink from 'next/link';
import {AiOutlineMenu} from 'react-icons/ai'


export function Navbar() {
    const address = useAddress();
  
    const links =[
        {page:'Buy',path:'/buy'},
        {page:'sell',path:'/sell'},
        {page:'explore',path:'/buy'},
]

    return (
        <Box  bg={'brand.200'} px={8} py={2}>
              
              <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Link as={NextLink} href='/' >
                    <Heading fontSize={{base:"16px",sm:"24px",md:" 30px",}} color={'brand.700'} textDecoration={'none'}>XFI Marketplace</Heading>
                </Link>
                <Flex direction={"row"} display={{base:'none',md:'flex'}} bg={'brand.250'} borderRadius='md'>
                    {
                        links.map((link,index)=>(
                            <Link as={NextLink}  key={index} mx={2.5} href={link.path} passHref             
                color='black'
                _hover={{
                    textDecoration: "none",
                    bg: "blue.200",
                    borderRadius:"10px"
                }}
                >
                                 <Text  p={4} color='white'>{link.page}</Text>
                            </Link>

                        ))
                    }
                </Flex>
                <Flex dir={"row"} alignItems={"center"}>
                    <ConnectWallet/>
                    {address && (
                        <Button as={NextLink} href={`/profile/${address}`}>
                            <Avatar src='https://bit.ly/broken-link' ml={"20px"}/>
                        </Button>
                    )}
                </Flex>
                <Flex display={{base:'block',md:'none'}}>
                <Menu >
                    <MenuButton as={Button} ><AiOutlineMenu /></MenuButton>
                    <MenuList py={3}>
                        {
                            links.map((link,index)=>(
                                <MenuItem key={index}>
                                    <Link as={NextLink}   mx={2.5} href={link.path}>
                                                    <Text >{link.page}</Text>
                                                </Link>
                                </MenuItem>
                            ))
                        }
                    </MenuList>
                    </Menu>
                </Flex>
            </Flex>
              
        </Box>
    )
};