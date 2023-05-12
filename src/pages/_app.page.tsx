import { Header } from '@/components/Header'
import { GlobalStyles } from '@/styles/global'
import { theme } from '@/styles/theme'
import { ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }: any) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  )
}
