import Head from 'next/head'
import Link from 'next/link'
import theme from '../styles/theme'


export default function About() {
    return (
        <>
            <Head>
                <title>How it works | Pera Pera Exchange</title>
            </Head>

            <h1>Level up your language skills with Pera Pera</h1>
            <Link href="/"><a>Home</a></Link>
        </>
    )
}