import { useRouter } from 'next/router'
import Title from '../../components/title'

export default function MapboxViewWorld() {

  const router = useRouter()

  return (
    <div>
      <Title />
      <span onClick={() => router.push('/')}>Return to home page</span>
    </div>
  )
}