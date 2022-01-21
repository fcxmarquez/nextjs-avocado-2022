import React from 'react'
import { Navbar } from '@components/Navbar/Navbar'

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer>This is the footer</footer>
    </div>
  )
}
