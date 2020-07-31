import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPortrait() {
    return (
        <Layout>
            <Head>
                <title>First Portrait</title>
            </Head>
            <h1>First Portrait</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    )
}