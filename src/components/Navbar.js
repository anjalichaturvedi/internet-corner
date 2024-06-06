import React from 'react';
import { Box, Flex, Spacer, Link, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <>
      <Flex p="6" bg="#F5F5F5" alignItems="center">
        <Box mx="150">
          <img src="files/images/logo.png" alt="Logo" style={{ width: '50px' }} mx="150" />
        </Box>
        <Spacer />
        <Box>
          <Flex alignItems="center" mx="150">
            <Link mr="6" color="black" href="/">Home</Link>
            <Link mr="6" color="black" href="/about">About</Link>
            <Link mr="6" color="black" href="/services">Services</Link>
            <Menu>
              <MenuButton bg="#F5F5F5" color="black">More</MenuButton>
              <MenuList bg="#F5F5F5"> {/* Adjusted background color */}
                <MenuItem bg="#F5F5F5" color="black" as={Link} href="/contact">Contact</MenuItem>
                <MenuItem bg="#F5F5F5" color="black" as={Link} href="/faq">FAQ</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Box>
      </Flex>
      <Box borderBottom="1px solid #ccc" />
    </>
  );
}

export default Navbar;
