import styled from 'styled-components'
import theme from '../styles/theme'


const Container = styled.div`
    grid-area: footer;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border-top: 3px solid ${theme.ltColors.text};
    width: 100%;
    height: 100px;
`

export default function Footer({ className }) {
    return (
        <Container className={className}>
            © {new Date().getFullYear()} Pera Pera Exchange
        </Container>
    )
}
