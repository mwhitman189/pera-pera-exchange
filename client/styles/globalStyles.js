import { createGlobalStyle } from 'styled-components'
import theme from '../styles/theme'


const GlobalStyle = createGlobalStyle`
    body {
        margin: 10rem;
        margin: 0;
        padding: 0;
        background-color: ${theme.ltColors.background};
        color: ${theme.ltColors.text};
        fontFamily: Lato-Regular,sans-serif;
    }

    a {
        color: inherit;
        cursor: pointer;
    }
`
export default GlobalStyle
