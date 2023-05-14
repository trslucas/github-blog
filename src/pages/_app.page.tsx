import { Header } from '@/components/Header'
import { GlobalStyles } from '@/styles/global'
import { theme } from '@/styles/theme'
import { ThemeProvider } from 'styled-components'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/queryClient'

export default function App({ Component, pageProps }: any) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </QueryClientProvider>
  )
}
