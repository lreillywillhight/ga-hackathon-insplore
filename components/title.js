import Head from 'next/head'
import Link from 'next/link'

export default function Title() {
    return (
        <div className='header'>
            <Head>
                <title>Insplore</title>
            </Head>
            <div>
                <Link href="/">
                    <a  className="title">
                        <img className="logo" src='logo-working-white.png'></img>
                    </a>
                </Link>
            </div>
        </div>        
    )
}