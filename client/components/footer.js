import styled from 'styled-components'


const Container = styled.footer`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border-top: 1px solid #eaeaea;
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
