import { ThemeProvider } from 'styled-components'

import GlovalStyled from '../styles/globals'
import theme from '../styles/themes/light'

import '../styles/globals.ts'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlovalStyled />
    </ThemeProvider>
  )
}

export default MyApp
