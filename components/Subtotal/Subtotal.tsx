import React from 'react'
import { Button, Segment } from 'semantic-ui-react'
import { useCart } from 'store/Cart'

export const Subtotal = () => {
  const { subtotal } = useCart()

  return (
    <Segment size="large" clearing as="section">
      <span>
        <strong>Sub total: </strong> ${subtotal}
      </span>
      <Button color="black" floated="right">
        Check out
      </Button>
    </Segment>
  )
}
