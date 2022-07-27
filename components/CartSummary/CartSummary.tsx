import { CartItem } from '@components/CartItem/CartItem'
import React from 'react'
import { Divider, Message, Segment } from 'semantic-ui-react'
import { useCart } from 'store/Cart'

export const CartSummary = () => {
  const { items } = useCart()

  return (
    <>
      {items.length === 0 ? (
        <Message warning>
          <p>
            <strong>Your cart is empty</strong>
          </p>
          <p>
            You will need to add some items to the cart before you can checkout.
          </p>
        </Message>
      ) : (
        items.map((item) => (
          <>
            <CartItem key={item.id} item={item} /> <Divider />{' '}
          </>
        ))
      )}
    </>
  )
}
