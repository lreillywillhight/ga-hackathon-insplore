import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Title from '../components/title'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return(
    <div>
      <Title />
      <div>
        <h1>INSPLORE </h1>
        {console.log(process.env.GREETING)}
        <button onClick={() => router.push("/destinations")}>Destinations</button>
        <button onClick={() => router.push("/randomDestination")}>Spin the Globe</button>
      </div>
      <div>
        <footer>
          <ul>
            <li>
              <Link href="/maps/mapboxViewWorld">
                <a title="PLACEHOLDER_SELECT_A_CITY">Select a city (PLACEHOLDER)...</a>
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  )
}
