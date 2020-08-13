import Head from 'next/head'
import Link from 'next/link'

export default function Title() {
    return (
        <div className='header'>
            <Head>
                <title>insplore</title>
                <link rel="shortcut icon" href="/Insplore_favicon.ico"/>  
            </Head>
            <div>
                <Link href="/">
                    <a  className="title">
                        <img className="logo" src='NEW_Insplore_Logo_sized.png'></img>
                    </a>
                </Link>
            </div>
        </div>        
    )
}