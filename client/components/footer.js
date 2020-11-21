import BREAKPOINTS from '../styles/breakpoints'


export default function Footer() {
    return (
        <>
            <div className="footer">
                <footer>
                    <div className="content">
                        © {new Date().getFullYear()} Pera Pera Exchange
                </div>
                </footer>
            </div>

            <style jsx>{`
                .footer {
                    display: flex;
                    justify-content: center;
                    align-items: flex-end;
                    border-top: 1px solid #eaeaea;
                    width: 100%;
                    height: 100px;
                }
            `}
            </style>
        </>
    )
}