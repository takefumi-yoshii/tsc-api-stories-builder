import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { configure, addDecorator } from '@storybook/react'
import Theme from '../src/theme'

addDecorator((story) => (
  <ThemeProvider theme={Theme}>
    {story()}
  </ThemeProvider>
))

const req = require.context('./dist', true, /.(tsx|ts)$/)
configure(() => {
  req.keys().forEach((filename) => req(filename))
}, module)
