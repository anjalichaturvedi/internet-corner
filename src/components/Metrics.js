import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

function MetricBox({ title, count, description }) {
  return (
    <Box p="4" borderRadius="lg" textAlign="center" m="2"> {/* Added border */}
      <Heading size="lg" mb="2" fontWeight="bold">
        {count}
      </Heading>
      <Text fontSize="sm" color="gray.600" mb="2">{title}</Text>
      <Text fontSize="md">{description}</Text>
    </Box>
  );
}

function MetricsSection() {
  return (
    <Flex direction="column" align="center">
      <Flex justify="space-between">
        <MetricBox title="People Impacted" count={70000} />
        <MetricBox title="Countries Reached" count={46} />
        <MetricBox title="Sponsors" count={19} />
        <MetricBox title="Hackathons" count={4} />
      </Flex>
    </Flex>
  );
}

export default MetricsSection;
