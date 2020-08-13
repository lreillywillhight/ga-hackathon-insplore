import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import Title from '../components/title'
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
      <Title />
      <div className="map-body">
        <MapSidebar  />
        <Map0/>
      </div>
      <footer>
        <span onClick={() => router.push('/')}>Return to home page</span>
      </footer>
    </div>
  )
} 