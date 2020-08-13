import React from 'react'
import Title from '../components/title'
import { useRouter } from 'next/router'

export default function Destinations() {
    const router = useRouter()

    return (
        <div>
            <Title />
            <div>List of Destinations</div>
            <button onClick={() => router.push("/maps/mapboxViewWorld")}>See More Info</button>
            <button onClick={() => router.push("/randomDestination")}>Spin Again</button>
        </div>
    )
}