import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'



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

const theme = extendTheme({ colors })


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      {/* <ColorModeScript> */}
      <App />
      {/* </ColorModeScript> */}
    </ChakraProvider>
  </React.StrictMode>
)
