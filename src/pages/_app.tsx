import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { QueryClientProvider, QueryClient } from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ChakraProvider theme={theme}>
          <Component {...pageProps} />
      </ChakraProvider>

  )
}

export default MyApp