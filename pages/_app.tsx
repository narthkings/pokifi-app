import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { customTheme } from "../styles/themes";
import { wrapper } from '../store/store';


function MyApp({ Component, pageProps }: AppProps) {
  return (

    <ChakraProvider resetCSS theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default wrapper.withRedux(MyApp);
