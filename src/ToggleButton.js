// ToggleButton.js
import {Flex, IconButton, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const ToggleButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const handleToggle = () => {
    toggleColorMode();
  };

  return (
    <Flex align="center" justify="flex-end" p={4}>
      <IconButton
        icon={isDark ? <SunIcon /> : <MoonIcon />}
        onClick={handleToggle}
        colorScheme="teal"
        variant="outline"
        aria-label={`Toggle ${isDark ? 'Light' : 'Dark'} Mode`}
      />
    </Flex>
  );
};

export default ToggleButton;