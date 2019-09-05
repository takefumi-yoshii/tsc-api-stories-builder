import 'styled-components'
// ______________________________________________________
//
type AppTheme = typeof theme
declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}
// ______________________________________________________
//
export const theme = {
  colors: {
    primary: '#406be8',
    primaryHigh: '#1e4dd6',
    secondary: '#8b99bb',
    secondaryHigh: '#6d7b9c'
  }
}
// ______________________________________________________
//
export default theme
