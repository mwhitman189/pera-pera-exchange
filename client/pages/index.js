import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import theme from '../styles/theme'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pera Pera Exchange | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <Link href="/"><a>Pera Pera Exchange!</a></Link>
        </h1>

        <p className={styles.description}>
          Get started by{' '}
          <Link href="/users/signup"><a className="link">creating a profile</a></Link>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
