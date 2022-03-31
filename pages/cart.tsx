import { CartSummary } from '@components/CartSummary/CartSummary'
import { Subtotal } from '@components/Subtotal/Subtotal'
import React from 'react'
import { Divider } from 'semantic-ui-react'

const cart = () => {
  return (
    <>
      <CartSummary />
      <Divider />
      <Subtotal />
    </>
  )
}

export default cart
