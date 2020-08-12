import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Title from '../components/title'

export default function Home() {


  return(
    <div>
      <Title />
      <div>
        <button >
          Maps
        </button>
        <footer>
          <ul>
            <li>
              <Link href="/maps/mapboxViewWorld">
                Select a city (PLACEHOLDER)...
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  )
}
