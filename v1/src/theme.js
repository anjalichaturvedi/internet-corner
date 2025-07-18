// theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        backgroundColor: '#19191b',
        color: 'white',
    },
  },
  },
  colors: {
    darkColor: '#19191b', // Set your desired color for dark mode
  },
});

export default theme;
