import React from 'react'
import { Message, Segment } from 'semantic-ui-react'

type Props = {}

export const CartSummary = (props: Props) => {
  return (
    <Message warning>
      <p>
        <strong>Your cart is empty</strong>
      </p>
      <p>
        You will need to add some items to the cart before you can checkout.
      </p>
    </Message>
  )
}
