import React from 'react'
import { Navbar } from '@components/Navbar/Navbar'
import { Header } from '@components/Header/Header'
import { Footer } from '@components/Footer/Footer'
import { LayoutWrapper } from './layout.styles'

export const Layout: React.FC = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <div className="layout__body">{children}</div>
      <Footer />
    </LayoutWrapper>
  )
}
