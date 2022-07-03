import type { AppProps } from 'next/app'
import Head from 'next/head'
import '~styles/index.css'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Hello, world!</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <Component {...pageProps} />
    </>
  )
}
