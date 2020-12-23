import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import theme from '../styles/theme'

const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 2rem;
`

const MainContent = styled.div`
  font-size: 1rem;
  color: ${theme.ltColors.text}
`

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Pera Pera Exchange | Level up your language ability!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainContent>
        <h1>
          Welcome to <Link href="/"><a>Pera Pera Exchange!</a></Link>
        </h1>

        <p>
          Get started by{' '}
          <Link href="/users/signup" as="/users/signup"><a className="link">creating a profile</a></Link>
        </p>
      </MainContent>
    </Container>
  )
}
