import React from 'react';
import { Box, Heading, Text, Flex } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box
      bgImage="url('https://via.placeholder.com/1920x1080')"
      bgPos="center"
      bgSize="cover"
      h="100vh"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      position="relative"
    >
      <Box bg="rgba(0, 0, 0, 0.5)" w="100%" h="100%" position="absolute" top="0" left="0" />
      <Box zIndex="1">
        <Heading fontSize="4xl">Welcome to CodeContest</Heading>
        <Text fontSize="2xl" mt={4}>The Ultimate Programming Competition</Text>
      </Box>
    </Box>
  );
};

export default Header;
