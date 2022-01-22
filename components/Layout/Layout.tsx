import React from 'react'
import { Navbar } from '@components/Navbar/Navbar'

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer className="container">This is the footer</footer>

      <style jsx>{`
        .container {
          background: salmon;
        }
      `}</style>
    </div>
  )
}
