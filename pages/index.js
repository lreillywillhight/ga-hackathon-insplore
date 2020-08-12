import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Title from '../components/title'

export default function Home() {


  return(
    <div>
      <Title />
      <div>
        {console.log(process.env.GREETING)}
        <h1>INSPLORE </h1>
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
