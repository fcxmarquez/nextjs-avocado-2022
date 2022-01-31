import React from 'react'
import { HeaderWrapper } from './header.styles'

export const Header = () => {
  return (
    <HeaderWrapper pointing>
      <HeaderWrapper.Item active={true} name="Avo Store" />
      <HeaderWrapper.Item position="right" name="Cart" icon="cart" />
    </HeaderWrapper>
  )
}
