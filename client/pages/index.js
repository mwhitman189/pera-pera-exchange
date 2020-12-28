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
`

const WinningSentence = styled.div`
  font-weight: bold;
    font-size: 26px;
  & p {
    font-size: 18px;
  }
`

const CallToAction = styled.div`
  color: ${theme.ltColors.text};
  font-weight: 900;
`

const SignupLink = styled.a`
  font-style: italic;
`

export default function Home({ data }) {
  return (
    <Container>
      <Head>
        <title>Pera Pera Exchange | Level up your language ability!</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap" rel="stylesheet"></link>
      </Head>

      <MainContent>
        <h1>
          Welcome to <Link href="/"><a>Pera Pera Exchange!</a></Link>
        </h1>

        <WinningSentence>
          {/* Add winning sentence */}
          {data.sentence}
        </WinningSentence>

        <CallToAction>
          Get started by{' '}
          <Link href="/users/signup" as="/users/signup"><SignupLink>creating a profile</SignupLink></Link>
        </CallToAction>
      </MainContent>
    </Container>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:9000/sentences/recent`)
  const rawData = await res.json()
  const data = rawData.sentence[ 0 ]

  return { props: { data } }
}
