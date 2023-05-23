import { Header } from '@/components/Header'
import { GlobalStyles } from '@/styles/global'
import { theme } from '@/styles/theme'
import { ThemeProvider } from 'styled-components'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/queryClient'
import { IssuesContextProvider } from '@/contexts/IssuesContex'

export default function App({ Component, pageProps }: any) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <IssuesContextProvider>
          <Header />
          <Component {...pageProps} />
          <GlobalStyles />
        </IssuesContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
