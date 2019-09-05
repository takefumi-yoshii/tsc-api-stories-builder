import * as React from 'react'
import { render } from 'react-dom'
import { createGlobalStyle, ThemeProvider } from "styled-components"
import theme from './theme'
import Root from './pages'
// ______________________________________________________
//
export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.6em;
    margin: 0;
  }
`
// ______________________________________________________
//
render(
<>
  <GlobalStyle />
  <ThemeProvider theme={theme}>
    <Root />
  </ThemeProvider>
</>
, document.getElementById('app'))
