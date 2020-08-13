import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import TestCities from './maps/components/testCities.js'
import { Card, ListGroup } from 'react-bootstrap'


import Title from '../components/title'
import Globe from '../components/globe'
import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter()


    return(
        <div className="home">
        <Head >
            <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,700&display=swap" rel="stylesheet"/>

        </Head>
        <Title />
        
        <Globe />
        <div>

            <Card className="outerCard" style={{ height:'25rem'}}>
                <Card.Body >
                    <Card className="destinationCard" style={{ width:'30em' }}>
                        <ListGroup variant="flush">
                            <ListGroup.Item className="destinationCard">
                                <div className="cityButton">
                                    <h3 className="city">Paris
                                    </h3>
                                    <button className="destinationBtn">Explore</button>
                                </div>
                                <h5 className="country">France</h5><br />
                                <div className="Pics">sadfa</div>
                            </ListGroup.Item>
                            <ListGroup.Item className="destinationCard">
                                <div className="cityButton">
                                    <h3 className="city">Osaka
                                    </h3>
                                    <button className="destinationBtn">Explore</button>
                                </div>
                                <h5 className="country">Japan</h5><br />
                                <div className="Pics">sadfa</div>
                            </ListGroup.Item>
                            <ListGroup.Item className="destinationCard">
                                <div className="cityButton">
                                    <h3 className="city">Cairo
                                    </h3>
                                    <button className="destinationBtn">Explore</button>
                                </div>
                                <h5 className="country">Egypt</h5><br />
                                <div className="Pics">sadfa</div>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Card.Body>
            </Card>

            

        </div>
        <div className="homeButtons">
            <button onClick={() => router.push("/randomDestination")}>Randomize</button>
            <button onClick={() => router.push("/destinations")}>Destinations</button>
        </div>
        <div>
            <footer>
            <ul>
                <li>
                <Link href="/maps/mapboxViewWorld">
                    <a title="PLACEHOLDER_SELECT_A_CITY">Select a city (PLACEHOLDER)...</a>
                </Link>
                </li>
            </ul>
            </footer>
        </div>
        </div>
    )
}
