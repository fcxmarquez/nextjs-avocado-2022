import { CartSummary } from '@components/CartSummary/CartSummary'
import { Subtotal } from '@components/Subtotal/Subtotal'
import React from 'react'
import { Divider } from 'semantic-ui-react'

const cart = () => {
  return (
    <>
      <CartSummary />
      <Subtotal />
    </>
  )
}

export default cart
