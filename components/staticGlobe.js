import React from 'react'
import Link from 'next/link'


export default function StaticGlobe() {

    return (
        <div className="globeDiv">
            <Link href='/maps/mapboxViewWorld'>
                <a>
            <img src="GLOBE STATIC PERU.png"></img>
                </a>
            </Link>
        </div>
    )
}