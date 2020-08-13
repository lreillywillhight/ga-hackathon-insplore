import React from 'react'
import Link from 'next/link'


export default function StaticGlobe() {

    return (
        <div className="globeDiv">
            <Link href='/maps/mapboxViewWorld'>
                <a>
            <img src="NEW GLOBE STATIC_Peru_3.png"></img>
                </a>
            </Link>
        </div>
    )
}