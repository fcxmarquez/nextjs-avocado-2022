import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { ReactEventHandler, useState } from 'react'
import { Container } from 'semantic-ui-react'
import { HeaderWrapper } from './header.styles'

export const Header = () => {
  const pathname = useRouter().pathname

  return (
    <HeaderWrapper pointing>
      <Container text>
        <Link href={'/'} passHref>
          <HeaderWrapper.Item
            active={pathname === '/'}
            position="left"
            style={{ margin: '0 auto' }}
          >
            <h4>Home</h4>
          </HeaderWrapper.Item>
        </Link>
        <Link href={'/cart'} passHref>
          <HeaderWrapper.Item
            active={pathname == '/cart'}
            position="right"
            style={{ margin: '0 auto' }}
          >
            <h4>Cart</h4>
          </HeaderWrapper.Item>
        </Link>
      </Container>
    </HeaderWrapper>
  )
}
