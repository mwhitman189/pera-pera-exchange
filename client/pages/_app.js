import Layout from '../components/layout'
import '../styles/global.css'
import theme from '../styles/theme'


function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          background: ${pageProps.isDarkTheme ? theme.dtColors.background : theme.ltColors.background}
          text: ${pageProps.isDarkTheme ? theme.dtColors.text : theme.ltColors.text}
        }

        a {
          color: ${pageProps.isDarkTheme ? theme.dtColors.link : theme.ltColors.link};
        }

        a:hover {
          color: ${pageProps.isDarkTheme ? theme.dtColors.linkHover : theme.ltColors.linkHover}
        }

        .bold {
          font-weight: bold;
        }
      `}
      </style>
    </Layout >
  )
}

export default App
