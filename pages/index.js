import Head from 'next/head'
import Link from 'next/link'
import Title from '../components/title'
import Globe from '../components/globe'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()


  return(
    <div className="home">
      <Head >
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap" rel="stylesheet"/>
        <link rel="shortcut icon" href="/favicon.ico"/>
      </Head>
      <Title />
      
      <Globe />
      <div className="homeButtons">
        <button className="randomButton" onClick={() => router.push("/randomDestination")}>Randomize</button>
        <button className="destinationButton" onClick={() => router.push("/destinations")}>Destinations</button>
      </div>
    </div>
  )
}
