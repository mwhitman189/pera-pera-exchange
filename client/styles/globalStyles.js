import { createGlobalStyle } from 'styled-components'
import theme from '../styles/theme'


const GlobalStyle = createGlobalStyle`
    body {
        margin: 10rem;
        margin: 0;
        padding: 0;
        background-color: ${theme.ltColors.background};
        color: ${theme.ltColors.text};
        font-family: ${theme.fontFamily.sansSerif};
    }

    a {
        text-decoration: none;
        color: ${theme.ltColors.text};;
        cursor: pointer;
        margin: 0 4px;
        text-shadow: ${theme.shadows.defined};
        transition: .1s;
      
        &:hover {
          text-shadow: none;
          color: ${theme.ltColors.weakText};
        }
    }
`
export default GlobalStyle
