import React from 'react';
import { Box, Flex, Heading, Avatar, Text, Link, Icon, SimpleGrid } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Anjali Chaturvedi',
    position: 'Lead',
    avatar: 'https://bit.ly/broken-link',
  },
  {
    name: 'Hasini Kanchetty',
    position: 'Program Team',
    avatar: 'https://bit.ly/broken-link',
  },
  {
    name: 'Tasmiya Khan',
    position: 'Technical Team',
    avatar: 'https://bit.ly/broken-link',
  },
  {
    name: 'Shriya Reddy Vundhyala',
    position: 'Marketing Team',
    avatar: 'https://bit.ly/broken-link',
  },
  {
    name: 'Priyanka Chitikela',
    position: 'Financial Team',
    avatar: 'https://bit.ly/broken-link',
  },
  {
    name: 'Selorm Apeletey Mensah',
    position: 'Program Team',
    avatar: 'https://bit.ly/broken-link',
  },
  {
    name: 'Sharon Wainaina',
    position: 'Program Team',
    avatar: 'https://bit.ly/broken-link',
  },
  // Add more team members here
];

const TeamMember = ({ name, position, avatar, linkedin, github, website }) => (
    <Flex
      align="left"
      p=""
      mb=""
    
    >
      <Avatar size="sm" src={avatar} mr="4" />
      <Box>
        <Heading as="h3" size="s" mb="">{name}</Heading>
        <Text fontSize="sm" color="gray.600" mb="2">{position}</Text>
      </Box>
    </Flex>
  );
  
const MeetTheTeam = () => {
  return (
    <Box mx="150" py="10">
      <Heading size="s" as="h2" mb="4" textAlign="left">TEAM</Heading>
      <Heading size="md" as="h2" mb="3" textAlign="left">TEAM</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mx="">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            position={member.position}
            avatar={member.avatar}
            linkedin={member.linkedin}
            github={member.github}
            website={member.website}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default MeetTheTeam;
