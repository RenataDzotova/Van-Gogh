import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import record from "../data/paintings.json"
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  console.log(record)
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="og:artist" content="Vincent van Gogh" />
        <meta property="og:title" content="Assignment #2 - Home Page" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <link rel="icon" href="/logo.jpeg" />
      </Head>
      <main className={styles.home} id="home">
        <h1 className={styles.vangog} id="hOne">Vincent van Gogh</h1>
        <Link href="/art"><button className={styles.button}>Explore Art</button></Link>
      </main>
    </>
  )
}
