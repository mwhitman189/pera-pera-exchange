import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import theme from '../styles/theme'
import breakpoints from '../styles/breakpoints'

const Container = styled.div`
  width: 100%;
  margin: 0;
`

const MainContent = styled.div`
  font-size: 1rem;
  margin: 0;
  display: grid;
  grid-gap: 1rem;

  @media (min-width: ${breakpoints.md}) {
    margin: 0 4rem;
  }
`

const Headline = styled.h1`

`

const WinningSentences = styled.div`
  font-weight: bold;
  font-size: 26px;
  font-style: italic;
  margin: 1rem;
`

const SentenceData = styled.div`
  font-size: 14px;
  opacity: .8;
  font-weight: 500;
  margin-left: 1rem;
`

const CallToAction = styled.div`
  color: ${theme.ltColors.text};
  font-weight: 900;
  font-size: 20px;
`

const AnchorTag = styled.a`
  font-style: italic;
`

const CallToLogin = styled.div`
  font-size: 16px;
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
        <Headline>
          Welcome to <Link href="/"><a>Pera Pera Exchange!</a></Link>
        </Headline>

        <WinningSentences>
          {/* Add winning sentence */}
          "{data.sentence}"
          <SentenceData>~ {data.winningCategory}</SentenceData>
        </WinningSentences>

        <CallToAction>
          <Link href="/users/signup" as="/users/signup">
            <AnchorTag>Get started</AnchorTag>
          </Link>
          {" "}by creating a profile
          <CallToLogin>
            Already have an account?
          <Link href="/users/login" as="/users/login">
              <AnchorTag>{" "}Sign In</AnchorTag>
            </Link>
          </CallToLogin>
        </CallToAction>
      </MainContent>
    </Container>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:9000/sentences/recent`)
  const rawData = await res.json()
  const data = rawData.sentence ? rawData.sentence : rawData.msg

  return { props: { data } }
}
