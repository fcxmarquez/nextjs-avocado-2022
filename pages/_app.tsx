import { AppProps } from 'next/app'
import { Layout } from '@components/Layout/Layout'
import 'semantic-ui-css/semantic.min.css'
import GlobalStyle from '../styles/global'
import { Container } from 'semantic-ui-react'

function MyApp({ Component, pageProps }: AppProps) {
  /* Perfect to providers */
  // Or a Layout component
  // Additionals props
  return (
    <Layout>
      <Container as="main">
        <Component {...pageProps} />
      </Container>
      <GlobalStyle />
    </Layout>
  )
}

export default MyApp
