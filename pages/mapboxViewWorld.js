import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import Title from '../components/title'
import Footer from '../components/footer'
import MapSidebar from './maps/components/map-sidebar'

const Map0 = dynamic(() => import('./maps/components/map0'), {
  loading: () => <p>Loading...</p>,
  ssr: false
})


export default function MapboxViewWorld() {

  const router = useRouter()
  // const [show, setShow] = useState(false);

  return (
    <div>
      <Head >
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,700&display=swap" rel="stylesheet"/>
        <link rel="shortcut icon" href="/favicon.ico"/>
      </Head>
      <Title />
      <div className="map-body">
        <MapSidebar  />
        <Map0/>
      </div>
      <Footer />
    </div>
  )
} 