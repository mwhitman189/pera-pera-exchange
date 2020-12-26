import { Component } from 'react'
import Link from 'next/link'
import theme from '../styles/theme'
import styled from 'styled-components'


const HeaderContainer = styled.div`
    color: ${theme.ltColors.text};
    background: ${theme.ltColors.background};
    width: auto;
    height: 62px;
    padding: 0 36px;
    border-bottom: 1px solid ${theme.ltColors.border};
`

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`

const Logo = styled.div`

`

const NavBtn = styled.a`
    display: block;
    height: 100%;
    font-weight: 700;
`

const BtnGroup = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 120px;
`

const LoginBtn = styled.div`

`

const SignupBtn = styled.div`

`

export default class Header extends Component {

    render() {
        return (
            <HeaderContainer>
                <Nav>
                    <Logo>
                        <Link href="/" as="/">
                            <NavBtn>ロゴ</NavBtn>
                        </Link>
                    </Logo>
                    <BtnGroup>
                        <LoginBtn>
                            <Link href="/users/login" as="/users/login">
                                <NavBtn>Log in</NavBtn>
                            </Link>
                        </LoginBtn>
                        <SignupBtn>
                            <Link href="/users/signup" as='users/signup'>
                                <NavBtn>Sign up</NavBtn>
                            </Link>
                        </SignupBtn>
                    </BtnGroup>
                </Nav>
            </HeaderContainer>
        )
    }
}
