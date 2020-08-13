import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import TestCities from './maps/components/testCities.js'


import Title from '../components/title'
import Globe from '../components/globe'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()


  return(
    <div className="home">
      <Head >
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,700&display=swap" rel="stylesheet"/>
        <link rel="shortcut icon" href="/favicon.ico"/>
      </Head>
      <Title />
      
      <Globe />
      <div className="homeButtons">
        <button onClick={() => router.push("/randomDestination")}>Randomize</button>
        <button onClick={() => router.push("/destinations")}>Destinations</button>
      </div>
    </div>
  )
}
