import Layout from '../components/layout'
import GlobalStyle from '../styles/globalStyles'
import '../styles/global.css'


function App({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout >
  )
}

export default App
