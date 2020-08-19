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
    <html>
        <head>
          <script src='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js'></script>
          <link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
        </head>
        <div>
          <div className="homeButton">
            <span onClick={() => router.push('/')}>Return to home page</span>
          </div>
        </div>
          <Title />
          <div className="map-body">
            <Map0 />
            <MapSidebar />
          </div>
          <footer>
          <div className="homeButton">
            <span onClick={() => router.push('/')}>Return to home page</span>
          </div>
          </footer>
    </html>
  )
} 