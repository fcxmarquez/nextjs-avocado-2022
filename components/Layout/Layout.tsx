import React from 'react'
import { Navbar } from '@components/Navbar/Navbar'
import { Header } from '@components/Header/Header'

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <footer className="container">This is the footer</footer>
    </div>
  )
}
