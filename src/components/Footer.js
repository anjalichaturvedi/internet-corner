import React from 'react';
import { Box, Container, Text, Link, Flex, Divider } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box mb="0" bg="gray.700" color="white" p="10">
      <Container mb="0" maxW="8xl">
        <Flex justifyContent="space-between" alignItems="center">
          <Flex mb="0" direction="column">
            <Text fontSize="lg" fontWeight="bold">Nodebrew</Text>
            <Text fontSize="md" mb="5" fontWeight="semi-bold">Empowering and building communities</Text>
            <Text fontSize="sm">hello@nodebrew.tech</Text>
          </Flex>
          <Flex mb="0" direction="column">
            <Text fontSize="lg" fontWeight="bold">Quick Links</Text>
            <Link mt="2" fontSize="sm">About Us</Link>
            <Link mt="2" fontSize="sm">Contact Us</Link>
            <Link mt="2" fontSize="sm">Privacy Policy</Link>
          </Flex>
          <Flex mb="0" direction="column">
            <Text fontSize="lg" fontWeight="bold">Services</Text>
            <Link mt="2" fontSize="sm">Web Design</Link>
            <Link mt="2" fontSize="sm">Graphic Design</Link>
            <Link mt="2" fontSize="sm">Digital Marketing</Link>
          </Flex>
          <Flex mb="0" direction="column">
            <Text fontSize="lg" fontWeight="bold">Resources</Text>
            <Link mt="2" fontSize="sm">Blog</Link>
            <Link mt="2" fontSize="sm">FAQs</Link>
            <Link mt="2" fontSize="sm">Tutorials</Link>
          </Flex>
        </Flex>
        <Divider my="4" borderColor="teal.700" />
        <Flex mb="0" justifyContent="center" alignItems="center">
          <Text fontSize="sm" textAlign="center">
            &copy; 2024 Nodebrew. All rights reserved. | Made with ❤️ in Cali and New Delhi
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
