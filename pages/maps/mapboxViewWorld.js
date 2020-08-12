import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

const Map0 = dynamic(() => import('./components/map0'), {
  loading: () => <p>Loading...</p>,
  ssr: false
})


export default function MapboxViewWorld() {

  const router = useRouter()

  return(
    <div>
      <h1>HELLO MAPBOX</h1>
      <Map0 />
      <footer>
        <span onClick={() => router.push('/')}>Return to home page</span>
      </footer>
    </div>
  )
}