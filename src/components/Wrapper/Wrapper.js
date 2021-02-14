import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    900: '#001e1d',
    800: '#004643',
    700: '#00AAA2',
    600: '#10D482',
    500: '#f9bc60',
    400: '#e16162',
    200: '#abd1c6',
    0: '#fffffe'
  },
  neutral: {
    900: '#000',
    800: '#222',
    0: '#fff'
  }
}

const theme = extendTheme({ colors })

const Wrapper = ({ children }) => <ChakraProvider theme={theme}>{children}</ChakraProvider>

export default Wrapper
