import Header from './header'
import Footer from './footer'
import styled from 'styled-components'
import theme from '../styles/theme'


const Container = styled.div`
    display: grid;
    gap: 20px;
    grid-template-areas:
        "header"
        "main"
        "footer";

    @media only screen and (min-width: 500px) {
        grid-template-columns: 1fr 3fr;
        grid-template-areas:
            "header header"
            "main     main"
            "footer footer";
    }
`

const HeaderComp = styled(Header)`
    grid-area: header;
`

const MainContent = styled.div`
    grid-area: main;
    margin: 2rem;
`

const FooterComp = styled(Footer)`
    grid-area: footer;
`

export default function Layout({ children }) {
    return (
        <Container>
            <HeaderComp />
            <MainContent>{children}</MainContent>
            <FooterComp />
        </Container>
    )
}
