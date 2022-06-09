import React from 'react'
import { Message, Segment } from 'semantic-ui-react'
import { useCart } from 'store/Cart'

type Props = {}

export const CartSummary = (props: Props) => {
  const [context] = useCart()
  console.log(context)

  return (
    <Message warning>
      <p>
        <strong>{'x'}</strong>
      </p>
      <p>
        You will need to add some items to the cart before you can checkout.
      </p>
    </Message>
  )
}
