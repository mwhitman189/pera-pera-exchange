import Header from './header'
import Footer from './footer'
import Container from './container'
import styles from './layout.module.css'

export default function Layout({ children }) {
    return (
        <div className={styles.app}>
            <Header />

            <Container>
                {children}
            </Container>

            <Footer />
        </div>
    )
}