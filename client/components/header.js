import BREAKPOINTS from '../styles/breakpoints'
import Link from 'next/link'


export default function Header({ menuIsOpen }) {
    return (
        <>
            <header className="header">
                <nav>
                    <div className="logo">
                        <Link href="/">
                            <a className="nav-btn">SVG_LOGO_PLACEHOLDER</a>
                        </Link>
                    </div>
                    <div>
                        <Link href="/signup">
                            <a className="nav-btn">Sign up</a>
                        </Link>
                    </div>
                    <button className="menu-btn">SVG_MENU_ICON_PLACEHOLDER</button>

                    <div className="hamburger-menu">
                        <span>
                            {menuIsOpen === true && (
                                <div className="sign-up-btn">
                                    <Link href="/signup">
                                        <a>Sign up</a>
                                    </Link>
                                </div>
                            )}
                        </span>
                    </div>
                </nav>
            </header>

            <style jsx>{`
                .header {
                    background: #fafafa;
                    width: auto;
                    height: 62px;
                    padding: 0 10px;
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

                .hamburger-menu {
                    display: inline-block;
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