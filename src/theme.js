// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react';

// 2. extend the theme with color mode config
const theme ={
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
};

export default theme;