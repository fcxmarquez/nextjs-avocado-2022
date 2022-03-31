import React from 'react'
import { Button, Container, Segment } from 'semantic-ui-react'

export const Subtotal = () => {
  return (
    <Segment size="large" clearing as="section">
      <span>
        <strong>Sub total:</strong> 0
      </span>
      <Button color="black" floated="right">
        Check out
      </Button>
    </Segment>
  )
}
