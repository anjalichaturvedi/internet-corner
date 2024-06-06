import React from 'react';
import { Flex, Heading, Button, ScaleFade, Box, Text } from '@chakra-ui/react';

function LandingPage() {
  return (
    <Flex bg="#F5F5F5" height="100vh" alignItems="center" justifyContent="center" color="white" mb="50px">
      <Box mt="-100px" textAlign="center">
        <ScaleFade initialScale={0.9} in={true}>
          <Flex justifyContent="center"> {/* Center the image horizontally */}
            <img src="files/images/header.png" alt="Header" style={{ maxWidth: '50%', height: 'auto' }} /> {/* Add the image */}
          </Flex>
          <Heading size="2xl" mt="10" mb="8" fontWeight="600" color="black">
          <Text>
      Making tech <Text as="span" style={{ borderRadius: "5px", background: "linear-gradient(to top, #AAC3F4 30%, transparent 10%)" }}>accessible</Text> for<br />
      <Text display="block" marginTop="4px">underrepresented communities</Text>
    </Text>         </Heading>
          <Button
            bg="#AAC3F4"
            mr="4"
            size="lg"
            _hover={{ transform: "scale(1.05)" }}
            _active={{ transform: "scale(0.95)" }}
          >
            Get Started
          </Button>
          <Button
            bg="gray.300"
            color="black"
            ml="4"
            size="lg"
            _hover={{ transform: "scale(1.05)", bg: "gray.400" }}
            _active={{ transform: "scale(0.95)" }}
          >
            Learn More
          </Button>
        </ScaleFade>
      </Box>
    </Flex>
  );
}

export default LandingPage;
