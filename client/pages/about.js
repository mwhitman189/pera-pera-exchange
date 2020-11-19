import Head from 'next/head'
import Link from 'next/link'
import theme from '../styles/theme'


export default function AboutPage() {
    return (
        <>
            <Head>
                <title>Pera Pera Exchange | About</title>
            </Head>

            <h1>About Pera Pera Exchange</h1>
            <Link href="/"><a>Home</a></Link>
        </>
    )
}