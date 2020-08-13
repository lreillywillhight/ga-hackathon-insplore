import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import TestCities from './maps/components/testCities.js'
// import dynamic from 'next/dynamic'



export default function Home() {



  return(
    <div>
      <div>
        {console.log(TestCities)}
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
