import React from 'react';
import { Box, Heading, Text, Button, VStack, Flex } from '@chakra-ui/react';

function GetInvolvedSection() {
  return (
    <Box bg="#F5F5F5" py="50px">
      <Flex alignItems="center" justifyContent="center">
        <VStack spacing={6} textAlign="center" maxW="600px" mx="auto">
          <Heading size="xl" fontWeight="bold" color="gray.700">
            Join our Community
          </Heading>
          <Text fontSize="md" color="gray.500">
            We strive to bridge the gap in technology access and education for underrepresented communities, empowering them to achieve their goals. We would love to have you and help you join build the future that you deserve.
          </Text>
          <Button
            colorScheme="teal"
            size="lg"
            _hover={{ transform: "scale(1.05)" }}
            _active={{ transform: "scale(0.95)" }}
          >
            Get Involved
          </Button>
        </VStack>
      </Flex>
    </Box>
  );
}

export default GetInvolvedSection;
