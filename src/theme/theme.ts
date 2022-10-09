import { extendTheme } from '@chakra-ui/react'

const colors = {
  linkedin: '#0077B5',
  github: '#c9510c',
  instagram: '#d6249f',
  twitter: '#1DA1F2',
  spotify: '#1DB954',
  gmail: '#DB4437',
  firebase: '#ffcc30',
  typescript: '#2f72bc',
  react: '#5ccfee',
  jest: '#99425b',
  chakra: '#3ac7bd'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  disableTransitionOnChange: false
}

export const theme = extendTheme({
  colors,
  config,
  styles: {
    global: {
      body: {
        fontFamily: 'Inter, sans- serif',
        overflowX: 'hidden',
        '&::-webkit-scrollbar': { width: '5px', height: '5px' },
        '&::-webkit-scrollbar-thumb': {
          background: 'blue.500',
          borderRadius: '999px !important'
        }
      }
    }
  }
})