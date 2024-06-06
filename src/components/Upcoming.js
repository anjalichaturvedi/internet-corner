import React from 'react';
import {
  Box,
  Container,
  Text,
  VStack,
  HStack,
  Button,
  Flex,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';

const events = [
  {
    id: 1,
    date: 'June 10, 2024',
    title: 'Brew Bridge Mentorship',
    description: 'A 10 weeks immersvive program for hands-on programming with dedicated mentors',
  },
  {
    id: 2,
    date: 'July 30, 2024',
    title: 'Fall of Code',
    description: 'A month-long program to explore open source technologies with live projects',
  },
  {
    id: 2,
    date: 'September 15, 2024',
    title: 'Web Development Bootcamp',
    description: 'A week long bootcamp series where participants learn and make a project in web dev',
  },
];

const UpcomingEvents = () => {
  return (
    <Box bgGradient="linear(to-b, white, #F5F5F5)" py="50px">
        <Box mx="150">
      <Container maxW="8xl">
      <Heading size="s" as="h2" mb="4" textAlign="left">UPCOMING EVENTS</Heading>
      <Heading size="md" as="h2" mb="3" textAlign="left">What we are brewing for you</Heading>
        <Flex wrap="wrap" justifyContent="flex-start" spacing={1}>
          {events.map((event, index) => (
            <EventCard key={event.id} {...event} isFirst={index === 0} />
          ))}
        </Flex>
      </Container>
      </Box>
    </Box>
  );
};

const EventCard = ({ date, title, description, isFirst }) => {
  return (
    <Box
      w={{ base: '100%', md: '30%' }}
      bg={useColorModeValue('white', 'gray.700')}
      boxShadow="lg"
      rounded="lg"
      p={6}
      m={4}
      ml={isFirst ? 0 : 4}  // Remove left margin for the first card
      textAlign="left"
    >
      <Text fontSize="md" color="teal.500" mb={2}>
        {date}
      </Text>
      <Heading as="h3" fontSize="md" mb={2}>
        {title}
      </Heading>
      <Text fontSize="md">{description}</Text>
      <Button color="White" mt="5" bg="teal.500">Register</Button>
    </Box>
  );
};

const App = () => (
  <div>
    <UpcomingEvents />
  </div>
);

export default App;
