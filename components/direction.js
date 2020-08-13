import Head from 'next/head'
import Link from 'next/link'

export default function Direction() {
    return (
        <div>
            <Head>
                <title>Insplore</title>
            </Head>
            <navbar>
                <Link href="/">
                    <a id='index'>
                        <h1>Insplore</h1>
                    </a>
                </Link>
            </navbar>
        </div>        
    )
}