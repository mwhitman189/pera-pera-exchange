import BREAKPOINTS from '../styles/breakpoints'
import Link from 'next/link'
import theme from '../styles/theme'
import { Component } from 'react'


export default class Header extends Component {

    render() {
        return (
            <>
                <header className="header">
                    <nav>
                        <div className="logo">
                            <Link href="/">
                                <a className="nav-btn">ロゴ</a>
                            </Link>
                        </div>
                        <div className="btn-group">
                            <div className="login-btn">
                                <Link href="/users/login">
                                    <a className="nav-btn">Log in</a>
                                </Link>
                            </div>
                            <div className="signup-btn">
                                <Link href="/users/signup">
                                    <a className="nav-btn">Sign up</a>
                                </Link>
                            </div>
                        </div>
                    </nav>
                </header>

                <style jsx>{`
                .header {
                    color: ${theme.ltColors.text};
                    background: ${theme.ltColors.background};
                    width: auto;
                    height: 62px;
                    padding: 0 36px;
                    border-bottom: 1px solid ${theme.ltColors.border};
                }

                nav {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 100%;
                }

                .nav-btn {
                    display: block;
                    height: 100%;
                }

                .menu-btn {
                    display: flex;
                }

                .btn-group {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 120px;
                }

                a {
                    font-weight: bold;
                }

                @media screen and (min-width: ${BREAKPOINTS.md}) {
                    .menu-btn {
                        display: none;
                    }

                    .hamburger-menu {
                        display: none;
                    }
                }
            `}
                </style>
            </>
        )
    }
}