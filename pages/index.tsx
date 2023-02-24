import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Memory Game</title>
        <meta name="description" content="Test your memory" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>memory</h1>
      </main>

      <footer>
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
