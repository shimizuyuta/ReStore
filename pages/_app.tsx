import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body,
  textarea, {
    margin: 0;
    padding: 0;
  }
  * {
    box-sizing: border-box;
  }
  a {
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    color: #000;
  }
  ou ul {
    list-style: none;
  }
`

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
