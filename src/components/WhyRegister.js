import React from 'react';
import { Box, Heading, Flex, Text } from '@chakra-ui/react';

const WhyRegister = () => {
  const reasons = [
    { title: 'Reason 1', description: 'Challenge yourself and improve your coding skills by tackling a variety of complex problems.' },
    { title: 'Reason 2', description: 'Network with fellow coders and industry professionals, opening up new opportunities.' },
    { title: 'Reason 3', description: 'Win amazing prizes and gain recognition for your coding prowess.' }
  ];

  return (
    <Box id="why-register" py={12} px={8} bg="gray.100">
      <Heading mb={8}>Why Should You Register?</Heading>
      <Flex justify="space-around">
        {reasons.map((reason, index) => (
          <Box
            key={index}
            bg="white"
            p={6}
            borderRadius="md"
            boxShadow="lg"
            width="30%"
            textAlign="center"
          >
            <Heading fontSize="xl" mb={4}>{reason.title}</Heading>
            <Text>{reason.description}</Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default WhyRegister;
