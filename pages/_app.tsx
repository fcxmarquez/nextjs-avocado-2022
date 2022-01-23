import { AppProps } from 'next/app'
import { Layout } from '@components/Layout/Layout'
import 'semantic-ui-css/semantic.min.css'

function MyApp({ Component, pageProps }: AppProps) {
  /* Perfect to providers */
  // Or a Layout component
  // Additionals props
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
