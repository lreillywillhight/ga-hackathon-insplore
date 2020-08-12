import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {


  return(
    <div>
      <div>
        <h1>INSPLORE </h1>
      </div>
      <div>
        <footer>
          <ul>
            <li>
              <Link href="/mapboxViewWorld">
                Select a city...
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  )
}
