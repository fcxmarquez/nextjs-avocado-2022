import { AppProps } from 'next/app'
import { Layout } from '@components/Layout/Layout'
import 'semantic-ui-css/semantic.min.css'
import GlobalStyle from '../styles/global'
import { Container } from 'semantic-ui-react'
import React, { useState } from 'react'
import { CartProvider } from 'store/Cart'

function MyApp({ Component, pageProps }: AppProps) {
  /* Perfect to providers */
  // Or a Layout component
  // Additionals props

  return (
    <CartProvider>
      <Layout>
        <Container as="main">
          <Component {...pageProps} />
        </Container>
        <GlobalStyle />
      </Layout>
    </CartProvider>
  )
}

export default MyApp
