import Link from 'next/link'
import { useRouter } from 'next/router'

export default function MapboxViewWorld() {

  const router = useRouter()

  return 
    <span onClick={() => router.push('/')}>Return to home page</span>
  
}