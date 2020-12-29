import styled from 'styled-components'
import theme from '../styles/theme'


const Container = styled.footer`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border-top: 3px solid ${theme.ltColors.text};
    width: 100%;
    height: 100px;
`

const Content = styled.div`

`

export default function Footer() {
    return (
        <Container>
            <Content>
                © {new Date().getFullYear()} Pera Pera Exchange
            </Content>
        </Container>
    )
}
