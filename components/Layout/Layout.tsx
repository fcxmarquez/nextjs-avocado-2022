import React from 'react'
import { Navbar } from '@components/Navbar/Navbar'
import { Header } from '@components/Header/Header'
import { Footer } from '@components/Footer/Footer'
import { LayoutWrapper } from './layout.styles'
import { Container } from 'semantic-ui-react'

export const Layout: React.FC = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <Container as="main" text style={{ paddingBottom: '120px' }}>
        {children}
      </Container>
      <Footer />
    </LayoutWrapper>
  )
}
