import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import theme from '../styles/theme'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pera Pera Exchange | Level up your language ability!</title>
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
    </div>
  )
}
