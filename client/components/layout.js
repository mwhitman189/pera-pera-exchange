import Header from './header'
import Footer from './footer'
import Container from './container'

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            <Container>
                {children}
            </Container>
            <Footer />
        </div>
    )
}
