import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import Title from '../../components/title'
import MapSidebar from './components/map-sidebar'

const Map0 = dynamic(() => import('./components/map0'), {
  loading: () => <p>Loading...</p>,
  ssr: false
})


export default function MapboxViewWorld() {

  const router = useRouter()

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
      </div>
    </html>
  )
}